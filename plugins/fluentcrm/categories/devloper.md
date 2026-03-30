# Devloper

*Category from FluentCRM documentation*

---

## Custom Automation Condition

**Source:** [https://fluentcrm.com/docs/custom-automation-condition/](https://fluentcrm.com/docs/custom-automation-condition/)

Automation is magic and FluentCRM is the magician. But anyone can be part of this. Following some steps, anyone can be part of this magic. In this article, we will show you, how you are able to add a custom condition in automation.

**Condition**

Conditions are essential for initiating email marketing automation. There are a lot of conditions that can start or initiate automation in FluentCRM. Using conditions you can track various activities in your WordPress ecosystem. Isn’t cool. Let’s dive deep to learn, how to create a custom condition in FluentCRM.

To make an automation condition, we need to use two filter hooks.

| Type | Hook | Description |
| --- | --- | --- |
| Filter | fluentcrm_automation_condition_groups | This is a filter hook and this hook will add your custom condition to the automation condition list. |
| Filter | fluentcrm_automation_conditions_assess_custom | This is a filter hook and this hook will filter records according to your custom condition logic. |

To add a custom condition in automation, I am going to tell you step by step. This example will be using composer, you can do without composer too.

**Step 1**

First of all, I created a class named CustomCondition which will contain the full source code of this automation condition.

```
<?php
namespace Custom\Conditions;

class CustomCondition
{
    public function __construct()
    {
        add_filter('fluentcrm_automation_condition_groups', array($this, 'addAutomationConditions'), 10, 2);
        add_filter('fluentcrm_automation_conditions_assess_custom', array($this, 'assessAutomationConditions'), 10, 3);
    }

    public function addAutomationConditions($groups, $funnel)
    {
        $customerItems = [
            [
                'value'             => 'purchased_items',
                'label'             => 'Purchased Products',
                'type'              => 'selections',
                'component'         => 'product_selector',
                'is_singular_value' => true,
                'is_multiple'       => true,
                'disabled'          => false
            ]
        ];

        $groups['custom'] = [
            'label'    => 'Custom',
            'value'    => 'custom',
            'children' => $customerItems,
        ];

        return $groups;
    }

    public function assessAutomationConditions($result, $conditions, $subscriber)
    {

        // do something here

        return $result;
    }
}
```

In the above example, you see, there is a method called **addAutomationConditions**. This method will filter records according to this condition logic. Let’s see the preview of this condition’s block and discuss it.

![screenshot 2022 09 07 at 12.02.07 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-07-at-12.02.07-PM-1024x467.png)

**Step 2**

Using the following code, You can able to add this custom action code in FluentCRM.

```
add_action('plugins_loaded', function () {
   if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
      new \Custom\Conditions\CustomCondition();
   }
});
```

---

## Custom Automation Benchmark/Goal

**Source:** [https://fluentcrm.com/docs/custom-automation-benchmark-goal/](https://fluentcrm.com/docs/custom-automation-benchmark-goal/)

Automation is magic and FluentCRM is the magician. But anyone can be part of this. Following some steps, anyone can be part of this magic. In this article, we will show you, how you are able to add a custom benchmark/goal in automation.

**Benchmark/Goal**

Benchmarks are essential for initiating email marketing automation. There are a lot of benchmarks that can start or initiate automation in FluentCRM such as New Order Success, List Applied, Tag Applied, and many more. Using benchmark/goal you can track various activities in your WordPress ecosystem. Isn’t cool. Let’s dive into deep to learn, how to create a custom benchmark/goal in FluentCRM.

To make an automation benchmark/goal, we need to use two filters and one action hook.

| Type | Hook | Description |
| --- | --- | --- |
| Filter | fluentcrm_funnel_blocks | This is a filter hook and this hook will add your custom benchmark/goal to the automation benchmark/goal list. |
| Filter | fluentcrm_funnel_block_fields | This is a filter hook and this hook will generate your custom benchmark/goal setting block. |
| Action | fluentcrm_funnel_benchmark_start_{benchmark_name} | This is an action hook and this benchmark/goal will be called automatically depending on the automation benchmark/goal setting. You can do further using this action hook. For the following trigger source code, the {benchmark_name} is custom_benchmark. |

To add a custom benchmark/goal in automation, I am going to tell you to step by step. This example will be using composer, you can do without composer too.

**Step 1**

First of all, I created a class named CustomBenchmark which will contain the full source code of this automation benchmark/goal.

```
<?php

namespace Custom\Goals;

use FluentCrm\App\Services\Funnel\BaseBenchMark;
use FluentCrm\App\Services\Funnel\FunnelHelper;
use FluentCrm\App\Services\Funnel\FunnelProcessor;
use FluentCrm\Framework\Support\Arr;

class CustomBenchmark
{
    public function __construct()
    {
        $this->triggerName = 'custom_benchmark';
        $this->actionArgNum = 3;
        $this->priority = 20;

        add_filter('fluentcrm_funnel_blocks', array($this, 'addBenchmark'), $this->priority, 1);
        add_filter('fluentcrm_funnel_block_fields', array($this, 'pushBlockFields'), $this->priority, 2);
        add_action('fluentcrm_funnel_benchmark_start_' . $this->triggerName, array($this, 'handle'), $this->priority, 2);
    }

    public function addBenchmark($benchMarks)
    {
        $benchMark = $this->getBlock();
        if($benchMark) {
            $benchMark['type'] = 'benchmark';
            $benchMarks[$this->triggerName] = $benchMark;
        }

        return $benchMarks;
    }

    public function pushBlockFields($fields, $funnel)
    {
        $fields[$this->triggerName] = $this->getBlockFields($funnel);
        return $fields;
    }

    public function getConditionFields($benchMark)
    {
        return [];
    }

    public function benchmarkTypeField()
    {
        return [
            'label'       => 'Benchmark type',
            'type'        => 'radio',
            'options'     => [
                [
                    'id'    => 'optional',
                    'title' => '[Optional Point] This is an optional trigger point',
                ],
                [
                    'id'    => 'required',
                    'title' => '[Essential Point] Select IF this step is required for processing further actions',
                ]
            ],
            'inline_help' => 'If you select [Optional Point] it will work as an Optional Trigger otherwise, it will wait for full-fill this action',
        ];
    }

    public function getBlock()
    {
        return [
            'title'       => 'Custom benchmark',
            'description' => 'This will run once new order will be placed as completed in CB',
            'icon' => 'fc-icon-edd',
            'settings'    => [
                'product_ids'        => [],
                'product_categories' => [],
                'purchase_type'      => 'all',
                'type'               => 'required'
            ]
        ];
    }

    public function getDefaultSettings()
    {
        return [
            'product_ids'        => [],
            'product_categories' => [],
            'purchase_type'      => 'all',
            'type'               => 'required'
        ];
    }

    public function getBlockFields($funnel)
    {
        return [
            'title'     => 'New Order Success in EDD',
            'sub_title' => 'This will run once new order will be placed as completed in EDD',
            'fields'    => [
                'product_ids'        => [
                    'type'        => 'multi-select',
                    'label'       => 'Target Products',
                    'help'        => 'Select for which products this goal will run',
                    'options'     => [
                        ['id' => 123, 'title' => 'Demo product one'],
                        ['id' => 124, 'title' => 'Demo product two'],
                    ],
                    'inline_help' => 'Keep it blank to run to any product purchase',
                ]
            ]
        ];
    }

    public function handle($benchMark, $originalArgs)
    {
        error_log(print_r([$benchMark, $originalArgs], 1));
    }
}
```

In the above example, you see, there is a method called **pushBlockFields**. This method returns an object and the object contains several fields.  This object is the structure of this benchmark’s setting page design. Let’s see the preview of this benchmark’s setting block and discuss it.

![screenshot 2022 09 07 at 10.56.15 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-07-at-10.56.15-AM-1024x380.png)

In the above sourcecode, Target Products block is generated by **getBlockFields**. You see there is **fields** property in this method return array. There are so many field type in FluentCRM, you can find those [here](https://fluentcrm.com/docs/form-field-code-structure/).

In the above example, you see, there is a method called **handle**. This method is called when this benchmark is start. By this method you can do, what you want.

**Step 2**

Using the following code, You can able to add this custom benchmark/goal code in FluentCRM.

```
add_action('plugins_loaded', function () {
   if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
      new \Custom\Goal\CustomBenchmark();
   }
});
```

---

## Custom Automation Action

**Source:** [https://fluentcrm.com/docs/custom-automation-action/](https://fluentcrm.com/docs/custom-automation-action/)

Automation is magic and FluentCRM is the magician. But anyone can be part of this. Following some steps, anyone can be part of this magic. In this article, we will show you, how you are able to add a custom action in automation.

**Action**

Actions are essential for initiating email marketing automation. There are a lot of actions that can start or initiate automation in FluentCRM such as Update Contact Property, Outgoing webhook, Split (A/B Testing), and many more. Using action you can track various activities in your WordPress ecosystem. Isn’t cool. Let’s dive into deep to learn, how to create a custom trigger in FluentCRM.

To make an automation action, we need to use two filters and one action hook.

| Type | Hook | Description |
| --- | --- | --- |
| Filter | fluentcrm_funnel_blocks | This is a filter hook and this hook will add your custom action to the automation action list. |
| Filter | fluentcrm_funnel_block_fields | This is a filter hook and this hook will generate your custom action setting block. |
| Action | fluentcrm_funnel_sequence_handle_{action_name} | This is an action hook and this action will be called automatically depending on the automation action setting. You can do further using this action hook. For the following trigger source code, the {action_name} is custom_action_name. |

To add a custom action in automation, I am going to tell you step by step. This example will be using composer, you can do without composer too.

**Step 1**

First of all, I created a class named Custom Action which will contain the full source code of this automation action.

```
<?php

namespace Custom\Actions;

class CustomAction
{
    public function __construct()
    {
        $this->actionName = 'custom_action_name';
        $this->priority = 99;
        add_filter('fluentcrm_funnel_blocks', array($this, 'pushBlock'), $this->priority, 2);
        add_filter('fluentcrm_funnel_block_fields', array($this, 'pushBlockFields'), $this->priority, 2);
        add_action('fluentcrm_funnel_sequence_handle_' . $this->actionName, array($this, 'handle'), 10, 4);
    }

    public function pushBlock($blocks, $funnel)
    {
        $this->funnel = $funnel;

        $block = $this->getBlock();
        if($block) {
            $block['type'] = 'action';
            $blocks[$this->actionName] = $block;
        }

        return $blocks;
    }

    public function pushBlockFields($fields, $funnel)
    {
        $this->funnel = $funnel;

        $fields[$this->actionName] = $this->getBlockFields();
        return $fields;
    }

    public function getBlock()
    {
        return [
            'category'    => 'My-plugin',
            'title'       => 'Add My-plugin note',
            'description' => 'Add Note to My-plugin',
            'icon'        => 'fc-icon-writing',
            'settings'    => [
                'note'      => '',
                'note_type' => 'private'
            ]
        ];
    }

    public function getBlockFields()
    {
        $formattedOptions = [
            [
                'id'    => 'private',
                'title' => 'Private Note'
            ],
            [
                'id'    => 'customer',
                'title' => 'Note to Customer'
            ]
        ];

        return [
            'title'     => 'Add My-plugin Note',
            'sub_title' => 'Add Note to My-plugin Order',
            'fields'    => [
                'note'      => [
                    'type'       => 'input-text-popper',
                    'field_type' => 'textarea',
                    'label'      => 'My-plugin Note',
                    'help'       => 'Type the note that you want to add to the reference order. You can also use smart tags'
                ],
                'note_type' => [
                    'type'    => 'radio',
                    'label'   => 'New Order Status',
                    'help'    => 'Select Note Type for the reference Order.',
                    'options' => $formattedOptions
                ]
            ]
        ];
    }

    public function handle($subscriber, $sequence, $funnelSubscriberId, $funnelMetric)
    {
        error_log(print_r([$subscriber, $sequence, $funnelSubscriberId, $funnelMetric], 1));
    }

}
```

In the above example, you see, there is a method called **pushBlockFields**. This method returns an object and the object contains several fields. This object is the structure of this action’s setting page design. Let’s see the preview of this action’s setting block and discuss it.

![screenshot 2022 09 07 at 10.46.23 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-07-at-10.46.23-AM-1024x453.png)

In the above sourcecode, Target Products block is generated by **getBlockFields**. You see there is **fields** property in this method return array. There are so many field type in FluentCRM, you can find those [here](https://fluentcrm.com/docs/form-field-code-structure/).

In the above example, you see, there is a method called **handle**. This method is called when this action is triggered. By this method you can do, what you want.

**Step 2**

Using the following code, You can able to add this custom action code in FluentCRM.

```
add_action('plugins_loaded', function () {
   if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
      new \Custom\Actions\CustomAction();
   }
});
```

---

## Custom Automation Trigger

**Source:** [https://fluentcrm.com/docs/custom-automation-trigger/](https://fluentcrm.com/docs/custom-automation-trigger/)

Automation is magic and FluentCRM is the magician. But anyone can be part of this. Following some steps, anyone can be part of this magic. In this article, we will show you, how you are able to add a custom trigger in automation.

**Trigger**

A funnel trigger or automation trigger will let you start an automation funnel based on your user’s behavior. Triggers are essential for initiating email marketing automation. There are a lot of triggers that can start or initiate automation in FluentCRM such as [Primary Automation Triggers](https://fluentcrm.com/docs/fluentcrm-automation-triggers/), [Ecommerce Triggers](https://fluentcrm.com/docs/fluentcrm-ecommerce-triggers/), [Membership Triggers](https://fluentcrm.com/docs/fluentcrm-membership-triggers/), [LMS Triggers](https://fluentcrm.com/docs/fluentcrm-lms-triggers/), and many more. Using trigger you can track various activities in your WordPress ecosystem. Isn’t cool. Let’s dive into deep to learn, how to create a custom trigger in FluentCRM.

To make an automation trigger, we need to use two filters and one action hook.

| Type | Hook | Description |
| --- | --- | --- |
| Filter | fluentcrm_funnel_triggers | This is a filter hook and this hook will add your custom trigger to the automation trigger list. |
| Filter | fluentcrm_funnel_editor_details_{trigger_name} | This is a filter hook and this hook will generate your custom trigger setting block. For the following trigger source code, the {trigger_name} is my_plugin_registration. |
| Action | fluentcrm_funnel_start_{trigger_name} | This is an action hook and this action will be called automatically depending on the trigger setting. You can do further using this action hook. |

To add a custom trigger in automation, I am going to tell you to step by step. This example will be using composer, you can do without composer too.

**Step 1**

First of all, I created a class named CustomTrigger which will contain the full source code of this automation trigger.

```
<?php

namespace Custom\Triggers;

class CustomTrigger
{
    public function __construct()
    {
        $this->triggerName = 'my_plugin_registration';
        $this->priority = 20;
        $this->actionArgNum = 2;
        add_filter('fluentcrm_funnel_triggers', array($this, 'addTrigger'), $this->priority, 1);
        add_filter('fluentcrm_funnel_editor_details_'.$this->triggerName, array($this, 'prepareEditorDetails'), 10, 1);
        add_action('fluentcrm_funnel_start_' . $this->triggerName, array($this, 'handle'), 10, 2);
    }

    public function getTrigger()
    {
        return [
            'category'    => __('My-plugin'),
            'label'       => __('My-plugin'),
            'description' => __('This Funnel will be initiated when a My-plugin registration completed'),
            'icon'        => 'fc-icon-wp_new_user_signup',
        ];
    }

    public function addTrigger($triggers)
    {
        $triggers[$this->triggerName] = $this->getTrigger();
        return $triggers;
    }

    public function getSettingsFields($funnel)
    {
        return [
            'title'     => __('My-plugin Registration'),
            'sub_title' => __('This Funnel will be initiated when a My-plugin registration completed'),
            'fields'    => [
                'message' => [
                    'type'        => 'input-text',
                    'label'       => __('Message Title'),
                    'placeholder' => __('Type Message Title')
                ],
                'description' => [
                    'type' => 'html',
                    'label' => 'Description',
                    'info' => '<b>'.__('This message will add to user but need to set title').'</b>'
                ]
            ]
        ];
    }

    public function prepareEditorDetails($funnel)
    {
        $funnel->settings = wp_parse_args($funnel->settings, $this->getFunnelSettingsDefaults());
        $funnel->settingsFields = $this->getSettingsFields($funnel);
        $funnel->conditions = wp_parse_args($funnel->conditions, $this->getFunnelConditionDefaults($funnel));
        $funnel->conditionFields = $this->getConditionFields($funnel);
        return $funnel;
    }

    public function getFunnelSettingsDefaults()
    {
        return [
            'subscription_status' => 'subscribed'
        ];
    }

    public function getConditionFields($funnel)
    {
        return [
            'update_type'  => [
                'type'    => 'radio',
                'label'   => __('If Contact Already Exist?', 'fluent-crm'),
                'help'    => __('Please specify what will happen if the subscriber already exist in the database', 'fluent-crm'),
                'options' => $this->getUpdateOptions()
            ],
            'user_roles'   => [
                'type'        => 'multi-select',
                'is_multiple' => true,
                'label'       => __('Targeted User Roles', 'fluent-crm'),
                'help'        => __('Select which roles registration will run this automation Funnel', 'fluent-crm'),
                'placeholder' => __('Select Roles', 'fluent-crm'),
                'options'     => $this->getUserRoles(),
                'inline_help' => __('Leave blank to run for all user roles', 'fluent-crm')
            ],
            'run_multiple'       => [
                'type'        => 'yes_no_check',
                'label'       => '',
                'check_label' => __('Restart the Automation Multiple times for a contact for this event. (Only enable if you want to restart automation for the same contact)'),
                'inline_help' => __('If you enable, then it will restart the automation for a contact if the contact already in the automation. Otherwise, It will just skip if already exist')
            ]
        ];
    }

    public function getFunnelConditionDefaults($funnel)
    {
        return [
            'update_type'  => 'update', // skip_all_actions, skip_update_if_exist
            'user_roles'   => $this->getUserRoles(),
            'run_multiple'       => 'yes'
        ];
    }

    public function getUpdateOptions()
    {
        return [
            [
                'id'    => 'update',
                'title' => __('Update if Exist', 'fluent-crm')
            ],
            [
                'id'    => 'skip_all_if_exist',
                'title' => __('Skip this automation if contact already exist', 'fluent-crm')
            ]
        ];
    }

    public function getUserRoles($keyed = false)
    {
        if (!function_exists('get_editable_roles')) {
            require_once(ABSPATH . '/wp-admin/includes/user.php');
        }

        $roles = \get_editable_roles();
        $formattedRoles = [];
        foreach ($roles as $roleKey => $role) {

            if ($keyed) {
                $formattedRoles[$roleKey] = $role['name'];
            } else {
                $formattedRoles[] = [
                    'id'    => $roleKey,
                    'title' => $role['name']
                ];
            }

        }
        return $formattedRoles;
    }

    public function handle($funnel, $originalArgs)
    {
        error_log(print_r([$funnel, $originalArgs], 1));
    }
}
```

In the above example, you see, there is a method called **prepareEditorDetails**. This method returns an object and the object contains several fields. This object is the structure of this trigger’s setting page design. Let’s see the preview of this trigger’s setting block and discuss it.

![screenshot 2022 09 07 at 9.31.23 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-07-at-9.31.23-AM-1024x740.png)

In the above source code, the Target Products block is generated by **getSettingsFields**. You see there is a fields property in this method return array. There is so many field type in FluentCRM, you can find those [here](https://fluentcrm.com/docs/form-field-code-structure/).

In the above example, you see, there is a method called **handle**. This method is called when this trigger is triggered. With this method you can do, what you want.

**Step 2**

Using the following code, You can able to add this custom trigger code in FluentCRM.

```
add_action('plugins_loaded', function () {
   if (defined('FLUENTCAMPAIGN_DIR_FILE')) {
      new \Custom\Triggers\CustomTrigger();
   }
});
```

---

## Form Field Code Structure

**Source:** [https://fluentcrm.com/docs/form-field-code-structure/](https://fluentcrm.com/docs/form-field-code-structure/)

Fluent CRM has a cool structural format for generating form fields. Using this structural format anyone can make a form without writing any HTML or JavaScript. The form fields will depend on the structural format.

There are several types of form fields in Fluent CRM and all those have almost the same structural format. There are 26 types of form fields in fluent CRM.  There are also some common and optional fields in every form block. Let’s look at first the common/optional fields

| Key | Description |
| --- | --- |
| label | Label title of your form field |
| inline_help | Help message below your form input |
| placeholder | Placeholder of the selector |
| help | Description about selector |
| wrapper_class | (Optional) With this property, someone can customize the form block design. |
| readonly | (Optional) If this property is true, then the field will be read-only |
| dependency |  |

- [Option selectors](#option-selectors)
- [Single or multi-select](#signle-or-multi-select)
- [Radio](#radio)
- [Number input](#number-input)
- [Text input](#text-input)
- [Text input popper](#input-text-popper)
- [Yes & no check](#yes-and-no-check)
- [Grouped select](#grouped-select)
- [Multi text options](#multi-text-options)
- [Email campaign composer](#email-campaign-composer)
- [Reload field selection](#reload-field-selection)
- [Form group mapper](#form-group-mapper)
- [Form many dropdown mappers](#form-many-dropdown-mappers)
- [Html](#html)
- [Url selector](#url-selector)
- Date time
- Condition groups
- [Input values pair properties](#input-values-pair-properties)
- [Text values multi properties](#text-value-multi-properties)
- [Html editor](#html-editor)
- [Rest selector](#rest-selector)
- [Condition block groups](#condition-block-groups)
- [Custom sender config](#custom-sender-config)
- [Radio buttons](#radio-buttons)
- [Checkboxes](#checkboxes)
- [Time Selector](#time-selector)

**Option selectors**

```
'subscription_status' => [
    'type'        => 'option_selectors',
    'option_key'  => 'editable_statuses',
    'is_multiple' => false,
    'label'       => 'Subscription Status',
    'placeholder' => 'Select Status'
]
```

This is a simple **option_selectors** type field component, you can find this structure in every integration. The **option_key** is used to get the correct options from WordPress. The **is_multiple** defines whether the option selector is multiple or not.

| Key | Description |
| --- | --- |
| creatable | Can the user create a new tag/list |
| size | (Optional) Size of the field |
| option_key | Dynamic Data Sets: Possible Values – See bellow |
| is_multiple | If the selector is multiple or not |

**Option Key possible sets**.

| Key | Description |
| --- | --- |
| tags | Tags are like Lists but more ways to filter your contacts inside a list. |
| lists | List are categories of your contacts. |
| editable_statuses | All editable statuses of a user |
| woo_products | All woo-commerce products |
| email_sequences | All sequences of Fluent-CRM |
| campaigns | All campaigns of Fluent-CRM |
| product_selector_tutorlms | All courses of TutorLMS |
| edd_coupons | All coupons of Easy Digital Download |
| product_selector_learndash | All options of Learndash courses |
| product_selector_learndash_groups | All options of Learndash groups |
| product_selector_lifterlms | All options of LifterLMS courses |
| product_selector_lifterlms_groups | All options of LifterLMS memberships |
| product_selector_pmpro | All memberships of Paid Membership Pro |
| product_selector_rcp | All memberships of Restrict Content Pro |
| product_selector_wishlist | All memberships of Wishlist Member |
| woo_coupons | All Woo-commerce coupons |
| woo_order_statuses | All Woo-commerce order statuses |
| woo_categories | All Woo-commerce categories |
| product_selector_woo | All Woo-commerce products |
| product_selector_woo_order | All Woo-commerce products |
| edd_products | All Easy Digital Download products |
| product_selector_edd | All Easy Digital Download products |

**The preview of the example block.**

![screenshot 2022 09 01 at 11.57.47 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-11.57.47-AM.png)

**Single or multi-select**

```
'product_ids'     => [
    'type'        => 'multi-select',
    'label'       => 'Target Products',
    'help'        => 'Select for which products this goal will run',
    'options'     => [
          [
                'id'    => '2',
                'title' => 'First Product'
          ]
    ],
    'inline_help' => 'Keep it blank to run to any product purchase',
],
```

This is an example **multi-select** type field component, you can find this structure in every integration. The **options** property contains the options of the select field. The structure of single select and multi-select is the same. Every option has two properties, **id** & **title**.

**The preview of the example block.**

![screenshot 2022 09 01 at 2.47.57 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-2.47.57-PM.png)

Options possible sets:

| Key | Description |
| --- | --- |
| id | set selector id |
| title | set selector title |

**Radio**

```
'purchase_type'      => [
    'type'        => 'radio',
    'label'       => 'Purchase Type'
    'help'        => 'Select the purchase type',
    'options'     => [
        [
            'id'    => 'all',
            'title' => 'Any type of purchase'
        ]
    ],
    'inline_help' => 'For what type of purchase you want to run this goal'
],
```

This is an example **radio** type field component, you can find this structure in every integration. The **options** property contains the values of the radio fields. Every option has two properties, **id** & **title**.

**Options Key possible sets**:

| Key | Description |
| --- | --- |
| id | Set selector id |
| title | Set selector title |

**The preview of the example block.**

![screenshot 2022 09 01 at 3.10.51 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-3.10.51-PM.png)

**Number input**

```
'wait_time_amount' => [
    'label'         => 'Wait Time',
    'type'          => 'input-number',
    'wrapper_class' => 'fc_2col_inline pad-r-20'
],
```

This is an example **input-number** type field component, you can find this structure in every integration. There are also some optional properties.

**The preview of the example block.**

![screenshot 2022 09 01 at 3.22.58 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-3.22.58-PM.png)

**Text input**

```
'send_email_custom'  => [
    'wrapper_class' => 'fc_half_field',
    'type'          => 'input-text',
    'label'         => 'Send To Email Addresses (If Custom)',
    'placeholder'   => 'Custom Email Addresses',
    'inline_help'   => 'Use comma separated values for multiple'
]
```

This is an example **input-text** type field component, you can find this structure in every integration.

**The preview of the example block.**

![screenshot 2022 09 01 at 3.30.03 pm 1](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-3.30.03-PM-1.png)

**Text input popper**

```
'note'      => [
    'type'       => 'input-text-popper',
    'field_type' => 'textarea',
    'label'      => 'Order Note',
    'help'       => 'Type the note that you want to add to the reference order. You can also use smart tags'
]
```

This is an example **input-text-popper** type field component, you can find this structure in every integration. The possible value of the **field_type** property is text or textarea.

**The preview of the example block.**

![screenshot 2022 09 01 at 3.50.01 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-3.50.01-PM.png)

**Yes & no check**

```
'run_multiple'       => [
    'type'        => 'yes_no_check',
    'label'       => '',
    'check_label' => 'Restart the Automation Multiple times for a contact for this event. (Only enable if you want to restart automation for the same contact)',
    'inline_help' => 'If you enable, then it will restart the automation for a contact if the contact already in the automation. Otherwise, It will just skip if already exist',
]
```

This is an example **yes_no_check** type field component, you can find this structure in every integration.

**The preview of the example block**:

![screenshot 2022 09 01 at 3.54.18 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-3.54.18-PM.png)

**Grouped select**

```
'lesson_ids'      => [
    'type'        => 'grouped-select',
    'label'       => 'Target Lessons',
    'help'        => 'Select for which Lessons this automation will run',
    'options'     => [
          [
               'title'   => 'First Course',
               'slug'    => 'first_course',
               'options' => [
                     [
                         'id'    => '1'
                         'title' => 'First Lesson'
                     ]
               ]
          ]
    ],
    'is_multiple' => true,
    'inline_help' => 'Keep it blank to run to any Lesson',
],
```

This is an example **grouped-select**type field component, you can find this structure in every integration. The **options** property contains a list. Every option has three properties **title**, **slug** & **options**(Every [options](#grouped-select-options-inside-options) of this property contains two fields named **id** & **title**).

**Options possible sets**:

| key | Description |
| --- | --- |
| title | set course title |
| slug | set course slug |
| options | Dynamic Data sets: Possible Values – See below |

**Options -> Options possible sets:**

| Key | Description |
| --- | --- |
| id | set selector id |
| title | set selector title |

**The preview of the example block.**

![screenshot 2022 09 01 at 4.33.13 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-4.33.13-PM.png)

**Multi text options**

```
'target_lesson' => [
    'type'        => 'multi_text_options',
    'label'       => 'Target lessons',
    'help'        => 'Select target lessons',
    'input_type'  => 'text',
    'placeholder' => 'Target lessons',
    'inline_help' => 'Keep it blank to run all lessons'
]
```

This is an example **multi_text_options** type field component, you can find this structure in every integration.

**The preview of the example block.**

![screenshot 2022 09 02 at 12.34.30 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-12.34.30-PM.png)

**Email campaign composer**

```
'campaign'  => [
    'label' => '',
    'type'  => 'email_campaign_composer'
],
```

This is an example **email_campaign_composer** type field component, you can find this structure in every integration.

**The preview of the example block.**

![screenshot 2022 09 02 at 9.27.07 am](https://fluentcrm.com/wp-content/uploads/2022/08/Screenshot-2022-09-02-at-9.27.07-AM.png)

**Reload field selection**

```
'course_id'       => [
    'type'        => 'reload_field_selection',
    'label'       => 'Target Course',
    'help'        => 'Select Course to find out Lesson',
    'options'     => [
          [
              'id'    => '1',
              'title' => 'First Course'
          ]
     ],
    'inline_help' => 'You must select a course'
],
```

This is an example **reload_field_selection** type field component, you can find this structure in every integration. The **options** property contains a list. Every option has two properties named **id** & **title**.

**The preview of the example block.**

| Key | Description |
| --- | --- |
| id | set selector id |
| title | set selector title |

**The preview of the example block.**

![screenshot 2022 09 02 at 9.38.23 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-9.38.23-AM.png)

**Form group mapper**

```
'primary_fields'        => [
    'label'             => 'Map Primary Data',,
    'type'              => 'form-group-mapper',
    'value_options'.    => [
        [
            'id'    => '',
            'title' => ''
        ]
    ],
    'local_label'      => 'Contact Field (CRM)',
    'remote_label'     => 'Form Field',
    'fields'           => [
        'first_name' => [
               'type'   => 'value_options',
               'label'  => 'First Name'
        ],
        'last_name' => [
              'type'   => 'value_options',
              'label'  => 'Last Name'
        ],
        'email'    => [
            'type'    => 'value_options',
            'label'   => 'Email'
        ]
    ]
]
```

This is an example **form-group-mapper** type field component, you can find this structure in every integration. The **value_options** property contains a list of options of Fluent Form. Every option has two properties named **id** & **title**.

There is also a property named **fields** which contains a list of input fields.

**The preview of the example block.**

![screenshot 2022 09 02 at 2.18.05 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-2.18.05-PM.png)

**Form many dropdown mappers**

```
'other_fields'           => [
    'label'              => 'Map Other Data',
    'type'               => 'form-many-drop-down-mapper',
    'value_options'      => [
        [
            'id'    => '',
            'title' => ''
        ]
    ],
    'local_label'        => 'Select Contact Property',
    'remote_label'       => 'Select Form Field',
    'local_placeholder'  => 'Select Contact Property',
    'remote_placeholder' => 'Select Form Property',
    'fields'             => [
            'prefix'         => [
                'type'  => 'value_options',
                'label' => 'Name Prefix'
            ],
            'address_line_1' => [
                'type'  => 'value_options',
                'label' => 'Address Line 1'
            ],
            'address_line_2' => [
                'type'  => 'value_options',
                'label' => 'Address Line 2'
            ],
     ]
]
```

This is an example **form-many-drop-down-mapper** type field component, you can find this structure in every integration. The **value_options** property contains a list of options of Fluent Form. Every option has two properties named **id** & **title**.

There is also a property named **fields** which contains a list of input fields.

**The preview of the example block.**

![screenshot 2022 09 02 at 3.20.53 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-3.20.53-PM.png)

**Html**

```
'subscription_status_info' => [
    'type'       => 'html',
    'info'       => 'An Automated double-optin email will be sent for new subscribers',
]
```

This is an example **html** type field component, you can find this structure in every integration. The **info** property is required.

**Url selector**

```
'redirect_to' => [
    'type'        => 'url_selector',
    'label'       => 'Redirect To',
    'placeholder' => 'Your Target URL',
    'help'        => 'Contacts will be redirected to this link.',
    'inline_help' => 'Please provide the url to where the contact will be redirected'
],
```

This is an example **url_selector** type field component, you can find this structure in every integration.

**The preview of the example block:**

![screenshot 2022 09 02 at 10.03.21 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-10.03.21-AM.png)

**Input value pair properties**

```
'contact_properties'     => [
    'type'               => 'input_value_pair_properties',
    'support_operations' => 'yes',
    'label'              => 'Setup contact properties that you want to update',
    'data_key_label'     => 'Contact Property',
    'data_value_label'   => 'Property Value',
    'property_options'   => [
         'contact_type'  => [
             'label'     => 'Contact Type',
             'type'      => 'select',
             'options'   => [
                  [
                      'id'    => 'lead',
                      'slug'  => 'lead',
                      'title' => 'Lead'
                  ]
             ]
         ],
    ]
]
```

This is an example **input_value_pair_properties** type field component, you can find this structure in every integration. The**property_options** property contains a list of other different types of field components.

**property_options possible sets**:

| key | Description |
| --- | --- |
| label | set selector label |
| type | set selector type |
| options | Dynamic Data Sets: Possible Values – See below |

**property_options -> options possible sets:**

| key | Description |
| --- | --- |
| id | set selector id |
| slug | set selector slug |
| title | set selector title |

**The preview of the example block.**

![screenshot 2022 09 02 at 10.48.35 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-10.48.35-AM.png)

**Text value multi properties**

```
'meta_properties'            => [
    'label'                  => 'User Meta Mapping',
    'type'                   => 'text-value-multi-properties',
    'data_key_label'         => 'User Meta Key',
    'data_value_label'       => 'User Meta Value',
    'data_value_placeholder' => 'Meta Value',
    'data_key_placeholder'   => 'Meta key',
    'help'                   => 'If you want to map user meta properties you can add that here. This is totally optional',
    'value_input_type'       => 'text-popper'
],
```

This is an example **text-value-multi-properties** type field component, you can find this structure in every integration.

![screenshot 2022 09 02 at 11.07.51 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-11.07.51-AM.png)

**Html editor**

```
'description' => [
    'type'    => 'html_editor',
    'label'   => 'Description'
]
```

This is an example **html_editor** type field component, you can find this structure in every integration.

**The preview of the example block.**

![screenshot 2022 09 02 at 11.18.21 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-11.18.21-AM.png)

**Rest selector**

```
'course_id' => [
    'type'        => 'rest_selector',
    'option_key'  => 'product_selector_learndash',
    'is_multiple' => false,
    'clearable'   => true,
    'label'       => 'Select Course to Enroll',
    'placeholder' => 'Select Course',
]
```

This is an example **rest_selector** type field component, you can find this structure in every integration. The **option_key** is a required property.

![screenshot 2022 09 02 at 11.31.02 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-11.31.02-AM.png)

**Condition block groups**

```
'conditions' => [
    'type'        => 'condition_block_groups',
    'label'       => 'Specify Matching Conditions',
    'inline_help' => 'Specify which contact properties need to matched. Based on the conditions it will run yes blocks or no blocks',
    'labels'      => [
        'match_type_all_label' => 'True if all conditions match',
        'match_type_any_label' => 'True if any of the conditions match',
        'data_key_label'       => 'Contact Data',
        'condition_label'      => 'Condition',
        'data_value_label'     => 'Match Value'
    ],
    'groups'      => [
            'subscriber' => [
                'label'    => 'Contact',
                'value'    => 'subscriber',
                'children' => [
                    [
                        'label' => 'First Name',
                        'value' => 'first_name',
                        'type'  => 'nullable_text'
                    ],
                 ]
            ]
    ],
    'add_label'   => 'Add Condition to check your contact\'s properties',
]
```

This is an example **cond****ition_block_groups** type field component, you can find this structure in every integration. The **labels** are a required property. The **groups** field contains the condition groups of a specific **cond****ition_block_groups** type field component.

**The preview of this condition block groups**

![screenshot 2022 09 01 at 10.52.37 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-10.52.37-AM.png)

![screenshot 2022 09 01 at 10.50.34 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-10.50.34-AM.png)

**Custom sender config**

```
'mailer_settings' => [
    'type'        => 'custom_sender_config',
    'check_label' => 'Set Custom From Name and Email',
]
```

This is an example **custom_sender_config** type field component, you can find this structure in every integration. The **check_label** property is the title of the block

**The preview of this example block**

![screenshot 2022 09 01 at 11.10.55 am](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-01-at-11.10.55-AM.png)

**Radio buttons**

```
'wait_type'        => [
    'type'    => 'radio_buttons',
    'label'   => 'Waiting Type',
    'options' => [
        [
            'id'    => 'unit_wait',
            'title' => 'Wait for a specific period'
        ],
        [
            'id'    => 'timestamp_wait',
            'title' => 'Wait until a specific date-time'
        ],
        [
            'id'    => 'to_day',
            'title' => 'To a day of the week'
        ]
    ]
],
```

This is an example **radio_buttons** type field component, you can find this structure in every integration. The options property is a list.

**options possible sets:**

| key | Description |
| --- | --- |
| id | set selector id |
| title | set selector title |

**The preview of this example block.**

![screenshot 2022 09 02 at 12.08.55 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-12.08.55-PM.png)

**Checkboxes**

```
'to_day'            => [
    'type'          => 'checkboxes',
    'label'         => 'Wait until next day(s) of the week',
    'wrapper_class' => 'fc_2col_inline pad-r-20',
    'options'       => [
        [
            'id'    => 'Mon',
            'title' => 'Mon'
        ]
    ],
],
```

This is an example **checkboxes** type field component, you can find this structure in every integration. The **options** property is a list containing days info of a week. This example block depends on a wait_type field. If the **wait_type** value is to_day, then this block will show.

**options possible sets:**

| key | Description |
| --- | --- |
| id | set selector id |
| title | set selector title |

**The preview of this example block.**

![screenshot 2022 09 02 at 12.12.39 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-12.12.39-PM.png)

**Time selector**

```
'to_day_time'        => [
    'label'          => 'Time of the day',
    'type'           => 'time_selector',
    'placeholder'    => 'Select Time',
    'wrapper_class'  => 'fc_2col_inline',
    'picker_options' => [
        'start' => '00:00',
        'step'  => '00:10',
        'end'   => '23:59'
    ]
]
```

This is an example **time_selector** type field component, you can find this structure in every integration. The **picker_options** property contains three properties named **start**, **step** & **end**. This example block depends on a wait_type field. If the **wait_type** value is to_day, then this block will show.

**options possible sets:**

| key | Description |
| --- | --- |
| id | set selector id |
| title | set selector title |

**The preview of this example block.**

![screenshot 2022 09 02 at 12.16.33 pm](https://fluentcrm.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-12.16.33-PM.png)

---

## WP Cli Commands

**Source:** [https://fluentcrm.com/docs/wp-cli-commands/](https://fluentcrm.com/docs/wp-cli-commands/)

FluentCRM has few useful WP CLI commands to make it easier to manage your contacts

### wp fluent_crm activate_license

Using this command you can activate the license key from WP CLI.

Full command: *wp fluent_crm activate_license –key=YOUR_LICENSE_KEY*

### wp fluent_crm stats

Using **wp fluent_crm stats** command you can see basic information and stats of your contacts, campaign, automation and emails.

### wp fluent_crm sync_edd_customers

With this command, you can easily sync your Easy Digital Downloads customers and purchase data

Full command:

```
wp fluent_crm sync_edd_customers --tags=TAG_ID_1,TAG_ID_2 --lists=LIST_ID_1,LIST_ID_2 --contact_status=subscribed
```

### wp fluent_crm sync_woo_customers

With this command, you can easily sync WooCommerce customers and purchase data

Full command:

```
wp fluent_crm sync_woo_customers --tags=TAG_ID_1,TAG_ID_2 --lists=LIST_ID_1,LIST_ID_2 --contact_status=subscribed
```

---

## Useful Code Snippets

**Source:** [https://fluentcrm.com/docs/useful-code-snippets/](https://fluentcrm.com/docs/useful-code-snippets/)

**Disable Email Open Tracking**

```
add_filter('fluentcrm_disable_email_open_tracking', '__return_true');
```

**Disable Email Link Clicks and short URLs**

```
add_filter('fluent_crm/track_click', '__return_false');
```

**Add Custom Contact Status**

(Change “Withdrawed” to the custom contact status you want to display.)

```
add_filter('fluent_crm/contact_statuses', function($statuses){
      $statuses[] = "Withdrawed";

      return $statuses;
  },10, 1);
```

**Add Custom Contact Type**

(Replace “Student” with the new contact type and “This is a Student” with the description)

```
add_filter('fluent_crm/contact_types', function($types){

     $types['Student'] = __('This is a Student', 'fluent-crm');

     return $types;
 }, 10, 1);
```

---

## Action Hooks

**Source:** [https://fluentcrm.com/docs/action-hooks/](https://fluentcrm.com/docs/action-hooks/)

FluentCRM trigger action hook on different life-cycle of your contact and other modules.

### Contact Specific Actions Hooks

```
<?php

// New contact created
 do_action('fluentcrm_contact_created', Model $contact);

// contact updated
do_action('fluentcrm_contact_updated', Model $contact);

// contact updated
do_action('fluentcrm_contact_updated', Model $contact);

// custom fields updated
do_action('fluentcrm_contact_custom_data_updated', array $newValues, Model $contact);

// Contact added to lists
do_action( 'fluentcrm_contact_added_to_lists', array $listIds, Model $contact);

// Contact removed from
do_action( 'fluentcrm_contact_removed_from_lists', array $listIds, Model $contact);

// Contact added to tags
do_action( 'fluentcrm_contact_added_to_tags', array $tagIds, Model $contact);

// Contact removed from tags
do_action( 'fluentcrm_contact_removed_from_tags', array $tagIds, Model $contact);

// contact status change to subscribed
do_action('fluentcrm_subscriber_status_to_subscribed', Model $contact, string $oldStatus);

// contact status change to unsubscribed
do_action('fluentcrm_subscriber_status_to_unsubscribed', Model $contact, string $oldStatus);

// Bulk Import Contacts
do_action('fluentcrm_contacts_imported_bulk', Collections $insertedContacts);

// Bulk Update Contacts
do_action('fluentcrm_contacts_updated_bulk', Collections $updatedModels);

// Before subscribers deleted
do_action('fluentcrm_before_subscribers_deleted', array $subscriberIds);

// After Subscribers deleted
do_action('fluentcrm_after_subscribers_deleted', array $subscriberIds);
```

### Example Usage

```
<?php

// Do something after contact is added
add_action('fluentcrm_contact_created', function ($contact) {
    // do your stuff here
}, 10, 1);

// Do something after a contact get updated
add_action('fluentcrm_contact_updated', function ($contact) {
    // do your stuff here
}, 10, 1);

// Do something after a contact status changed to subscribed
add_action('fluentcrm_subscriber_status_to_subscribed', function ($contact, $oldStatus) {
    // do your stuff here
}, 10, 2);
```

---

## Lists and Tags PHP API

**Source:** [https://fluentcrm.com/docs/lists-and-tags-php-api/](https://fluentcrm.com/docs/lists-and-tags-php-api/)

### Accessing lists

```
<?php

   /*
    * List is a contact segment.
    */
    $listApi = FluentCrmApi('lists');

    // Get all the lists
    $allLists = $listApi->all(); // array of all the lists and each list is an object

    // get a single list
    $list = $listApi->find(1); // finding the list id 1

    // accessing a list
    $listId = $list->id;
    $listTitle = $list->title;
    $listSlug = $list->slug;
```

### Accessing Tags

```
<?php
    /*
    * Tag is a contact segment. You can easily access those
    */

    $tagApi = FluentCrmApi('tags');

    // Get all the tags
    $allTags = $tagApi->all(); // array of all the lists and each list is an object

    // get a single tag
    $tag = $tagApi->find(1); // finding the list id 1

    // accessing a tag
    $tagId = $tag->id;
    $tagTitle = $tag->title;
    $tagSlug = $tag->slug;
```

## 

### Check if a contact is in any provided tags

```
$contactApi = FluentCrmApi('contacts');
    // get current logged in contact
    $contact = $contactApi->getCurrentContact();
     
    $targetTagIds = [1,2,3];
    $isInTags = ($contact && $contact->hasAnyTagId($targetTagIds));
```

---

## Contact PHP API

**Source:** [https://fluentcrm.com/docs/contact-php-api/](https://fluentcrm.com/docs/contact-php-api/)

FluentCRM has the following PHP api functions so you can easily add/modify contacts.

```
<?php

    $contactApi = FluentCrmApi('contacts');
    /*
    * Find a contact by Email or Contact ID
    * You can find a contact by email or contact id (ContactId is not the user ID).
    * @return: false or Contact Model Object
    */
    $contact = $contactApi->getContact($emailOrContactId);

    /*
    * Find a contact by contact id or email address
    * You can find a contact by contact id
    */
    $contact = $contactApi->getContact($contactId);

    // or find by email address
    $contact = $contactApi->getContact($emailAddress);

    // Find contact by user id
    $contact = $contactApi->getContactByUserRef($userId);

    /*
    * get current logged in user's contact profile
    *
    */
    $contact = $contactApi->getCurrentContact();
```

### Accessing Contact Properties

```
<php
    /*
    * Accessing contact properties
    */

    $contact->first_name;
    $contact->last_name;
    $contact->email;
    $tags = $contact->tags()->get();   // Tags array that are assigned to the contact 
    $lists = $contact->lists()->get(); // Lists array that are assigned to the contact
```

### Updating Contact Properties

```
<?php

    /*
    * Updating contact properties
    */
    $contact->first_name = 'New First Name';
    $contact->last_name = 'Last Name';
    $contact->save();

    /*
    * Adding tags to a contact
    */
    $tagIds = [1,2,3];
    $contact->attachTags($tagIds);

    /*
    * Adding Lists to a contact
    */
    $listIds = [2,3];
    $contact->attachLists($listIds);

    /*
    * Removing tags from a contact
    */
    $tagIds = [1,2,3];
    $contact->detachTags($tagIds);

    /*
    * Adding Lists to a contact
    */
    $listIds = [2,3];
    $contact->detachLists($listIds);
```

### Creating or Updating a new contact

```
<?php

   $contactApi = FluentCrmApi('contacts');

    /*
    * Update/Insert a contact
    * You can create or update a contact in a single call
    */

    $data = [
        'first_name' => 'Jhon',
        'last_name' => 'Doe',
        'email' => 'jhon@doe.com', // requied
        'status' => 'pending',
        'tags' => [1,2,3], // tag ids as an array
        'lists' => [4] // list ids as an array
    ];

    $contact = $contactApi->createOrUpdate($data);

    // send a double opt-in email if the status is pending
    if($contact->status == 'pending') {
        $contact->sendDoubleOptinEmail();
    }
```

### Filtering Contacts

```
$contactApi = FluentCrmApi('contacts');

    // get Subscribed Contacts
    $subscribedContacts = $contactApi->getInstance()->where('status', 'subscribed')->get(); // you can also use paginate() instead of get();

    // Get both pending and upsubscribed contacts
    $contacts = $contactApi->getInstance()->whereIn('status', ['unsubscribed', 'pending'])->get();

    // Get contacts by tag ids
    $tagIds = [1,2];
    $tagOneTwoContacts = $contactApi->getInstance()->filterByTags($tagIds)->get();

    // Get contacts by list ids
    $listIds = [1,2];
    $ListOneTwoContacts = $contactApi->getInstance()->filterByLists($listIds)->get();

    // search contacts
    $searchResult = $contactApi->getInstance()->searchBy('search_string')->get();
```

---

