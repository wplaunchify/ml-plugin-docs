# Groups

*Category from Redirection documentation*

---

## Groups

**Source:** [https://redirection.me/support/groups/](https://redirection.me/support/groups/)

Groups are used to organise your redirects into categories. They are particularly useful if you have a lot of redirects. They are also used to save redirects to an Apache 
```
.htaccess
```

 file or an Nginx rewrite rules file.

You can access the Groups page by clicking Groups from the top menu.

You will be presented with a table of existing groups and a form to add a new group:

#### Adding or Updating a Group

Enter the name of the group and pick the kind of redirects that will be added to this group:

![add_group](https://redirection.me/wp-content/uploads/2017/11/add_group-1024x247.png)

You can pick:

- **WordPress** – uses WordPress to perform the redirects. This is the default behaviour and gives you redirect logs and statistics
- **Apache** – uses the **Apache Module** option on the [options page](https://redirection.me/support/options/) to save redirects to a 
```
.htaccess
```

 file
- **Nginx** – used for Nginx redirects

#### Assigning a Redirect to a Group

When editing or adding a redirect you can select the group from the group dropdown:

![assign_redirect_group](https://redirection.me/wp-content/uploads/2017/11/assign_redirect_group.png)

If a redirect is assigned to the **Apache** group and you have the **Apache Module** option configured then the redirect will be immediately added to the configured 
```
.htaccess
```

 file.

#### Searching & Filtering

If you have a lot of groups you may find it useful to use the filter and search facility to find a particular group.

Filters allow you to reduce the visible groups based on the conditions you set.

![](https://redirection.me/wp-content/uploads/2019/09/group_filter-143x300.png)

Multiple filters can be enabled.

#### Customising the display

You can change what information is displayed by using the display dropdown. Pick from the pre-defined list, or use a custom display.

![](https://redirection.me/wp-content/uploads/2019/09/group_display-225x300.png)

---

