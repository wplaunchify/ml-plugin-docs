# Questions

*Category from LearnDash documentation*

---

## Quiz Questions

**Source:** [https://learndash.com/support/kb/core/questions/quiz-questions/](https://learndash.com/support/kb/core/questions/quiz-questions/)

[LearnDash quizzes](https://learndash.com/support/docs/core/quizzes/) puts the power of testing your students’ knowledge right at your fingertips. Explore setting up questions & answers, awarding points, hints, categories, options available for each question type, and more.

## Access Questions

Every question you use in any quiz across your site is stored in one central location. While you can use the [quiz builder](https://learndash.com/support/docs/core/quizzes/quiz-builder/) to add questions & configure your entire quiz, you can also modify questions on their own, dedicated page.

1. Navigate to LEARNDASH LMS > QUESTIONS
2. Click on any question to open it’s edit page

## Filter Questions

LearnDash gives you the ability to filter your questions in a number of ways:

- by [question type](#choose_question_type)
- by [question category](#question_categories)
- by the quiz it is assigned to (you can also view questions that are unassigned)

![How to filter LearnDash quiz questions](https://learndash.com/support/wp-content/uploads/2019/03/learndash-questions-filter-animation.gif)

Use the filter bar across the top of the **All Questions** page:

1. Choose the filters you want
2. Click the “Filter” button

## Choose Question Type

When creating a new quiz question, one of the first things you’ll want to do is choose your question type. LearnDash offers the following question types:

- Single choice
- Multiple choice
- Free choice
- Sorting choice
- Matrix sorting choice
- Fill in the blank
- Assessment (survey)
- Essay (open answer)

To select your question type, look for the **Answer type** box in the sidebar. Select your type:

![Choose LearnDash question type](https://learndash.com/support/wp-content/uploads/2019/03/learndash-choose-question-answer-type-400x396.jpg)

## Question Title & Text

The question title is only for internal use and is not displayed to the user.

The question text is where you type the question you would like to display to the user. Question text uses the classic WordPress editor, so you can insert images, format your text, and use custom HTML.

![LearnDash question title & text area](https://learndash.com/support/wp-content/uploads/2019/03/learndash-quiz-question-title-text-admin.jpg)

## Points to be Awarded

You have the ability to designate points for each question answered correctly in a quiz. Points are available for all question types, and the points field is required for all questions. The default for the points field is set to 
```
1
```

, and is customizable to your preference. Points are only awarded when the question is answered correctly.

Points can also be [hidden in your quiz display settings](https://learndash.com/support/docs/core/quizzes/quiz-display/#additional_question_options).

![Choose points to be awarded for a question](https://learndash.com/support/wp-content/uploads/2019/03/learndash-questioin-choose-points-to-be-awarded.jpg)

In addition to whole numbers, users can utilize **decimal points and negative numbers**in the grading system.

1. **Decimal Points**:
- Decimal points allow users to enter fractional values (numbers with decimal places) in the grading system.
- Decimal points are supported for all question types except for **Assessment questions**.
2. **Negative Points**:
- Negative point values allow users to deduct points for incorrect answers.
- Negative points are **not supported**for **Essay/Open Answer**questions and **Assessment**question types. Users cannot assign negative scores to these specific question types.

This flexibility allows for more precise scoring, especially when dealing with partial credit or nuanced answers. The points system plays a crucial role in assessing learners performance, and the ability to use decimal points and negative numbers enhances its accuracy.

![LearnDash Decimal Points](https://learndash.com/support/wp-content/uploads/2024/04/learndash-decimal-points.png)

**NOTE**For quiz questions with different points per answer, decimal values are limited to two decimal places.

To adjust points for a question:

1. Find the **Points** box in the sidebar (You also have the option to customize the points awarded for each question in the quiz builder. Please see [this page for instructions](/support/docs/core/quizzes/quiz-builder/#points-1).)
2. Update the number of points to be awarded

If you’d like to award different numbers of points based on the specific answer given:

1. Check the **Different points for each answer** box
2. In the **Answers** box, where you add your answers, you’ll see a box labeled “Points”
3. Enter the number of points to be awarded for each specific answer (You can also set different points for each answer via the quiz builder. Please see [this page for instructions](/support/docs/core/quizzes/quiz-builder/#points-1))

Here’s an example when each answer has different assigned points:

![](https://learndash.com/support/wp-content/uploads/2024/04/DecimalPoints.gif)

**Negative Value as Quiz Points**

To award negative points, simply enter a negative value in the Points field.

For example, suppose you have a multiple-choice question with three answer options:

1. Correct Answer (worth 5.5 points)
2. Another Correct Answer (worth 5 points)
3. Incorrect Answer (worth -2.5 points)

- If a user selects the first correct answer, they gain 5.5 points.
- If they choose the second correct answer, they earn another 5 points.
- However, selecting the incorrect answer results in a deduction of -2.5 points.

![](https://learndash.com/support/wp-content/uploads/2024/04/Negative-Scoring.png)

Here’s an example of what the user will see if the wrong answer is selected:

![](https://learndash.com/support/wp-content/uploads/2024/04/NegativeValue-SubtractIncorrectAnswerPoints.gif)

## Question Categories

Question categories are available for all question types. They are completely optional, but you can use them to:

- better organize all of your quiz questions
- provide the user with quiz statistics broken down by category

![LearnDash question category selection](https://learndash.com/support/wp-content/uploads/2019/03/learndash-choose-question-category-metabox.jpg)

To place a question in a category:

1. Find the **Question Category** box in the sidebar
2. Click the dropdown
3. Choose an existing category, or select “Create new category” and give your new category a name

### Update or Delete Categories

To delete a question category or update its title:

1. Navigate to LEARNDASH LMS > QUESTIONS
2. Click on the **Settings** tab
3. In the **Question Taxonomies** section, click the dropdown to “Select a category”
4. Click the **Delete** button to delete it, or
5. Update its title and then click **Update**

![How to update a LearnDash question taxonomy title](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-taxonomies-update-title-animation.gif)

At the end of a quiz, you can choose to display the percentage score the user received in each category of questions:

![LearnDash quiz category, results display on frontend](https://learndash.com/support/wp-content/uploads/2019/03/learndash-quiz-categories-results-display-frontend.jpg)

## Hints

![Add hint for LearnDash quiz question](https://learndash.com/support/wp-content/uploads/2019/03/learndash-quiz-question-add-hint-animation.gif)

Hints are available for all question types. They are completely optional but can help direct a user in the right direction when answering a question. When enabled, a button will appear below the question. Clicking that button will reveal a popup with the hint.

To enable a hint for a question:

1. On the Edit Question screen, scroll down to the **Hint** box
2. Check the box to **Activate hint for this question?**
3. Enter your hint in the box

Hints use the classic WordPress editor, so you can include images, lists, formatting & custom HTML.

## Quiz Question Types

### Single Choice

Single choice means there is **only one correct answer**. This is the most common question format for standardized tests. You should also use this question type for **True or False** questions.

- There is no limit to the number of incorrect answers you provide
- Choose the correct answer by selecting the radio button for “Correct”
- Check the “Allow HTML” box if you’d like to use HTML in your answer
- Add images or other media by clicking the “Add Media” button
- Delete an answer by clicking the “Delete answer” button
- Add a new answer by clicking the “Add new answer” button
- Move answers around by long-pressing the “Move” button and dragging the answer up or down

Setting up a single-choice question in the admin area looks like this:

![LearnDash single choice question in admin](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-single-choice-answers-admin.jpg)

Here’s an example of what the user will see. This uses the [LearnDash 3.0 theme](https://learndash.com/support/docs/core/settings/general-settings/#learndash_theme) with the correct answer selected.

![LearnDash single choice question frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-single-choice-frontend-example.jpg)

**Different Points Per Answer in Single Choice**By default, only the correct answer earns points for the Single Choice question type. However, when the “Different points per answer” and “Different points – modus 2 activate” options are enabled, incorrect answers also affect the user’s score.

Here’s what it looks like in the admin area when the “Different points per answer” and “Different points – modus 2 activate” options are enabled in the Single Choice question type:

![](https://learndash.com/support/wp-content/uploads/2024/04/Different-Points-Per-Answer-in-Single-Choice.png)

You also have the option to allocate positive points to every answer, while negative point values are deducted from the total Quiz points. This variation allows for diverse assessment strategies.

![](https://learndash.com/support/wp-content/uploads/2024/04/Different-Points-Per-Answer-in-Single-Choice-with-positive-and-negative-point-values-1.gif)

### Multiple Choice

Multiple-choice questions **support multiple correct answers**. In order for the question to be marked correct, users must select **ALL** of the correct answers. If the user only selects some correct answers, the question is marked incorrect.

- There is no limit to the number of correct or incorrect answers you provide
- The rest of the setup options are the same as single-choice questions

Setting up a multiple-choice question in the admin area looks like this:

![LearnDash multiple choice question, admin setup](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-multiple-choice-admin-setup.jpg)

Here’s an example of what the user will see. This uses the LearnDash 3.0 theme with the correct answers selected.

![LearnDash multiple choice question, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-multiple-choice-frontend-example.jpg)

**Subtract Points for Incorrect Answer**You can choose to subtract points when the user selects an incorrect answer. Note that negative scoring is calculated on a per-question basis.

1. In the**Points**box, enable the option for Different points for each answer
2. Provide a number of points for the incorrect answer
3. This value will then be subtracted from the questions total points

![Negative Scoring Setting](https://learndash.com/support/wp-content/uploads/2019/03/Screen-Shot-2019-08-13-at-3.17.20-PM.png)

### 

### Free Choice

Free-choice questions give the user an input field where they must type the correct answer.

- You can choose to accept only one answer, or multiple possible answers
- Answers may be one-word or multiple words
- Capitalization does **not** matter. BLUE, Blue and blue are all scored the same.

**Example:** If you ask “What color is the sun?”, you can choose to accept yellow, orange or white. If the user enters any one of these answers, the question is marked correct.

Setting up a free choice question in the admin area looks like this:

![LearnDash free choice question, admin setup](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-free-choice-admin-setup.jpg)

Here’s an example of what the user will see. This uses the LearnDash 3.0 theme with the correct answers selected.

![LearnDash free choice question, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-free-choice-frontend-example.jpg)

**Different Points Per Answer in Free Choice**To customize the points awarded for each possible answer in the Free Choice mode, simply enable the Different points for each answer box. Additionally, you have the flexibility to set whole numbers, decimal points, and even negative values for the pointing system. Please see [this page for instructions.](/support/docs/core/quizzes/questions/#points-to-be-awarded)

```
Correct Answer| 10.5
Wrong Answer| -5.5
```

In this example, the answer Correct Answer is awarded 10.5 points, and Wrong Answer deducts -5.5 points from the total Quiz points..

![](https://learndash.com/support/wp-content/uploads/2024/05/Different-Points-Per-Answer-in-Free-Choice-with-positive-and-negative-point-values.gif)

### Sorting Choice

Sorting choice questions asks the user to place a series of answers in the correct order. When creating the question, the order of the answers in the backend will be considered the correct order.

Setting up a sorting choice question in the admin area looks like this:

![LearnDash sorting choice question, admin setup](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-sorting-choice-admin-setup.jpg)

Here’s an example of what the user will see. This uses the LearnDash 3.0 theme.

![LearnDash sorting choice question, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-sorting-question-frontend-example.gif)

### Matrix Sorting Choice (Matching)

Matrix sorting questions should be used when you want the user to match two items together. There are two parts to a matrix sorting question:

- **Criterion:** These are static & cannot be moved.
- **Sort elements:** These are what users will drag & drop to the correct criterion.

Each sort element must be unique, and only one-to-one associations are supported.

Your answer area will be set up like a table, with the criterion on the left and an open area to drag & drop sort elements on the right. You have the option to set a percentage width for the criterion column.

Setting up a matrix sorting choice question in the admin area looks like this (the example uses images for the criterion):

![LearnDash matrix sorting question, admin setup](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-matrix-sorting-admin-setup.jpg)

Here’s an example of what the user will see. This uses the LearnDash 3.0 theme.

![LearnDash matrix sorting choice question, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-sorting-matrix-question-frontend-example.gif)

### Fill in the Blank

Fill in the Blank questions allow you to insert a blank line(s) in the middle of a sentence or paragraph. Users then type the correct answer into this empty field.

- If more than one blank exists, all blanks must be answered correctly for the entire question to be marked correct.
- Capitalization does **not** matter. PLAY, Play and play are all scored the same.
- Blank spaces are created by providing the correct answer inside of curly braces 
```
{
```

 and 
```
}
```

.

**Example Format**

- **Admin Setup:** 
```
I {play} soccer.
```
- **User Sees:** 
```
I ____ soccer.
```

The correct answer is “play”.

**Multiple Possible Answers**

To allow for multiple possible answers, enclose each possible answer with square brackets 
```
[
```

 and 
```
]
```

. You still use 
```
{
```

 and 
```
}
```

 to create the blank space.

```
I {[play][love][hate]} soccer.
```

In this example, the user can enter “play,” “love” or “hate,” and they would all be accepted as correct.

**Different Points Per Answer**

![Different points for each answer](https://learndash.com/support/wp-content/uploads/2019/03/Different-points-for-each-answer.png)

To edit this and other questions settings:

1. Navigate to LEARNDASH LMS > Questions
2. Select the question that you want to update the settings
3. Click “Edit”

From here, you will be able to see all the question settings on the right-hand side, including the option for “Different points for each answer”.

If the “Different points for each answer” option is selected, you can assign points to each possible answer. Otherwise, 1 point will be awarded for each correct answer. To assign points to an answer, enter the pipe character 
```
|
```

 immediately following the answer, and then enter the number of points.

```
I {play} soccer, with a {ball|3}.
```

In this example, the answer “play” is awarded 1 point, and “ball” is awarded 3 points.

Setting up a fill in the blank question in the admin area looks like this:

![LearnDash fill in the blank question, admin setup](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-fill-in-blank-admin-setup.jpg)

Here’s an example of a fill in the blank question used for math equations, where there is only one possible correct answer for each blank.

![LearnDash fill in the blank question, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-fill-in-blank-question-frontend-example-math.jpg)

Another example is using **decimal points and negative point value** for fill in the blank question type:

```
I {[love|5][hate|-2.50]} soccer!
```

The answer “love” is awarded 5 points, and “hate” deducts -2.50 points. Here’s an example of a fill in the blank question with decimal points and negative point value:

![Fill in the blank quiz](https://learndash.com/support/wp-content/uploads/2024/05/differentpointsperanswer-decimal-negativepoints-fillintheblanks.gif)

### Assessment (Survey)

Assessment questions allow for the use of a [Likert scale](https://en.wikipedia.org/wiki/Likert_scale). This question type is perfect for **surveys** or any time you’re asking a user to **rate something on a scale**.

- Only one answer may be selected
- You can add text/images before and/or after the scale
- There is no limit to the number of options available in the assessment
- Enclose the entire assessment with curly braces 
```
{
```

 and 
```
}
```
- Enclose each individual answer with square brackets 
```
[
```

 and 
```
]
```
- The maximum possible score is equal to the total number of options

**Examples:**

1. ```
less true { [1] [2] [3] [4] [5] } more true
```
2. ```
{ [disagree] [not sure] [agree] }
```

**Example 1:** 
```
1
```

 is the least true; it’s worth 1 point. 
```
5
```

 is the most true; it’s worth 5 points.

**Example 2:** 
```
disagree
```

 is worth 1 point. 
```
not sure
```

 is worth 2 points. 
```
agree
```

 is worth 3 points.

**TIP**

This type of question is great for pre-course or end-of-course surveys.

Setting up an assessment question in the admin area looks like this:

![LearnDash assessment question, admin setup](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-assessment-admin-setup.jpg)

Here’s what the user sees:

![LearnDash assessment question, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-assessment-frontend-example.jpg)

### Essay / Open Answer

Essay questions allow the user to enter a **free-form answer**. You can choose between two types of essay questions:

- **Text Box:** Displays a 
```
<textarea>
```

 form field for the user to enter any text they’d like.
- **Upload:** Displays an upload button that allows the user to upload a file.

![2 types of LearnDash essay questions](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-essay-two-types-admin.jpg)

Essays come with 3 options for how they are graded after the quiz is submitted:

- **Not Graded, No Points Awarded:** The essay question is submitted and awaiting a grade. The final quiz grade will be displayed as “Pending” to the user.
- **Not Graded, Full Points Awarded:** Awards full points for the essay submission, but its status remains “Not Graded.” An admin can grade the essay at a later date, and adjust the awarded points.
- **Graded, Full Points Awarded:** Automatically mark the essay as “Graded” and award full points.

![LearnDash grading options for essay questions](https://learndash.com/support/wp-content/uploads/2019/03/learndash-question-essay-grading-options-admin.jpg)

Options for showing messages for correct or incorrect answers should not be filled in for Essay/Open questions since it is user submitted and cannot be graded at the time of submission.

#### Course Progression

A user can only progress if the following two things are true:

- The essay is marked as “Graded,” and
- The user has enough quiz points to move on (configured in the quiz’s settings)

**IMPORTANT**

If no points are immediately awarded for the essay, this (temporarily) counts against the final score. If the total points obtained from the other quiz questions meets the passing threshold, the user can continue with the course. However, if they do not earn enough points to meet the passing threshold, they will not be able to continue.

Here’s an example of a “Text Box” essay:

![LearnDash essay questions, text box type, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-essay-open-answer-question-frontend-example.jpg)

Here’s an example of an “Upload” essay:

![LearnDash essay questions, upload type, frontend example](https://learndash.com/support/wp-content/uploads/2019/03/learndash-essay-upload-question-frontend-example.jpg)

For more on essay management & grading, please see our [full documentation on essays](https://learndash.com/support/docs/core/quizzes/essays/)

## Quiz Questions Audio Formats

Because LearnDash runs on WordPress, any WordPress-supported audio files can be used in your quizzes:

- .mp3
- .m4a
- .ogg
- .wav

**NOTE**: Not all web hosts permit the upload of these files, and they may not permit large file uploads. If you are having issues, please check with your host first.

## Quiz Scores and Answers

Administrators can view overall quiz scores for students with the built-in [LearnDash reporting](https://learndash.com/support/docs/reporting/user-data/) and with [ProPanel](https://learndash.com/support/docs/reporting/propanel). Individual answers to questions can be viewed on the [Quiz Statistics](https://learndash.com/support/docs/reporting/user-data/#quiz_statistics) page.

**NOTE**The **Quiz Statistics** option must be turned ON in order for data to be gathered.

If the**Quiz Statistics** option is turned on in the Quiz settings, your users will be able to view their previous answers in two ways:

- **Immediately after taking the quiz:**Immediately after taking the quiz, and the user wants to review their answers, click on the “View Questions” button.
- **Via the user’s profile page:** If the user wants to view their previous quizzes’ responses and answers, including essays, they need to go to their “Profile” or “My Account” page and click on the paper icon under the “Statistics” column.

![Quiz statistics icons on the profile page](https://learndash.com/support/wp-content/uploads/2019/03/Quiz-statistics-preview-old-quizzes-1.png)

If you have turned off the**Quiz Statistics**setting on your quiz, all the data captured during the time the setting was turned off will not be captured nor attributed to a specific user. Also, even if that option is turned on after the quiz is taken, the setting is not retroactive. Meaning, the data will still not be attributed to a user in the **Quiz Statistics**.

Conversely, if the**Quiz Statistics**setting is initially on and you turn it off, your users will still be able to view their logged answers for that particular quiz. And the data is still retained in the **Quiz Statistics**.

---

