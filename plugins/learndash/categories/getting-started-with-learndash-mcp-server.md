# Getting Started With Learndash Mcp Server

*Category from LearnDash documentation*

---

## How to Use Cursor with LearnDash

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/how-to-use-cursor-with-learndash/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/how-to-use-cursor-with-learndash/)

## Overview

**Cursor** is an AI-powered coding environment that also works as a powerful interface for managing LearnDash with the **Model Context Protocol (MCP)**. Unlike Angie, which has a hosted MCP server built-in, Cursor requires you to set up an **external MCP server** on your local machine.

This means Cursor is ideal for:

- Users who want to connect to advanced LLMs (Claude, GPT-4, Mistral, etc.)
- Organizations that require privacy and local control
- Developers building custom LearnDash workflows

Note: Connecting Cursor to LearnDash requires creating a **WordPress application password**. This allows the MCP server to authenticate securely with your site.

## Before You Begin

Make sure you have the following:

- A LearnDash site with administrator access
- WordPress 5.6 or higher (for application passwords)
- A **WordPress application password** generated for MCP (see [Creating WordPress Application Passwords for MCP])
- Cursor installed on your machine
- A backup of your WordPress site

Always **back up your site** before using AI agents to make changes. LLMs execute actions step by step, but vague prompts or errors can lead to unintended changes.

## Step 1: Install Cursor

1. Download the latest version from cursor.so.
2. Install it following the instructions for your operating system.
3. Open Cursor and log in or create an account.

Cursor looks like a coding editor, but you can interact with it using natural language prompts.

## Step 2: Set Up a Local MCP Server

Use Cursor’s guided prompts to create a local MCP server for LearnDash.

**Prompt Example:**

“I want to set up a local MCP server for my LearnDash site at [your-site-url]. Help me install dependencies, generate an application password, and connect to the LearnDash REST API.”

Cursor will guide you through:

- Installing the necessary packages
- Creating a local MCP server
- Using your WordPress application password to authenticate
- Confirming the connection

## Step 3: Test the Connection

Once setup is complete, test the MCP server connection:

**Prompt Example:**

“Check if the LearnDash MCP server is connected. Retrieve my list of active courses.”

If the server responds with a course list, you’re ready to proceed.

## Step 4: Start Prompting

Cursor can now manage LearnDash using natural language prompts. For best results, keep prompts clear and limited to 3–5 actions.

**Examples:**

**Create Courses**

“Create three courses titled ‘Physics 1,’ ‘Physics 2,’ and ‘Physics 3.’ Set their start dates to February 1, 2026, and their end dates to May 30, 2026. Set access mode to closed.”

**Add a Lesson**

“In the course ‘Intro to Botany,’ create a lesson called ‘Photosynthesis Basics’ and save it as a draft.”

**Enroll Students from a CSV**

“Parse this CSV file and enroll all users into the course ‘Safety Training 2025.’ Use the ‘email’ column to match existing WordPress users.”

## Prompting Best Practices

Cursor supports advanced models, which makes it powerful—but prompts must be carefully written.

**Guidelines:**

- Limit each prompt to **3–5 operations******
- Use **exact course names and field values******
- Break complex tasks into smaller steps
- Always specify draft vs. published when creating content
- Use precise dates instead of relative terms like “next semester”

For tested prompt templates, see the [LearnDash AI Prompt Library](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-ai-prompt-library/).

## Troubleshooting Cursor MCP Setup

If you run into errors:

- **401/403 errors** → Regenerate your application password and confirm your username.
- **“Cannot connect”** → Restart the MCP server and check your site URL.
- **Prompt runs but nothing changes** → Rephrase the prompt with exact field names.
- **Endpoint not found** → Some requests may require the Learndash-Experimental-Rest-Api header.

For more, see [Troubleshooting Common MCP Errors](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/troubleshooting-common-mcp-errors/).

## Privacy and Security

With Cursor:

- The MCP server runs locally on your machine.
- LearnDash never sees your prompts, responses, or data.
- Privacy depends on the LLM you connect (e.g., OpenAI, Anthropic, Ollama).

For the highest privacy, pair Cursor with a local open-source model such as Ollama.

## Summary

Cursor provides advanced flexibility for LearnDash users who want to run their own MCP server and connect to powerful AI models. With proper setup and structured prompts, Cursor can automate grading, manage enrollments from CSV files, and build courses from existing materials—all while giving you complete control over privacy and data flow.

