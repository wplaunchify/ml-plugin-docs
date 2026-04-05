# Import Export Redirects

*Category from Redirection documentation*

---

## Import and Export

**Source:** [https://redirection.me/support/import-export-redirects/](https://redirection.me/support/import-export-redirects/)

You can import and export redirects using the Import/Export page, as well as import from other plugins, and export log files.

#### Redirects

The top of the import/export page is for redirects.

![import_export.png](https://redirection.me/wp-content/uploads/2017/11/import_export-1.png)

From here you can import:

- CSV files – just simple redirects, with no matches or actions
- Apache 
```
.htaccess
```

 files – supports matches but not actions
- Redirection JSON files – full support for all options

Additionally you can export to:

- CSV file – just simple redirects, with no matches or actions
- Apache 
```
.htaccess
```

file – supports matches but not actions
- Nginx rewrite rules file – supports matches but not actions
- Redirection JSON file – full support for all options

#### CSV Files

These are the simplest file format and can be created using any spreadsheet such as Excel or Google Sheets.

The format of the CSV file is as follows:

```
source URL,target URL
```

This can optionally be followed with:

```
regex,http code,type
```

Where 
```
regex
```

 is a 0 to indicate no regular expression, and a 1 to indicate a regular expression. 
```
type
```

 is either 
```
url
```

 or 
```
error
```

.

For example:

```
/old-url,/new-url
/old-url/.*,/new-url,1,301
```

Only redirect HTTP codes are supported (i.e. 301-307). Error codes are not supported.

Exported files will contain additional information about the number of hits, title, and status.

#### Apache .htaccess files

Standard Apache 
```
.htaccess
```

 files can be imported. Note that only redirects that match directly to Redirection redirects will be imported.

#### Redirection JSON

Redirection has its own file format using JSON. This is the most ‘accurate’ format in that it will contain all details about your redirects, including group information, statistics, and logs.

You can find details of the format in the [JSON developer guide](https://redirection.me/developer/json-export/).

#### CSV Import Problems

It is important to note that when using CSV files:

- CSV means the columns are **comma** separated. This does not include tabs or semicolons
- Columns can be enclosed within quotes, but this should not extend to the comma separating the columns

If you are having difficulty exporting a compatible CSV file then please double-check that you are exporting as a comma-separated file.

#### Export Logs

Use the ‘export redirect’ button to export redirect logs as CSV, and the ‘export 404’ button to export 404 logs as CSV.

![](https://redirection.me/wp-content/uploads/2020/12/image.png)

#### Import from Other Plugins

You can import from the following plugins:

- Simple 301 Redirects
- SEO Redirection
- Safe Redirect Manager
- WordPress old post slugs
- Quick Post/Page Redirects
- Rank Math
- Quick Redirects
- Pretty Links

Redirection will detect what existing data is available and show these:

![](https://redirection.me/wp-content/uploads/2020/12/image-1-1024x292.png)

Clicking the appropriate button will import data from that plugin. Note that Redirection does not remove the data.

---

