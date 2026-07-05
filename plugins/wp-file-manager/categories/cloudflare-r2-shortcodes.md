# Cloudflare R2 Shortcodes

*Category from WP File Manager documentation*

---

## Cloudflare R2 Shortcodes < File Manager Pro

**Source:** [https://filemanagerpro.io/article/cloudflare-r2-shortcodes/](https://filemanagerpro.io/article/cloudflare-r2-shortcodes/)

You can use shortcodes to display your Cloudflare R2 bucket on your website, where registered users access your bucket data.

### Shortcodes

### 1. Simple shortcode:-

This is a simple shortcode for displaying all folders inside the bucket to all user roles.

```
[wp_file_manager_cloudflare_r2 view="list" lang="en" theme="default" allowed_roles="*" allowed_operations="*" access_folder="*"]
```

**-User roles:-**

```
allowed_roles= ”*”
```

means all user roles can access this shortcode.

You can also mention the specific user roles like administrator, editor, author etc.

```
allowed_roles="administrator,editor,author,subscriber"
```

to allow access to specific roles.

**-Allowed Operation:-**

```
allowed_operations="*"
```

 means all operations are allowed.

If you want to allow users to perform only specific operations,

You can mention them in the shortcode like this

```
allowed_operations="download,upload"
```

**File Operations List:**

- mkdir -> Make directory or folder
- mkfile -> Make file
- paste -> Paste a file or folder
- archive -> To make an archive or zip
- extract -> Extract archive or zipped file
- copy -> Copy files or folders
- cut -> Simple cut a file or folder
- edit -> Edit a file
- rm -> Delete files and folders
- download -> Download files
- upload -> Upload files
- search -> Search the bucket
- info -> Info of file
- help -> Help

**– Access Folder**

```
access_folder="*"
```

 means all folders are accessible.

If you wish to allow access to a specific folder from a bucket, you can simply mention the folder’s name like this-

```
access_folder="Documents"
```

### 2. Admin Shortcode:-

All user roles restrictions and user restrictions that you can set inside the plugin will only work with this shortcode:-

```
[wp_file_manager_cloudflare_r2_admin]
```

With this admin shortcode, everything is controlled from the backend, you don’t need to mention anything in the shortcode.

### 3. Shortcode with Secret key ID and Access Key and ID:-

This shortcode is useful to give access to multiple buckets. If you want to display different buckets then you can use this shortcode.

```
[wp_file_manager_cloudflare_r2 key= "c6eec4059771598ae15451348737a34f" secret= "5738024293a9f505f923bd159b8491554184df06eaa126e774eea3fa4417e2a4" account="7c23ad689694bda02023d045b7a0ac75" region="auto" bucket="filemanager" view="list" lang="en" theme="default" allowed_roles="administrator,editor,author" allowed_operations="*" access_folder="*"]
```

Note- Don’t forget to use your key and secret with the correct account details to use this shortcode

---