---

## LearnDash + Angie

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-angie/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-angie/)

## What Is Angie?

**Angie by Elementor** is a built-in AI assistant that helps site owners manage and create content. For LearnDash users, Angie comes with a **hosted MCP client**, which means it can interact with LearnDash through the REST API without any technical setup.

Angie offers LearnDash users the easiest entry point into MCP-powered AI. With its hosted server, no setup requirements, and built-in Elementor integration, Angie is perfect for educators and site owners who want to manage LearnDash with AI, without worrying about technical steps.

## Why Use Angie with LearnDash?

Angie is designed for non-technical users who want to get started quickly. It allows LearnDash users to:

- Create and organize new courses
- Update course settings like start dates, access mode, or pricing
- Assign users to groups or enroll them in courses
- Suggest course structures or lesson layouts based on prompts
- Add tags, categories, and other organizational features

Because Angie is hosted by Elementor, the connection is seamless. Users simply enable Angie, connect LearnDash, and start prompting.

## Key Benefits of Using Angie

- **No setup required** – The hosted AI agent is already included.
- **No application password needed** – Authentication is handled automatically.
- **Elementor integration** – Works natively in sites already using Elementor.
- **Beginner-friendly** – Designed for natural language use without technical steps.
- **Safe defaults** – Angie follows the LearnDash API and executes one action at a time.

Note: Even though Angie can act on multiple courses or students, all “bulk” actions are performed one by one. For example, enrolling 10 students means Angie processes 10 separate enrollment actions.

## How to Connect Angie to LearnDash

1. **Ensure LearnDash is installed and active** on your WordPress site.
2. **Enable Angie** through the Elementor dashboard or plugin settings.
3. Angie will automatically detect LearnDash and begin offering LearnDash-aware suggestions.
4. Start prompting Angie with natural language requests.

There is no need to generate an application password for Angie’s connection.

## What You Can Do with Angie

Here are examples of prompts that work well with Angie:

**Create a New Course**

“Create a new LearnDash course called ‘Science Explorers.’ Set it to free access and make it start on October 1, 2025, and end on December 15, 2025.”

**Add a Lesson with an Assignment**

“Add a new lesson called ‘Final Project’ at the end of the course ‘Science Explorers.’ Enable assignments worth 50 points.”

**Update Course Enrollment Settings**

“Change all courses with access mode ‘buy now’ to access mode ‘closed’ and set their price to unavailable.”

**Organize Content**

“Tag all courses related to AI with the tag ‘Artificial Intelligence’ and assign them to the category ‘Emerging Tech.’”

## Privacy and Data Access

When using Angie:

