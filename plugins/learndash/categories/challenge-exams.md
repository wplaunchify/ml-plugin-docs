# Challenge Exams

*Category from LearnDash documentation*

---

## Challenge Exams

**Source:** [https://learndash.com/support/kb/core/challenge-exams/challenge-exams/](https://learndash.com/support/kb/core/challenge-exams/challenge-exams/)

**NOTES**: The Challenge Exam feature comes with LearnDash version 4.0. Please ensure that you are running the correct LearnDash version to use this feature. If not, update to the latest version by following the guide [here](https://learndash.com/support/docs/getting-started/updates/).

Challenge Exams can be used without requiring access to the associated course. These exams function independently, enabling students to validate their expertise and potentially bypass course requirements without needing prior course enrollment.

The LearnDash challenge exam allows your users to skip ahead a course by answering a set of questions prior to starting the course. Once the user passes the exam, they will automatically complete the assigned course.

This gives your users the opportunity to fast track your courses and give those who excel and have advanced knowledge to complete the courses faster.

![](https://learndash.com/support/wp-content/uploads/2022/03/challenge-exams.png)

The challenge exam feature runs on a different quiz engine thats built directly with the Gutenberg Builder, although, this block is not available to be selected separately outside the challenge exam page. Once on the challenge exam page, this block should automatically populate.

## Creating a Challenge Exam

Creating your challenge exam is very simple since its built-in directly to LearnDash and does not require an additional plugin to run. To create your first challenge exam:

1. Navigate to LearnDash LMS > Challenge Exams
2. Click on the Add New button at the top right of the screen

If you have access to the WordPress admin toolbar, you can go to New > Challenge Exam.

### The Quiz Exam Block

![](https://learndash.com/support/wp-content/uploads/2022/03/learndash-challenge-exam-block-default.png)

#### Challenge Exam Title

Title of the challenge exam that will display on the front end of the site.

#### Adding Questions

To add questions to the block, simply click on the Question section. Once selected enter the question that you would like to ask for that item in the exam. Once the question section is selected, you can also change the Question Type on the sidebar settings to: Single or Multiple.

![](https://learndash.com/support/wp-content/uploads/2022/03/adding-questions.png)

- **Single** – you can select one correct answer
- **Multiple** – you can select multiple correct answers. All of the answers must be selected in order for the response to be counted as correct

To add more questions, simply click on the plus button at the bottom of the block.

#### Removing Questions

To remove questions, click on specific question block and click on the block options and select Remove Challenge Exam Questions.

![](https://learndash.com/support/wp-content/uploads/2022/03/remove-questions.png)

#### Description

Optionally, you can add additional descriptions and notes to your question in this section of the block. This section acts like a separate mini-block where you can add other blocks such as images, audios, videos, etc. You have the freedom to customize this section to add extra details, instructions, and even supporting visual aids to fit your main question.

#### Answers

![](https://learndash.com/support/wp-content/uploads/2022/03/answers.png)

After adding the questions and description, the next step is to add the answers. Click on the Add Answer section and add your choices. To add more choices, simply fill out the next line that automatically appears once youve filled out the previous line.

After adding the choices, select the correct answer by clicking on the button at the right of the answer input field. If you selected the Single question type, you can only select one correct answer. If you selected the Multiple question type, you can select and set multiple choices as the correct answer. Remember that all of correct answers must be selected by the user to count as a correct answer.

When editing either the question description or the question answers, the option to configure the correct and incorrect answer messages should display.

#### Correct Answer Message

**Optional:** Enter the message that would appear to the users if the correct answer is selected once the exam is graded.

#### Incorrect Answer Message

**Optional:** Enter the message that would appear to the users if the incorrect answer is selected once the exam is graded.

## Challenge Exam Display and Content Options

![](https://learndash.com/support/wp-content/uploads/2022/03/display-and-content-options.png)

These settings controls the look and feel of the challenge exam and includes the section where you can assign the exam to a specific course.

### New Enrollees Only

This option allows you to select whether or not to only show the challenge exam to users with the status of Not Started for the specific course. Once deselected, the course will be displayed even to those who have started the course.

**NOTE**: The challenge exam will not be shown to those who have already completed the course.

### Challenge Exam Course Show

This option allows you to select the course you want to display this challenge exam on. To assign the challenge exam to a course, select the course from the dropdown menu.

### Challenge Exam Passed Course

This option allows you to select which course is marked as complete once the user passes this challenge exam.

If the selection here is different from the Challenge Exam Course Show, the user must already be enrolled in the chosen course, if not, this setting will not take effect.

![](https://learndash.com/support/wp-content/uploads/2022/03/passed-course.png)

### Challenge Exam Passed Button Label

This option allows you to label the button that appears when a user passes the challenge exam.

![](https://learndash.com/support/wp-content/uploads/2022/03/learndash-challenge-exam-passed-result-message.png)

### Challenge Exam Passed Redirect URL

This option allows you to set where the user will be redirected to after clicking the above button when a user passes the challenge exam. This can either be the next course in your site, a different course entirely, or even your All Courses section.

If no URL is set here, the button will redirect back to the course that is configured in the Challenge Exam Course Show setting above.

### Challenge Exam Passed Message

This option allows you to customize the message that is show to the user once they pass the challenge exam. You can add images and other media in this section and you have full freedom on what you can add here.

![](https://learndash.com/support/wp-content/uploads/2022/03/failed-course.png)

### Challenge Exam Failed Button Label

This option allows you to label the button that appears when a user fails the challenge exam.

![](https://learndash.com/support/wp-content/uploads/2022/03/learndash-challenge-exam-failed-result-message.png)

### Challenge Exam Failed Redirect URL

This option allows you to set where the user will be redirected to after clicking the above button when a user fails the challenge exam. You can redirect the user to the course page, their account page, or even the All Courses section of your site.

If no URL is set here, the button will redirect back to the course that is configured in the Challenge Exam Course Show setting above.

### Challenge Exam Failed Message

This option allows you to customize the message that is show to the user once they fail the challenge exam. You can add images and other media in this section and you have full freedom on what you can add here.

Once you’re done setting up your challenge exam and its settings, hit Publish in order to publish the challenge exam.

## The User Experience

This is what the challenge exam will look like on the front end.

.kadence-column4457_17e725-14 > .kt-inside-inner-col,.kadence-column4457_17e725-14 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_17e725-14 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_17e725-14 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_17e725-14 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_17e725-14 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_17e725-14{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_17e725-14 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_17e725-14 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Go to the associated course where your exam was set to.
2. Click on the Take this Course to formally register that you will be taking the course.
3. Once youre taken to the challenge exam section, click on the button to Start Challenge Exam

.kadence-column4457_067cb3-4a > .kt-inside-inner-col,.kadence-column4457_067cb3-4a > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_067cb3-4a > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_067cb3-4a > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_067cb3-4a > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_067cb3-4a > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_067cb3-4a{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_067cb3-4a > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_067cb3-4a > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![start challenge exam](https://learndash.com/support/wp-content/uploads/2022/03/start-challenge-exam.png)Start challenge exam

.kadence-column4457_e531e0-e6 > .kt-inside-inner-col,.kadence-column4457_e531e0-e6 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_e531e0-e6 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_e531e0-e6 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_e531e0-e6 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_e531e0-e6 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_e531e0-e6{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_e531e0-e6 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_e531e0-e6 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. You will then be taken to the questions page:

.kadence-column4457_cd04a9-96 > .kt-inside-inner-col,.kadence-column4457_cd04a9-96 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_cd04a9-96 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_cd04a9-96 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_cd04a9-96 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_cd04a9-96 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_cd04a9-96{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_cd04a9-96 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_cd04a9-96 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![questions page](https://learndash.com/support/wp-content/uploads/2022/03/questions-page.png)Questions Page

.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col,.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_8ab45c-f9{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_8ab45c-f9 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Once youre able to answer all the questions, you must click on the Submit button to submit your answers. Once the answers are submitted, they are final and cannot be changed.
2. You must have a perfect answer to pass, once the answers are submitted, you will either see the Pass or Fail message that you set on the settings together with the button that will take you to whatever you set on the redirect URL.

.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col,.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_4c8ac8-2c{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_4c8ac8-2c > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![Pass or Fail](https://learndash.com/support/wp-content/uploads/2022/03/pass-or-fail.png)Pass or Fail

.kadence-column4457_00335a-16 > .kt-inside-inner-col,.kadence-column4457_00335a-16 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_00335a-16 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_00335a-16 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_00335a-16 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_00335a-16 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_00335a-16{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_00335a-16 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_00335a-16 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. You also have the option to view the results by clicking the View Results button. The questions and the results will be shown below.
2. For correct answers:

.kadence-column4457_5eee44-94 > .kt-inside-inner-col,.kadence-column4457_5eee44-94 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_5eee44-94 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_5eee44-94 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_5eee44-94 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_5eee44-94 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_5eee44-94{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_5eee44-94 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_5eee44-94 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![Correct Answers](https://learndash.com/support/wp-content/uploads/2022/03/correct-answers.png)

.kadence-column4457_bb69b9-2c > .kt-inside-inner-col,.kadence-column4457_bb69b9-2c > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_bb69b9-2c > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_bb69b9-2c > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_bb69b9-2c > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_bb69b9-2c > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_bb69b9-2c{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_bb69b9-2c > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_bb69b9-2c > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. For incorrect answers, the correct answer will have a green border, and your selection will have the red highlight:

.kadence-column4457_70ddab-37 > .kt-inside-inner-col,.kadence-column4457_70ddab-37 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column4457_70ddab-37 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column4457_70ddab-37 > .kt-inside-inner-col{flex-direction:column;}.kadence-column4457_70ddab-37 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column4457_70ddab-37 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column4457_70ddab-37{position:relative;}@media all and (max-width: 1024px){.kadence-column4457_70ddab-37 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column4457_70ddab-37 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![Incorrect Answers](https://learndash.com/support/wp-content/uploads/2022/03/incorrect-answers.png)

1. 

## FAQ

**Can I set a passing score for the challenge exam?** Right now, there is no option to set a passing score for the challenge exam. The user must answer all the questions correctly in order to pass. **Can I set the challenge exam to skip lessons/topics instead of courses?** You can only set the challenge exam to mark courses as complete and skip them, not lessons/topics. **Can I set the challenge exam to be conducted at the middle of a course?** The feature only supports putting the exam at the start of the course. **Can I add multiple challenge exams to a course?** You can only associate one challenge exam to a course. **Can a user take the challenge exam more than once?** Once a user takes the challenge exam, they will not have access to it again when viewing the course. If you need to allow them to take it again, you can view their user profile in the WordPress admin dashboard. Look in the Course Info section and click on the Details link where the challenge exam is configured under the course. Click on the (reset) link at the end of the challenge exam row and it will remove that attempt for the user. They can then visit the course again and they will be allowed to take the exam again.

---

