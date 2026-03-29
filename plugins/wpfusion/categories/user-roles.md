# User Roles

*Category from WP Fusion documentation*

---

## Changelog

**Source:** [https://wpfusion.com/documentation/user-roles/user-roles-changelog/](https://wpfusion.com/documentation/user-roles/user-roles-changelog/)

#### #1.2.2 - 4/29/2025

- ✨ New Added multi-role support for User Role Editor
- 🔧 Fixed Fixed auto-enrollments in the logs showing the tag ID instead of tag name with CRMs that use tag IDs
- 🔧 Fixed Fixed role changes not applying tags if the user's tags had already been modified in the same request

#### #1.2.1 - 10/3/2022

- 🔧 Fixed Fixed tags not being applied to new users when the role was set before WP Fusion had synced the contact to the CRM

#### #1.2.0 - 8/30/2022

- Refactored and released as an official WP Fusion addon

#### #1.1.2 - 10/25/2021

- Updated to run on set_user_role and user_register

#### #1.1.1 - 10/8/2020

- Updated for WP Fusion 3.35 compatibility

#### #1.1.0 - 8/30/2020

- ✨ New Added "Apply Tags" setting
- ⚡️ Improved When a role is removed, the linked tag will also be removed

#### #1.0.2 - 4/28/2020

- 🔧 Fixed Fixed error when settings were empty

#### #1.0.1 - 11/10/2019

- Updated so roles can also be removed

#### #1.0 - 9/20/2019

- Initial release

---

## User Roles Overview

**Source:** [https://wpfusion.com/documentation/user-roles/user-roles-overview/](https://wpfusion.com/documentation/user-roles/user-roles-overview/)

### Overview

The WP Fusion User Roles addon (available to Plus and Professional license holders) allows for linking CRM tags with user roles on your site, as well as applying tags when user roles are changed.

### Setup

The setup is configured via Settings » WP Fusion Roles in the admin.

For each role on your site, you have two options:

1. Apply tags: You can select one or more tags in your CRM that will be applied whenever a user is given this role. These tags will not be automatically removed later.
2. Link with tag: You can select a single tag to become “linked” with the role. When the tag is applied, the role will be set. When the tag is removed, the role will be removed. Likewise, if the user is given the role, the tag will be applied— and if the user is removed from the role, the tag will be removed.

#### Multi-role plugins

By default, a role linked to a tag will be “set” for the user— i.e. it will replace any other roles the user has.

If you are using either HM Multiple Roles or Members, these plugins give you a visual interface for managing multiple roles per user.

If either of these plugins is active and a linked tag is applied, WP Fusion will instead “add” the linked role (i.e. append it to the existing roles). It will not replace the user’s existing roles.

---