- Prompts flow through **Elementor’s hosted MCP infrastructure,**under Angie’s [Terms and Conditions](https://elementor.com/terms/angie-terms-conditions/).
- LearnDash, Liquid Web, and StellarWP do **not** see any prompts, responses, or data.
- Angie never stores prompts inside LearnDash itself.

For maximum privacy, some users may prefer a **local MCP server** (for example, using Cursor with a local model). Angie, however, is optimized for accessibility and convenience.

## Developer and Power User Notes

- Angie’s hosted AI agent cannot be customized.
- Developers who need full control (e.g., local-only models, advanced prompt chaining, or integrations with custom endpoints) should use Cursor with an external MCP server.
- For full technical details on MCP endpoints and developer options, see the[LearnDash MCP Readme](https://go.learndash.com/mcpreadme).

---

## Prompting AI Agents for LearnDash

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/prompting-ai-agents-for-learndash/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/prompting-ai-agents-for-learndash/)

## Overview

When using the **Model Context Protocol (MCP)** with LearnDash, the quality of your prompts determines the accuracy and safety of the results. Whether working with Angie, Cursor, or another tool, clear, structured prompts ensure that AI agents act on your LearnDash site in predictable ways.

This guide explains best practices for prompting, highlights common pitfalls, and shows how different models may respond differently to the same request.

## Why Prompting Matters

The MCP allows AI tools to create and manage LearnDash content by sending actions through the REST API. However, the AI only acts on what is written in the prompt.

**Good prompts = accurate results.****** **Vague prompts = errors or unexpected actions.**

## Best Practices for Prompting

Based on tested prompts, effective LearnDash MCP prompts share common traits. Use these principles to improve outcomes:

1. **Limit Scope******
- Keep prompts to **3–5 operations maximum**.
- Break complex workflows into smaller steps.
2. **Use Exact Field Names and Values******
- Match the field names that LearnDash uses (e.g., “Start Date,” “Access Mode”).
- Avoid vague descriptions like “make it not purchasable.”
3. **Specify Draft vs. Published******
- Always state whether new content should be saved as a draft or published.
4. Example:

“Create a lesson called ‘Introduction’ in the course ‘Physics 101.’ Save it as a draft.”
5. **Use Clear Dates and Times******
- Provide exact dates rather than relative terms.
6. Example:

“Set the course start date to September 15, 2025, and the end date to December 20, 2025.”
7. **Reference Relationships Explicitly******
- LearnDash content follows a hierarchy: Course → Lesson → Topic → Quiz.
- Make sure prompts respect this structure.
8. Example:

“In the course ‘Anatomy 101,’ add a lesson called ‘Muscle Groups’ with a topic called ‘Upper Body Basics.’”
9. **Include Verification or Fallback Instructions (Optional)******
- For important actions, ask the AI to confirm or provide a fallback.
10. Example:

“Enroll students from this CSV into the course ‘Botany Basics.’ If any users don’t exist, return their names instead of failing.”

## Prompt Examples

### Course Management

“Update the course ‘Semester 3’ start date to November 5, 2025, and the end date to February 20, 2026.”

### Content Management

“Create a new lesson called ‘Final Project’ at the end of the course ‘Chemistry Basics.’ Enable assignment submission worth 100 points. Save as draft.”

### Enrollment

“Enroll Maria Lopez, Taylor Smith, and Jordan Lee in the course ‘Botany Basics.’”

### Group Management

“Create a group called ‘Fall 2025 Cohort’ and assign all courses tagged ‘Science’ to it.”

### Content Organization

“Add a LearnDash course tag called ‘AI.’ Assign this tag to all courses with titles that include ‘MCP’ or ‘LLM.’”

### Content Creation

“Use this transcript to create a LearnDash course titled ‘World History Lecture Series.’ Break it into 10 lessons with 2 topics each.”

## Model Differences

Different models respond differently to the same prompt:

- **Angie******
- Optimized for beginner-friendly tasks
- Safer defaults
- Requires clear, simple prompts
- **Cursor with GPT-4 or Claude******
- Handles more complex or multi-step prompts
- Better at parsing external documents (e.g., CSVs, transcripts)
- **Open-source models (Ollama, Mistral, etc.)******
- Require more precise prompts
- May not perform as well on complex tasks
- Strong option for privacy-focused use cases

## Common Pitfalls

Avoid these common mistakes when prompting with MCP:

- Including more than **5 operations** in a single request
- Using vague language (e.g., “soon,” “later,” “final stuff”)
- Ignoring LearnDash’s content hierarchy
- Using relative dates like “next semester” instead of exact dates
- Forgetting to specify draft vs. published

## Summary

Effective prompting is the foundation of using MCP with LearnDash. Keep prompts small, precise, and structured. Always reference the correct LearnDash field names, respect content hierarchy, and specify draft/published status.

---

## LearnDash AI Prompt Library

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-ai-prompt-library/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-ai-prompt-library/)

## Overview

This library contains **tested prompt templates** that work with the **Model Context Protocol (MCP)**. These examples are designed to give LearnDash users a reliable starting point when working with AI tools such as Angie or Cursor.

**TIP**:

- Start with shorter prompts and expand as needed. Testing small changes first ensures predictable results from AI tools.
- For best results, note whether the AI should create, update, or summarize content before running the prompt. Clear intent improves accuracy.

## Course Management

**Update Course Dates**

“Update the course ‘Semester 3’ to start on November 5, 2025, and end on February 20, 2026.”

**Create Multiple Courses**

“Create three open courses with the titles ‘Rocks (Semester 1)’, ‘Rocks (Semester 2)’, and ‘Rocks (Semester 3)’. Set their start dates to January 2026, February 2026, and March 2026.”

**Change Enrollment Settings**

“Change all courses with access mode ‘buy now’ to access mode ‘closed.’ Set their course price to unavailable.”

## Content Management

**Add a Required Virtual Lesson**

