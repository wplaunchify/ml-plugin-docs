# Getting Started With Learndash Mcp Server

*Category from LearnDash documentation*

---

## LearnDash MCP FAQ

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-mcp-faq/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/learndash-mcp-faq/)

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

**Source:** [https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/mcp-setup/](https://learndash.com/support/kb/learndash-mcp-server/getting-started-with-learndash-mcp-server/mcp-setup/)

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

