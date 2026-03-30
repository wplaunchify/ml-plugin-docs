# Data Definations

*Category from Fluent Forms documentation*

---

## $form Object

**Source:** [https://fluentforms.com/docs/form-object/](https://fluentforms.com/docs/form-object/)

## Introduction

The Form object is the main object in Fluent Forms. It contains all properties of a particular form (i.e. form title, fields…).

## Usage

```
$form->id;  // returns the form id
$form->created_at; // returns the form created date
$form->created_by; // returns created by user id
$form->form_fields; // Returns the form fields definitions as JSON.
```

## Properties

| Propery | Type | Comment |
| --- | --- | --- |
| id | int(10) unsigned Auto Increment | ID of the form |
| title | varchar(255) | Form Title |
| form_fields | longtext NULL | All the form Fields as JSON format |
| has_payment | tinyint(1) [0] | if payment fields available or not |
| settings | Array | Contains: confirmation, restrictions, layout as array keys |
| created_by | int(11) NULL | User ID of the form creator |
| created_at | timestamp NULL | Create Date |
| updated_at | timestamp NULL | Update Date |

## JSON Structure

```
{
  "id": "82",
  "title": "Contact Form Demo (#82)",
  "status": "published",
  "appearance_settings": null,
  "form_fields": "{}", // will contain as raw JSON of form fields
  "has_payment": "0",
  "type": "form",
  "conditions": null,
  "created_by": "1",
  "created_at": "2019-11-25 16:55:30",
  "updated_at": "2019-11-25 16:55:33",
  "settings": {
    "confirmation": {
      "redirectTo": "samePage",
      "messageToShow": "Thank you for your message. We will get in touch with you shortly",
      "customPage": null,
      "samePageFormBehavior": "hide_form",
      "customUrl": null
    },
    "restrictions": {
      "limitNumberOfEntries": {
        "enabled": false,
        "numberOfEntries": null,
        "period": "total",
        "limitReachedMsg": null
      },
      "scheduleForm": {
        "enabled": false,
        "start": null,
        "end": null,
        "pendingMsg": "Form submission is not started yet.",
        "expiredMsg": "Form submission is now closed."
      },
      "requireLogin": {
        "enabled": false,
        "requireLoginMsg": null
      },
      "denyEmptySubmission": {
        "enabled": false,
        "message": "Sorry, you cannot submit an empty form. Let's hear what you wanna say."
      }
    },
    "layout": {
      "labelPlacement": "top",
      "helpMessagePlacement": "with_label",
      "errorMessagePlacement": "inline",
      "asteriskPlacement": "asterisk-left"
    },
    "id": "39"
  }
}
```

---

## $submission_data Array

**Source:** [https://fluentforms.com/docs/submission_data-array/](https://fluentforms.com/docs/submission_data-array/)

## Introduction

The Submission Array contains all properties of a particular entry (i.e. date created, client IP, submitted field values, etc…). The response is formatted as key value pairs and converted as JSON.

## Usage

```
$submission_data['form_id'];  // returns the form id
$submission_data['created_at']; // returns the response created date
```

## PHP Structure and Properties

```
$response = [
    'form_id'       => 5, // Form ID
    'serial_number' => 1, // Numeric Serial Number
    'response'      => json_encode($response), // The submitted response as JSON
    'source_url'    => $source_url, // source url eg: https://domain.com/contact-form
    'user_id'       => 1, // current user id
    'browser'       => 'Chrome',
    'device'        => 'ipad',
    'ip'            => '127.0.0.1',
    'created_at'    => '2019-12-31 23:12:34',
    'updated_at'    => '2019-12-31 23:12:34'
];
```

---