“In the course ‘Rocks (Semester 1)’, add a new lesson that requires attendance at a virtual session. On the lesson page, insert this link in a WordPress text block: https://learndash.com/”

**Create a Lesson with Assignment and Content**

“In the course ‘Anza Rock,’ create a lesson called ‘Final Anza Rocks Assignment.’ Enable assignment submission worth 100 points. Then locate the PDF file with a title containing ‘anza rocks’ in my media library. Add its content as blocks to the assignment lesson page.”

## User and Group Management

**Enroll Specific Students**

“Enroll Student 1, Student 2, Student 3, Student 4, and Student 5 in the course ‘Anza Rock.’”

**Enroll from a CSV File**

“Parse this CSV file and enroll all users into the course ‘Safety Training 2025.’ Match existing WordPress users by the email column. Return the names of any users who cannot be enrolled.”

**Create a Group and Assign Courses**

“Create a new group called ‘Rock Crazies’ and assign the following courses to it: ‘Rocks (Semester 1)’, ‘Rocks (Semester 2)’, and ‘Rocks (Semester 3).’”

## Content Organization

**Tag Courses with AI**

“Create a LearnDash course tag called ‘AI.’ Assign this tag to all courses with titles that mention MCPs or LLMs.”

**Suggest and Add Quizzes**

“Analyze the course ‘Anza Rock’ and suggest where quizzes should be placed. Include a final quiz. Then create quiz posts at those locations with descriptions of the intended quizzes.”

## Content Creation from External Sources

**Convert an Article into a Course**

“Use the content from this article to create a LearnDash course. Include the images from the article in the course.
https://givewp.com/content-marketing-project-management-nonprofits/”

**Convert a Transcript into a Course**

“Use this transcript to create a course titled ‘World History Lecture Series.’ Break it into 10 lessons with 2 topics each. Save all lessons as drafts.”

**Create a Developer Course**

“Create a new LearnDash course called ‘Yoast Advanced Development.’ The audience is experienced developers familiar with PHP and WordPress hooks. Break the course into simple lessons and topics at a seventh-grade reading level. Save as draft.”

## Best Practices Reflected in Prompts

All prompts follow these patterns:

- **Structure**: Sequential steps, limited to 3–5 operations.
- **Clarity**: Exact field names and values specified.
- **Status**: Draft vs. published is clearly stated.
- **Context**: Specific courses, files, or sources are referenced.
- **Hierarchy**: Course → Lesson → Topic order is respected.

## Common Pitfalls to Avoid

- Too many operations (>5) in a single prompt
- Vague or incomplete instructions
- Ignoring course hierarchy
- Using relative dates (“next semester”) instead of fixed ones
- Forgetting to specify draft vs. published

## Summary

This library provides a foundation of tested prompts for LearnDash MCP users. Adapt these examples for your own site, and always keep prompts small, specific, and structured.

For additional guidance on writing your own prompts, see [Prompting AI Agents for LearnDash](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/prompting-ai-agents-for-learndash/).

---

## Troubleshooting Common MCP Errors

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/troubleshooting-common-mcp-errors/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/troubleshooting-common-mcp-errors/)

## Overview

When using the **Model Context Protocol (MCP)** with LearnDash, it’s possible to run into errors—especially during first-time setup or when prompting an AI tool like **Cursor** or **Angie**. This guide covers the most common issues and how to fix them.

Most problems are caused by one of the following:

- Authentication issues (e.g., invalid application password)
- Misconfigured prompts
- Server setup problems
- REST API access problems

This guide is intended for both beginner users and site administrators.

## Common Errors and How to Fix Them

### 1. “401 Unauthorized” or “403 Forbidden”

**What it means:****** The MCP server couldn’t authenticate with your site.

**Possible causes:**

- The **application password** is incorrect or expired
- The username is incorrect
- The user account doesn’t have administrator permissions
- WordPress REST API is disabled or restricted

**How to fix it:**

- Regenerate your application password (see [Creating WordPress Application Passwords for MCP])
- Confirm you’re using the **correct username** (case-sensitive)
- Make sure your WordPress user has **administrator access******
- Check for security plugins or firewalls that might block REST API requests

### 2. “Cannot connect to the LearnDash MCP server” (in Cursor)

**What it means:****** Cursor can’t reach or communicate with the local MCP server or your site.

**Possible causes:**

