# Upgrade To Pro Message Appears Despite Having A Valid License

*Category from The Events Calendar documentation*

---

## The Events Calendar “Upgrade to Pro” Message Appears Despite Having a Valid License

**Source:** [https://docs.nexcess.com/software/the-events-calendar/upgrade-to-pro-message-appears-despite-having-a-valid-license/](https://docs.nexcess.com/software/the-events-calendar/upgrade-to-pro-message-appears-despite-having-a-valid-license/)

You may see an **“Upgrade to Pro”** message in your WP dashboard, even though you already have**Events Calendar Pro** installed and activated. This typically indicates a licensing connection issue between your site and your Events Calendar  Pro account.

## Symptoms

- You see an “Upgrade to Pro” prompt in WP dashboard.
- Pro features such as recurring events are unavailable.
- You already have a valid **Events Calendar Pro**license.

## Pre-Checks

Before troubleshooting the license, confirm the following:

1. **The Events Calendar Pro Plugin is Installed and Active**
Go to **Plugins → Installed Plugins** and ensure that
- **The Events Calendar** and **The Events Calendar Pro** are both **active**.
2. **Version Parity**
Make sure both plugins are running **compatible versions**.
- Example: The Events Calendar 6.x → The Events Calendar Pro 6.x.
You can update both from **Dashboard → Updates**.
3. **Clear Caches**
- Clear any **server**, **plugin**, and **browser** caches before testing again.
- If using a caching plugin (like WP Rocket or LiteSpeed Cache), purge caches and reload the page.

## Fix: Reconnect the License

If the above checks are correct, your license connection may need to be refreshed.

1. Go to **Events → Settings → Licenses**
2. **Remove** the current Events Calendar Pro license key and click **Save Changes**.
3. Log in to your account at [theeventscalendar.com](https://theeventscalendar.com/).
4. Navigate to your **Downloads & Licenses** page.
5. Find your **Events Calendar Pro license**, click **Show Sites**, and remove your website from the list.
6. Go back to your WordPress dashboard → **Events → Settings → Licenses**.
7. Re-enter your license key and click **Save Changes** again.

This refreshes the connection and should restore your Pro functionality.

### Verify the Fix

Once your license reconnects successfully, you should be able to use Pro features such as [recurring events](https://docs.nexcess.com/software/the-events-calendar/recurring-events/).

## Still Seeing the Message?

If the issue persists:

- Confirm your license hasn’t expired under **My Account → Downloads & Licenses**
- Temporarily switch to a default theme (like Twenty Twenty-Five) and deactivate other plugins to rule out conflicts
- Contact [our support](https://theeventscalendar.com/support/) with your [system information](https://docs.nexcess.com/software/the-events-calendar/sharing-your-system-information/) from **Events → Help**

---

