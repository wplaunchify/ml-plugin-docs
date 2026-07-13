# Event And Tickets Mcp

*Category from The Events Calendar documentation*

---

## Automating Events and Tickets with AI and MCP

**Source:** [https://docs.nexcess.com/software/the-events-calendar/event-and-tickets-mcp/](https://docs.nexcess.com/software/the-events-calendar/event-and-tickets-mcp/)

*Supercharge your WordPress event management with AI-powered automation tools*

Managing events and tickets on your WordPress site just got a whole lot easier for power users of AI tools. The Events Calendar MCP (Model Context Protocol) Server brings the power of AI automation to your event management workflow, allowing you to create, update, and manage events, venues, organizers, and tickets through simple conversational commands.

> This article is aimed at folks who use AI directly inside their editor—think Cursor, VS Code (Copilot Chat), Claude Desktop, Windsurf, and more. Using The Events Calendar MCP Server, you can stay in your coding flow and use natural language to create, update, and organize events, venues, organizers, and tickets—without bouncing through WordPress admin screens.

## What is the MCP Server?

The MCP Server is a bridge between your WordPress site running The Events Calendar and AI assistants like Claude, Cursor, or VS Code Copilot. It allows you to manage your events using natural language instead of clicking through forms and menus.

Imagine saying “*Create 7 events for a yoga class Tuesday starting at 1 PM with a 1h duration each, with a price of 10 dollars*” and having all those events created automatically. That’s the power of the MCP Server.

## Key Features

- **Natural Language Commands**: Tell your AI assistant what you want in plain English
- **Bulk Operations**: Create multiple events, venues, or tickets in seconds
- **Smart Updates**: Update existing events without navigating complex forms
- **Data Migration**: Import events from spreadsheets or other sources effortlessly
- **Full CRUD Support**: Create, Read, Update, and Delete all post types

## Supported Post Types

#### 📅 Events

Create and manage all your events with full control over dates, times, descriptions, and settings.

#### 📍 Venues

Manage event locations with addresses, contact info, and custom details.

#### 👥 Organizers

Keep track of event organizers with contact details and social links.

#### 🎫 Tickets

Create RSVP and paid tickets for your events with pricing and capacity settings.

## Real-World Use Cases

#### 🏢 For Event Venues

“Create all our concert events for next month from this spreadsheet” – Import dozens of events in seconds instead of hours of manual entry.

#### 🎨 For Community Centers

“For the events happening this week add the Organizers named Peter and Matt” – Ensure new volunteers show as a organizers.

#### 🎭 For Theaters

“Update all December show times to start 30 minutes earlier” – Bulk update events without editing each one individually.

#### 🏃 For Sports Clubs

“Create tournament brackets with venues and times from our planning document” – Complex event structures created conversationally.

## Getting Started

#### Step 1: Create a WordPress Application Password

1. Log in to your WordPress admin dashboard
2. Navigate to **Users → Your Profile**
3. Scroll down to **“Application Passwords”**
4. Enter a name like “MCP Server”
5. Click **“Add New Application Password”**
6. Copy the generated password (spaces are okay!)

#### Step 2: Choose Your AI Assistant

The MCP Server works with many popular AI coding assistants. Pick the one you prefer:

- **Cursor** – Popular AI-powered code editor
- **Claude Desktop** – Anthropic’s desktop app
- **VS Code** – With GitHub Copilot
- **Windsurf** – The AI IDE
- **30+ other clients** – Including Cline, Zed, and more

#### Step 3: Install Requirements

Before using the MCP Server, ensure you have Node.js installed on your computer:

- **Node.js version 20 or higher** – Download from [nodejs.org](https://nodejs.org)
- **The Events Calendar plugin** – Active on your WordPress site
- **WordPress 6.5+** – With REST API enabled (enabled by default)

To check if Node.js is installed, open your terminal or command prompt and run:

```
node --version
```

You should see a version number like 
```
v20.19.1
```

 or higher. If not, [download and install Node.js first](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

#### Step 4: Quick Installation

For most AI assistants, you can get started immediately without any installation, below is an example for Cursor.

Go to: 
```
Settings
```

 → 
```
Cursor Settings
```

 → 
```
Tools & Integrations
```

 → 
```
MCP Tools
```

 → 
```
Add Custom MCP
```

Pasting the following configuration into your Cursor 
```
~/.cursor/mcp.json
```

 file is the recommended approach. You may also install in a specific project by creating 
```
.cursor/mcp.json
```

 in your project folder. See [Cursor MCP docs](https://docs.cursor.com/context/model-context-protocol) for more info.

```
{
  "mcpServers": {
    "tec-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@the-events-calendar/mcp-server",
        "--url",
        "https://your-wordpress-site.com",
        "--username",
        "your-username"
      ],
      "env": {
        "WP_APP_PASSWORD": "your-application-password"
      }
    }
  }
}
```

Replace the URL, username, and password with your actual WordPress credentials.

[Installation Guide for other Editors](https://github.com/the-events-calendar/mcp-server#installation)

## Example Commands You Can Use

Once connected, you can use natural language to manage your events:

> “Create a new event called ‘Summer Music Festival’ on July 15th, 2025 from 2 PM to 10 PM at Central Park”

> “Show me all events happening next month”

> “Update the yoga class venue to the Community Center”

> “Create 10 RSVP tickets for the workshop on Saturday”

> “Delete all draft events from last year”

## Advanced Capabilities

#### 🔄 Bulk Operations

Create multiple events at once from CSV data, spreadsheets, or lists. Perfect for importing event schedules or migrating from other platforms.

#### 🔗 Linked Relationships

Automatically link events to venues and organizers. Create new venues on the fly while creating events.

#### 🔍 Smart Search

Find events using natural language: “Show me all free outdoor events in June” or “List workshops with available tickets”.

## Perfect For…

- Event venues
- Conference organizers
- Music festivals
- Theater companies
- Sports leagues

- Community centers
- Educational institutions
- Fitness studios
- Churches & religious organizations
- Non-profit organizations

## Security, Privacy, and Compliance

- ✅ **Secure Authentication**: Uses WordPress Application Passwords
- ✅ **Permission-Based**: Respects WordPress user capabilities
- ✅ **Local Processing**: Your data never leaves your site
- ✅ **SSL Support**: Works with secure HTTPS connections
- ✅ **No Third-Party Storage**: Direct connection to your WordPress

#### Can The Events Calendar, Liquid Web, or StellarWP see my prompts or data?

No. The Events Calendar, Liquid Web, and StellarWP never have access to your prompts, responses, or data. Who sees your data depends on a few things:

- The MCP server you’re using (local vs. hosted)
The LLM model connected (OpenAI, Claude, Mistral, etc.)
- Your site’s hosting environment and configuration
- Angie (hosted MCP) → Prompts flow through Elementor’s hosted MCP infrastructure, not The Events Calendar
- External tools (local server) → Data stays on your machine except where your LLM provider requires API access.

#### How is personally identifiable information (PII) protected?

PII has the same protection as your site’s REST API connections. Again: The Events Calendar, StellarWP, and Liquid Web never see your PII.

#### Do I need a WordPress application password?

Only for external MCP servers (like Cursor, Claude, an Agentic AI tool, or a custom MCP).

- External tools → Application password required
- Angie → No password required (hosted server handles authentication)

#### Can I connect multiple MCPs to the same LLM?

Yes. You can reuse the same application password for multiple MCP servers. Examples:

- The Events Calendar MCP
- GiveWP MCP
- LearnDash MCP

Each MCP connects independently but can use the same application password.

## General FAQs

#### Is this compatible with my version of The Events Calendar?

Yes! The MCP Server works with The Events Calendar version 6.15+ and Event Tickets 5.26+ and have the REST API active.

#### Do I need coding knowledge?

No coding required! Once set up, you interact using natural language. The initial setup is just copying and pasting a configuration.

#### Can multiple team members use this?

Yes! Each team member can set up their own connection using their WordPress credentials. All actions respect WordPress user permissions.

#### Is this an official tool from The Events Calendar?

This is an open-source tool created by The Events Calendar team to help our users be more productive with AI automation.

---

*The Events Calendar MCP Server – Where AI meets event management. Start automating your workflow today!*

## Get Started Today

Ready to transform how you manage events? The MCP Server is free, open-source, and ready to use. Visit our GitHub repository for detailed installation instructions for your preferred AI assistant.

[View on GitHub](https://github.com/the-events-calendar/mcp-server)

[Installation Guide](https://github.com/the-events-calendar/mcp-server#installation)

---