- Local server not started or crashed
- Incorrect site URL
- MCP dependencies not installed
- Firewall or network restrictions

**How to fix it:**

- Restart the local MCP server inside Cursor
- Verify that your site URL is correct and publicly accessible (if required)
- If prompted, let Cursor install any missing dependencies
- Check for VPN or firewall settings that might be blocking the connection

### 3. Prompt works, but nothing changes in LearnDash

**What it means:****** The AI interpreted the prompt but didn’t take the intended action.

**Possible causes:**

- The prompt was too vague or unclear
- The content already exists and was skipped
- The LLM misinterpreted field names or relationships

**How to fix it:**

- Rephrase the prompt using **specific course names**, field values, and action verbs
- Limit each prompt to **3–5 clear actions******
- Use exact names from LearnDash (e.g., “Start Date,” “Access Mode,” etc.)
- Specify whether content should be a **draft** or **published******

For tested prompt templates, see the [LearnDash AI Prompt Library](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-ai-prompt-library/).

### 4. “Endpoint not found” or “404 error”

**What it means:****** The MCP server is trying to use an API endpoint that your site doesn’t recognize.

**Possible causes:**

- LearnDash REST API is not enabled
- The plugin version is outdated
- The endpoint requires a special API header

**How to fix it:**

- Make sure you are running the latest version of LearnDash
- Confirm that the MCP is pointing to a site with **REST API v2** support

For some endpoints, add the experimental header:

Learndash-Experimental-Rest-Api: true

- (Developers can refer to the[LearnDash MCP Readme](https://go.learndash.com/mcpreadme) for header usage.)

### 5. The MCP Server starts but fails mid-prompt (Cursor)

**What it means:****** The server launched successfully, but an error occurred during processing.

**Possible causes:**

- The local MCP server crashed or ran out of resources
- The prompt was too long or overly complex
- AI tool lost access to site credentials

**How to fix it:**

- Break the prompt into **smaller, simpler tasks******
- Restart the MCP server and Cursor session
- Re-enter the application password if asked
- Monitor your system resources if running large operations locally

## General Troubleshooting Tips

- Always **start with a backup** before trying new prompts
- Use **specific, limited prompts** for safer execution
- If unsure, start with test data (test courses, lessons, or users)
- When in doubt, regenerate your application password and try again

## Still Not Working?

If none of the above solutions fix the issue:

- Confirm that you’re using the correct LearnDash API version
- Recheck plugin compatibility (LearnDash, WordPress, any security plugins)
- Try using a staging environment to isolate the problem
- Submit a support ticket if needed.

---

## Creating WordPress Application Passwords for MCP

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/creating-wordpress-application-passwords-for-mcp/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/creating-wordpress-application-passwords-for-mcp/)

## Overview

To connect LearnDash to an AI tool like **Cursor** using the **Model Context Protocol (MCP)**, a secure connection is required. WordPress provides this through **application passwords**, a safe way to let external tools access your site without sharing your main login.

This guide walks through how to generate and manage an application password from your WordPress dashboard.

Note: If you’re using something like Angie, then you don’t need to create an application password. Angie will connect to LearnDash for you.

## What Is an Application Password?

An **application password** is a unique access key that allows tools like MCP servers to connect to your WordPress site using your user account—without needing your main login credentials.

Application passwords are:

- **Secure** – You can revoke them at any time without affecting your normal login
- **One per tool** – Create a different password for each integration
- **Built into WordPress** – No plugin required (available since WordPress 5.6)

## When Is This Needed?

You’ll need an application password anytime you are:

- Connecting LearnDash to an **MCP server**
- Using **Cursor** to set up a local MCP server
- Working with any other tool that requires access to your LearnDash API via MCP

## Step-by-Step: How to Create an Application Password

1. **Log in to your WordPress dashboard** as an Administrator.
2. In the left-hand menu, go to **Users > Profile****** (If you’re managing multiple users, go to **Users > All Users**, then click your own profile.)
3. Scroll down to the section labeled **Application Passwords****** This is usually near the bottom of the page.
4. In the **New Application Password Name** field, enter a descriptive label.
Example:
LearnDash MCP – Cursor
5. Click **Add New Application Password******
6. A new password will appear on the screen (in plain text).
**Copy it immediately** and store it somewhere secure.
**You won’t be able to view it again later**.

## How to Use This Password

Once copied, paste the application password into your MCP-connected tool when prompted. For example:

- In **Cursor**, the AI assistant may ask for your password to finalize the server connection.
- In **Angie**, it may be used during the first-time authorization flow.

The password is used alongside your **WordPress username** to authenticate API requests from the MCP server.

## How to Revoke or Regenerate a Password

You can remove access at any time:

1. Return to **Users > Profile**
2. Scroll to **Application Passwords**
3. Locate the password by name
4. Click **Revoke**

To generate a new one, simply repeat the steps above.

## Best Practices

- **Use one password per integration** for better tracking
- **Revoke old or unused passwords** regularly
- **Never share application passwords publicly**
- Store passwords securely (password manager recommended)

## Troubleshooting

- **Don’t see the Application Passwords section?******Make sure your site is running WordPress 5.6 or later and that REST API authentication is enabled.
- **Error when connecting with an AI tool?******The application password may be incorrect, expired, or revoked. Try creating a new one.

For more troubleshooting steps, see [Troubleshooting Common MCP Errors](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/troubleshooting-common-mcp-errors/).

---

## LearnDash MCP FAQ

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-com-mcpdocs-faq/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-com-mcpdocs-faq/)

