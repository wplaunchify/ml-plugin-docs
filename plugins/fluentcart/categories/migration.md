# Migration

*Category from FluentCart documentation*

---

## Migrating from Easy Digital Downloads ​

**Source:** [https://docs.fluentcart.com/guide/migration/edd/](https://docs.fluentcart.com/guide/migration/edd/)

# Migrating from Easy Digital Downloads ​

The FluentCart Migrator handles end-to-end migration from **Easy Digital Downloads 3.x** into FluentCart. Products, customers, orders across every meaningful status, recurring subscriptions, software licenses with all their site activations, coupons, and tax configuration transfer in a single coordinated pipeline.

The same engine is reachable two ways — pick the surface that fits your store size and comfort level:

- **Admin Wizard** — six-step Vue interface inside WordPress admin. Best for small to medium stores and non-technical operators.
- **WP-CLI** — single namespaced command with flags for each stage. Faster for large stores, no browser timeouts.

Your EDD store stays untouched

The Migrator only **reads** from EDD. Your existing store, its settings, and every record stay exactly as they are. Run both side-by-side until you're ready to switch.
## Documentation in this section ​

| Page | When to read |
| --- | --- |
| Wizard Walkthrough | Start here. Full step-by-step run through the admin wizard, with screenshots. |
| What Gets Migrated | Before you start. Complete inventory of what transfers — and what's deliberately out of scope (categories, upgrade paths, gateway credentials, custom meta). |
| WP-CLI Reference | If your store has thousands of orders, or you prefer the terminal. Full flag reference and workflows. |
| Developer Mode | Before testing on staging. Explains the FLUENT_CART_DEV_MODE constant that gates destructive reset paths. |
| Backward Compatibility | After migration. Why the Migrator plugin must stay active — license API rerouting, PayPal IPN, Stripe webhook fallback, legacy URLs. |
| Troubleshooting | When something fails or you want to verify. Failed payment log, license verification, common errors, reset workflow, FAQ. |

## Recommended workflow ​

1. **Take a database backup.** Even though the Migrator never modifies your source data, a fresh backup is your safety net.
2. **Read What Gets Migrated.** Confirm the boundaries match your expectations.
3. **Rehearse on staging first.** Enable [Developer Mode](/guide/migration/edd/developer-mode) so you can reset and re-run as many times as needed.
4. **Verify the result.** Spot-check products, orders, subscriptions, and licenses against your source store.
5. **Repeat on production.** With staging validated, the production run is uneventful.
6. **Keep the Migrator plugin active.** It provides a [backward compatibility layer](/guide/migration/edd/backward-compatibility) for legacy URLs, license API calls, and PayPal IPN renewals.

## Quick requirements check ​

- **Easy Digital Downloads 3.x** with the v3 table schema (EDD 2.x CPT-based stores are blocked at the compatibility check)
- **FluentCart** installed and activated
- **FluentCart Pro** required only for EDD Software Licensing migration
- **PHP** memory limit of 256MB recommended for larger stores
- **WP-CLI** for command-line workflows

For full details, head to the [Wizard Walkthrough](/guide/migration/edd/edd-migration).

---

## Backward Compatibility ​

**Source:** [https://docs.fluentcart.com/guide/migration/edd/backward-compatibility](https://docs.fluentcart.com/guide/migration/edd/backward-compatibility)

# Backward Compatibility ​

When the migration finishes, the natural instinct is to deactivate the Migrator plugin and consider the job done. **Don't.**

The Migrator quietly provides a backward compatibility layer that keeps your existing customers working without disruption. Software licenses keep validating. PayPal subscriptions keep renewing. Old EDD URLs keep resolving. Stripe webhooks for legacy orders keep finding the right transaction.

If you deactivate the Migrator too early, customers feel it.

## Why this layer exists ​

EDD and FluentCart use different URL structures, different API endpoints, and different identifier formats. After migration, your data is in FluentCart's format — but the outside world (your customers' installed software, PayPal's renewal notifications, Stripe's webhook history, bookmarked links in old emails) still speaks EDD.

The Migrator plugin sits between the two and translates. It accepts incoming requests in EDD's format, looks up the corresponding FluentCart record, and routes the work to the right place. Your customers see no difference.

This layer is what turns a migration from a hard cutover into a soft transition.

## What the layer handles ​

The completion screen lists the four areas the Migrator continues to bridge:

### License API endpoints ​

If you sold software with EDD Software Licensing, your customers' plugins, themes, or apps make periodic API calls to your site to:

- Activate a license on a new install
- Deactivate a license when uninstalling
- Check whether a license is still valid
- Check for software updates

These calls hit EDD's URL format, with EDD-style parameters. The Migrator intercepts each one, looks up the corresponding FluentCart license, performs the action through FluentCart, and returns a response in the format the customer's software expects.

Your customers don't update their software. They don't notice anything changed.

### PayPal IPN for legacy subscriptions ​

Active PayPal Standard subscriptions created during the EDD era continue to send Instant Payment Notifications to EDD's old IPN endpoint when each renewal payment processes. Without the Migrator, those notifications fail silently — the subscription appears to keep renewing on PayPal's side, but FluentCart never records the renewal.

The Migrator catches the IPN, identifies the subscription, creates the renewal order in FluentCart, and updates the subscription's bill count. PayPal continues to charge the customer; FluentCart continues to know about it.

### Stripe webhook charge ID resolution ​

Stripe historically used charge IDs (
```
ch_xxx
```

) to identify transactions. Modern Stripe webhooks reference payment intent IDs (
```
pi_xxx
```

). For orders migrated from EDD, the original transaction record stores the charge ID — which means a webhook arriving with only a payment intent ID can't find its order.

The Migrator hooks into FluentCart's transaction lookup with a fallback that resolves charge IDs to payment intent IDs (and vice versa) for legacy records. Webhooks for migrated orders continue to apply correctly.

### Legacy EDD download and renewal URLs ​

Old emails, bookmarks, account pages, and external links may contain EDD-format URLs:

- ```
/?edd_action=process_download&...
```
- ```
/?edd_action=...&order_id=...
```

 for renewal links
- Customer dashboard links pointing to EDD's account pages

The Migrator detects these and redirects them to the equivalent FluentCart URL, so a customer clicking an old link from a year-old email lands on the right page rather than a 404.

## When you can deactivate the Migrator ​

There is no fixed timeline. The right answer is "when the legacy traffic dies down to zero." For most stores that means at least one full subscription billing cycle — usually a year — after migration. For stores with long-tail license activations, longer.

A reasonable test: check your access logs for hits to EDD-format URLs over the past 30 days. If there are none, you can probably deactivate the Migrator. If there are still requests coming in, leave it active.

You can deactivate Easy Digital Downloads itself well before deactivating the Migrator. The Migrator does not depend on EDD being active to perform its compatibility work — it only needs the migrated data inside FluentCart.

Order of deactivation

A safe sequence:

1. Migration complete and verified
2. Run 
```
wp fluent_cart_migrator migrate_from_edd --verify_license
```

 to confirm license integrity
3. Reconnect payment gateways in FluentCart
4. Deactivate Easy Digital Downloads
5. Leave the Migrator and the EDD database tables in place for the transition period
6. After the transition (typically 6-12 months), evaluate whether legacy traffic has stopped
7. Only then consider deactivating the Migrator and running 
```
edd_cleanup
```
## What stops working if you deactivate too early ​

| If you deactivate | What breaks |
| --- | --- |
| Easy Digital Downloads (with Migrator still active) | Nothing customer-facing. The Migrator handles the compatibility work independently. |
| FluentCart Migrator (with EDD-era license customers) | License activation and update checks for software sold during the EDD era stop working. Customers see "license invalid" errors. |
| FluentCart Migrator (with active PayPal Standard subscriptions) | Renewal payments still happen at PayPal but are never recorded in FluentCart. Subscriptions appear to lapse despite still being charged. |
| FluentCart Migrator (with legacy bookmarked links) | Old EDD-format URLs return 404. |

None of these break immediately or visibly to you — they fail silently for customers, which is the worst kind of breakage. Leave the Migrator active until you have actively confirmed there is no remaining legacy traffic.

## Performance impact ​

The compatibility layer is lightweight. It hooks into request routing only when an incoming URL or webhook matches an EDD-format pattern, so normal FluentCart traffic is unaffected. Idle, the Migrator costs nothing.

## Related ​

- [Troubleshooting](/guide/migration/edd/troubleshooting) — what to do if a customer reports a broken license or missing renewal
- [WP-CLI Reference](/guide/migration/edd/edd-cli) — 
```
--verify_license
```

 and 
```
edd_cleanup
```

 commands

---

## Developer Mode ​

**Source:** [https://docs.fluentcart.com/guide/migration/edd/developer-mode](https://docs.fluentcart.com/guide/migration/edd/developer-mode)

# Developer Mode ​

The Migrator includes a set of tools — primarily reset and re-run paths — that are too destructive to leave exposed on production. **Developer Mode** is the single switch that unlocks them.

It exists for one reason: rehearsing migrations safely. On staging, you want to import, inspect, reset, tweak the source, and import again, sometimes a dozen times before the production cutover. On production, you want every reset path firmly locked.

## Activating Developer Mode ​

Add the following line to your 
```
wp-config.php
```

 file, above the 
```
/* That's all, stop editing! */
```

 comment:

php
```
define('FLUENT_CART_DEV_MODE', true);
```Save the file. The change takes effect immediately. No plugin deactivation or cache flush is required.

To turn Developer Mode off, remove the line or set it to 
```
false
```

.

Never enable Developer Mode on production

Developer Mode exposes destructive operations. Only enable it on staging, local, or otherwise isolated environments. On a live store it risks accidental data loss.
## Why a constant, not a setting ​

Defining a constant in 
```
wp-config.php
```

 is auditable, slow to flip by accident, and impossible to toggle from the WordPress admin. A misclicked button in the dashboard could wipe a production store; editing 
```
wp-config.php
```

 requires SSH or filesystem access plus an explicit code change.

This is the same reason WordPress core gates 
```
WP_DEBUG
```

, 
```
DISABLE_WP_CRON
```

, and other risk-bearing flags behind constants rather than settings pages.

## What Developer Mode unlocks ​

With 
```
FLUENT_CART_DEV_MODE
```

 set to 
```
true
```

, the following capabilities become available:

| Path | How to access |
| --- | --- |
| --reset flag on the main migration command | wp fluent_cart_migrator migrate_from_edd --reset |
| Standalone reset command | wp fluent_cart_migrator reset |
| Schema-refresh reset | wp fluent_cart_migrator migrate_fresh |
| Reset button in the admin wizard | Visible at the completion screen |

Without Developer Mode, every one of those paths returns blocked. The admin wizard checks the same flag and hides the reset button entirely. This is the behavior you want on production.

For the actual reset workflow — what reset destroys, when to use 
```
reset
```

 vs 
```
migrate_fresh
```

, the staging rehearsal recipe, and confirmation prompts — see [Troubleshooting → Resetting a migration](/guide/migration/edd/troubleshooting#resetting-a-migration).

## Related ​

- [Troubleshooting](/guide/migration/edd/troubleshooting) — full reset workflow, failed payment logs, common errors
- [WP-CLI Reference](/guide/migration/edd/edd-cli) — full command surface

---

## WP-CLI Reference ​

**Source:** [https://docs.fluentcart.com/guide/migration/edd/edd-cli](https://docs.fluentcart.com/guide/migration/edd/edd-cli)

# WP-CLI Reference ​

For stores with thousands of orders, the WP-CLI is faster than the admin wizard and avoids browser timeouts entirely. The same engine drives both interfaces, so the result is identical — only the surface differs.

## When to use WP-CLI ​

Use the CLI when:

- Your store has more than a few thousand orders.
- You are running on shared hosting with strict PHP timeouts.
- You want to script a migration as part of a deployment workflow.
- The browser keeps disconnecting mid-run on a large dataset.
- You are migrating on staging via SSH and don't have admin UI access.

The wizard remains the right choice for small-to-medium stores or for non-technical operators.

## Commands at a glance ​

The wizard surfaces the most common commands inside the **WP-CLI (Recommended for Large Stores)** panel:

## The primary command ​

All migration work happens through one namespaced command, with flags for each stage:

bash
```
wp fluent_cart_migrator migrate_from_edd [flag]
```
### Flag reference ​

| Flag | What it does |
| --- | --- |
| --all | Run the complete migration pipeline: products → tax rates → coupons → payments → recount, in order. Resumes any skipped or interrupted steps. |
| --products | Migrate EDD downloads to FluentCart products. Creates new ones, updates existing ones via the migration ID map. |
| --tax_rates | Migrate EDD tax settings and generate FluentCart tax rates. Skipped automatically if taxes are disabled in EDD. |
| --coupons | Migrate EDD discount codes to FluentCart coupons. Updates by code if a match exists, otherwise inserts. |
| --payments | Migrate EDD orders, transactions, subscriptions, and licenses. Processed in batches of 1,000 orders per page, with last page persisted for resume. |
| --recount | Recalculate stats after migration: lifetime value, average order value, customer purchase counts, subscription bill counts, missing UUIDs. |
| --stats | Show pre-migration statistics for the source store. No data is migrated. |
| --verify_license | Compare EDD and FluentCart licenses after migration. Reports missing licenses and status mismatches. |
| --log | Display the failed payment log (_fluent_edd_failed_payment_logs). |
| --reset | Wipe migrated data and clear migration state. Requires Developer Mode. See Developer Mode & Reset. |

## Common workflows ​

### Full migration in one command ​

bash
```
wp fluent_cart_migrator migrate_from_edd --all
```Runs every stage in order. If any stage was previously completed, it is skipped automatically. If the previous run was interrupted mid-payments, it resumes from the last processed page.

### Step by step ​

For more control, run each stage individually. Useful when you want to inspect the result between stages or when one stage needs special handling.

bash
```
wp fluent_cart_migrator migrate_from_edd --products
wp fluent_cart_migrator migrate_from_edd --tax_rates
wp fluent_cart_migrator migrate_from_edd --coupons
wp fluent_cart_migrator migrate_from_edd --payments
wp fluent_cart_migrator migrate_from_edd --recount
```The order matters. Products must exist before payments can reference them. Recount should be the final stage.

### Preview source data ​

Before migrating anything, see what is in the source store:

bash
```
wp fluent_cart_migrator migrate_from_edd --stats
```Shows the count of products, orders, transactions, customers, subscriptions, licenses, the gateways found, and the order statuses present. No data is touched.

### Inspect failures after a run ​

If individual orders failed during the migration (corrupted records, missing customer references, malformed line items), they are captured rather than halting the whole run. View them with:

bash
```
wp fluent_cart_migrator migrate_from_edd --log
```Each entry shows the EDD order ID, the error message, the error type, and the stage at which it failed. Use this to drive a follow-up investigation.

### Verify license integrity ​

After a migration that includes EDD Software Licensing, run:

bash
```
wp fluent_cart_migrator migrate_from_edd --verify_license
```This compares the EDD license records against the FluentCart license records and reports any that are missing or have status mismatches. Run this before deactivating EDD.

## Companion commands ​

Beyond the main 
```
migrate_from_edd
```

 command, the Migrator provides utilities for cleanup and developer workflows:

### Clean up EDD data after migration ​

Once you have validated the migration and are ready to remove EDD's artifacts from the database:

bash
```
wp fluent_cart_migrator edd_cleanup
```Deletes EDD post types (
```
edd_advanced_report
```

, 
```
edd_discount
```

, 
```
edd_license_log
```

, 
```
edd_log
```

, 
```
edd_payment
```

), orphaned post and comment metadata, and the 
```
download_category
```

 and 
```
edd_log_type
```

 taxonomies. Asks for confirmation before running.

Run cleanup only after full verification

Don't run 
```
edd_cleanup
```

 until you have verified the migration thoroughly and your customers, subscriptions, and licenses are operating correctly through FluentCart. The original EDD records are your fallback if something needs reconciliation.
### Reset progress and refresh schema (developer) ​

bash
```
wp fluent_cart_migrator migrate_fresh
```Clears all migration progress options, refreshes the FluentCart database schema, deletes migrated FluentCart products, and removes migration metadata from EDD posts. Useful for testing on a staging environment when you want to rerun the full migration from scratch.

This command requires [Developer Mode](/guide/migration/edd/developer-mode).

### Reset migrated data (developer) ​

bash
```
wp fluent_cart_migrator reset
```Wipes migrated data and clears migration state. Slightly less aggressive than 
```
migrate_fresh
```

 — it does not refresh the schema. Asks for confirmation before running.

This command requires [Developer Mode](/guide/migration/edd/developer-mode).

### Backfill missing subscription UUIDs ​

bash
```
wp fluent_cart_migrator fix_subs_uuid
```Standalone utility that fills in missing UUIDs on subscription records. Subscriptions migrated from older EDD installations occasionally lack UUIDs; this backfills them with 
```
md5(id + uuid4 + microtime)
```

 so other parts of FluentCart can reference them reliably.

## Resume behavior ​

The CLI is fully resumable. State is persisted in the 
```
__fluent_cart_edd3_migration_steps
```

 option after every completed step.

- **Stage-level resume:** Re-running 
```
--all
```

 skips any stages already marked complete.
- **Page-level resume for payments:** The payment migration stores 
```
last_order_page
```

. A re-run continues from the next batch.
- **Idempotent re-runs of individual stages:** 
```
--products
```

 updates existing migrated products via the ID map. 
```
--coupons
```

 updates existing coupons by code. 
```
--recount
```

 always recalculates from current data, never increments.

This means you can safely interrupt a long run with 
```
Ctrl+C
```

 and start it again. No duplicate data, no skipped records.

## Memory and timing tips ​

For very large stores, give PHP enough headroom:

bash
```
php -d memory_limit=1024M $(which wp) fluent_cart_migrator migrate_from_edd --all
```If the host has aggressive process limits, run individual stages rather than 
```
--all
```

, so each invocation has its own memory context.

## What the CLI doesn't do that the wizard does ​

- The CLI does not show a live, polling progress bar in the wizard's visual style. It uses WP-CLI's built-in progress bar for the payments stage.
- The CLI does not pause and resume mid-stage on demand — only between stages.
- The CLI does not surface the post-migration backward compatibility notice. Read [Backward Compatibility](/guide/migration/edd/backward-compatibility) directly to know what to keep enabled.

For everything else, the CLI is functionally equivalent to the wizard — and faster on real workloads.

## Related ​

- [Migrating from EDD](/guide/migration/edd/edd-migration) — wizard walkthrough
- [Developer Mode & Reset](/guide/migration/edd/developer-mode) — reset workflow for staging
- [Troubleshooting](/guide/migration/edd/troubleshooting) — what to do when something fails

---

## Migrating to FluentCart from Easy Digital Downloads ​

**Source:** [https://docs.fluentcart.com/guide/migration/edd/edd-migration](https://docs.fluentcart.com/guide/migration/edd/edd-migration)

# Migrating to FluentCart from Easy Digital Downloads ​

Moving an entire online store to a new platform might sound like a massive, stressful project — but with FluentCart it doesn't have to be.

The **FluentCart Migrator** addon acts as your personal moving team. It automatically and securely transfers all of your hard-earned data — products, orders, customers, subscriptions, coupons, licenses — from **Easy Digital Downloads (EDD)** directly into your new FluentCart store. No spreadsheets, no manual data entry, no coding.

Your EDD store stays safe

This tool only **copies** your data into FluentCart. Your original Easy Digital Downloads store, all its settings, and every record stay completely untouched throughout this entire process. You can run both side-by-side until you're fully ready to switch.This page walks through the wizard step by step. For an alternative terminal-based workflow on large stores, see the [WP-CLI Reference](/guide/migration/edd/edd-cli). For a complete inventory of what does and doesn't transfer, see [What Gets Migrated](/guide/migration/edd/what-is-migrated).

---

## Before You Begin ​

Take two minutes to confirm these are in place before you start. Catching a missing piece now saves a mid-migration surprise.

- **Easy Digital Downloads 3.x** must be installed and active on your site — the Migrator reads directly from its v3 data tables.
- **FluentCart** must be installed and activated — [Get FluentCart](https://fluentcart.com).
- **FluentCart Pro** is required only if you use **EDD Software Licensing** (license keys, site activations, software updates). If you don't sell licensed software, the free version is enough.
- **A database backup** — always take a fresh backup before any migration. It's your safety net, even though the Migrator never modifies your EDD data.
- **WordPress admin access** on the site you're migrating.

Back up first

Even though the Migrator only reads from EDD and never touches your existing data, take a fresh database backup before you begin. It takes five minutes and gives you complete peace of mind.For a deeper rehearsal before touching production, run the migration on staging first with [Developer Mode](/guide/migration/edd/developer-mode) enabled. That lets you reset and re-run as many times as needed.

---

## Step 1: Install and Activate the Migrator ​

Now that you're ready, install the migration tool. Think of it as a secure, temporary bridge between your existing EDD setup and your new FluentCart store.

1. Go to the [FluentCart website](https://fluentcart.com/fluentcart-addons/) and download the **FluentCart Migrator** addon 
```
.zip
```

 file.
2. Open your **WordPress admin dashboard** and go to **Plugins → Add New**.
3. Click the **Upload Plugin** button at the top.
4. Click **Choose File**, select the 
```
.zip
```

 file you just downloaded, then click **Install Now**.
5. Once installation finishes, click **Activate Plugin**.

## Step 2: Open the Migration Dashboard ​

Now that the bridge is built, open the tool.

1. Navigate to your **FluentCart** dashboard in the WordPress sidebar.
2. Click the newly added **Migrator** option.

This launches the **Migration Wizard** — a clean, step-by-step interface that walks you through the entire transfer.

## Step 3: Select Your Source ​

The wizard auto-detects which eCommerce plugins are installed. If you're running Easy Digital Downloads, the **Easy Digital Downloads** card displays a green **DETECTED** badge.

Click the card to confirm: *yes, this is where my data lives.*

WooCommerce appears alongside it as a second supported source — see [Migrating from WooCommerce](/guide/migration/woocommerce/) — and SureCart is visible as an upcoming one.

## Step 4: Compatibility Check ​

Before moving any data, the wizard runs a quick compatibility check.

This step verifies that your installation of Easy Digital Downloads is fully compatible with the migration tool. Specifically, it checks for EDD 3.x with the v3 table schema. EDD 2.x stores using the legacy CPT data model are blocked here with a clear message — update to EDD 3.x first, then return to the wizard.

Once you see the **green confirmation box**, click **Continue**.

## Step 5: Pre-Migration Overview ​

This is one of the most reassuring parts of the process. Before the actual transfer begins, the wizard takes a quick inventory of your existing EDD store and shows you exactly what it found.

You'll see clear summary cards displaying the total count of:

- **Products** — your digital downloads and other items
- **Orders** — your complete past purchase history
- **Customers** — all buyer accounts
- **Subscriptions** — active and historical recurring plans
- **Licenses** — issued software keys (if EDD Software Licensing is in use)
- **Transactions** — individual payment records

The wizard also surfaces detected payment gateways and the order statuses present in your data, so you can confirm there are no surprises.

Compare these numbers against what you know is in your EDD store. If they look right, proceed.

## Step 6: Configure and Start the Migration ​

You're at the final setup screen. This step lets you fine-tune how the migration runs before kicking it off.

**Batch Size** Think of this as how many "boxes" the mover carries in one trip. It controls how many records the server processes per request. The default of **100** works for most stores. If your server is underpowered and a stage stalls, lower it to 
```
50
```

 or 
```
25
```

 to reduce load per cycle. Available values: 50, 100, 250, 500, 1000.

**Steps to Run** A checklist of stages to include:

- **Products**
- **Tax Rates**
- **Coupons**
- **Orders, Payments, Customers, Subscriptions, Licenses**
- **Recount & Verify**

Leave **all of them checked**. Unchecking any item means that data won't come over. The wizard automatically skips stages already completed, so re-running the migration is safe.

When ready, click **Start Migration**.

Keep this tab open

Don't close or refresh this browser tab while the migration is running. The progress bar needs an active connection to process your data. Grab a coffee and let FluentCart do the heavy lifting.If the migration is interrupted

No need to panic. The Migrator tracks its progress as it goes. If your browser closes, your session times out, or anything else interrupts the process, return to the Migrator screen and start it again. It will automatically skip everything that already completed and resume the payments stage from the exact batch where it stopped.On the same screen: WP-CLI commands

The configuration screen also surfaces the WP-CLI commands for each stage. For stores with thousands of orders, switching to the CLI is significantly faster and avoids browser timeouts entirely. See the [WP-CLI Reference](/guide/migration/edd/edd-cli) for the full command surface.
## Step 7: Migration Complete — Verify Before Going Live ​

Once the progress bar reaches **100%**, you'll see a green checkmark and a **Migration Completed** screen with a final breakdown of how many items were copied across each category.

The completion screen also includes an important notice — **keep the Migrator plugin active** even after the migration finishes. It provides a backward compatibility layer for existing customers. See [Backward Compatibility](/guide/migration/edd/backward-compatibility) for the full explanation.

Your data is in. Before opening your new store to the public, spend a few minutes verifying the result.

**Verify Your Products** Go to **FluentCart → Products**. Confirm the product count looks right, then open a handful of items and check titles, descriptions, pricing (single or variations), subscription billing intervals, and bundle child items.

**Review Orders** Go to **FluentCart → Orders** and open several recent ones. For each, confirm order totals, line items, payment status, customer name and email, billing address, payment gateway, and transaction ID.

**Check Subscriptions** Go to **FluentCart → Subscriptions** and spot-check a few. Verify billing interval, renewal date, start date, and status.

**Check Licenses** *(if applicable)* Go to **FluentCart → Licenses** and confirm license keys transferred with their correct statuses, activation limits, active site URLs, and expiration dates. For a programmatic check across all licenses, run:

bash
```
wp fluent_cart_migrator migrate_from_edd --verify_license
```**Verify Coupons** Go to **FluentCart → Coupons** and confirm discount codes are present with correct amounts, usage limits, and expiration dates.

**Spot-Check Customers** Go to **FluentCart → Customers**, open a few profiles, and confirm names, emails, and order history. Customer lifetime value and purchase counts are recalculated automatically during the recount stage, so those numbers will be accurate.

Pick representative orders to check thoroughly

For the best peace of mind, find one example of each scenario in your store and compare it field-by-field between EDD and FluentCart: a simple one-time purchase, a subscription order with renewals, an order with a coupon applied, a refunded order, and a license-based purchase.For a complete map of what transfers and what doesn't (categories, upgrade paths, payment gateway credentials, custom meta), see [What Gets Migrated](/guide/migration/edd/what-is-migrated).

## A Few Things Still Need Your Attention ​

The Migrator handles your data automatically, but a small number of items need quick manual setup before you're fully live.

**1. Reconnect Your Payment Gateways** Transaction records transfer, but gateway API credentials never do — for security reasons. Reconnect them fresh in FluentCart. Go to **FluentCart → Settings → Payment Gateways** and add your Stripe API keys and PayPal credentials.

> 💡 Important: Use the exact same Stripe and PayPal accounts you used with EDD. This ensures active subscriptions continue renewing correctly and all future webhooks route to the right place.

INFO

For step-by-step instructions on connecting each payment gateway, see the [Payments & Checkout](/guide/payments-checkout/) section.**2. Attach Your Download Files to Products** The migration creates all your product records, but the actual downloadable files need to be confirmed and attached inside each product. Go to **FluentCart → Products**, open each digital product, and verify the correct file is linked under **Downloadable Asset(s)**.

**3. Review Your Email Notifications** FluentCart has its own email system with beautifully designed templates. Review and customize your purchase receipt, subscription renewal, license expiration, and refund notification templates under **FluentCart → Settings → Email Configuration** before customers start receiving them.

**4. Update Your Store's Purchase Buttons and Links** If you're using EDD shortcodes or custom purchase buttons anywhere on your site, replace them with FluentCart's purchase buttons or checkout blocks. Also update menu links pointing to EDD account or purchase history pages.

**5. Review Your Tax Settings** Your EDD tax rates transfer over automatically, but verify the tax calculation mode in **FluentCart → Settings** matches how you were running taxes in EDD.

## Keep the Migrator Plugin Active ​

After your migration is complete, **don't deactivate the FluentCart Migrator plugin** during your transition period. It provides a silent backward compatibility layer that keeps existing customers working seamlessly:

- **EDD Software Licensing API calls** continue to be intercepted and routed through FluentCart, so customers' installed software keeps validating without any change on their end.
- **PayPal Standard renewal notifications** are caught and processed correctly.
- **Stripe webhooks** for legacy orders are matched against the original charge IDs.
- **Legacy EDD URLs** (download links, renewal pages, account URLs in old emails) are redirected to the right FluentCart pages.

For the full explanation of why this layer exists and when it's safe to deactivate, see [Backward Compatibility](/guide/migration/edd/backward-compatibility).

Don't delete your EDD data yet

Even after everything is verified and running, don't delete your EDD database tables in a rush. The Migrator never modifies them — they're just sitting there, taking up very little space, and they're your fallback if you ever need to reference original records. Leave them until you're fully confident, then run 
```
wp fluent_cart_migrator edd_cleanup
```

 when you're ready.
## Need help? ​

- Stuck on a specific stage? Check the [Troubleshooting](/guide/migration/edd/troubleshooting) page.
- Want to know exactly what transfers? See [What Gets Migrated](/guide/migration/edd/what-is-migrated).
- Running on a large store? Switch to the [WP-CLI Reference](/guide/migration/edd/edd-cli).
- Testing on staging and want to reset between runs? Enable [Developer Mode](/guide/migration/edd/developer-mode).
- Customer reports a broken license post-migration? See [Backward Compatibility](/guide/migration/edd/backward-compatibility).

---

## Troubleshooting ​

**Source:** [https://docs.fluentcart.com/guide/migration/edd/troubleshooting](https://docs.fluentcart.com/guide/migration/edd/troubleshooting)

# Troubleshooting ​

The Migrator is built to be tolerant of bad data: individual record failures are captured rather than halting the run. This page explains how to find those failures, how to verify integrity after a migration, and how to recover from common problems.

## The failed payment log ​

When an order fails to migrate — corrupted record, missing customer reference, malformed line items, gateway data inconsistency — the failure is captured in the 
```
_fluent_edd_failed_payment_logs
```

 WordPress option rather than aborting the run.

### Viewing failures from the CLI ​

bash
```
wp fluent_cart_migrator migrate_from_edd --log
```Each entry shows:

| Field | Meaning |
| --- | --- |
| edd_id | The EDD order ID that failed |
| message | Human-readable error message |
| error_type | A short code identifying the error category |
| stage | Where in the pipeline the failure occurred (data_setup, validation, migration) |

### Viewing failures from the wizard ​

The migration completion screen surfaces an expandable error log section. Click to expand and see the same data as the CLI 
```
--log
```

 output.

### What to do with a failed entry ​

1. Open the original EDD order in your WordPress admin (
```
Edit > Orders
```

 in EDD's UI).
2. Compare it against the error message — usually the cause is obvious (missing customer email, deleted product reference, broken meta).
3. Fix the source data in EDD.
4. Re-run the payments stage: 
```
wp fluent_cart_migrator migrate_from_edd --payments
```

. The Migrator will pick up only the orders not yet successfully migrated.

## Verifying license integrity ​

If your store uses EDD Software Licensing, run the verification command after the migration completes:

bash
```
wp fluent_cart_migrator migrate_from_edd --verify_license
```This compares EDD's license records against FluentCart's license records and reports:

- Licenses present in EDD but missing in FluentCart
- Licenses with status mismatches (active in EDD but inactive in FluentCart, or vice versa)

For each discrepancy, investigate whether the source license has anomalies (a license without a parent order, an activation pointing at a deleted site) or whether the migration genuinely missed it. If genuinely missed, re-running the payments stage usually resolves it because licenses are migrated as part of order processing.

## Common issues ​

### "EDD 3.0 or later required" message ​

The compatibility check blocks the migration if it detects EDD 2.x with the legacy CPT data model. The Migrator only supports the EDD 3.x v3 table schema.

**Fix:** Update Easy Digital Downloads to 3.x. EDD 3.0 includes a built-in migration tool that converts legacy CPT data into the v3 tables. Run that first, then return to the FluentCart Migrator.

### Migration stalls partway through ​

A stalled migration is almost always a server-side timeout: PHP 
```
max_execution_time
```

 cut off the request, or the host's process supervisor killed a long-running script.

**Fix from the wizard:** Just refresh the page. The wizard will pick up from the last completed batch. If it stalls again, lower the **Batch Size** dropdown (try 50 or 25) so each batch finishes well within the host's timeout.

**Fix from the CLI:** The CLI bypasses HTTP timeouts entirely. If the wizard keeps stalling, switch to the CLI:

bash
```
wp fluent_cart_migrator migrate_from_edd --all
```
### Out of memory errors ​

For large stores, PHP may run out of memory during the payments stage.

**Fix:** Give PHP more headroom temporarily for the migration run:

bash
```
php -d memory_limit=1024M $(which wp) fluent_cart_migrator migrate_from_edd --all
```If you still hit the limit, run individual stages instead of 
```
--all
```

:

bash
```
wp fluent_cart_migrator migrate_from_edd --products
wp fluent_cart_migrator migrate_from_edd --payments
wp fluent_cart_migrator migrate_from_edd --recount
```Each invocation gets its own memory context.

### Customer not found errors ​

If failures show "customer not found" messages, the order in EDD references a customer record that has been deleted from 
```
edd_customers
```

 but still exists in the order's metadata.

**Fix:** The Migrator falls back to creating a customer from the order's email and address meta when the primary lookup fails. If the order has no usable email at all, you'll need to manually patch the order in EDD before re-running the payments stage.

### Subscription bill counts look wrong ​

After the recount stage, occasionally a subscription's bill count doesn't match what you expected.

**Fix:** This usually means renewal orders were never linked to the parent subscription in EDD (subscription_id is missing). The Migrator's recount step auto-links orphaned renewals by parent_order_id, but it can only do that if there's a discoverable link. Re-run recount manually:

bash
```
wp fluent_cart_migrator migrate_from_edd --recount
```If counts still look off, inspect the renewal orders in FluentCart and confirm their 
```
parent_id
```

 field matches the original subscription's parent order ID.

### License site activations not preserved ​

If a customer reports that their license is suddenly invalid on a site they had activated previously, check whether the site URL was preserved during migration.

**Fix:** The Migrator normalizes site URLs (lowercase, no protocol, no trailing slash). If the customer's site URL was stored unusually in EDD (with port numbers, with 
```
:
```

 characters, with non-ASCII characters), it may not have matched after normalization. Check the FluentCart license record's site activations directly. Manually re-add the site if needed.

### Missing subscription UUIDs ​

A small set of subscriptions may end up without UUIDs after migration if the source records were partially corrupted. Run the dedicated fix:

bash
```
wp fluent_cart_migrator fix_subs_uuid
```This backfills missing UUIDs without touching anything else.

## Resetting a migration ​

If a staging migration has problems and you want to start fresh, the Migrator provides clean reset paths. All of them are gated behind [Developer Mode](/guide/migration/edd/developer-mode) — you must define 
```
FLUENT_CART_DEV_MODE
```

 in 
```
wp-config.php
```

 before any reset path will work. This is intentional: reset is destructive, and gating it behind a constant makes it impossible to trigger by accident from the WordPress admin.

Never run reset on production

Reset drops FluentCart tables and deletes migrated post data. Only ever run it on staging, local, or otherwise isolated environments.
### The reset button in the wizard ​

When Developer Mode is active and the wizard detects a previous migration on the current site, a **Reset Migration** link appears on the Pre-Migration Overview screen inside the "Previous migration detected" notice:

Clicking the link asks for confirmation, then runs the reset. On production (Developer Mode disabled), this link is hidden entirely — the notice still appears to confirm the previous run completed, but without the reset option.

### What reset destroys ​

Reset is thorough. It rolls back everything the migration created so you can start clean.

**Database schema:**

- Drops FluentCart tables via 
```
DBMigrator::refresh()
```

**WordPress options cleared:**

- ```
__fluent_cart_edd3_migration_steps
```

 (stage progress)
- ```
_fluent_edd_failed_payment_logs
```

 (per-order failure records)
- ```
__fluent_cart_migration_summary
```

 (summary totals)

**Migrated post data:**

- Deletes FluentCart product posts created by the migration
- Removes migration metadata from EDD posts (
```
_fcart_migrated_id
```

, 
```
__edd_migrated_variation_maps
```

)

Your original EDD data is never touched. Only FluentCart-side records and the bidirectional mapping meta are affected.

### reset vs migrate_fresh ​

Both are destructive, but they operate at different levels.

| Command | Scope | When to use |
| --- | --- | --- |
| wp fluent_cart_migrator migrate_from_edd --reset | Wipes migrated data and clears migration state | Quick reset between rehearsal runs |
| wp fluent_cart_migrator reset | Same as --reset, invoked as a standalone command | Same scenario, different entry point |
| wp fluent_cart_migrator migrate_fresh | Reset plus schema refresh | When the FluentCart schema itself has changed (during plugin upgrades or development) |

For most staging workflows, 
```
--reset
```

 or 
```
reset
```

 is sufficient. Reach for 
```
migrate_fresh
```

 only when the FluentCart database schema has been updated and you want a guaranteed clean slate.

### A staging rehearsal workflow ​

A typical rehearsal loop looks like this:

1. Clone production into staging, including the EDD database.
2. Enable [Developer Mode](/guide/migration/edd/developer-mode) in staging's 
```
wp-config.php
```

.
3. Install FluentCart and the Migrator plugin.
4. Run the full migration via the wizard or CLI.
5. Spot-check products, orders, subscriptions, licenses, coupons.
6. Note anything that needs source-data cleanup before the production run (duplicate customers, broken products, legacy records).
7. Reset the migration: 
```
wp fluent_cart_migrator migrate_from_edd --reset
```

.
8. Clean up the source data.
9. Re-run the full migration.
10. When the result looks right on staging, repeat on production (with Developer Mode **disabled**).

The ability to iterate without consequence turns a one-shot migration into something closer to a controlled, auditable process.

### Confirmation prompts ​

Every reset path asks for confirmation before destroying data — both in the CLI and in the wizard. You can bypass the CLI prompt with the standard WP-CLI 
```
--yes
```

 flag:

bash
```
wp fluent_cart_migrator migrate_from_edd --reset --yes
```Only do this inside scripts you have reviewed. The confirmation exists for a reason.

## Frequently asked questions ​

### Will my existing customers need to do anything? ​

No. Their accounts, order history, subscriptions, and licenses all move over. They log in with their existing WordPress credentials and find everything where they expect it — now inside FluentCart instead of EDD.

### Will active subscriptions keep renewing automatically? ​

Yes. Subscription records migrate with their gateway subscription IDs (Stripe, PayPal). As long as you reconnect the same gateway accounts in FluentCart, renewals continue without interruption. PayPal Standard subscriptions are handled by the Migrator's [backward compatibility layer](/guide/migration/edd/backward-compatibility).

### Will my customers' software licenses keep working? ​

Yes. The Migrator intercepts EDD-format license API calls (activation, deactivation, validity check, update check) and routes them through FluentCart. Customers don't need to update or reconfigure anything.

### Does the migration modify or delete my EDD data? ​

Never. The Migrator only reads from EDD's database tables. Your original data is untouched. You can verify the entire migration against your EDD store before switching anything over.

### What if the migration is interrupted halfway through? ​

Just start it again. The Migrator tracks its own progress, skips completed stages, and resumes the payments stage from the exact batch where it stopped. No duplicate data.

### How long does the migration take? ​

It depends on store size:

- Small stores (a few hundred orders): two to five minutes
- Medium stores (thousands of orders): ten to thirty minutes
- Large stores (tens of thousands of orders): thirty minutes to a couple of hours

The CLI is consistently faster than the wizard for medium and large stores because it avoids HTTP timeouts and per-batch round trips.

### Can I run the migration multiple times? ​

Yes. Every stage is idempotent. Re-running products updates existing migrated products via the ID map. Re-running coupons updates existing coupons by code. Re-running recount always recalculates from current data. There is no risk of duplicate records from re-running.

### What about WooCommerce or SureCart migrations? ​

WooCommerce is supported — see [Migrating from WooCommerce](/guide/migration/woocommerce/) for its own walkthrough, data inventory, and CLI reference. SureCart is still shown in the source picker as "coming soon".

### Where do I get help if I'm stuck? ​

- Check the failed payment log: 
```
wp fluent_cart_migrator migrate_from_edd --log
```
- Run license verification: 
```
wp fluent_cart_migrator migrate_from_edd --verify_license
```
- Read [Backward Compatibility](/guide/migration/edd/backward-compatibility) if a customer reports a problem post-migration
- Open a support ticket via your FluentCart account

## Related ​

- [Migrating from EDD](/guide/migration/edd/edd-migration) — the wizard walkthrough
- [WP-CLI Reference](/guide/migration/edd/edd-cli) — full command surface
- [Developer Mode & Reset](/guide/migration/edd/developer-mode) — staging workflow
- [Backward Compatibility](/guide/migration/edd/backward-compatibility) — what the Migrator continues to handle after migration

---

## What Gets Migrated ​

**Source:** [https://docs.fluentcart.com/guide/migration/edd/what-is-migrated](https://docs.fluentcart.com/guide/migration/edd/what-is-migrated)

# What Gets Migrated ​

Before you run a migration, it is worth knowing exactly what comes across, what doesn't, and why. This page covers both — so there are no surprises after the wizard finishes.

## What is migrated ​

### Products ​

Every EDD download transfers as a FluentCart product, with the structure preserved.

| EDD concept | Becomes in FluentCart | Notes |
| --- | --- | --- |
| Simple download | Simple product | Single price tier |
| Variable pricing | Product variations | One variation per EDD price option |
| Product bundle | Product with bundle child references | Child IDs stored in line metadata |
| Recurring download | Subscription product | Billing intervals: daily, weekly, monthly, quarterly, half-yearly, yearly |
| Title, description, slug, author, dates | Same | Unchanged |
| Featured image | Same | Same media library reference |
| Signup fees | Variation other_info | Stored alongside pricing |
| License limits per variation | Variation license limit | Only when EDD Software Licensing is detected |

A bidirectional ID map is created so re-running the migration updates rather than duplicates: 
```
_fcart_migrated_id
```

 on the EDD post points to the FluentCart record, and 
```
_edd_migrated_from
```

 on the FluentCart product points back.

### Customers ​

Customer records transfer with full identity and address data, deduplicated on email.

- Full name, email address
- WordPress user account association if one exists by email
- Addresses: country, state, city, postal code
- Lifetime value, purchase count, average order value, first/last purchase dates — recalculated from the migrated orders during the **Recount & Verify** step

If a customer with the same email already exists in FluentCart when an order is being migrated, the order is linked to the existing record rather than creating a duplicate.

### Orders and Payments ​

Every order with a meaningful status transfers — including all line items, taxes, discounts, transactions, and notes.

| EDD status | FluentCart payment status |
| --- | --- |
| complete, processing, edd_subscription, publish | Paid |
| pending | Pending |
| refunded | Refunded |
| partially_refunded | Partially Refunded |
| revoked, failed, cancelled | Failed |

Each order brings:

- Order ID (preserved from EDD)
- Subtotal, tax, shipping, discount, line total
- Currency and payment mode (test/live)
- Billing address
- Line items: product ID, variation ID, quantity, unit price, subtotal, tax, discount, fulfillment type
- Bundle child items (where applicable)
- Transaction records with gateway, transaction ID (Stripe charge ID, PayPal subscription ID), amount, currency, date
- Refund records (amounts and dates)
- Applied coupon codes with the discount amount
- Order notes from 
```
edd_notes
```

### Subscriptions ​

When EDD Recurring Payments is in use, every subscription comes across with its complete state.

| Field | Behavior |
| --- | --- |
| Status | active, cancelled, expired, completed, pending, failing, trialling mapped 1:1 |
| Billing interval | Preserved (daily through yearly) |
| Bill times limit | Preserved |
| Signup fee | Calculated as the delta between initial and recurring amount |
| Start date, renewal date, expiration date | Preserved |
| Vendor subscription ID | Stripe vendor_subscription_id, PayPal subscription ID |
| Currency | Preserved |
| Activities/notes | From edd_notes with object_type='subscription' |
| Renewal order history | Linked via parent_id on each renewal order |

After import, the **Recount & Verify** step rebuilds bill counts from actual renewal orders, marks subscriptions completed where they have hit their bill-times limit, auto-links orphaned renewals by parent order ID, and generates UUIDs for any missing entries.

### Software Licenses ​

For stores running EDD Software Licensing, this is the most consequential part of the migration. License keys, activation limits, expirations, and every active site activation transfer with full fidelity.

| Item | Behavior |
| --- | --- |
| License key | Preserved exactly |
| Status | active, inactive, expired, disabled mapped 1:1 |
| Activation limit | From license record, or _edd_sl_limit meta override |
| Expiration date | Converted to FluentCart format |
| Product, variation, order, customer associations | All linked |
| Site activations | Every URL preserved, normalized via FluentCart's site URL formatter |
| Site activation status, hash, date | Preserved |
| Renewal license linkage | Linked back to the original subscription |

This means your customers do not need to deactivate and reactivate their installs. The sites they have running stay running.

FluentCart Pro requirement

License migration requires FluentCart Pro, since the license module lives there. The Migrator detects EDD Software Licensing automatically and enables the license module on first run — no separate setup step.
### Coupons ​

Every EDD discount code transfers with its rules intact.

- Code (exact string)
- Discount type: 
```
flat
```

 → 
```
fixed
```

, 
```
percentage
```

 → 
```
percentage
```
- Discount amount
- Status: 
```
active
```

 or 
```
disabled
```
- Usage limits: max total uses, max per customer (
```
once_per_customer
```

)
- Date range: start date, end date
- Minimum purchase amount
- Product restrictions: included products and excluded products, with EDD product IDs converted to FluentCart product IDs via the migration ID map
- Recurring behavior: applies to first payment only vs. all renewals
- Notes / description
- Affiliate association if AffiliateWP meta is present
- Use count: recalculated from applied coupons on paid orders during recount

If a coupon code already exists in FluentCart, the migration updates that record. Otherwise, a new one is inserted. Re-running coupon migration is safe.

### Tax Rates ​

Tax migration is conditional. It only runs if 
```
edd_settings.enable_taxes
```

 is true. If taxes are disabled in EDD, this step is skipped with a clear notice.

When enabled, the migration brings:

- Currency position (
```
before
```

 / 
```
after
```

)
- Decimal separator (
```
dot
```

 / 
```
comma
```

)
- Store name, address, city, state, country, postcode
- Tax-inclusive vs. exclusive pricing behavior

It then generates FluentCart's default tax classes (Standard, Reduced, Zero) and tax rates for every country found in the EDD tax rates table. The mapping between EDD rates and the new FluentCart rates is stored in 
```
_edd_fct_tax_rate_maps
```

 so order-level tax adjustments stay accurate.

Not a 1:1 rate copy

FluentCart's tax model differs from EDD's. The Migrator generates modern FluentCart tax rates for the relevant countries rather than copying every EDD rate as-is. Review your tax setup after migration to confirm it matches your jurisdictional requirements.
---

## What is NOT migrated ​

Honesty about boundaries matters more than a longer feature list. The following items are deliberately out of scope.

### Product categories and tags ​

EDD's 
```
download_category
```

 taxonomy and any custom taxonomies do not transfer. FluentCart's category model differs structurally, and a one-to-one mapping would mislead more than help. Set up your categories fresh in FluentCart after migration.

### EDD upgrade paths ​

The EDD upgrade-path mechanic — the ability for a customer to upgrade from one product or pricing tier to another — is not modeled in FluentCart's schema and is not migrated. If you rely on upgrade paths, plan how to handle them in FluentCart before switching over.

### Custom product and order metadata ​

Only known fields from EDD core, EDD Recurring Payments, EDD Software Licensing, and AffiliateWP are parsed. Custom meta written by other third-party EDD add-ons is not preserved. If you have important custom data on products or orders, export it separately before migrating.

### Abandoned and trashed orders ​

Orders with status 
```
abandoned
```

 or 
```
trash
```

 are explicitly filtered out. Only orders representing real transactions transfer.

### Payment gateway credentials ​

Transaction records — Stripe charge IDs, PayPal subscription IDs — come across, so renewals continue to process correctly. **Gateway API keys themselves never transfer.** Reconnect Stripe and PayPal in FluentCart after migration using the same accounts you used in EDD.

### Email templates ​

EDD's email settings are not migrated. FluentCart has its own notification system with its own templates. Review and customize them under **FluentCart > Settings > Email Configuration**.

### Download file attachments ​

Products are created. The actual downloadable files attached to each product are not automated. File paths, permissions, and storage architecture differ enough between platforms that an automated transfer would silently break delivery for customers. Open each digital product in FluentCart and confirm the file is linked under **Downloadable Asset(s)**.

### Download history logs ​

EDD's 
```
edd_file_download_logs
```

 table is not read. License site activations are preserved (those are functionally different and serve a real ongoing purpose), but historical file download events are not.

### Refund reason text ​

Refund amounts and dates transfer as part of the order. The reason text — which EDD only stores inside order notes — is not extracted into a separate field.

### Dry-run mode ​

All operations in 1.0.0 are live. There is no preview mode. To rehearse a migration safely, use [Developer Mode](/guide/migration/edd/developer-mode) on a staging environment, run the full migration, review the result, then reset and run again.

---

## At a glance ​

| Entity | Migrated? | Notes |
| --- | --- | --- |
| Products (simple, variable, bundle, recurring) | ✅ | Categories not migrated |
| Product images and content | ✅ |  |
| Custom product meta from third parties | ❌ | Only known fields parsed |
| Customers | ✅ | Deduplicated by email |
| Orders (all real statuses) | ✅ | Abandoned and trash excluded |
| Order line items, taxes, discounts | ✅ |  |
| Transactions (Stripe, PayPal, custom) | ✅ | IDs preserved |
| Refunds (amount + date) | ✅ | Reason text not extracted |
| Subscriptions | ✅ | Bill counts rebuilt during recount |
| Software licenses | ✅ | Requires FluentCart Pro |
| License site activations | ✅ | URLs normalized |
| Coupons | ✅ | Categories on coupons not migrated |
| Tax rates | ✅ | Only if enabled in EDD |
| Payment gateway credentials | ❌ | Reconnect in FluentCart |
| Email templates | ❌ | Set up fresh in FluentCart |
| Downloadable file attachments | ❌ | Re-attach in each product |
| Download history logs | ❌ |  |
| Product categories / tags | ❌ |  |
| EDD upgrade paths | ❌ |  |
| Abandoned / trashed orders | ❌ | Intentionally excluded |

---

## Next steps ​

Now that you know exactly what's in scope, head to the [Migrating from EDD](/guide/migration/edd/edd-migration) walkthrough to run your first migration.

---

## Migrating from WooCommerce ​

**Source:** [https://docs.fluentcart.com/guide/migration/woocommerce/](https://docs.fluentcart.com/guide/migration/woocommerce/)

# Migrating from WooCommerce ​

The FluentCart Migrator handles end-to-end migration from **WooCommerce 3.0+** into FluentCart. Your product catalog with its categories, attributes and variations, every customer, orders across every status, WooCommerce Subscriptions records, coupons, and tax configuration transfer in a single coordinated pipeline.

The Migrator reads WooCommerce through its own CRUD API (
```
wc_get_products
```

, 
```
wc_get_orders
```

, 
```
WC_Coupon
```

), so it works identically on **HPOS (High-Performance Order Storage)** stores and on legacy post-table stores. You don't need to know which one you're running.

The same engine is reachable two ways — pick the surface that fits your store size and comfort level:

- **Admin Wizard** — a three-step interface inside WordPress admin. Best for small to medium stores and non-technical operators.
- **WP-CLI** — a single namespaced command with flags for each stage. Faster for large stores, no browser timeouts.

Your WooCommerce store stays untouched

The Migrator only **reads** from WooCommerce. Your existing store, its settings, and every record stay exactly as they are. Run both side-by-side until you're ready to switch.
## Documentation in this section ​

| Page | When to read |
| --- | --- |
| Wizard Walkthrough | Start here. Full step-by-step run through the admin wizard, with screenshots. |
| What Gets Migrated | Before you start. Complete inventory of what transfers — and what's deliberately out of scope (shipping zones, product galleries, tags, reviews, gateway credentials). |
| Subscriptions & Renewals | If you use WooCommerce Subscriptions. Explains how recurring billing changes hands and what decides whether a subscription keeps auto-charging. |
| WP-CLI Reference | If your store has thousands of orders, or you prefer the terminal. Full flag reference and workflows. |
| Developer Mode | Before testing on staging. Explains the FLUENT_CART_DEV_MODE constant that gates the reset path. |
| Troubleshooting | When something fails or you want to verify. Failed order log, common errors, reset workflow, FAQ. |

## Recommended workflow ​

1. **Take a database backup.** Even though the Migrator never modifies your source data, a fresh backup is your safety net.
2. **Read What Gets Migrated.** Confirm the boundaries match your expectations.
3. **Read Subscriptions & Renewals** if you sell recurring products. This is the part of a WooCommerce migration that needs the most attention.
4. **Rehearse on staging first.** Enable [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) so you can reset and re-run as many times as needed.
5. **Verify the result.** Spot-check products, orders, subscriptions, and customers against your source store.
6. **Repeat on production.** With staging validated, the production run is uneventful.
7. **Complete the cutover.** Reconnect payment gateways, replace WooCommerce shortcodes and blocks, and review email notifications.

## Quick requirements check ​

- **WooCommerce 3.0 or later**, installed and active — the Migrator uses the CRUD API introduced in WC 3.0
- **At least one WooCommerce product** — the Migrator refuses to run against an empty catalog
- **FluentCart** installed and activated
- **The FluentCart Migrator addon** installed and activated
- **PHP** memory limit of 256MB recommended for larger stores
- **WP-CLI** for command-line workflows

WooCommerce Subscriptions is optional

Subscription data migrates only when the **WooCommerce Subscriptions** extension is active on the source site. Without it, the subscription counts read zero and every order migrates as a one-time payment.For full details, head to the [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration).

---

## Subscriptions & Renewals ​

**Source:** [https://docs.fluentcart.com/guide/migration/woocommerce/subscription-renewals](https://docs.fluentcart.com/guide/migration/woocommerce/subscription-renewals)

# Subscriptions & Renewals ​

If your WooCommerce store sells recurring products, this is the part of the migration that needs the most attention. Everything else — products, orders, customers, coupons — is history being copied. Subscriptions are live obligations, and after migration a different system is responsible for billing them.

Read this page before you cut production over.

## What changes at the moment of migration ​

WooCommerce Subscriptions runs the billing schedule itself. It keeps its own subscription records, decides when each renewal is due, generates a renewal order, and asks the gateway to take a payment against a stored token. There is no subscription object living at Stripe or PayPal for FluentCart to inherit — the schedule exists only inside WooCommerce.

That means a migrated subscription can't be handed off to the gateway. Instead, **FluentCart takes over the schedule** using its [Store Billing](/guide/product-types-creation/store-managed-subscriptions) engine: FluentCart creates each renewal invoice on the due date, and then either charges the saved card or emails the customer a **Pay Now** link.

Every migrated subscription therefore lands on one of two collection methods.

| Collection method | What happens on each due date | Customer experience |
| --- | --- | --- |
| System (Store Billing + Auto-Charge) | FluentCart charges the saved payment method automatically | Nothing changes for them |
| Manual (Store Billing) | FluentCart issues a renewal invoice and emails a Pay Now link | They pay each renewal themselves |

Both are the same engine. The only difference is whether a usable saved payment method came across with the subscription.

## What decides which one you get ​

The Migrator is deliberately conservative here. It marks a subscription **System** only when the saved token is genuinely chargeable by FluentCart — because a subscription wrongly marked System fails *every* renewal silently, which is far worse than one marked Manual that simply asks the customer to pay.

A subscription becomes **System** only when all of these hold:

1. The subscription is **not** flagged for manual renewal in WooCommerce.
2. The gateway is **Stripe**.
3. The subscription carries a Stripe **PaymentMethod** token (an ID starting with 
```
pm_
```

) **and** its Stripe customer ID.
4. Your FluentCart Stripe gateway is installed and advertises token-based renewal charging.

Everything else stays **Manual**:

- **PayPal subscriptions.** WooCommerce stores a Billing Agreement ID here, not a PayPal Vault ID, so FluentCart's vault-based charging cannot use it. The payer ID is still kept on the subscription for reference.
- **Legacy Stripe tokens.** Older 
```
src_…
```

 and 
```
card_…
```

 tokens are not valid PaymentMethods and cannot be charged off-session.
- **Offline and unknown gateways.** There is nothing to charge.
- **Subscriptions the merchant or customer already set to manual renewal.** That choice is respected.

Why the stored flag, not 
```
is_manual()
```

The Migrator reads WooCommerce's stored manual-renewal flag rather than calling 
```
WC_Subscription::is_manual()
```

. That method also returns true under WooCommerce Subscriptions' duplicate-site lock — which every staging clone triggers — and whenever the live gateway happens to be unavailable. Reading the stored flag means a staging rehearsal doesn't wrongly downgrade every token-backed subscription to manual.
### Card details on file ​

When a Stripe PaymentMethod token does come across, the Migrator also reads the card's brand, last four digits, and expiry from WooCommerce's payment-token vault, so the card renders properly in your admin and in the customer portal. If your store kept only the raw token without a vault row, the token still migrates and still charges — the display is just sparser.

## Before you go live ​

**1. Reconnect Stripe using the same account.** FluentCart selects its API keys by order mode. A migrated subscription carrying a live-mode Stripe token cannot be charged with test keys, and vice versa. Connect the same Stripe account you used with WooCommerce, in the same mode. See [Payments & Checkout](/guide/payments-checkout/).

**2. Check the order mode on migrated subscriptions.** WooCommerce records no per-order test/live marker, so the Migrator reads your gateway's *current* configuration. If your store flipped between test and live at some point in its history, some orders may land on the wrong mode. Spot-check a few and, if needed, correct the mapping with the 
```
fluentcart_migrator_woo_order_mode
```

 filter before running the production migration.

**3. Review your Store Billing settings.** Go to **FluentCart → Settings → Store Settings → Subscriptions** and confirm the renewal schedule, retry behavior, grace period, and reminder emails are how you want them. These now govern every migrated subscription. See [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).

**4. Review the renewal notification emails.** Manual-collection subscribers will receive a **Pay Now** email that they never received under WooCommerce. Read it before your customers do, under **FluentCart → Settings → Email Configuration**.

**5. Decide what to tell manual-collection customers.** If a meaningful number of subscriptions land on Manual, those customers will be asked to pay their next renewal instead of being charged silently. A short heads-up email explaining the change avoids surprise and reduces churn.

**6. Turn off WooCommerce Subscriptions billing.** Once FluentCart owns the schedule, leaving WooCommerce Subscriptions actively processing renewals risks double-charging. Deactivate WooCommerce (or at minimum its subscription scheduling) as part of the cutover — after you have verified the migration.

Don't run both billing engines at once

FluentCart and WooCommerce Subscriptions will each independently believe they own the renewal schedule. Verify the migration first, then deactivate WooCommerce before the next renewal date arrives.
## How renewal history is preserved ​

Renewal orders migrate as orders in their own right and are linked back to their subscription. Because WooCommerce renewal orders carry no WordPress post parent, the Migrator reads the renewal's subscription reference from order meta and stamps the subscription's first order as the parent, so FluentCart can attribute the renewal correctly.

Two edge cases are handled explicitly:

- **The parent subscription was deleted.** The renewal still needs somewhere to attach, so a single canceled placeholder subscription is created and keyed to the original WooCommerce subscription ID. Every later renewal of that same deleted subscription links to the same placeholder rather than spawning its own.
- **A renewal migrated before its parent.** The **Recount & Verify** step re-attaches renewal transactions left without a subscription link, then rebuilds bill counts from the actual renewal orders. This is why recount should always be the final stage.

## Verifying after migration ​

Go to **FluentCart → Subscriptions** and check a representative sample:

- **Status** matches what WooCommerce showed. Note that an active subscription whose end date has passed is imported as **expired** on purpose.
- **Billing interval** is right. WooCommerce's period-plus-multiplier is collapsed into FluentCart's named intervals: 3 months becomes quarterly, 6 months becomes half-yearly, and other multiples fall back to the base period.
- **Next renewal date** matches the source.
- **Collection method** is what you expect — and if a subscription you believed was card-backed shows Manual, check the token type in WooCommerce against the rules above.
- **Bill count** matches the number of renewal orders. If it doesn't, re-run recount.
- **Card on file** displays for System subscriptions.

## Related ​

- [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions) — how the renewal engine now driving your subscriptions works
- [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated) — the full subscription field inventory
- [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) — bill counts, orphaned renewals, and recount
- [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) — running the migration

---

## WP-CLI Reference ​

**Source:** [https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-cli](https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-cli)

# WP-CLI Reference ​

For stores with thousands of orders, WP-CLI is faster than the admin wizard and avoids browser timeouts entirely. The same engine drives both interfaces, so the result is identical — only the surface differs.

## When to use WP-CLI ​

Use the CLI when:

- Your store has more than a few thousand orders or products.
- You are running on shared hosting with strict PHP timeouts.
- You want to script a migration as part of a deployment workflow.
- The browser keeps disconnecting mid-run on a large dataset.
- You are migrating on staging via SSH and don't have admin UI access.

The wizard remains the right choice for small-to-medium stores or for non-technical operators.

## Commands at a glance ​

The wizard surfaces the most common commands inside the **WP-CLI (Recommended for Large Stores)** panel on the overview screen:

## The primary command ​

All WooCommerce migration work happens through one namespaced command, with flags for each stage:

bash
```
wp fluent_cart_migrator migrate_from_woo [flag]
```A separate command from EDD

WooCommerce uses 
```
migrate_from_woo
```

. Easy Digital Downloads uses 
```
migrate_from_edd
```

. They are independent commands with independent state, so a store that once ran an EDD migration can migrate from WooCommerce without either interfering with the other.
### Flag reference ​

| Flag | What it does |
| --- | --- |
| --all | Run the complete pipeline: products → tax rates → coupons → orders → missing customers → recount, in order. Skips stages already completed and resumes interrupted ones. |
| --products | Migrate the WooCommerce catalog to FluentCart products. Also syncs categories, attributes, downloads, store settings (first page only), and wires up bundle relationships on the final page. |
| --tax_rates | Migrate WooCommerce tax configuration and generate FluentCart tax rates. Skipped automatically if taxes are disabled in WooCommerce. |
| --coupons | Migrate WooCommerce coupons to FluentCart coupons, with product and category restrictions remapped. |
| --payments | Migrate orders, transactions, refunds, customers, and subscriptions. Processed in pages of 1,000 orders, with the last page persisted for resume. |
| --missing-customers | Create FluentCart customers for registered customer / subscriber accounts that never placed an order. |
| --recount | Recalculate aggregates after migration: coupon usage, customer lifetime value and purchase counts, orphaned renewal transactions, subscription bill counts. |
| --stats | Show pre-migration statistics for the WooCommerce store. No data is migrated. |
| --log | Display the failed order log. |
| --reset | Wipe migrated data and clear migration state. Requires Developer Mode. See Developer Mode. |

## Common workflows ​

### Full migration in one command ​

bash
```
wp fluent_cart_migrator migrate_from_woo --all
```Runs every stage in order. Stages already marked complete are skipped. If a previous run was interrupted mid-products or mid-orders, it resumes from the last completed page.

### Step by step ​

For more control, run each stage individually. Useful when you want to inspect the result between stages or when one stage needs special handling.

bash
```
wp fluent_cart_migrator migrate_from_woo --products
wp fluent_cart_migrator migrate_from_woo --tax_rates
wp fluent_cart_migrator migrate_from_woo --coupons
wp fluent_cart_migrator migrate_from_woo --payments
wp fluent_cart_migrator migrate_from_woo --missing-customers
wp fluent_cart_migrator migrate_from_woo --recount
```The order matters:

- **Products first.** Orders and coupons resolve product references through the ID map the products step writes.
- **Tax rates before orders.** Order tax rows link to the FluentCart rate IDs the tax step generates.
- **Coupons before orders.** Applied coupons on orders back-link to migrated coupon records by code.
- **Recount last.** It rebuilds aggregates from whatever is already migrated.

### Preview source data ​

Before migrating anything, see what is in the source store:

bash
```
wp fluent_cart_migrator migrate_from_woo --stats
```Prints the count of products, orders, paid transactions, customers, subscriptions, and coupons, plus every registered payment gateway ID and the order statuses present in your data. Nothing is written.

### Inspect failures after a run ​

If individual orders failed during the migration — corrupted records, missing product references, malformed line items — they are captured rather than halting the whole run. View them with:

bash
```
wp fluent_cart_migrator migrate_from_woo --log
```Each entry shows the WooCommerce order ID and the error message. Failures are also printed as warnings during the run itself, so a long CLI migration surfaces problems as they happen.

### Reset and start over (staging only) ​

bash
```
wp fluent_cart_migrator migrate_from_woo --reset
```Asks for confirmation, then wipes all migrated FluentCart data and clears WooCommerce migration state. This is gated behind [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) and should never be run on production.

## Resume behavior ​

The CLI is fully resumable. State is persisted in the 
```
__fluent_cart_woocommerce_migration_steps
```

 option after every completed page and step.

- **Stage-level resume:** Re-running 
```
--all
```

 skips any stages already marked complete.
- **Page-level resume for products:** The last completed product page is stored; a re-run continues from the next one.
- **Page-level resume for orders:** Same mechanism, in pages of 1,000 orders.
- **Idempotent re-runs:** 
```
--products
```

 updates existing migrated products in place through the ID map rather than duplicating them. 
```
--coupons
```

 updates existing coupons by code. 
```
--recount
```

 always recalculates from current data and never increments.

This means you can safely interrupt a long run with 
```
Ctrl+C
```

 and start it again. No duplicate data, no skipped records.

The Migrator also protects itself against memory exhaustion inside a single run: it flushes WordPress's runtime object cache and query log between batches, and stops a batch early when the process crosses roughly 70% of PHP's memory limit, leaving the next invocation to continue with a fresh process.

## Memory and timing tips ​

For very large stores, give PHP enough headroom:

bash
```
wp --exec='ini_set("memory_limit","1G");' fluent_cart_migrator migrate_from_woo --all
```Or, equivalently:

bash
```
php -d memory_limit=1024M $(which wp) fluent_cart_migrator migrate_from_woo --all
```If the host has aggressive process limits, run individual stages rather than 
```
--all
```

, so each invocation gets its own memory context.

## What the CLI doesn't do that the wizard does ​

- The CLI does not render the wizard's live per-step progress panel; it prints per-page progress lines instead.
- The CLI does not pause and resume mid-stage on demand — only between pages and stages.
- The CLI does not surface the post-migration next-steps panel. Work through the checklist in the [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration#a-few-things-still-need-your-attention) instead.

For everything else, the CLI is functionally equivalent to the wizard — and faster on real workloads.

## Related ​

- [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) — the admin interface
- [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated) — full data inventory
- [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) — reset workflow for staging
- [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) — what to do when something fails

---

## Developer Mode ​

**Source:** [https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-developer-mode](https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-developer-mode)

# Developer Mode ​

The Migrator includes a reset path that is too destructive to leave exposed on production. **Developer Mode** is the single switch that unlocks it.

It exists for one reason: rehearsing migrations safely. On staging, you want to import, inspect, reset, tweak the source, and import again, sometimes a dozen times before the production cutover. On production, you want reset firmly locked.

## Activating Developer Mode ​

Add the following line to your 
```
wp-config.php
```

 file, above the 
```
/* That's all, stop editing! */
```

 comment:

php
```
define('FLUENT_CART_DEV_MODE', true);
```Save the file. The change takes effect immediately. No plugin deactivation or cache flush is required.

To turn Developer Mode off, remove the line or set it to 
```
false
```

.

Never enable Developer Mode on production

Developer Mode exposes a destructive operation that drops and recreates FluentCart's database tables. Only enable it on staging, local, or otherwise isolated environments. On a live store it risks total data loss.
## Why a constant, not a setting ​

Defining a constant in 
```
wp-config.php
```

 is auditable, slow to flip by accident, and impossible to toggle from the WordPress admin. A misclicked button in the dashboard could wipe a production store; editing 
```
wp-config.php
```

 requires SSH or filesystem access plus an explicit code change.

This is the same reason WordPress core gates 
```
WP_DEBUG
```

, 
```
DISABLE_WP_CRON
```

, and other risk-bearing flags behind constants rather than settings pages.

## What Developer Mode unlocks ​

With 
```
FLUENT_CART_DEV_MODE
```

 set to 
```
true
```

, the following become available:

| Path | How to access |
| --- | --- |
| --reset flag on the WooCommerce migration command | wp fluent_cart_migrator migrate_from_woo --reset |
| Reset Migration link in the admin wizard | Appears inside the "Previous migration detected" notice on the Pre-Migration Overview screen |

Without Developer Mode, the CLI flag returns a clear error and the wizard hides the reset link entirely — the "Previous migration detected" notice still appears so you know a prior run happened, just without the reset option. That is the behavior you want on production.

For the actual reset workflow — what reset destroys, the staging rehearsal recipe, and confirmation prompts — see [Troubleshooting → Resetting a migration](/guide/migration/woocommerce/woocommerce-troubleshooting#resetting-a-migration).

## Related ​

- [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) — full reset workflow, failed order log, common errors
- [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli) — full command surface

---

## Migrating to FluentCart from WooCommerce ​

**Source:** [https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-migration](https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-migration)

# Migrating to FluentCart from WooCommerce ​

Moving an entire online store to a new platform might sound like a massive, stressful project — but with FluentCart it doesn't have to be.

The **FluentCart Migrator** addon acts as your personal moving team. It automatically and securely transfers all of your hard-earned data — products, categories, attributes, orders, customers, subscriptions, coupons, tax rates — from **WooCommerce** directly into your new FluentCart store. No spreadsheets, no CSV exports, no manual data entry.

Your WooCommerce store stays safe

This tool only **copies** your data into FluentCart. Your original WooCommerce store, all its settings, and every record stay completely untouched throughout this entire process. You can run both side-by-side until you're fully ready to switch.This page walks through the wizard step by step. For an alternative terminal-based workflow on large stores, see the [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli). For a complete inventory of what does and doesn't transfer, see [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated).

---

## Before You Begin ​

Take two minutes to confirm these are in place before you start. Catching a missing piece now saves a mid-migration surprise.

- **WooCommerce 3.0 or later** must be installed and active on your site. The Migrator reads through WooCommerce's CRUD API, which means it works the same whether your store uses **HPOS** (High-Performance Order Storage) or the legacy post tables.
- **At least one product** must exist in WooCommerce. The compatibility check refuses to run against an empty catalog.
- **FluentCart** must be installed and activated — [Get FluentCart](https://fluentcart.com).
- **WooCommerce Subscriptions** is only needed if you sell recurring products. If it isn't active, subscription counts read zero and every order migrates as a one-time payment.
- **A database backup** — always take a fresh backup before any migration. It's your safety net, even though the Migrator never modifies your WooCommerce data.
- **WordPress admin access** on the site you're migrating.

Back up first

Even though the Migrator only reads from WooCommerce and never touches your existing data, take a fresh database backup before you begin. It takes five minutes and gives you complete peace of mind.For a deeper rehearsal before touching production, run the migration on staging first with [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) enabled. That lets you reset and re-run as many times as needed.

---

## Step 1: Install and Activate the Migrator ​

Now that you're ready, install the migration tool. Think of it as a secure, temporary bridge between your existing WooCommerce setup and your new FluentCart store.

The quickest route is from inside FluentCart itself:

1. Go to **FluentCart → Settings → Features & addon**.
2. Scroll to the **Plugin Addons** panel.
3. Find **FluentCart Migrator** — *"Migrate your store data to FluentCart from other eCommerce platforms."*
4. Click **Download**, then activate the plugin when prompted.

You can also install it manually: download the addon 
```
.zip
```

 from the [FluentCart addons page](https://fluentcart.com/fluentcart-addons/), then go to **Plugins → Add New → Upload Plugin**, choose the file, click **Install Now**, and finally **Activate Plugin**.

## Step 2: Open the Migration Dashboard ​

Now that the bridge is built, open the tool.

1. Navigate to your **FluentCart** dashboard in the WordPress sidebar.
2. Click the newly added **Migrator** option.

This launches the **Migration Wizard** — a clean, step-by-step interface that walks you through the entire transfer.

## Step 3: Select WooCommerce as Your Source ​

The wizard auto-detects which eCommerce plugins are installed. If you're running WooCommerce, the **WooCommerce** card displays a green **DETECTED** badge.

Click the card to confirm: *yes, this is where my data lives.*

Easy Digital Downloads appears alongside it as a second supported source, and SureCart is visible as an upcoming one.

## Step 4: Compatibility Check ​

Before moving any data, the wizard runs a quick compatibility check.

This step verifies that your WooCommerce installation can be read by the migration tool. It confirms WooCommerce is active and reports the detected version. **WooCommerce 3.0 is the minimum** — that's the release that introduced the CRUD API the Migrator relies on. Older installations are blocked here with a clear message; upgrade WooCommerce first, then return to the wizard.

Once you see the **green confirmation box**, click **Continue**.

## Step 5: Pre-Migration Overview ​

This is one of the most reassuring parts of the process. Before the actual transfer begins, the wizard takes a quick inventory of your existing WooCommerce store and shows you exactly what it found.

You'll see clear summary cards displaying the total count of:

- **Products** — published, private, and draft products in your catalog
- **Orders** — your complete purchase history
- **Customers** — registered accounts with the 
```
customer
```

 or 
```
subscriber
```

 role
- **Transactions** — orders in a paid state (processing, completed, refunded)
- **Coupons** — published discount codes
- **Subscriptions** — shown only when WooCommerce Subscriptions is active

Below the counts, the wizard surfaces the **payment gateways** registered on your store and the **order statuses** present in your data, so you can confirm there are no surprises.

Compare these numbers against what you know is in your WooCommerce store. If they look right, proceed.

Returning to a migration already in progress

If the wizard detects a previous run on this site, a **Previous migration detected** notice appears above the counts. Completed steps show a green **Completed** badge, the primary button changes to **Resume Migration**, and anything already done is skipped automatically.
## Step 6: Choose Steps and Start the Migration ​

You're at the final setup screen. The **Migration Steps** panel lets you choose which stages to run:

- **Products** — the catalog, plus categories, attributes, variations, downloads, and a one-time store-settings sync
- **Tax Rates** — WooCommerce tax configuration and the rate map orders depend on
- **Coupons** — discount codes with their restrictions
- **Orders, Payments, Customers** — the main stage; also covers subscriptions when WooCommerce Subscriptions is active
- **Missing Customers** — appears only when you have registered customers who never placed an order
- **Recount & Verify** — rebuilds coupon usage, customer lifetime value, and subscription bill counts

Leave **all of them checked**. Unchecking any item means that data won't come over. Order matters and the wizard runs them in the correct sequence — products must exist before orders can reference them, and recount always runs last.

When ready, click **Start Migration**.

Keep this tab open

Don't close or refresh this browser tab while the migration is running. The progress screen needs an active connection to keep feeding batches to the server. Grab a coffee and let FluentCart do the heavy lifting.If the migration is interrupted

No need to panic. The Migrator tracks its progress as it goes — products resume from the last completed page, orders from the last completed batch. If your browser closes, your session times out, or anything else interrupts the process, return to the Migrator screen and start it again. It skips everything that already completed and picks up exactly where it stopped.On the same screen: WP-CLI commands

The overview screen also surfaces the WP-CLI commands for each stage. For stores with thousands of orders, switching to the CLI is significantly faster and avoids browser timeouts entirely. See the [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli) for the full command surface.
## Step 7: Migration Complete — Verify Before Going Live ​

Once every stage reports done, you'll see a green checkmark and a **WooCommerce Migration Completed** panel with the completion timestamp and a final breakdown of how many items were copied across each category.

If any individual orders failed during the run, an expandable **Error Log** section appears here listing each one. See [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) for how to read and act on those entries.

Your data is in. Before opening your new store to the public, spend a few minutes verifying the result.

**Verify Your Products** Go to **FluentCart → Products**. Confirm the product count looks right, then open a handful of items and check titles, descriptions, categories, pricing, variations and their attribute terms, stock quantities, and downloadable files.

**Review Orders** Go to **FluentCart → Orders** and open several recent ones. For each, confirm order totals, line items, tax, shipping, discounts, payment status, customer name and email, billing and shipping addresses, payment gateway, and transaction ID.

**Check Subscriptions** Go to **FluentCart → Subscriptions** and spot-check a few. Verify billing interval, next renewal date, status, and — most importantly — the **collection method**. See [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) for what that field means and why it matters.

**Verify Coupons** Go to **FluentCart → Coupons** and confirm discount codes are present with correct amounts, usage limits, product and category restrictions, and expiration dates.

**Spot-Check Customers** Go to **FluentCart → Customers**, open a few profiles, and confirm names, emails, addresses, and order history. Customer lifetime value and purchase counts are recalculated automatically during the recount stage, so those numbers will be accurate.

Pick representative orders to check thoroughly

For the best peace of mind, find one example of each scenario in your store and compare it field-by-field between WooCommerce and FluentCart: a simple one-time purchase, a variable-product order, an order with shipping and tax, an order with a coupon applied, a partially refunded order, and a subscription order with renewals.For a complete map of what transfers and what doesn't, see [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated).

## A Few Things Still Need Your Attention ​

The Migrator handles your data automatically, but a small number of items need quick manual setup before you're fully live.

**1. Reconnect Your Payment Gateways** Transaction records transfer, but gateway API credentials never do — for security reasons. Reconnect them fresh in FluentCart under **FluentCart → Settings → Payment Settings**.

> 💡 Important: Use the exact same Stripe and PayPal accounts you used with WooCommerce. FluentCart selects its API keys by order mode (test or live), so connecting a different account — or the wrong mode — leaves migrated charges unreachable.

INFO

For step-by-step instructions on connecting each payment gateway, see the [Payments & Checkout](/guide/payments-checkout/) section.**2. Set Up Shipping** WooCommerce shipping zones, methods, and rate rules are not migrated — the two models differ too much for an automated mapping to be trustworthy. Historical shipping amounts on past orders come across intact, but you'll need to recreate your live shipping setup under **FluentCart → Settings → Shipping**. See the [Shipping](/guide/shipping/) section.

**3. Review Your Tax Settings** Your WooCommerce tax configuration transfers and FluentCart tax rates are generated for the countries you taxed, but FluentCart's tax model is not a one-to-one copy of WooCommerce's. Open **FluentCart → Settings → Tax Settings** and confirm the rates and calculation behavior match your jurisdictional requirements.

**4. Review Your Email Notifications** FluentCart has its own email system with its own templates. Review and customize your purchase receipt, subscription renewal, and refund notification templates under **FluentCart → Settings → Email Configuration** before customers start receiving them.

**5. Replace WooCommerce Shortcodes, Blocks, and Links** Any 
```
[woocommerce_cart]
```

, 
```
[woocommerce_checkout]
```

, 
```
[products]
```

, or add-to-cart shortcodes and blocks on your pages need replacing with FluentCart's equivalents. Also update menu items and links pointing to WooCommerce's My Account, Cart, and Checkout pages. See [Using Gutenberg Blocks](/guide/customization-and-themes/using-gutenberg-blocks).

**6. Confirm Downloadable Files** Downloadable files stored on your own server are copied into FluentCart's storage during migration. Files hosted remotely (S3, a CDN, another domain) keep their original URL. Open each digital product and confirm the file is linked correctly under **Downloadable Asset(s)**.

Don't delete your WooCommerce data yet

Even after everything is verified and running, don't rush to remove WooCommerce or its database tables. The Migrator never modifies them — they're your fallback if you ever need to reference an original record. Leave them in place until you're fully confident in the new store.
## Need help? ​

- Stuck on a specific stage? Check the [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) page.
- Want to know exactly what transfers? See [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated).
- Selling subscriptions? Read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) before going live.
- Running on a large store? Switch to the [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli).
- Testing on staging and want to reset between runs? Enable [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode).

---

## Troubleshooting ​

**Source:** [https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-troubleshooting](https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-troubleshooting)

# Troubleshooting ​

The Migrator is built to be tolerant of bad data: individual record failures are captured rather than halting the run. This page explains how to find those failures, how to verify integrity after a migration, and how to recover from common problems.

## The failed order log ​

When an order fails to migrate — a corrupted record, a missing customer email, malformed line items — the failure is captured in the 
```
_fluent_cart_woocommerce_failed_logs
```

 WordPress option rather than aborting the run. The same applies to products: a single unreadable product is recorded and the catalog step continues.

### Viewing failures from the CLI ​

bash
```
wp fluent_cart_migrator migrate_from_woo --log
```Each entry shows the WooCommerce order ID and the error message. Failures are also printed as warnings while a CLI run is in progress, so you see them as they happen rather than only at the end.

### Viewing failures from the wizard ​

The completion screen surfaces an expandable **Error Log** section. Click to expand and see the same data as the CLI 
```
--log
```

 output.

### What to do with a failed entry ​

1. Open the original order in WooCommerce (**WooCommerce → Orders**).
2. Compare it against the error message — usually the cause is obvious (missing billing email, deleted product reference, an order with no usable line items).
3. Fix the source data in WooCommerce.
4. Re-run the orders stage: 
```
wp fluent_cart_migrator migrate_from_woo --payments
```

. Already-migrated orders are skipped.

## Common issues ​

### "WooCommerce is not active" ​

Every stage guards on WooCommerce being loaded. If you see this from the CLI or the wizard, WooCommerce has been deactivated — reactivate it and run again. WooCommerce needs to stay active for the whole migration, because the Migrator reads through its API.

### "Migration requires WooCommerce 3.0 or later" ​

The compatibility check blocks anything older. WooCommerce 3.0 introduced the CRUD API (
```
wc_get_products
```

, 
```
wc_get_orders
```

) that the Migrator relies on to stay storage-agnostic.

**Fix:** Update WooCommerce, then return to the wizard.

### "No WooCommerce products found. Nothing to migrate." ​

The Migrator refuses to run against an empty catalog. If you genuinely have products, confirm they aren't all in the trash — the migration reads 
```
publish
```

, 
```
private
```

, and 
```
draft
```

 products.

### Migration stalls partway through ​

A stalled migration is almost always a server-side timeout: PHP's 
```
max_execution_time
```

 cut off the request, or the host's process supervisor killed a long-running script.

**Fix from the wizard:** Refresh the page and start the migration again. It resumes from the last completed page and skips completed steps.

**Fix from the CLI:** The CLI bypasses HTTP timeouts entirely. If the wizard keeps stalling, switch to the CLI:

bash
```
wp fluent_cart_migrator migrate_from_woo --all
```
### Out of memory errors ​

For large stores, PHP may run out of memory during the products or orders stage. The Migrator already flushes WordPress's runtime caches between batches and stops a batch when memory usage crosses roughly 70% of the limit, but a very low limit can still be exhausted inside a single batch.

**Fix:** Give PHP more headroom for the migration run:

bash
```
wp --exec='ini_set("memory_limit","1G");' fluent_cart_migrator migrate_from_woo --all
```If you still hit the limit, run individual stages instead of 
```
--all
```

, so each invocation gets its own memory context.

### Product counts don't match ​

FluentCart's product count won't always equal WooCommerce's, and that's usually correct:

- **Variations aren't separate products.** WooCommerce variations become FluentCart variations inside their parent product, not standalone entries.
- **Trashed products aren't migrated.** Only 
```
publish
```

, 
```
private
```

, and 
```
draft
```

 come across.
- **Failed products are logged.** Check the error log if the gap is larger than the above explains.

### Orders migrated but line items point at nothing ​

This happens when the orders stage ran before the products stage. Order line items resolve their product through the ID map that the products step writes.

**Fix:** Run 
```
--products
```

 first, then re-run 
```
--payments
```

. If the products already migrated, re-running orders is safe — order records are idempotent.

### An order total doesn't match WooCommerce ​

It should always match. The Migrator rebuilds each order total from its components (items, tax, shipping, shipping tax, fees, minus discounts) and reconciles the result against WooCommerce's recorded total: a positive difference is recorded as a manual discount, a negative difference is absorbed as a fee. If a total genuinely differs, check whether a third-party extension was adding an amount at display time rather than storing it on the order — that value has nothing to migrate from.

### Coupon restrictions came across empty ​

Coupon product and category restrictions are remapped, not copied. A restricted product that wasn't migrated — because it was trashed, or the products step hadn't run yet — is dropped from the list rather than left pointing at a non-existent ID.

**Fix:** Run 
```
--products
```

 first, then re-run 
```
--coupons
```

. Coupons are updated in place by code, so re-running is safe.

### Tax is missing on migrated orders ​

Tax migration is conditional on taxes being enabled in WooCommerce. If they were disabled, the tax step is skipped with a notice and order tax rows have no FluentCart rate to link to.

**Fix:** Enable taxes in WooCommerce, run 
```
--tax_rates
```

, then re-run 
```
--payments
```

 so order tax rows resolve.

### Subscription bill counts look wrong ​

After the recount stage, occasionally a subscription's bill count doesn't match what you expected. This usually means renewal orders migrated before their parent subscription, so the link was made after the fact.

**Fix:** Re-run recount:

bash
```
wp fluent_cart_migrator migrate_from_woo --recount
```Recount re-attaches orphaned renewal transactions before rebuilding bill counts, which is why it must always be the final stage.

### A subscription shows Manual collection when you expected automatic charging ​

That's a deliberate decision, not a failure. FluentCart only marks a migrated subscription as auto-charging when it inherits a genuinely chargeable token. See [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) for the exact rules and what to do about it.

### Stripe subscriptions can't be charged after migration ​

Almost always an order mode mismatch. WooCommerce records no per-order test/live marker, so the Migrator infers the mode from your gateway's current configuration. If your store's Stripe settings were flipped at some point, some orders land on the wrong mode — and FluentCart selects API keys by mode, so the token becomes unreachable.

**Fix:** Confirm the mode on a sample of migrated orders. To correct the inference for the whole run, add a filter before migrating:

php
```
add_filter('fluentcart_migrator_woo_order_mode', function ($mode, $context) {
    // $context['order'] and $context['gateway'] are available
    return $mode;
}, 10, 2);
```Then reset (on staging) and re-run.

### Customers exist in WooCommerce but not in FluentCart ​

Customers are created from orders. Registered accounts that never placed an order need the dedicated step:

bash
```
wp fluent_cart_migrator migrate_from_woo --missing-customers
```In the wizard, the **Missing Customers** checkbox only appears when such accounts are detected.

### Downloadable files aren't downloading ​

Local files are copied into FluentCart's storage directory during migration. Remotely-hosted files keep their original URL.

**Fix:** Open the product in FluentCart and check the **Downloadable Asset(s)** field. If a remote URL is no longer reachable, or a local file lived outside your uploads directory, re-attach it manually.

### Some IP addresses on migrated orders are blank ​

That's intentional. When the orders step completes, any IP appearing on more than 30 migrated orders is cleared — an IP that common belongs to a gateway or proxy, not a customer.

## Resetting a migration ​

If a staging migration has problems and you want to start fresh, the Migrator provides a clean reset path. It is gated behind [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) — you must define 
```
FLUENT_CART_DEV_MODE
```

 in 
```
wp-config.php
```

 before reset will work. This is intentional: reset is destructive, and gating it behind a constant makes it impossible to trigger by accident from the WordPress admin.

Never run reset on production

Reset drops and recreates FluentCart's database tables and deletes migrated product posts. Only ever run it on staging, local, or otherwise isolated environments.
### From the CLI ​

bash
```
wp fluent_cart_migrator migrate_from_woo --reset
```Asks for confirmation before destroying anything. You can bypass the prompt with WP-CLI's standard 
```
--yes
```

 flag inside scripts you have reviewed.

### From the wizard ​

When Developer Mode is active and the wizard detects a previous migration, a **Reset Migration** link appears inside the "Previous migration detected" notice on the Pre-Migration Overview screen. Clicking it asks for confirmation, then runs the same reset.

### What reset destroys ​

Reset is thorough. It rolls back everything the migration created so you can start clean.

**WordPress options cleared:**

- ```
__fluent_cart_woocommerce_migration_steps
```

 (stage and page progress)
- ```
_fluent_cart_woocommerce_failed_logs
```

 (per-order failure records)
- The migration summary

**Database schema:**

- Drops and recreates every FluentCart table

**Migrated post data:**

- Deletes FluentCart product posts and their metadata
- Removes the ID-mapping metadata from both sides (
```
_fct_migrated_id
```

, 
```
_wc_migrated_from
```

, 
```
__wc_migrated_variation_maps
```

)

Your original WooCommerce data is never touched. Only FluentCart-side records and the mapping metadata are affected.

Reset wipes all FluentCart data, not just WooCommerce imports

Because reset recreates the FluentCart schema, anything else living in FluentCart on that site goes with it. On a staging clone that's exactly what you want. On any site with real FluentCart data, it isn't.If reset ever reports that it dropped the tables but failed to recreate them, re-activate FluentCart (or run its database migration) to restore the schema before retrying. The Migrator checks for this explicitly and surfaces it rather than reporting a false success.

### A staging rehearsal workflow ​

A typical rehearsal loop looks like this:

1. Clone production into staging, including the WooCommerce database.
2. Enable [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) in staging's 
```
wp-config.php
```

.
3. Install FluentCart and the Migrator addon.
4. Run the full migration via the wizard or CLI.
5. Spot-check products, categories, variations, orders, subscriptions, coupons.
6. Note anything that needs source-data cleanup before the production run (duplicate SKUs, broken products, orders referencing deleted products).
7. Reset the migration: 
```
wp fluent_cart_migrator migrate_from_woo --reset
```

.
8. Clean up the source data.
9. Re-run the full migration.
10. When the result looks right on staging, repeat on production (with Developer Mode **disabled**).

The ability to iterate without consequence turns a one-shot migration into something closer to a controlled, auditable process.

## Frequently asked questions ​

### Does the migration modify or delete my WooCommerce data? ​

Never. The Migrator only reads from WooCommerce. Your original data is untouched, which means you can verify the entire migration against your live WooCommerce store before switching anything over.

### Does it work with HPOS? ​

Yes. The Migrator reads through WooCommerce's CRUD API rather than querying tables directly, so it behaves identically whether your store uses High-Performance Order Storage or the legacy post tables. You don't need to know which one you're on.

### What if the migration is interrupted halfway through? ​

Just start it again. The Migrator tracks its own progress: it skips completed stages, resumes products from the last completed page, and resumes orders from the last completed batch. No duplicate data.

### Can I run the migration multiple times? ​

Yes. Every stage is idempotent. Re-running products updates existing migrated products through the ID map. Re-running coupons updates existing coupons by code. Re-running recount always recalculates from current data. There is no risk of duplicate records from re-running.

### Will my existing customers need to do anything? ​

Their accounts, order history, addresses, and subscriptions all move over, and they log in with the same WordPress credentials. The one group who may notice a change is subscribers whose renewals land on manual collection — see [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals).

### Will active subscriptions keep renewing automatically? ​

Some will, some will need the customer to pay each renewal. WooCommerce Subscriptions owns its own schedule with no gateway-side subscription to inherit, so FluentCart takes the schedule over. Whether it can also auto-charge depends on the saved payment token. Read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) in full before going live.

### Do I need FluentCart Pro? ​

Not for the WooCommerce migration itself. WooCommerce core has no licensing module, so the Pro-only license migration doesn't apply here.

### How long does the migration take? ​

It depends on store size:

- Small stores (a few hundred orders): two to five minutes
- Medium stores (thousands of orders): ten to thirty minutes
- Large stores (tens of thousands of orders): thirty minutes to a couple of hours

The CLI is consistently faster than the wizard for medium and large stores because it avoids HTTP timeouts and per-batch round trips.

### Should I keep the Migrator plugin active afterwards? ​

For a WooCommerce migration there is no compatibility layer to maintain, so the addon isn't doing anything once the migration is verified and complete. Keep it active while you're still verifying and might need the logs or a re-run; deactivate it afterwards if you like.

### When can I deactivate WooCommerce? ​

Once you have verified the migration, reconnected your gateways, and replaced your WooCommerce pages, shortcodes, and blocks with FluentCart's. If you sell subscriptions, deactivate WooCommerce before the next renewal date so two billing engines don't both act on the same schedule. Leave the WooCommerce database tables in place for a while as a fallback — they cost almost nothing and the Migrator never modified them.

### Where do I get help if I'm stuck? ​

- Check the failed order log: 
```
wp fluent_cart_migrator migrate_from_woo --log
```
- Preview your source data: 
```
wp fluent_cart_migrator migrate_from_woo --stats
```
- Rehearse on staging with [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) enabled
- Open a support ticket via your FluentCart account

## Related ​

- [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) — the admin interface
- [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated) — full data inventory
- [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) — recurring billing after the cutover
- [WP-CLI Reference](/guide/migration/woocommerce/woocommerce-cli) — full command surface
- [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) — the reset gate

---

## What Gets Migrated ​

**Source:** [https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-what-is-migrated](https://docs.fluentcart.com/guide/migration/woocommerce/woocommerce-what-is-migrated)

# What Gets Migrated ​

Before you run a migration, it is worth knowing exactly what comes across, what doesn't, and why. This page covers both — so there are no surprises after the wizard finishes.

Everything below is read through WooCommerce's own CRUD API, which means the results are identical on **HPOS** stores and on legacy post-table stores.

## What is migrated ​

### Products ​

Every WooCommerce product transfers as a FluentCart product, with its structure preserved. Published, private, and draft products are all included.

| WooCommerce concept | Becomes in FluentCart | Notes |
| --- | --- | --- |
| Simple product | Simple product | Single variation |
| Variable product | Product with variations | One FluentCart variation per WooCommerce child variation |
| Variable subscription | Subscription product with variations | Recurring config stored per variation |
| Subscription product | Subscription product | Interval, length, trial, and signup fee preserved |
| Grouped product | Product flagged as a bundle | Children linked as bundle variation references |
| Product Bundles (extension) | Product flagged as a bundle | Bundled items linked, including items pinned to a specific variation |
| External / affiliate product | Catalog-only product | Migrated but deliberately un-purchasable — see below |
| Title, description, short description, slug, author, status, dates | Same | Unchanged |
| Featured image | Same | Same media library reference |
| SKU | Same | De-duplicated if two products share one |

**Pricing and sale prices.** The current price becomes the item price. When a product is on sale, its regular price is stored as the compare-at price so the discount still displays.

**Stock.** Stock quantities, stock status, and backorder settings transfer per product and per variation. Two details worth knowing:

- If a WooCommerce item is marked out of stock **without** per-item stock management, FluentCart records it as managed with zero available — otherwise it would migrate as freely purchasable.
- If any variation manages its own stock, the parent product's stock-management flag is switched on. WooCommerce commonly leaves the parent flag off while stock lives on the variations; without this roll-up, FluentCart would ignore the variation quantities entirely.

**External / affiliate products.** FluentCart has no external-product type. These migrate as catalog entries so their content and images aren't lost, but their variation is set inactive and out of stock so they can never be checked out. The outbound URL and button text are preserved as product meta for a template or widget to read.

A bidirectional ID map is created so re-running the migration updates rather than duplicates: 
```
_fct_migrated_id
```

 on the WooCommerce product points to the FluentCart record, 
```
_wc_migrated_from
```

 on the FluentCart product points back, and 
```
__wc_migrated_variation_maps
```

 maps each WooCommerce variation ID to its FluentCart variation.

### Product categories ​

Unlike some migrations, WooCommerce's 
```
product_cat
```

 taxonomy **does** transfer. The whole tree is synced into FluentCart's 
```
product-categories
```

 taxonomy parents-first, so hierarchy is preserved, and existing terms are reused by slug rather than duplicated. Name, slug, and description all come across, and each product is reassigned to its migrated categories.

### Product attributes and variations ​

WooCommerce attributes are resolved into FluentCart's shared attribute library — attribute groups and their terms — and reused across products.

| WooCommerce | Becomes in FluentCart |
| --- | --- |
| Global attribute taxonomy (pa_*) | Attribute group, named from the WooCommerce attribute label |
| Custom (per-product) attribute | Attribute group of type options |
| Attribute of type color | Color swatch group, with hex values read from term meta |
| Attribute of type image | Image swatch group, with the swatch image resolved to a URL |
| Attribute term | Attribute term in the matching group |

For **variable products**, only variation-defining attributes are used, and each WooCommerce child variation becomes one FluentCart variation carrying its selected terms. Variation titles come from WooCommerce's attribute summary.

For **non-variable products that still carry attributes**, the attributes are expanded into a cartesian product of combinations — one FluentCart variation per combination, all sharing the source product's price and stock. This is capped at **500 combinations**; a product that would exceed it stays a plain single-variation product instead.

Variations whose attribute is set to "Any"

When a WooCommerce variation leaves an attribute unset ("Any …"), that attribute simply doesn't constrain the migrated variation. And when a variation references a term the parent product no longer lists — a common inconsistency in older stores — the term is recovered from the taxonomy and added back so the variation still resolves.
### Downloadable files ​

Downloadable files attached to products and variations transfer, and this goes further than a metadata copy: files that live on your own server (an uploads URL for this site, or an absolute path) are **copied into FluentCart's own storage directory** so FluentCart can serve them. The copy is idempotent — re-running the migration doesn't duplicate files.

Files hosted elsewhere — S3, a CDN, another domain — keep their original URL unchanged.

### Customers ​

Customer records transfer with full identity and address data, deduplicated on email.

- Full name, email address
- WordPress user account association
- Billing address and, when present, a separate shipping address in the customer's address book
- Phone number on the billing address
- Lifetime value, purchase count, average order value — recalculated from the migrated orders during the **Recount & Verify** step

Customers are created two ways. Most arrive as a by-product of order migration: the first migrated order for an email creates the customer and seeds their address book. Registered customers who **never placed an order** would be lost that way, so a dedicated **Missing Customers** step walks users with the 
```
customer
```

 or 
```
subscriber
```

 role and creates any that don't already exist, reading their addresses from the WooCommerce customer profile.

Why 
```
subscriber
```

 too

Stores that let people register before buying leave those accounts on WordPress's default 
```
subscriber
```

 role. Including that role means those accounts aren't silently dropped.If a customer with the same email already exists in FluentCart when an order is being migrated, the order is linked to the existing record rather than creating a duplicate.

### Orders and payments ​

Every order transfers — including line items, taxes, shipping, fees, discounts, transactions, refunds, and notes. Only WooCommerce's 
```
checkout-draft
```

 status (unfinished block-checkout attempts) is excluded.

| WooCommerce status | FluentCart order status | FluentCart payment status |
| --- | --- | --- |
| completed | Completed | Paid |
| processing | Processing | Paid |
| on-hold | On Hold | Pending |
| pending | On Hold | Pending |
| cancelled | Canceled | Failed |
| refunded | Canceled | Refunded |
| failed | Failed | Failed |

Payment status is refined by how much was actually refunded: an order with a partial refund lands as **Partially Refunded** regardless of its WooCommerce status, and one refunded in full lands as **Refunded**.

Each order brings:

- Order ID and order number, preserved from WooCommerce
- Subtotal, cart tax, shipping total, shipping tax, fees, coupon discount, and order total — all converted to FluentCart's minor-unit (cents) storage
- Currency and tax behavior (inclusive or exclusive, read from your WooCommerce price settings)
- Billing and shipping addresses, including company name, phone, and email
- Line items: product, variation, quantity, unit price, subtotal, tax, discount, and fulfillment type
- Per-item refunded amounts, taken from WooCommerce's refund line items
- A charge transaction carrying the gateway transaction ID
- One refund transaction per WooCommerce refund, with its own amount and date
- Applied coupon codes with the discount amount, back-linked to the migrated coupon
- Order-level tax rows, linked to the generated FluentCart tax rates
- Order notes — both system notes and notes to the customer — as FluentCart activity entries
- Customer note, IP address, completion date, and refund date

**Totals reconciliation.** The Migrator rebuilds the order total from its components and compares it to WooCommerce's recorded total. Any positive difference is recorded as a manual discount; any negative difference is absorbed as a fee. Migrated orders therefore always add up to the same total your customer actually paid.

**Refund allocation.** When WooCommerce recorded a refund at the order level without allocating it to line items, the amount is spread proportionally across items by line total, so per-item refund figures stay sensible.

**Shipping status.** Only physically-fulfilled orders carry a shipping status. A 
```
completed
```

 WooCommerce order lands as **shipped**, so migrating years of history doesn't flood your fulfillment queue with thousands of unshipped orders.

**Order mode (test vs live).** WooCommerce keeps no per-order record of whether a payment was taken in test or live mode, so the Migrator reads the *current* configuration of the order's gateway — Stripe's 
```
testmode
```

, PayPal Payments' 
```
sandbox_on
```

, PayPal Standard's 
```
testmode
```

 — and falls back to your FluentCart store's own order mode for gateways with no such concept (cash on delivery, cheque, BACS). This matters: FluentCart selects its API keys by order mode, so a subscription imported under the wrong mode cannot be charged. If your store flipped modes at some point in its history, override the result with the 
```
fluentcart_migrator_woo_order_mode
```

 filter.

**Gateway mapping.** Payment methods map by prefix, so gateway variants are handled: anything starting with 
```
stripe
```

 becomes **stripe**, anything starting with 
```
ppcp
```

 or 
```
paypal
```

 becomes **paypal**, and 
```
cod
```

 / 
```
cheque
```

 / 
```
bacs
```

 become **offline payment**. Paystack and Airwallex map through by name. Any other gateway ID passes through unchanged.

**Shared IP masking.** When the orders step finishes, IP addresses appearing on more than 30 migrated orders are cleared. An IP that common is a gateway or proxy address, not a customer's, and keeping it serves no purpose.

### Subscriptions ​

When **WooCommerce Subscriptions** is active, subscriptions come across with their full state. Parent orders create the subscription; renewal orders link to it.

| Field | Behavior |
| --- | --- |
| Status | active, on-hold → Paused, pending, pending-cancel → Canceled, cancelled, expired, switched → Canceled |
| Billing interval | Mapped to FluentCart's slugs — daily, weekly, monthly, quarterly (3 months), half-yearly (6 months), yearly |
| Recurring amount, tax, and total | Split so the recurring amount is ex-tax and the total is gross |
| Signup fee | Preserved |
| Bill times and trial days | Read from the subscription's product or variation |
| Next payment, trial end, end, and cancellation dates | Preserved |
| Gateway customer ID | Stripe customer ID or PayPal payer ID |
| Notes | Migrated as subscription activity entries |
| Renewal order history | Linked back to the subscription |

An otherwise-active subscription whose end date has already passed is imported as **expired** — WooCommerce sometimes leaves such records active until a cron run catches up.

**Collection method** is the field that decides whether renewals keep charging automatically. It's important enough to have its own page: read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals).

**Renewals whose parent is gone.** If a renewal order's subscription was deleted in WooCommerce, the Migrator creates a single canceled placeholder subscription keyed to the original subscription ID, so the renewal transaction still attaches somewhere. Every later renewal of the same deleted subscription links to that one placeholder instead of spawning its own.

**Switches and upgrades.** Orders that WooCommerce Subscriptions marks as a switch are flagged in the migrated order's config, along with the IDs of the subscriptions involved, so the upgrade chain isn't entirely lost.

After import, the **Recount & Verify** step re-attaches renewal transactions that lost their subscription link, rebuilds bill counts from actual renewal orders, and recalculates customer and coupon aggregates.

### Coupons ​

Every WooCommerce coupon transfers with its rules intact.

| WooCommerce | Becomes in FluentCart |
| --- | --- |
| percent, percent_product | Percentage discount |
| fixed_cart, fixed_product | Fixed discount |
| Free-shipping coupon with no discount value | Free shipping coupon |
| Recurring / renewal discount types (WC Subscriptions) | Coupon flagged as applying to renewals |
| Individual use only | Non-stackable coupon |

Also preserved: usage limit, usage limit per user, current usage count, minimum and maximum spend, expiry date, description, and publish status (published → active, anything else → disabled).

**Restrictions are remapped, not copied.** Included and excluded products are translated from WooCommerce product IDs to the migrated FluentCart product IDs; products that weren't migrated are dropped from the list rather than left pointing at nothing. Included and excluded categories are matched to the migrated FluentCart category terms by slug.

Coupon usage counts are recalculated from applied coupons on paid orders during the recount step.

### Tax rates and configuration ​

Tax migration is conditional. It runs only when taxes are enabled in WooCommerce; otherwise the step is skipped with a clear notice.

When enabled, the Migrator:

- Turns on FluentCart's tax engine
- Sets tax-inclusive or tax-exclusive pricing to match your WooCommerce setting
- Seeds default EU VAT settings using your store's base country as the home country
- Creates FluentCart's default tax classes (Standard, Reduced, Zero)
- Generates FluentCart tax rates for every country present in your WooCommerce tax rates table, plus your store's base country
- Builds a map from each WooCommerce tax rate ID to the resolved FluentCart rate, which the orders step uses so historical tax rows stay linked correctly

Not a 1:1 rate copy

FluentCart's tax model differs from WooCommerce's. The Migrator generates FluentCart's own rates for the relevant countries rather than copying every WooCommerce rate verbatim, and where several WooCommerce rates resolve to the same FluentCart rate on an order, their amounts are combined into one row with each source component retained in its metadata. Review your tax setup after migration to confirm it matches your jurisdictional requirements.
### Store settings ​

On the first page of the products step, WooCommerce store configuration is copied into FluentCart's store settings — but **only into fields you have left empty**. Nothing you have already configured is overwritten.

- Store name, address line 1 and 2, city, postcode
- Store country and state (parsed from WooCommerce's combined 
```
country:state
```

 option)
- Currency
- Currency position (WooCommerce's left/right becomes FluentCart's before/after)
- Decimal separator

---

## What is NOT migrated ​

Honesty about boundaries matters more than a longer feature list. The following items are deliberately out of scope.

### Shipping zones, methods, and rates ​

WooCommerce shipping zones, shipping classes, flat-rate and table-rate configurations, and any shipping extension's rules are not migrated. Historical shipping amounts on past orders come across intact, but your live shipping setup needs recreating under **FluentCart → Settings → Shipping**. The two models differ enough that an automated mapping would quietly produce wrong rates at checkout.

### Product tags and custom taxonomies ​

Only 
```
product_cat
```

 transfers. The 
```
product_tag
```

 taxonomy and any custom product taxonomies do not.

### Product gallery images ​

The featured image transfers. Additional gallery images are not migrated.

### Product reviews and ratings ​

WooCommerce stores reviews as WordPress comments on the product. They are not migrated, and average ratings and review counts are not carried over.

### Custom product and order metadata ​

Only known fields from WooCommerce core, WooCommerce Subscriptions, and Product Bundles are parsed. Custom meta written by other third-party extensions is not preserved. If you have important custom data on products or orders, export it separately before migrating.

### Checkout-draft orders ​

Orders left in WooCommerce's 
```
checkout-draft
```

 status — abandoned block-checkout attempts — are filtered out. Every other status migrates.

### Payment gateway credentials and saved cards beyond Stripe ​

Transaction records and gateway transaction IDs come across, so history is intact. **Gateway API keys never transfer.** Reconnect Stripe, PayPal, and any other gateway in FluentCart after migration using the same accounts you used in WooCommerce.

Saved payment methods are only carried forward for Stripe subscriptions holding a modern PaymentMethod token. See [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) for the exact rule and what happens to everything else.

### Email templates ​

WooCommerce's email settings and template customizations are not migrated. FluentCart has its own notification system with its own templates. Review and customize them under **FluentCart → Settings → Email Configuration**.

### Pages, shortcodes, and blocks ​

Your Cart, Checkout, and My Account pages remain WooCommerce pages. Shortcodes and blocks on your content are not rewritten. Replace them with FluentCart's equivalents as part of the cutover.

### Refund reason text ​

Refund amounts and dates transfer as separate refund transactions. WooCommerce's refund reason text is not extracted into a dedicated field.

### Download history logs ​

WooCommerce's download permissions and download logs are not migrated. The downloadable files themselves are.

### Dry-run mode ​

All operations are live. There is no preview mode. To rehearse a migration safely, use [Developer Mode](/guide/migration/woocommerce/woocommerce-developer-mode) on a staging environment, run the full migration, review the result, then reset and run again.

---

## At a glance ​

| Entity | Migrated? | Notes |
| --- | --- | --- |
| Products (simple, variable, subscription, grouped, bundle) | ✅ | External products migrate as catalog-only |
| Product categories | ✅ | Full hierarchy, matched by slug |
| Product attributes and terms | ✅ | Including color and image swatches |
| Product variations | ✅ | Attribute terms preserved |
| Featured image | ✅ |  |
| Product gallery images | ❌ |  |
| Product tags / custom taxonomies | ❌ |  |
| Product reviews and ratings | ❌ |  |
| Downloadable files | ✅ | Local files copied into FluentCart storage |
| Stock levels and backorders | ✅ | Parent stock flag rolled up from variations |
| SKUs | ✅ | De-duplicated on collision |
| Customers (with orders) | ✅ | Deduplicated by email |
| Customers (without orders) | ✅ | Via the Missing Customers step |
| Customer addresses | ✅ | Billing and shipping |
| Orders (all statuses) | ✅ | checkout-draft excluded |
| Order line items, tax, shipping, fees, discounts | ✅ | Totals reconciled to the WooCommerce total |
| Transactions | ✅ | Gateway transaction IDs preserved |
| Refunds | ✅ | Per-refund records; reason text not extracted |
| Order notes | ✅ | As activity entries |
| Subscriptions | ✅ | Requires WooCommerce Subscriptions |
| Subscription renewal history | ✅ | Linked back to the subscription |
| Saved cards for renewals | ⚠️ | Stripe PaymentMethod tokens only |
| Coupons | ✅ | Product and category restrictions remapped |
| Tax configuration and rates | ✅ | Only if enabled in WooCommerce |
| Store settings | ✅ | Only fills empty FluentCart fields |
| Shipping zones, methods, rates | ❌ | Recreate in FluentCart |
| Payment gateway credentials | ❌ | Reconnect in FluentCart |
| Email templates | ❌ | Set up fresh in FluentCart |
| Custom meta from third-party extensions | ❌ | Only known fields parsed |
| WooCommerce pages, shortcodes, blocks | ❌ | Replace during cutover |

---

## Next steps ​

Now that you know exactly what's in scope, head to the [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) to run your first migration — or, if you sell recurring products, read [Subscriptions & Renewals](/guide/migration/woocommerce/subscription-renewals) first.

---

