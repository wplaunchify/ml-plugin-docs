# Import Export

*Category from Redirection documentation*

---

## Import and export

**Source:** [https://redirection.me/support/import-export/](https://redirection.me/support/import-export/)

Your data is fully under your control with Redirection, and you can get data in and out of the plugin in a variety of formats and methods.

### Importing

Use the *import* menu option to open the import page. You will be presented with a series of importers, depending on what data is available on your site.

![](https://redirection.me/wp-content/uploads/2026/07/image-1024x995.png)

Importing from a file and copy/paste is always available. The following importers will be available if data is present:

- Simple 301 Redirects
- SEO Redirection
- Safe Redirect Manager
- WordPress old post slugs
- Quick Post/Page Redirects
- Rank Math
- Quick Redirects
- Pretty Links
- EPS 301 Redirects
- SEOPress
- Slim SEO

Regardless of what you are importing, the procedure is always the same:

1. Select the import type (select a file, paste data, or select an importer)
2. Configure options
3. Preview to see what will be imported, or import

When importing a file you can also drag and drop it onto the page.

Previewing an import returns information about the data, and can be used to see what will happen.

![](https://redirection.me/wp-content/uploads/2026/07/image-3-1024x382.png)

### Import options

Depending on the importer being used you will have some additional options in the ‘import options’ section.

![](https://redirection.me/wp-content/uploads/2026/07/image-1-300x71.png)

- **Group** – pick the group to import into. Some imports may supply their own group information and you can also pick to use the supplied groups
- **Duplicates** – determine how to handle duplicates
- **Delete original data** – after import you can also delete the original data

#### Duplicates

Redirection can check for duplicates, and if it finds any, you can decide what happens:

- Do not check duplicates – all imported data is treated as new, and will create new entries
- Ignore duplicates – if an imported entry is a duplicate then it is ignored
- Update duplicates – if an imported entry is a duplicate then the imported data updates the existing data

### Import from a file

You can import from:

- CSV files, formatted to the Redirection specification
- JSON files, formatted to the Redirection specification
- Apache .htaccess files

Either click the ‘add file’ button, or drag and drop a file onto the page. The size of file supported is determined by your server settings (memory, timeout), and if you have difficulty with a large file you can use the WP CLI import command.

JSON files support importing of redirects, groups, logs, and settings.

### Import from text

You can manually type, or copy and paste from elsewhere, redirects directly. This import is the same as importing a CSV file, and must be formatted in a similar way.

![](https://redirection.me/wp-content/uploads/2026/07/image-2-300x282.png)

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

#### Exporting

You can export all data in the plugin in a variety of formats. From the *export* page you are presented with a series of cards, each of which can be toggled on or off.

![](https://redirection.me/wp-content/uploads/2026/07/image-4-1024x870.png)

Some cards have additional options specific to that data.

![](https://redirection.me/wp-content/uploads/2026/07/image-5-300x284.png)

Depending on the data chosen there are some export options.

![](https://redirection.me/wp-content/uploads/2026/07/image-6.png)

When everything has been decided you can view the data directly in the browser, or export it as a file. You will be shown an estimate of the export size, which can help when deciding how long it will take to download, and whether your server is capable of doing so.

![](https://redirection.me/wp-content/uploads/2026/07/image-7-1024x259.png)

If your data is too big for a browser download you can also use [WP CLI](https://redirection.me/developer/wp-cli/).

Export formats

Data can be exported in the following formats. Some formats are only available for certain data types, and sometimes only when a single format is selected:

- **JSON** – supports all data
- **CSV** – redirects, logs, and groups. Only a single data type is supported
- **.htaccess** – redirects, as a single data type
- **Nginx rewrite rules** – redirects, as a single data type

---