### Where should I give feedback on MCP?

- For **prompt outcomes** (what worked, what failed): Use the MCP feedback form →[https://go.learndash.com/promptfeedback](https://go.learndash.com/promptfeedback).
- For **bugs, feature requests, or general support**: Use standard LearnDash support channels.

### Can LearnDash, Liquid Web, or StellarWP see my prompts or data?

No. LearnDash, Liquid Web, and StellarWP never have access to your prompts, responses, or data.

Who sees your data depends on:
The **MCP server** you’re using (local vs. hosted)
The **Agentic AI Client** connected (Cursor, Claude, Mistral, etc.)

Your site’s hosting environment and configuration:
**Agentic** **AI Client (local server)** → Data stays on your machine except where your LLM provider requires API access.
**Angie (hosted MCP)** → Prompts flow through Elementor’s hosted MCP infrastructure, not LearnDash.

### How is personally identifiable information (PII) protected?

PII has the same protection as your site’s REST API connections. LearnDash never sees your PII. PII privacy depends on the AI Client you choose.

### Do I need a WordPress application password?

Only for **external MCP servers** (like Cursor or a custom MCP).

- **External AI Clients (like Cursor or Claude)** → Application password required
- **Angie** → No password required (hosted server handles authentication)

### Can I connect multiple tools to the same LLM?

Yes. You can reuse the same application password for multiple MCP-enabled tools.

Examples:

- The Events Calendar MCP
- GiveWP MCP
- LearnDash MCP

Each tool connects independently but can use the same application path.

### Does MCP replace other LearnDash AI features?

No. MCP is separate from Virtual Instructor and course generation features. Those continue to exist and will evolve independently.

### What about custom labels?

MCP automatically recognizes and uses your custom terminology (e.g., “Program” instead of “Course”) in prompts. No special configuration is required.

### Will anything break if I use MCP?

AI agents connected via MCP can take real actions on your site. While they usually follow prompts correctly, they can:
Misinterpret vague instructions
Delete or change the wrong content
**Always back up before prompting.** Take additional backups as you go so you can roll back without starting over.

### Will anything break when I update LearnDash?

Major version updates (like 5.0) can cause breaking changes to API responses and methods.
Best practices:
Back up before updating
Test in staging
Review the changelog for REST API updates if your site uses custom integrations

### Can I use ChatGPT with MCP?

Yes, but only through a local or external MCP server.

- **External AI Client** → Can connect to OpenAI’s ChatGPT via API with your own credentials
- **Angie** → Does not use ChatGPT; it uses its own hosted model

---

## Getting Started with the LearnDash Model Context Protocol (MCP)

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/mcp-overview-learndash-ai-setup/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/mcp-overview-learndash-ai-setup/)

## What Is the LearnDash MCP Server?

The **Model Context Protocol (MCP)** Server acts a bridge between LearnDash and AI-powered tools such as **Cursor** and **Elementor’s Angie**. The LearnDash MCP Server allows an AI agent to understand your LearnDash site and take actions through the LearnDash REST API, such as creating courses, enrolling users, or updating course settings, based on natural language prompts.

