# How To Get Aws S3 Api Details

*Category from WP File Manager documentation*

---

## How to get AWS S3 api details < File Manager Pro

**Source:** [https://filemanagerpro.io/article/how-to-get-aws-s3-api-details/](https://filemanagerpro.io/article/how-to-get-aws-s3-api-details/)

**How do I find my AWS key?**

Access keys are the combination of two parts:

- Access Key ID:
- For Example:

AKIAIOSFODNN7EXAMPLE – and another which is a
- Secret Access Key: for
- For Example:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

You can use both the access key ID and secret access key together to authenticate your requests similar to a username and password.

For best practice, you can use temporary security credentials instead of access keys, and disable any AWS account root user access keys. You have a maximum of two access keys. This allows you to rotate the active keys according to best practices.

Be sure to keys in a secure location since the secret access key is available only at the time you create it. If you forget your secret access key then you must delete the access key and create a new one.[For more details, see Resetting Your Lost or Forgotten Passwords or Access Keys.](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys_retrieve.html)

**How do I create a Secret Access Key?**

Outlined below are the steps to create a new secret access key:

1. Use the security credentials page to create a new secret access key, expand the Access Keys section, and then click Create New Root Key.
2. Open the IAM Console to create a new secret access key. Click Users in the Details pane, click the appropriate IAM user, and then click Create Access Key on the Security Credentials tab.
3. Download the newly created credentials, when prompted to do so in the key creation wizard.

**AWS Region**

Amazon Web Services has the concept of Regions,which is a physical location around the world where data centres are clustered. Each group of logical data centres are an Availability Zone. Each AWS Region consists of multiple, isolated, and physically separate AZ’s within a geographic area.

**What is an Amazon S3 Bucket and how can I create a bucket?**

Amazon S3 is a public Simple Storage Service resource available in Amazon Web Services. More specifically, it is an object storage offering which is similar to file folders, store objects, which consist of data and its descriptive metadata.

**How do I create a bucket?**

1. Sign in to AWS Management Console and open the Amazon S3
2. Choose Create Bucket
3. In Bucket name, enter a DNS-compliant name for your bucket.

The bucket name must:

- - Be unique across all of Amazon S3.
- Be between 3 and 63 characters long.
- Not contain uppercase characters.

- **Start with a lowercase letter or number.**

---