The LearnDash MCP Server works in two ways:

- **WordPress Hosted** (Such as Angie by Elementor): Uses a built-in **hosted MCP client**. No setup or application password is required.
- **Cursor (and similar tools)**: Requires setting up an **external MCP server** on a local machine. This type of connection uses a WordPress application password for secure access. Non-developer users can set this up using Cursor with natural language prompts.

**Important**: Before using the MCP server with AI tools on your site, always create a backup and take regular backups along the way. LLMs can make mistakes, some of which they are unable to change through the API/MCP connection.

## Why It Matters

MCP support enables LearnDash users to leverage AI to reduce repetitive work, save time, and generate content directly from existing resources. Depending on the LLM connected, users can:

- **Generate content**: Create courses from books, transcripts, or other files.
- **Automate grading**: Use rubrics to grade assignments quickly.
- **Simplify course management**: Change start/end dates or enrollment modes across multiple courses.
- **Organize content**: Add tags, categories, or prerequisites using a single prompt.
- **Manage users and groups**: Enroll or remove users, or create groups and assign courses.

For power users, MCP connections open the door to building custom workflows, integrations, and automations on top of the LearnDash REST API.

## Before You Begin: Back Up Your Site

AI tools can make real, and sometimes irreversible, changes to any LearnDash site. While prompts are executed step by step, mistakes can happen if instructions are vague or misunderstood.

To stay safe:

- **Create a full backup** before connecting any MCP-enabled tool.
- **Back up again** after major changes or during long sessions.
- Test first in a **staging environment** when possible.

## How an MCP Connection Works with WordPress

.kb-image10962_3e39ec-06 .kb-image-has-overlay:after{opacity:0.3;}
![A diagram shows the following information. Your website has REST APIs for WordPress core as well as your plugins, and themes, where supported(like LearnDash). In the middle, standardized Model Context Protocol (MCP) servers to open up the capabilities of the APIs on your website to your AI agents.](https://learndash.com/support/wp-content/uploads/2025/10/Intro_MCP-diagram.jpg)

- **Connection**: An MCP server connects to your site through the LearnDash REST API.
- **Authentication**:
- Hosted solutions, such as Angie, use automatic authentication (no application password required).
- External MCP servers (such as Cursor) require a WordPress **application password** for secure access.
- **Supported Actions**: MCP follows REST conventions (create, read, update, delete) for courses, lessons, topics, assignments, groups, and users.

## What the LearnDash MCP Server Can and Cannot Do

The LearnDash MCP server capabilities are directly related to the REST API. So, as the REST API in LearnDash updates and expands, the actions available to AI agents will also expand.

**What MCP Server Can Do**

- Create, read, update, or delete courses, lessons, and topics
- Enable and grade assignments
- Manage course and group enrollments
- Update course settings (pricing, access, start/end dates)
- Add tags, categories, and prerequisites

**What MCP Server Cannot Do**

- Create new WordPress users (read-only access to existing users only)
- Manage quizzes or quiz questions (read-only)
- Create or modify certificates
- Upload files or media
- Change themes, plugins, or site appearance
- Run database queries
- Perform bulk imports/exports (all actions are single-item)

While MCP connections to AI make tasks faster, **all “bulk” actions are still performed one by one through the REST API**. For example, enrolling 100 students means the AI performs 100 separate enrollment actions.

By default, the MCP server connection may reach the WordPress REST API and be able to perform some of the actions the LearnDash REST API is unable to perform.

**Real-World Examples**

- **Book to Course**: An author connects AI to their site and asks it to turn a manuscript into a LearnDash course.
- **Transcript Conversion**: A lecturer provides a transcript and prompts AI to generate a course with lessons and topics.
- **Grading with Rubrics**: An instructor supplies a rubric and asks the AI to grade pending assignments, approving them if scores meet the threshold.
- **Bulk Enrollment via CSV**: A course admin prompts AI to parse a CSV of users and enroll them into specific courses and groups.

**Privacy and Data Access**

- **LearnDash never sees prompts, responses, or data** sent through MCP servers.
- With **Cursor** (local server), data stays on your machine except where the LLM provider requires REST API access.
- With hosted tools, like **Angie**, prompts flow through Elementor’s hosted MCP infrastructure.

For maximum privacy, run a local MCP server and connect to an open-source model such as Ollama.

---

