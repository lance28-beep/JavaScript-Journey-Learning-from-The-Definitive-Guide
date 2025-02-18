// 5.2 Compound and Empty Statements
        // Let's dive into Compound and Empty Statements in JavaScript!

        // Think about writing instructions. Sometimes you have a single, simple instruction. Other times, you need to give a bunch of instructions together as a group. That's what compound statements are for in JavaScript! And sometimes, you need to say "do nothing here," and that's where empty statements come in.

        // 1. Compound Statements (Statement Blocks) - Grouping Instructions

        // Imagine you're giving directions to someone.  Sometimes you want to say:

        // "Go straight, THEN turn left, THEN walk two blocks."

        // You have multiple actions ("go straight", "turn left", "walk two blocks"), but you're presenting them as a single set of instructions to follow in order.

        // Compound statements in JavaScript are like putting multiple JavaScript instructions together inside curly braces {} to treat them as if they were one single instruction. We often call these statement blocks.

        // Syntax - How to write them: You just put curly braces {} around a bunch of JavaScript statements.

        // JavaScript

        // {
        //   statement1;
        //   statement2;
        //   statement3;
        //   // ... more statements inside ...
        // }
        // Example from the Text:

        // JavaScript

        // {
        //   x = Math.PI;             // Statement 1: Assign value to x
        //   cx = Math.cos(x);        // Statement 2: Calculate cosine and assign to cx
        //   console.log("cos(π) = " + cx); // Statement 3: Print to console
        // }
        // This whole block of code { ... } is treated by JavaScript as one single compound statement.

        // Key Things to Notice about Statement Blocks:

        // No Semicolon at the End of the Block:  Notice that the **curly brace } at the end of the block does not have a semicolon ; after it.  The individual statements inside the block do end with semicolons, but the block itself doesn't need one.

        // Indentation is for Readability (but Optional):  The text mentions that indenting the lines inside the curly braces is good practice.  It makes your code much easier for humans to read and understand the structure.  However, JavaScript itself doesn't require indentation to understand the code. It's just a style thing for us.

        // Why Use Compound Statements? -  Where JavaScript Expects One Statement, You Can Give Many!

        // JavaScript syntax often expects you to put a single statement in certain places. For example:

        // The body of an if statement: if (condition) statement;
        // The body of a while loop: while (condition) statement;
        // The body of a for loop: for (initialization; condition; increment) statement;
        // But what if you want to do multiple things inside an if, while, or for? You can't just write multiple statements in a row directly in those places, because JavaScript is only expecting one statement there according to its rules.

        // This is where statement blocks come to the rescue!  By wrapping multiple statements in curly braces {}, you create a compound statement. JavaScript sees this compound statement as a single unit, and you can use it anywhere JavaScript expects a single statement, like in the body of an if, while, or for.

        // Example - if statement with a block:

        // JavaScript

        // let temperature = 28;
        // let isRaining = true;

        // if (temperature > 25) { // 'if' expects one statement here, but we give a block:
        //   console.log("It's warm!"); // Statement 1 inside the block
        //   if (isRaining) {          // Statement 2 (nested 'if') inside the block
        //     console.log("And it's raining.");
        //   } else {
        //     console.log("But it's sunny.");
        //   }
        // }
        // In this example, the entire block { console.log(...); if (...) { ... } else { ... } } is treated as the single statement that is the body of the outer if statement.

        // 2. Empty Statements -  Doing Absolutely Nothing (Intentionally)

        // Now, for the opposite - what if you want to put a statement where JavaScript expects one, but you actually want to do nothing at all?  That's where the empty statement comes in.

        // Syntax - How to write it:  It's incredibly simple: just a semicolon ; by itself.

        // JavaScript

        // ;  // That's it!  This is an empty statement.
        // What it does:  When JavaScript encounters an empty statement, it does absolutely nothing.  The JavaScript interpreter just moves on to the next line of code. It's like a "no-op" - no operation.

        // Why Use Empty Statements? -  For Loops with All Logic in the Header

        // The most common (and almost only) place where you might intentionally use an empty statement is in the body of a loop, especially a for loop, when all the work you want to do is already happening in the loop's setup (initialization, condition, increment) part.

        // Example from the Text - Initializing an Array to Zeros:

        // JavaScript

        // let a = [1, 2, 3, 4, 5]; // Assume 'a' is an array

        // for (let i = 0; i < a.length; a[i++] = 0) ; // <--- Empty statement here!
        // Let's break this for loop down:

        // for (let i = 0; ...): Initialization - set i to 0.
        // ...; i < a.length; ...: Condition - loop as long as i is less than the length of array a.
        // ...; a[i++] = 0): Increment/Action - This is where the magic happens!
        // a[i++] = 0: This expression does two things:
        // It sets the element at index i of array a to 0.
        // i++ (post-increment) increases the value of i by 1 after using the current value of i as the index.
        // ; (Empty Statement - Loop Body): Because all the work (setting array elements to 0 and incrementing i) is already done in the increment part of the for loop, we don't need to do anything inside the loop body itself. JavaScript syntax still requires a statement as the loop body, so we use an empty statement ; to satisfy that requirement.
        // After this loop runs, every element in array a will be set to 0.

        // Caution - Accidental Empty Statements (Bugs!)

        // The text warns about accidentally putting a semicolon where you don't intend to, especially after the parentheses of if, while, or for statements.  This can lead to bugs that are hard to spot!

        // Example - Accidental Semicolon with if:

        // JavaScript

        // let a = 0;
        // let b = 1;
        // let o;

        // if ((a === 0) || (b === 0)); // <--- Oops! Accidental semicolon here!
        //   o = null;                   // This line is ALWAYS executed, regardless of the 'if' condition!
        // Problem: The semicolon ; right after if ((a === 0) || (b === 0)) creates an empty statement as the body of the if.  So, the if statement itself does... absolutely nothing!  It checks the condition, and then executes the empty statement (which does nothing).

        // The line o = null; is not part of the if statement anymore because the if statement ended with the empty statement (the semicolon). So, o = null; is just a regular statement that runs after the if is completely finished, meaning o will always be set to null, regardless of whether a or b were zero!  This is almost certainly not what the programmer intended.

        // Comment Intentional Empty Statements! -  Make it Clear You Did It on Purpose

        // When you intentionally use an empty statement (like in the for loop example above), it's excellent practice to add a comment to make it very clear to anyone reading your code (including yourself later!) that you meant to put an empty statement there, and it's not an accidental bug.

        // Example - Commented Empty Statement:

        // JavaScript

        // for(let i = 0; i < a.length; a[i++] = 0) /* empty loop body intentionally */ ;
        // The comment /* empty loop body intentionally */ signals to readers: "Yes, this semicolon is here on purpose.  The loop body is intentionally empty because all the action is in the loop header."

        // In Simple Words - Summary of Compound and Empty Statements:

        // Compound Statement (Statement Block {}): Use curly braces to group multiple JavaScript statements together so they can be treated as a single statement, especially useful where JavaScript syntax expects only one statement (like in if, while, for bodies).

        // Empty Statement ;: A semicolon by itself that does nothing.  Rarely used intentionally, mainly for creating for loops where all the work is done in the loop header. Be very careful not to accidentally create empty statements, especially with if, while, and for, as it can lead to subtle bugs. Comment intentional empty statements clearly.

// 5.3 Conditionals
/*
Let's learn about Conditional Statements in JavaScript.  Imagine you're making decisions in your code, just like you do in real life! Conditional statements are how your JavaScript code can "decide" what to do next based on whether something is true or false.

Think of them as the "decision points" in your program. They let your code take different paths depending on certain conditions.

JavaScript has a few main ways to make these decisions: if, else if, and switch. Let's explore them one by one!

1. if Statement - The Basic Decision Maker

The if statement is the simplest way for your code to make a choice. It's like saying:

" IF this condition is true, THEN do this action."

JavaScript has two basic forms of the if statement:

Form 1: if (condition) statement; (or with a block {})

JavaScript

if (condition)
  statement; // Single statement to execute if 'condition' is true
How it works:

JavaScript first checks the condition inside the parentheses (). The condition is an expression that will be evaluated to either true or false (or more precisely, a truthy or falsy value - remember those from Chapter 3.4?).
If the condition is TRUE (or truthy): JavaScript will execute the statement that comes right after the if.
If the condition is FALSE (or falsy): JavaScript will skip the statement and move on to the next part of your code after the if statement.
Examples:

JavaScript

let username; // username is initially undefined

if (username == null) { // Condition: Is username null or undefined? (Truthy if yes)
  username = "Guest User"; // Statement: Assign "Guest User" to username
}
console.log("Welcome, " + username); // This line always runs, after the 'if' is done
// Output if username was initially undefined: Welcome, Guest User

let count = 0;
if (!count) { // Condition: Is 'count' falsy? (0 is falsy, so !count is truthy)
  count = 1;  // Statement: Set count to 1
}
console.log("Count is now: " + count); // Always runs
// Output: Count is now: 1
Important Notes about if (Form 1):

Parentheses () around the condition are REQUIRED.  You must have if (condition) ..., not just if condition ....

JavaScript expects only ONE statement right after the if condition. If you need to do multiple things when the condition is true, you must use a statement block (curly braces {}).

Using Statement Blocks {} with if:

It's very common to use curly braces {} to create a statement block even if you only have one statement to execute. This makes your code clearer and easier to extend later.

JavaScript

if (!address) { // Condition: Is 'address' falsy?
  address = ""; // Statement 1: Initialize address to empty string
  let message = "Please enter your address."; // Statement 2: Declare a message
  console.log(message); // Statement 3: Print the message
}
Here, the whole block inside {} is treated as a single "compound statement" (remember those from the previous section?), which is allowed after the if.

Form 2: if (condition) statement1 else statement2; (or with blocks)

The second form adds an "else" part. Now it's like saying:

"IF this condition is true, THEN do action 1, ELSE (if it's false) do action 2."

JavaScript

if (condition)
  statement1; // Execute if 'condition' is true
else
  statement2; // Execute if 'condition' is false
How it works:

JavaScript checks the condition.
If the condition is TRUE (or truthy): JavaScript executes statement1 and skips statement2.
If the condition is FALSE (or falsy): JavaScript skips statement1 and executes statement2.
Example:

JavaScript

let messages = 5;

if (messages === 1) { // Condition: Are there exactly 1 message?
  console.log("You have 1 new message."); // Statement 1: For 1 message
} else { // Else (if messages is NOT 1)
  console.log(`You have ${messages} new messages.`); // Statement 2: For other counts
}
// Output if messages is 5: You have 5 new messages.
// Output if messages is 1: You have 1 new message.
Important Notes about if/else (Form 2):

Again, you can use statement blocks {} for statement1 and statement2 if you need to execute multiple statements in either the if part or the else part.

Ambiguity with Nested if/else - Be Careful!

The text points out a common problem when you have if statements nested inside other if statements, especially with else clauses.  It can become confusing which else belongs to which if if you don't use curly braces carefully.

Example - Potentially Confusing Nested if/else (Without Braces):

JavaScript

let i = 1, j = 1, k = 2;

if (i === j) // Outer 'if'
  if (j === k) // Inner 'if' (body of outer 'if')
    console.log("i equals k"); // Body of inner 'if'
  else
    console.log("i doesn't equal j"); // Which 'if' does this 'else' belong to?
Rule:  In JavaScript (and many other languages), an else clause always belongs to the nearest preceding if statement that doesn't already have an else.

In the example above, the else is associated with the inner if (j === k). So, JavaScript interprets it as:

JavaScript

if (i === j) { // Outer 'if'
  if (j === k) { // Inner 'if'
    console.log("i equals k");
  } else { // 'else' belongs to the INNER 'if'
    console.log("i doesn't equal j"); // This is executed if (j === k) is false
  }
}
This can be very confusing if your indentation suggests something else (as in the original example in the text).

Best Practice: ALWAYS Use Curly Braces {} for if and else bodies, even if they are single statements! This makes your code much clearer and avoids ambiguity and potential bugs.

Clearer Example with Curly Braces:

JavaScript

let i = 1, j = 1, k = 2;

if (i === j) { // Outer 'if' block
  if (j === k) { // Inner 'if' block
    console.log("i equals k");
  }
} else {  // 'else' block clearly belongs to the OUTER 'if'
  console.log("i doesn't equal j"); // Executed if (i === j) is false
}
Now it's perfectly clear which else goes with which if because of the curly braces!

2. else if Chains -  Checking Multiple Conditions in Order

What if you have more than two choices?  You want to check a series of conditions, one after another.  This is where the else if pattern comes in handy.

else if is not actually a separate JavaScript statement. It's just a common programming trick built using nested if/else statements to make your code cleaner when you have multiple related conditions.

else if Structure:

JavaScript

if (condition1) {
  // Execute code block #1 if condition1 is true
} else if (condition2) { // 'else if' - another condition to check if condition1 was false
  // Execute code block #2 if condition2 is true (and condition1 was false)
} else if (condition3) { // You can have as many 'else if's as you need
  // Execute code block #3 if condition3 is true (and condition1 and 2 were false)
} else { // Optional 'else' at the end - if none of the 'if' or 'else if' conditions were true
  // Execute code block #4 if all previous conditions were false
}
How it works:

JavaScript checks condition1.
If condition1 is true, it executes "code block #1" and then jumps to the end of the whole if-else if-else structure.
If condition1 is false, it moves to the first else if and checks condition2.
If condition2 is true, it executes "code block #2" and jumps to the end.
If condition2 is false, it goes to the next else if (if any) and checks condition3, and so on.
If none of the if or else if conditions are true, and there's an else clause at the very end, it executes "code block #4" (the final else block).
If no if or else if conditions are true, and there's no final else block, then JavaScript just skips the entire if-else if-else structure and continues with the code after it.
Example - Grading System:

JavaScript

let grade = 85;

if (grade >= 90) {
  console.log("Excellent! Grade: A");
} else if (grade >= 80) { // Condition checked only if grade < 90
  console.log("Very good. Grade: B");
} else if (grade >= 70) { // Condition checked only if grade < 80
  console.log("Good. Grade: C");
} else if (grade >= 60) { // Condition checked only if grade < 70
  console.log("Satisfactory. Grade: D");
} else { // If grade < 60 (all previous conditions were false)
  console.log("Needs Improvement. Grade: F");
}
// Output for grade 85: Very good. Grade: B
Benefit of else if:

Readability and Efficiency: else if chains are much easier to read and understand than deeply nested if/else statements when you have multiple conditions to check that are related to each other. They are also a bit more efficient because once one condition is true and its code block is executed, JavaScript skips checking any further else if or else conditions.
3. switch Statement - Multi-Way Branching Based on a Single Value

The switch statement is designed for situations where you need to choose between many different code paths based on the value of a single expression. It's like a more organized and sometimes more efficient way to handle multiple else ifs when all conditions are checking the same expression against different possible values.

switch Statement Structure:

JavaScript

switch (expression) { // 'expression' is evaluated once
  case value1:       // If 'expression === value1' (strict equality)
    // Code to execute if expression is value1
    break;           // Important! Exit the 'switch' after this case
  case value2:       // If 'expression === value2'
    // Code to execute if expression is value2
    break;           // Important! Exit after this case
  case value3:       // ... and so on for more cases ...
    // Code for value3
    break;
  default:          // Optional 'default' case - if 'expression' matches none of the cases
    // Code to execute if no 'case' matched
    break;           // Break is optional in 'default' but good practice
}
How switch Works:

Evaluate the switch (expression): JavaScript first calculates the value of the expression inside the parentheses of switch. This expression is evaluated only once at the beginning.

Match case Values: JavaScript then looks at each case value in order, from top to bottom. For each case value, it compares it to the result of the switch (expression) using strict equality (===).  Important: It's ===, not ==. No type conversion happens in switch's case matching!

Find a Match (or default):

If a case value matches (using ===) the switch expression value: JavaScript starts executing the code from that case label onwards, going down through all the statements until it hits a break statement or reaches the end of the switch block.
If no case value matches: JavaScript looks for a default: label.
If a default: label is present: JavaScript starts executing the code from the default: label onwards until it hits a break or the end of the switch block.
If there's no default: label and no case matched: JavaScript skips the entire switch block and does nothing inside it.
break is Crucial to Stop "Fall-Through":  The break; statement at the end of each case block is extremely important in most switch statements.

break Keyword: When JavaScript encounters a break; statement, it immediately jumps out of the switch statement and continues executing the code after the switch block.
Without break (Fall-Through): If you forget to put break; at the end of a case block, JavaScript will "fall through" and continue executing the code in the next case block, and the next, and so on, until it either hits a break or the end of the switch block. This "fall-through" behavior is sometimes intentionally used in rare situations, but 99% of the time, it's likely a bug if you forget break and don't intend to fall through.
Example - Converting Type to String:

JavaScript

function convertValueToString(x) {
  switch (typeof x) { // Switch based on the TYPE of x (e.g., "number", "string", "boolean")
    case "number": // If typeof x === "number"
      return x.toString(16); // Convert number to hexadecimal string
      // break; // Not needed here because 'return' also exits the switch
    case "string": // If typeof x === "string"
      return '"' + x + '"'; // Enclose string in quotes
      // break; // Not needed because of 'return'
    default:       // If typeof x is NOT "number" and NOT "string"
      return String(x); // Use default string conversion for other types
      // break; // Not needed at the end of 'default' case
  }
}

console.log(convertValueToString(255));      // Output: ff (hexadecimal for 255)
console.log(convertValueToString("hello"));  // Output: "hello" (string in quotes)
console.log(convertValueToString(true));     // Output: true (default string conversion for boolean)
Important Notes about switch Statements:

case Values can be Expressions: While often you see constant literals in case labels (like "number", 1, true), the ECMAScript standard actually allows any expression after case. JavaScript will evaluate this expression and compare its value (using ===) to the switch expression's value. However, in practice, it's best to keep case expressions simple, usually constants, for clarity.  Avoid complex expressions or function calls in case labels as it can make your code harder to understand and may have performance implications (in JavaScript, case expressions are evaluated at runtime, unlike in some languages like C++ where they must be compile-time constants).

Strict Equality (===) for Matching: switch uses the strict equality operator === for comparisons. This means the values in case labels must match the switch expression's value without any type conversion.  For example, case 1: will only match if the switch expression evaluates to the number 1, not the string "1".

default: Case Position:  The default: case is usually placed at the end of the switch block, but actually, it can be placed anywhere within the block. It will still only be executed if no other case matches. However, putting it at the end is the logical and conventional way to write switch statements.

break vs. return inside switch: Inside a switch block within a function, you can use either break; or return value; to exit the switch. break; just exits the switch statement and continues with the code after the switch. return value; exits the switch and the function, returning value as the function's result. In the convertValueToString example, we used return because we wanted the function to immediately return the converted string value once a case was matched.

When to Use switch vs. if/else if:

Use switch when:

You are branching based on the value of a single expression and want to compare it to several constant values.
You want to check for strict equality (===) against these values.
Readability can be better than a long if/else if chain when you have many cases based on the same expression.
Use if/else if when:

You have different conditions to check in each branch (not just comparing one expression against different values).
Conditions are more complex (not just simple equality checks).
You need to check for ranges or use logical operators (e.g., if (age > 18 && age < 65)).
You need more flexibility in the conditions.
In Simple Words - Summary of Conditional Statements:

if (condition) { ... }: Do something only if a condition is true.
if (condition) { ... } else { ... }: Do one thing if a condition is true, and do something else if it's false.
else if chains: Check a series of conditions in order, like a cascade of if/elses, to handle multiple related choices.
switch (expression) { case value1: ... break; case value2: ... break; default: ... break; }: Efficient and organized way to branch based on the value of a single expression. Compare the expression's value against different case values using strict equality (===). Remember break to avoid "fall-through"!
Conditional statements are the core of making your JavaScript programs dynamic and responsive! They allow your code to react to different situations and data.
 
*/

// 5.4 Loops
        // Let's explore Loops in JavaScript! Loops are all about repeating a block of code multiple times. Imagine you have a task you need to do again and again, maybe with slight variations each time. Loops are your way to tell JavaScript to do just that!

        // JavaScript gives you several types of loops to choose from: while, do/while, for, for/of, and for/in. Let's look at each one.

        // 1. while Loop - Keep Going as Long as...

        // The while loop is the most fundamental loop in JavaScript. It's like saying:

        // "WHILE this condition is true, KEEP DOING this action."

        // Syntax:

        // JavaScript

        // while (expression)
        //   statement; // Or use a statement block: { statements; }
        // How it Works:

        // Check the expression (the condition): JavaScript first evaluates the expression inside the parentheses (). This expression must result in a truthy or falsy value.
        // If the expression is TRUTHY: JavaScript will execute the statement (or statement block {}) that is the body of the loop.
        // After executing the loop body: JavaScript goes back to step 1 and re-evaluates the expression again.
        // If the expression is now FALSY: JavaScript stops looping. It skips the statement (loop body) and moves on to the code after the while loop.
        // Repeat: Steps 2-4 keep repeating as long as the expression remains truthy.
        // Analogy -  Eating Cookies: Imagine you have a plate of cookies. A while loop is like:

        // While there are still cookies on the plate (condition is true), eat a cookie (execute loop body).

        // You keep eating cookies (loop body executes) as long as there are cookies left (condition is true). Once the plate is empty (condition becomes false), you stop looping (stop eating).

        // Example - Counting from 0 to 9:

        // JavaScript

        // let count = 0; // Initialize a counter variable

        // while (count < 10) { // Condition: Is 'count' less than 10?
        //   console.log(count); // Loop body: Print the current value of 'count'
        //   count++;            // Loop body: Increment 'count' by 1 (very important!)
        // }
        // // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (each on a new line)
        // Key Points about while Loops:

        // Condition is checked before each iteration. If the condition is false right from the start, the loop body will never execute even once.
        // Loop body executes repeatedly as long as the condition is truthy.
        // It's crucial that something inside the loop body changes the condition (or variables involved in the condition) so that the condition eventually becomes false, and the loop can stop. Otherwise, you'll create an infinite loop that runs forever and might crash your program or browser! In the example above, count++; is the crucial part that changes count and eventually makes count < 10 false.
        // You can create an infinite loop intentionally using while (true) { ... }. Sometimes you want a loop that runs until you explicitly break out of it using a break statement (which we'll learn about later).
        // 2. do/while Loop - Do First, Then Check

        // The do/while loop is very similar to the while loop, but with one important difference: the condition is checked after the loop body executes, not before.  This guarantees that the loop body will always run at least once, even if the condition is false from the beginning.

        // Syntax:

        // JavaScript

        // do
        //   statement; // Or use a statement block: { statements; }
        // while (expression); // Note the semicolon ';' at the end!
        // How it Works:

        // Execute the statement (loop body) first.
        // Then, evaluate the expression (the condition) after executing the body.
        // If the expression is TRUTHY: Go back to step 1 and execute the loop body again.
        // If the expression is FALSY: Stop looping and move on to the code after the do/while loop.
        // Analogy -  Getting Directions (Do then Check): Imagine you're asking for directions to a place you've never been. A do/while loop is like:

        // Do whatever the first instruction is (e.g., "Walk straight ahead for 1 block"). Then, while you haven't reached your destination yet (condition is still false), keep following the next instruction (repeat loop body).

        // You follow the first instruction (loop body runs once), and then you keep following more instructions (loop body repeats) as long as you haven't arrived yet (condition is true).  Even if the first instruction gets you to the destination right away, you still followed at least one instruction.

        // Example - Printing Array Elements (with a check for empty array):

        // JavaScript

        // function printArray(arr) {
        //   let length = arr.length;
        //   let i = 0;

        //   if (length === 0) { // Check if array is empty *before* loop
        //     console.log("Empty Array");
        //   } else {
        //     do {
        //       console.log(arr[i]); // Loop body: Print element at index 'i'
        //     } while (++i < length); // Condition: Is 'i' still less than array length? (increment 'i' before checking)
        //   }
        // }

        // printArray([10, 20, 30]); // Output: 10, 20, 30
        // printArray([]);          // Output: Empty Array (if condition prevents loop if empty)
        // Key Points about do/while Loops:

        // Loop body always executes at least once. This is the main difference from while.
        // Condition is checked after each iteration.
        // Like while, you need to make sure the condition will eventually become false to avoid infinite loops.
        // do/while loops are less common than while loops because it's often more logical to check a condition before doing something. You use do/while when you are certain you want the loop body to run at least once, regardless of the initial condition.
        // Syntax Differences from while:
        // Requires both do and while keywords.
        // Must end with a semicolon ; after the while (expression) part. This is important to remember!
        // 3. for Loop - Structured Repetition with Counters

        // The for loop is a very powerful and commonly used loop in JavaScript. It's specifically designed for loops that involve a counter variable that you want to initialize, check a condition based on, and update in each iteration. It's like a more structured and compact way to write certain types of while loops.

        // Syntax:

        // JavaScript

        // for (initialize ; test ; increment)
        //   statement; // Or use a statement block: { statements; }
        // Three Parts in the Parentheses ():  The parentheses after for contain three expressions, separated by semicolons ;:

        // initialize (Initialization Expression): This expression is executed only once, at the very beginning of the loop, before the first iteration starts. Typically used to initialize a counter variable (like setting it to 0).
        // test (Condition Expression): This expression is evaluated before each iteration (including the very first one). It's the loop's condition.
        // If test is truthy, the loop body (statement) is executed.
        // If test is falsy, the loop stops, and JavaScript moves to the code after the for loop.
        // increment (Increment/Update Expression): This expression is executed after each iteration of the loop body, just before the test condition is checked again for the next iteration. Typically used to increment or update the counter variable.
        // statement (Loop Body):  This is the statement (or block) that is executed repeatedly as long as the test condition remains truthy.

        // How it Works (Equivalent while Loop):  A for loop is basically a more organized way of writing a while loop with initialization and update steps.  The text shows this equivalence:

        // JavaScript

        // // for loop:
        // for (initialize ; test ; increment) {
        //   statement;
        // }

        // // is roughly equivalent to this while loop:
        // initialize; // Initialization happens once before the loop
        // while (test) {
        //   statement;
        //   increment; // Increment happens after each loop body execution
        // }
        // Analogy - Counting Steps: Imagine you need to take exactly 10 steps. A for loop is like:

        // For (start at step 0; keep going as long as you've taken fewer than 10 steps; take one more step after each step you've taken), take a step forward (loop body - the action of taking a step).

        // Example - Counting from 0 to 9 (using for loop):

        // JavaScript

        // for (let count = 0; count < 10; count++) { // Initialization: count = 0; Condition: count < 10; Increment: count++
        //   console.log(count); // Loop body: Print 'count'
        // }
        // // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        // Explanation:

        // let count = 0; (Initialization): Runs once at the start. Sets count to 0.
        // count < 10; (Condition/Test): Checked before each iteration. Is count less than 10? Yes (initially 0 < 10). So, loop body will run.
        // console.log(count); (Loop Body): Prints the current value of count.
        // count++ (Increment/Update): Runs after each loop body execution. Increases count by 1. Now count becomes 1.
        // Repeat from step 2: Check condition again: 1 < 10? Yes. Loop body runs again, prints 1, count becomes 2. This repeats until count becomes 10.
        // When count becomes 10, the condition count < 10 becomes false. The loop stops.
        // Comma Operator in for Loops (for Multiple Initializations/Increments):

        // Sometimes you might want to initialize or increment/update multiple variables in a for loop. The comma operator (from Section 4.13.7 in your text) is often used in the initialize and increment parts of a for loop for this. It lets you put multiple expressions in those sections, separated by commas.

        // Example - Multiple variables in a for loop:

        // JavaScript

        // let sum = 0;
        // for (let i = 0, j = 10; i < 10; i++, j--) { // Initialize i=0 AND j=10; Condition: i<10; Increment: i++ AND j--
        //   sum += i * j; // Loop body: Calculate sum based on i and j
        // }
        // console.log("Sum:", sum); // Output: Sum: 330
        // Here, let i = 0, j = 10 initializes both i and j, and i++, j-- increments i and decrements j in each iteration.

        // Omit Parts of the for Loop (But Keep Semicolons!):

        // Any of the three parts (initialize, test, increment) in the for loop's parentheses can be omitted, but the two semicolons ; ; must always be there as placeholders.

        // Omit initialize: If the initialization is done before the loop starts.

        // Omit test:  If you omit the test condition, it's treated as if it's always true, creating an infinite loop (like for (initialize; ; increment) { ... }). for (;;) is another way to write an infinite loop, similar to while (true). You'd need to use break to exit such a loop.

        // Omit increment: If the increment/update is done inside the loop body itself, or not needed.

        // Example - for loop with no initialize (from the text, linked list traversal):

        // JavaScript

        // function tail(o) { // Function to find the "tail" of a linked list 'o'
        //   for (; o.next; o = o.next) { // No initialize; Condition: o.next is truthy; Increment: o = o.next
        //     /* empty loop body */
        //   }
        //   return o; // Return the last object in the list
        // }
        // In this example, the loop has no initialize part. The variable o is assumed to be already initialized before the loop starts (it's passed as an argument to the tail function). The loop continues as long as o.next is truthy, and in each iteration, o is updated to o.next to move to the next node in the linked list. The loop body is empty because all the logic is in the for loop header itself!

        // 4. for/of Loop - Iterate Over Values of Iterables

        // The for/of loop (new in ES6) is designed to easily iterate over the values of iterable objects.  Iterable objects are things that can be "iterated through," meaning you can go through their elements one by one.  Common iterable objects in JavaScript include:

        // Arrays

        // Strings

        // Sets

        // Maps

        // Syntax:

        // JavaScript

        // for (variable of iterableObject)
        //   statement; // Or use a statement block: { statements; }
        // How it Works:

        // JavaScript gets the "iterator" for the iterableObject. An iterator is like a special object that knows how to go through the elements of the iterable.
        // For each element/value in the iterableObject, in order:
        // JavaScript assigns the current element's value to the variable.
        // JavaScript executes the statement (loop body).
        // Analogy -  Going Through a Deck of Cards:  Imagine you have a deck of cards. A for/of loop is like:

        // For each card of the deck, look at the card (loop body).

        // You go through each card in the deck, one by one, and for each card, you perform some action (like looking at it).

        // Example - Summing Array Elements with for/of:

        // JavaScript

        // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // let sum = 0;

        // for (let number of numbers) { // For each 'number' VALUE *of* the 'numbers' array
        //   sum += number;        // Loop body: Add the current 'number' to 'sum'
        // }
        // console.log("Sum:", sum); // Output: Sum: 45
        // Explanation:

        // let number of numbers: This tells the loop to iterate through the numbers array. In each iteration, the value of the current array element is assigned to the variable number.
        // sum += number: The loop body is executed for each number in the numbers array.
        // Iterating Through Strings with for/of (Character by Character):

        // Strings are also iterable, and for/of loops through them character by character (specifically, Unicode code points):

        // JavaScript

        // let message = "Hello!";
        // for (let char of message) { // For each 'char' CHARACTER *of* the 'message' string
        //   console.log(char);      // Loop body: Print the current character
        // }
        // // Output: H, e, l, l, o, ! (each on a new line)
        // Iterating Through Objects (Keys, Values, Entries) with for/of and Object.keys(), Object.values(), Object.entries():

        // Important: Regular JavaScript objects are not directly iterable with for/of by default. If you try for (let prop of myObject) ..., you'll get a TypeError.

        // To iterate through object properties using for/of, you need to use helper methods that return iterable collections based on the object:

        // Iterating over Property Keys (Names): Object.keys(object) - Returns an array of the object's property names (keys). You can then use for/of on this array to loop through the keys.

        // JavaScript

        // let myObject = { x: 1, y: 2, z: 3 };
        // let keysString = "";

        // for (let key of Object.keys(myObject)) { // Iterate over KEYS of myObject
        //   keysString += key;  // Loop body: Append each key to 'keysString'
        // }
        // console.log("Keys:", keysString); // Output: Keys: xyz
        // Iterating over Property Values: Object.values(object) - Returns an array of the object's property values. Use for/of to loop through the values.

        // JavaScript

        // let myObject = { x: 1, y: 2, z: 3 };
        // let valueSum = 0;

        // for (let value of Object.values(myObject)) { // Iterate over VALUES of myObject
        //   valueSum += value; // Loop body: Add each value to 'valueSum'
        // }
        // console.log("Value Sum:", valueSum); // Output: Value Sum: 6
        // Iterating over Key-Value Pairs: Object.entries(object) - Returns an array of arrays, where each inner array is a [key, value] pair for each property in the object.  You can use destructuring assignment in the for/of loop to easily get both the key and value in each iteration.

        // JavaScript

        // let myObject = { x: 1, y: 2, z: 3 };
        // let pairsString = "";

        // for (let [key, value] of Object.entries(myObject)) { // Iterate over [KEY, VALUE] pairs
        //   pairsString += key + value; // Loop body: Combine key and value into a string
        // }
        // console.log("Pairs:", pairsString); // Output: Pairs: x1y2z3
        // Iterating through Sets and Maps with for/of:  Set and Map are built-in iterable objects in JavaScript, so you can directly use for/of on them to iterate through their elements (for Sets) or key-value pairs (for Maps). (See examples in the text - unique words in a set, iterating map entries).

        // 5. for/in Loop - Iterate Over Property Names of Objects

        // The for/in loop is older than for/of and has a different purpose. It's used to iterate over the property names (keys) of an object.  It's not meant for arrays (use for/of for arrays!).

        // Syntax:

        // JavaScript

        // for (variable in object)
        //   statement; // Or use a statement block: { statements; }
        // How it Works:

        // JavaScript evaluates the object expression.
        // For each enumerable property name (key) of the object:
        // JavaScript assigns the property name (as a string) to the variable.
        // JavaScript executes the statement (loop body).
        // Analogy -  Checking Labels on a Box: Imagine you have a box of items. A for/in loop is like:

        // For each label in the box, read the label (loop body - maybe print the label name, or get the item associated with that label).

        // You're going through the labels (property names) attached to the items in the box, not the items themselves directly.

        // Example - Printing Property Values of an Object using for/in:

        // JavaScript

        // let myObject = { a: 100, b: 200, c: 300 };

        // for (let propertyName in myObject) { // For each 'propertyName' NAME *in* 'myObject'
        //   console.log("Property:", propertyName, "Value:", myObject[propertyName]); // Loop body: Print property name and its value (using bracket notation!)
        // }
        // // Output:
        // // Property: a Value: 100
        // // Property: b Value: 200
        // // Property: c Value: 300
        // Explanation:

        // let propertyName in myObject: This loop iterates over the property names of myObject (like "a", "b", "c"). In each iteration, the current property name (string) is assigned to the variable propertyName.
        // console.log(..., myObject[propertyName]);: Inside the loop body, we use bracket notation myObject[propertyName] to access the value associated with the current propertyName.
        // Important Notes about for/in Loops:

        // Iterates over Property Names (Keys), not Values: for/in gives you the names of the properties as strings, not the property values directly (you need to use bracket notation like object[propertyName] to get the value).
        // Enumerates Enumerable Properties: for/in only loops over enumerable properties of an object. Most properties you define in your code are enumerable by default. However, built-in methods and some properties of built-in objects are often non-enumerable and will not be iterated by for/in. (See Section 14.1 in your text for more about enumerability).
        // Order of Enumeration Not Guaranteed (Historically): While in modern JavaScript implementations, property names are often enumerated in the order they were added to the object (especially for simple objects), you should not rely on a specific order in general for for/in loops in older JavaScript environments. If you need a specific order, use Object.keys(object).sort() and then iterate using for/of.
        // Inherited Properties: for/in will also enumerate inherited properties from an object's prototype chain (see Chapter 6 and 9 for inheritance). This can sometimes be unexpected if you only want to iterate over the object's own properties.
        // Not for Arrays (Usually!): While arrays are technically objects in JavaScript, and array indices are property names, using for/in for arrays is generally not recommended and can lead to problems. for/in will iterate over array indices as strings (e.g., "0", "1", "2"), and it might also iterate over any other properties you might have added to the array object (which is not typical but possible). For arrays, always use for/of for iterating over the elements or a regular for loop with numeric indices.
        // Bug Source: Accidental for/in for Arrays:  The text mentions that a common bug is accidentally using for/in when you meant for/of for arrays.  Be careful to choose the right loop type!

        // 6. for/await Loop - Asynchronous Iteration (Advanced Topic)

        // The text briefly mentions for/await. This is for a more advanced topic called asynchronous iteration, which is used when dealing with data that arrives over time, like data streams or network requests.

        // for/await is for Asynchronous Iterables: It's designed to work with asynchronous iterators. You'll need to understand asynchronous programming (Chapters 12 and 13 in your book) to fully understand this loop.

        // Use async Functions: for/await can only be used inside async functions.

        // Example (from the text):

        // JavaScript

        // // Example only - you'll need to learn about async iterators to understand this fully
        // async function printStream(stream) {
        //   for await (let chunk of stream) { // 'await' inside the loop
        //     console.log(chunk);
        //   }
        // }
        // for/await is used when you have a source of data (stream in the example) that provides data in chunks asynchronously (not all at once). The await keyword inside the loop makes the loop pause and wait for each chunk to become available before processing it.

        // In Simple Words - Summary of JavaScript Loops:

        // while (condition) { ... }: Repeat a block of code as long as a condition is true (checked before each iteration).
        // do { ... } while (condition);: Repeat a block of code at least once, and then keep repeating as long as a condition is true (condition checked after each iteration).
        // for (initialize; condition; increment) { ... }: Structured loop for counters, with initialization, condition check, and update steps clearly defined in the loop header.
        // for/of (variable of iterable) { ... }: Loop through the values of iterable objects (arrays, strings, Sets, Maps). Best for arrays!
        // for/in (variable in object) { ... }: Loop through the property names (keys) of objects (enumerable properties only). Use with caution for arrays, usually prefer for/of for arrays and Object.keys(object) + for/of for object keys in many cases.
        // for/await (variable of asyncIterable) { ... }: For asynchronous iteration (advanced topic for later).
        // Loops are essential for automation and repetition in programming. Choose the right loop type based on what you need to iterate over (conditions, counters, values, property names, asynchronous data).

// 5.5 Jumps
  // Let's demystify Jump Statements in JavaScript!

  // Imagine you're reading a book, and suddenly, you're told to "jump to chapter 10" or "go back to the beginning of this paragraph." Jump statements in JavaScript are similar – they make the JavaScript interpreter deviate from the normal top-to-bottom, line-by-line execution of your code. They tell it to "jump" to a different place in your code.

  // Here's a breakdown of the jump statements JavaScript offers:

  // 1. Labeled Statements - Giving Names to Code Blocks

  // Before we get to the jump statements themselves, we need to understand labeled statements.  Labels are like giving names to specific parts of your code, so you can refer to them later, especially for jumps.

  // Syntax - How to label:  Just put an identifier (a name) followed by a colon : right before any JavaScript statement.

  // JavaScript

  // labelName: statement;
  // labelName: Any valid JavaScript identifier (name that follows variable naming rules, not a reserved word).
  // statement: Any JavaScript statement (it's most useful to label loops and conditional statements, or even statement blocks {}).
  // Purpose of Labels: Labels themselves don't change how the code runs normally. Their purpose is to act as targets for break and continue statements.  You can use labels to tell break or continue to jump out of or restart a specific loop or block of code.

  // Example - Labeled while Loop:

  // JavaScript

  // mainloop: while (true) { // 'mainloop' is the label for this while loop
  //   let input = prompt("Enter command (or 'quit'):");
  //   if (input === "quit") {
  //     break mainloop; // 'break' with label 'mainloop' - exits the WHOLE 'mainloop' loop
  //   }
  //   console.log("You entered:", input);
  //   // ... more code inside the loop ...
  //   continue mainloop; // 'continue' with label 'mainloop' - goes to the NEXT iteration of 'mainloop' loop
  //   // ... even more code, will be skipped by 'continue mainloop' ...
  // }
  // console.log("Loop finished."); // Reached after 'break mainloop' is executed
  // Key Points about Labels:

  // You can label any statement, but it's most useful for loops and conditionals.
  // Label names are in a separate "namespace" from variable and function names. You can use the same name as a label and a variable without conflict.
  // Labels are scoped to the statement they are attached to and its substatements. You can't use a label defined inside a statement outside of it.
  // You can't use the same label for a statement that contains it (no self-referential labels). But you can have the same label for two statements that are not nested within each other.
  // Statements can even have multiple labels (though less common).
  // 2. break Statement - Get Out Now!

  // The break statement is used to immediately exit out of a loop (like while, do/while, for, for/of, for/in) or a switch statement. It's like an "emergency exit."

  // JavaScript has two forms of break:

  // Unlabeled break;:  Exits the innermost loop or switch that encloses the break statement.

  // Syntax:  Just break;

  // Example - Breaking out of a for loop early:

  // JavaScript

  // let numbers = [10, 25, 5, 30, 15];
  // let target = 30;
  // let foundIndex = -1; // Initialize to -1 (not found yet)

  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] === target) { // Found the target value!
  //     foundIndex = i;       // Store the index where it was found
  //     break;               // Exit the loop IMMEDIATELY! No need to check further
  //   }
  // }

  // if (foundIndex !== -1) {
  //   console.log(`Target ${target} found at index ${foundIndex}`); // Output: Target 30 found at index 3
  // } else {
  //   console.log(`Target ${target} not found.`);
  // }
  // Usage: Commonly used to stop a loop prematurely when you've found what you're looking for, encountered an error, or reached a specific condition that means you don't need to continue iterating.  You've already seen break used in switch statements to exit each case block.

  // Labeled break labelName;: Exits the enclosing statement that has the given labelName. It's more powerful because you can break out of a loop or even a block of code that's not the immediately enclosing one.

  // Syntax: break labelName;  (no space allowed between break and labelName, and no newline allowed either!)

  // Example - Breaking out of nested loops (or labeled block):

  // JavaScript

  // let matrix = [ // 2D array (matrix)
  //   [1, 2, 3],
  //   [4, NaN, 6], // Oops, NaN value here!
  //   [7, 8, 9]
  // ];
  // let sum = 0;
  // let success = true;

  // computeSum: { // Labeled block - not a loop, just a block of code with a label
  //   for (let i = 0; i < matrix.length; i++) {
  //     let row = matrix[i];
  //     if (!row) { // Check for null or undefined row
  //       success = false;
  //       break computeSum; // Break out of the 'computeSum' block if row is invalid
  //     }
  //     for (let j = 0; j < row.length; j++) {
  //       let cell = row[j];
  //       if (isNaN(cell)) { // Check for NaN (Not-a-Number)
  //         success = false;
  //         break computeSum; // Break out of the 'computeSum' block if cell is NaN
  //       }
  //       sum += cell;
  //     }
  //   }
  //   success = true; // If we get here without breaking, the sum was successful
  // } // End of 'computeSum' block

  // if (success) {
  //   console.log("Sum of matrix:", sum); // Will not output in this example because of NaN
  // } else {
  //   console.log("Error in matrix, sum not calculated."); // Output: Error in matrix, sum not calculated.
  // }
  // In this example, if we find a NaN value in the matrix, we use break computeSum; to jump directly out of the entire labeled computeSum block, not just the inner for loop.  This is useful for handling errors or special conditions in nested structures.

  // No Newline Allowed After break labelName;:  Because of JavaScript's automatic semicolon insertion, you must not put a newline between break and the labelName. If you do, JavaScript might think you meant the unlabeled break; and then get confused by the labelName on the next line.

  // Limitations: break (labeled or unlabeled) cannot jump across function boundaries. You can't label a function definition and then break to that label from inside the function. break is for controlling flow within loops and blocks in the same function.

  // 3. continue Statement - Skip to the Next Round!

  // The continue statement is similar to break, but instead of exiting the loop completely, it skips the rest of the current iteration of the loop and jumps to the beginning of the next iteration.  It's like saying, "I'm done with this round, let's start the next one."

  // Like break, continue also has two forms:

  // Unlabeled continue;: Restarts the innermost enclosing loop at the beginning of the next iteration.

  // Syntax: continue;

  // Example - Skipping undefined data in a for loop:

  // JavaScript

  // let data = [10, undefined, 20, null, 30, 40, undefined];
  // let total = 0;

  // for (let i = 0; i < data.length; i++) {
  //   if (!data[i]) { // Check if data[i] is falsy (undefined, null, 0, false, "", NaN)
  //     console.log(`Skipping invalid data at index ${i}`);
  //     continue;       // Skip the rest of this iteration, go to the next value of 'i'
  //   }
  //   total += data[i]; // Add valid data to the total
  // }
  // console.log("Total sum of valid data:", total); // Output: Total sum of valid data: 100 (10+20+30+40)
  // Behavior in Different Loop Types:  The action of continue depends on the loop type:

  // while loop: Jumps back to the condition check (expression) at the beginning of the loop.
  // do/while loop: Jumps to the condition check at the bottom of the loop (after executing the loop body at least once).
  // for loop: Jumps to the increment expression (increment part) and then to the condition check (test part). Important: In a for loop, the increment expression is still executed before the next iteration begins, even if you use continue.
  // for/of and for/in loops: Jumps to the next iteration, meaning it moves to the next value in the iterable object (for/of) or the next property name in the object (for/in).
  // Labeled continue labelName;: Restarts the next iteration of the labeled loop.

  // Syntax: continue labelName; (again, no space or newline between continue and labelName).

  // Example - Continue outer loop from within inner loop (less common use case):

  // JavaScript

  // outerLoop: for (let i = 1; i <= 3; i++) {
  //   innerLoop: for (let j = 1; j <= 3; j++) {
  //     if (i === 2 && j === 2) {
  //       console.log(`Continuing outer loop from inner loop when i=<span class="math-inline">\{i\}, j\=</span>{j}`);
  //       continue outerLoop; // Skip to the NEXT iteration of the 'outerLoop'
  //       // (effectively skips the rest of the inner loop for the current 'i' and all remaining 'j' values, and goes to i=3)
  //     }
  //     console.log(`i=<span class="math-inline">\{i\}, j\=</span>{j}`);
  //   }
  // }
  // // Output:
  // // i=1, j=1
  // // i=1, j=2
  // // i=1, j=3
  // // i=2, j=1
  // // Continuing outer loop from inner loop when i=2, j=2
  // // i=3, j=1
  // // i=3, j=2
  // // i=3, j=3
  // Note on for vs. while and continue: The text mentions that due to how continue works, it's not perfectly possible to simulate a for loop using just a while loop alone.  In a for loop, continue still executes the increment part before re-checking the condition, while a while loop with continue would just go straight back to the condition check without executing an equivalent "increment" step.  The text shows a try/finally example to almost simulate for behavior with while, but even then, there are subtle differences with break.  In practice, it's best to just use the appropriate loop type (for or while) for your needs and understand how continue behaves in each.

  // 4. return Statement - Send a Value Back from a Function

  // The return statement is specifically for functions. It's used to:

  // Stop the execution of the current function immediately.
  // Send a value back to the code that called (invoked) the function. This value becomes the result of the function call.
  // Syntax:

  // JavaScript

  // return expression; // 'expression' is the value to return
  // expression: Can be any JavaScript expression. The result of evaluating this expression is the value that the function will return. If you omit the expression (just return;), the function returns undefined.
  // Purpose: Functions are often designed to perform a calculation, process data, or get some result. The return statement is how a function communicates its result back to the rest of your program.

  // Example - Function that squares a number:

  // JavaScript

  // function square(x) {
  //   return x * x; // Calculate x squared and return it
  // }

  // let result = square(5); // Call the 'square' function with argument 5
  // console.log("Square of 5 is:", result); // Output: Square of 5 is: 25 (because 'square(5)' evaluates to 25)
  // Explanation:

  // function square(x) { ... }: Defines a function named square that takes one argument x.
  // return x * x;: Inside the function, this line calculates x * x and then returns this result. The function execution stops at this point.
  // let result = square(5);: When square(5) is called, the function runs, executes return 5 * 5;, which returns the value 25. This value is then assigned to the variable result.
  // Functions Without return (Implicit undefined Return): If a function does not have a return statement, or if it has a return statement without an expression (return;), it implicitly returns the value undefined.

  // JavaScript

  // function greet(name) {
  //   console.log("Hello, " + name + "!"); // No 'return' statement
  //   // Implicitly returns 'undefined'
  // }

  // let greetingResult = greet("Alice"); // Call 'greet'
  // console.log("Function return value:", greetingResult); // Output: Function return value: undefined
  // return Can Be Anywhere in the Function: The return statement doesn't have to be the last line in a function. When return is executed, the function stops immediately and returns. Any code after the return in the function will not be executed.

  // JavaScript

  // function checkPositive(number) {
  //   if (number <= 0) {
  //     console.log("Number is not positive.");
  //     return; // Return early if not positive (function ends here for non-positive input)
  //   }
  //   console.log("Number is positive.");
  //   return true; // Return 'true' if positive
  // }

  // checkPositive(-5); // Output: Number is not positive. (and function ends)
  // let isPositive = checkPositive(10); // Output: Number is positive.
  // console.log("Is positive:", isPositive); // Output: Is positive: true
  // No Newline After return expression;:  Just like with break and continue with labels, you should not put a newline between the return keyword and the expression you're returning because of JavaScript's automatic semicolon insertion.

  // 5. yield Statement - For Generator Functions (Briefly Mentioned)

  // The text briefly mentions yield. This is a special keyword used in generator functions (introduced in ES6). Generator functions are a more advanced topic, and they're covered in detail in Chapter 12 of your book.

  // For now, just know:

  // yield is like a special type of return used only in generator functions.
  // Instead of just returning a single value and ending the function (like return), yield pauses the generator function and "yields" (produces) a value to the iterator that's controlling the generator. When the iterator asks for the next value, the generator function resumes from where it left off (after the yield) until it hits another yield or finishes.
  // yield is used to create sequences of values (iterators) in a controlled, step-by-step way.
  // Example (from the text, just to show syntax):

  // JavaScript

  // function* numberRange(start, end) { // Function* indicates it's a generator function
  //   for (let i = start; i <= end; i++) {
  //     yield i; // 'yield' produces a value and pauses the function
  //   }
  // }

  // // You'd use this generator function with iterators (topic for Chapter 12)
  // 6. throw Statement - Signal Errors and Exceptions

  // The throw statement is used to signal that an error or exceptional condition has occurred in your code. This is how you trigger exceptions in JavaScript.

  // Syntax:

  // JavaScript

  // throw expression; // 'expression' is the exception value
  // expression: This can be any JavaScript value. It's common to throw:
  // Error objects: Instances of the built-in Error class (or its subclasses like TypeError, RangeError, etc.). Error objects typically have a name (error type) and a message (error description). This is what JavaScript itself uses when it encounters runtime errors.
  // Strings: Human-readable error messages as strings.
  // Numbers or other values (less common, but allowed).
  // Purpose: When something goes wrong in your code that you can't or shouldn't handle immediately in the current part of the code, you throw an exception to signal this error.

  // Example - Function to calculate factorial with error handling:

  // JavaScript

  // function factorial(n) {
  //   if (n < 0) { // Input validation: Factorial is not defined for negative numbers
  //     throw new Error("Input must be a non-negative integer."); // Throw an Error object
  //   }
  //   if (!Number.isInteger(n)) {
  //     throw "Input must be an integer."; // Throw a string error message
  //   }
  //   if (n > 15) { // Example arbitrary limit for demonstration
  //       throw { type: "RangeError", message: "Input too large for factorial calculation." }; // Throw an object as error
  //   }

  //   let result = 1;
  //   for (let i = 2; i <= n; i++) {
  //     result *= i;
  //   }
  //   return result;
  // }

  // console.log(factorial(5)); // Output: 120 (normal case)
  // // console.log(factorial(-2)); // Will THROW an Error (and stop execution if not handled)
  // // console.log(factorial(3.5)); // Will THROW a string "Input must be an integer."
  // // console.log(factorial(20)); // Will THROW an object { type: "RangeError", message: ... }
  // What Happens When You throw an Exception?

  // Immediate Stop: Normal program execution in the current block of code is stopped immediately.
  // Exception Propagation: JavaScript looks for the nearest enclosing exception handler to catch and handle the exception. Exception handlers are set up using the try/catch/finally statement (explained next).
  // Handler Search Upwards: If the current function doesn't have a try/catch block to handle the exception, the exception "propagates" up to the code that called this function. JavaScript keeps looking up the call stack for a handler in enclosing functions.
  // Uncaught Exception - Error: If no try/catch block is ever found to handle the exception, it's considered an uncaught exception. In browsers, this often results in an error message in the console. In Node.js or other environments, it might terminate the program.
  // 7. try/catch/finally Statement - Handling Exceptions

  // The try/catch/finally statement is JavaScript's mechanism for exception handling. It lets you "try" to run a block of code that might throw exceptions, "catch" and handle those exceptions if they occur, and optionally run some "finally" cleanup code whether an exception happened or not.

  // Syntax:

  // JavaScript

  // try {
  //   // Code that might throw an exception (the "try" block)
  // } catch (errorParameter) { // Optional 'catch' clause - to handle exceptions if they occur
  //   // Code to handle the exception (the "catch" block)
  //   // 'errorParameter' will hold the exception value that was thrown
  // } finally { // Optional 'finally' clause - code that ALWAYS runs, whether exception or not
  //   // Cleanup code (the "finally" block)
  // }
  // try Block: Encloses the code that you expect might potentially throw an exception.
  // catch (errorParameter) Block (Optional): If an exception is thrown inside the try block, JavaScript immediately jumps to the catch block. The errorParameter (you can name it anything, e.g., e, ex, err) will receive the value that was thrown (e.g., the Error object or string from throw statement). The code in the catch block is your exception handler – you can decide what to do to recover from or deal with the error.
  // finally Block (Optional): The finally block contains code that is guaranteed to be executed no matter what happens in the try block. It runs:
  // If the try block completes normally (without exceptions).
  // If an exception is thrown in the try block and is caught by the catch block.
  // If an exception is thrown in the try block and is not caught by the catch block (the exception will still propagate further after finally runs).
  // Even if the try block exits using return, break, or continue.
  // Important: At least either a catch or a finally block must be present after a try block. You can have try/catch, try/finally, or try/catch/finally.  try block and its {} are always required, and so are the {} for catch and finally even if they contain only one statement or are empty.

  // Example - Using try/catch to handle factorial errors:

  // JavaScript

  // try {
  //   let userInput = prompt("Enter a non-negative integer:");
  //   let number = parseInt(userInput); // Convert input string to a number
  //   if (isNaN(number)) {
  //     throw "Invalid input: Not a number."; // Throw error if not a number
  //   }
  //   let result = factorial(number); // Call factorial function (which might also throw errors)
  //   alert(`${number}! = ${result}`);    // Show result if calculation is successful

  // } catch (error) { // 'error' will hold the exception value that was thrown
  //   alert("An error occurred: " + error); // Display error message to the user
  //   console.error("Error details:", error); // Log error to console for debugging
  // }
  // // Code continues here after try/catch block, regardless of whether an exception occurred
  // console.log("Program continues after try/catch.");
  // finally Block - Guaranteed Cleanup: finally is often used for cleanup tasks that must always be done, regardless of whether an error occurred. Examples: closing files, releasing resources, resetting state, etc.

  // JavaScript

  // let fileHandle; // Assume this will hold a file object

  // try {
  //   fileHandle = openFile("myfile.txt", "read"); // Might throw an error if file can't be opened
  //   // ... process the file ...
  //   // (code here might also throw errors)
  //   return processFile(fileHandle); // Function might return something, or might throw an error
  // } catch (error) {
  //   console.error("Error processing file:", error);
  //   return null; // Indicate failure
  // } finally {
  //   if (fileHandle) {
  //     closeFile(fileHandle); // Important: ALWAYS close the file, even if errors happened or function returned
  //     console.log("File closed.");
  //   }
  // }
  // // Program continues here after finally block
  // try/finally without catch: You can use try/finally without a catch clause if you just need to ensure cleanup code runs, even if you don't want to handle the exception in the current scope. The exception will still propagate upwards to the next enclosing try/catch block (if any) or become an uncaught exception if there's no handler up the call stack.

  // Bare catch Clause (ES2019+): In ES2019 and later, if you have a catch block but you don't actually need to use the exception value (you just want to catch and suppress the error), you can use a "bare" catch clause without specifying the errorParameter.

  // JavaScript

  // function safeParseJSON(jsonString) {
  //   try {
  //     return JSON.parse(jsonString); // Might throw a SyntaxError if JSON is invalid
  //   } catch { // Bare 'catch' - no parameter needed if we don't use the error value
  //     return undefined; // Return undefined instead of throwing an error
  //   }
  // }

  // console.log(safeParseJSON('{"name": "Alice"}')); // Output: {name: "Alice"}
  // console.log(safeParseJSON('invalid json'));       // Output: undefined (no error, just returns undefined)
  // In Simple Words - Summary of Jump Statements:

  // Labeled Statements: Give names to code blocks for use with break and continue.
  // break: Exit a loop or switch immediately (unlabeled: innermost; labeled: specified labeled statement).
  // continue: Skip the rest of the current loop iteration and start the next one (unlabeled: innermost loop; labeled: specified labeled loop).
  // return: Exit a function and send back a value (or undefined).
  // throw: Signal an error by throwing an exception.
  // try/catch/finally: Handle exceptions - try block for code that might error, catch block to handle errors, finally for code that always runs (cleanup).
  // Jump statements, especially break, continue, return, and try/catch, are powerful tools for controlling the flow of your JavaScript code, handling errors gracefully, and creating more complex and robust programs.

  //  5.7 Declarations
        // Let's dive into Declarations in JavaScript!

        // The book points out something important: const, let, var, function, class, import, and export are technically declarations, not statements, although we often loosely call them "statements."  Understanding the difference is key.

        // Declarations vs. Statements: Setting the Stage vs. Performing Actions

        // Think of it this way:

        // Statements are like actions in a play. They make things happen during the program's execution.  Examples we've already learned about are if, for, while, break, return, etc. They tell JavaScript to do something – make a decision, repeat an action, jump to another part of the code, etc.

        // Declarations are like the script, the character descriptions, and the set design of the play. They define the structure of your program. They introduce new elements (like variables, functions, classes, modules) and give them names so you can use them in your statements later on. Declarations don't "run" in the same way statements do. Instead, they're processed before your code actually starts executing. They set up the stage for the actions to take place.

        // Declarations essentially "define the meaning" of the statements in your program by providing the named entities that your statements will work with.

        // JavaScript Declarations Explained:

        // Let's go through each type of declaration mentioned in the text:

        // 1. const, let, and var - Declaring Variables and Constants

        // These keywords are all about creating variables (named storage locations for values) and constants (named values that are intended to remain unchanged).

        // const (ES6 and later):  Declares a constant.  You must initialize a const when you declare it, and you cannot reassign a new value to it later. const declarations create block-scoped constants.

        // JavaScript

        // const PI = 3.14159; // Declare and initialize the constant PI
        // // PI = 3.14;  // Error! Cannot reassign a constant
        // console.log(PI);   // Accessing the constant
        // let (ES6 and later): Declares a variable that can be reassigned. let declarations create block-scoped variables. This is the modern, preferred way to declare variables in JavaScript.

        // JavaScript

        // let count = 0; // Declare and initialize a variable 'count'
        // count = count + 1; // Reassign a new value to 'count'
        // console.log(count);
        // var (Older JavaScript): Declares a variable that can be reassigned. var declarations are function-scoped, not block-scoped.  Avoid using var in modern JavaScript.  let and const are much better and less error-prone due to block scoping.

        // JavaScript

        // var message = "Hello"; // Declare a variable using var
        // message = "Goodbye";    // Reassign
        // console.log(message);
        // Key Difference: Scope

        // Block Scope (const, let): Variables and constants declared with const and let are limited to the block they are defined in (a block is code within curly braces {}). This includes loops, if statements, functions, etc. This is generally more intuitive and helps prevent accidental variable overwriting.
        // Function Scope (var): Variables declared with var are scoped to the entire function in which they are defined, regardless of blocks within the function. This can lead to unexpected behavior and is a source of bugs.
        // Example illustrating scope differences:

        // JavaScript

        // function exampleScope() {
        //   if (true) {
        //     let blockScopedVarLet = "I'm block-scoped (let)";
        //     const blockScopedConst = "I'm also block-scoped (const)";
        //     var functionScopedVarVar = "I'm function-scoped (var)";
        //   }
        //   // console.log(blockScopedVarLet);  // Error! blockScopedVarLet is not defined here (block-scoped)
        //   // console.log(blockScopedConst);    // Error! blockScopedConst is not defined here (block-scoped)
        //   console.log(functionScopedVarVar);  // Output: "I'm function-scoped (var)" - functionScopedVarVar IS accessible here (function-scoped)
        // }

        // exampleScope();
        // // console.log(functionScopedVarVar); // Error! functionScopedVarVar is not defined here (function-scoped, local to exampleScope function)
        // Recommendation:  Always prefer const and let over var in modern JavaScript. Use const by default for values that shouldn't change, and use let for variables that you need to reassign.  Avoid var to prevent scope-related issues.

        // 2. function - Declaring Functions

        // The function declaration is how you define functions in JavaScript. Functions are blocks of reusable code that perform specific tasks.

        // Function Declaration Syntax:

        // JavaScript

        // function functionName(parameter1, parameter2, ...) {
        //   // Function body - code to be executed when the function is called
        //   // ... statements ...
        //   return value; // Optional: return a value
        // }
        // function: Keyword to start a function declaration.
        // functionName: The name you give to the function (identifier).
        // (parameter1, parameter2, ...): Optional list of parameters (input values) the function can accept.
        // { ... statements ... }: The function body – the block of code that gets executed when you call the function.
        // return value; (optional): Used to specify the value the function should return. If there's no return statement or just return;, the function implicitly returns undefined.
        // Example - Function to calculate area of a circle:

        // JavaScript

        // function calculateArea(radius) {
        //   return Math.PI * radius * radius;
        // }

        // let circleArea = calculateArea(5); // Call the function with radius 5
        // console.log("Area:", circleArea); // Output: Area: 78.53981633974483
        // Function Declarations are "Hoisted": The text mentions that function declarations are "hoisted."  This means that the JavaScript engine processes function declarations before it starts executing the rest of your code.  As a result, you can call a function in your code before the line where you actually declare the function.  It's as if the function declaration is moved to the top of its scope during processing.

        // JavaScript

        // // You can call greet() here, even though the function declaration comes later in the code
        // greet("World"); // Output: Hello, World!

        // function greet(name) { // Function declaration
        //   console.log("Hello, " + name + "!");
        // }
        // Important: Function expressions (using function inside an expression) are not hoisted in the same way. You need to declare function expressions before you can use them.

        // Special Function Types: The text also mentions:

        // Generator Functions: Declared using function* (with an asterisk after function). Used for creating iterators (see Chapter 12).
        // Asynchronous Functions: Declared using async function. Used for asynchronous operations (see Chapter 13).
        // 3. class - Declaring Classes (ES6 and later)

        // The class declaration (introduced in ES6) is used to define classes in JavaScript. Classes are blueprints for creating objects. They provide a way to organize code and data in an object-oriented manner.

        // Class Declaration Syntax:

        // JavaScript

        // class ClassName {
        //   // Constructor method (special method for object creation)
        //   constructor(parameter1, parameter2, ...) {
        //     // ... initialization code for new objects ...
        //   }

        //   // Methods (functions associated with the class)
        //   methodName1(parameter1, ...) { ... }
        //   methodName2() { ... }
        //   // ... more methods ...
        // }
        // class: Keyword to start a class declaration.
        // ClassName: The name of the class (identifier, conventionally starts with a capital letter).
        // constructor(parameters): A special method named constructor. It's automatically called when you create a new object of the class using new ClassName(...). Used for initializing the properties of the new object.
        // methodName(...) { ... }: Methods are functions that are part of the class. They define the actions that objects of the class can perform.
        // Example - Circle class:

        // JavaScript

        // class Circle {
        //   constructor(radius) { // Constructor takes 'radius' as input
        //     this.radius = radius; // Initialize the 'radius' property of the new Circle object
        //   }

        //   getArea() { // Method to calculate area
        //     return Math.PI * this.radius * this.radius;
        //   }

        //   getCircumference() { // Method to calculate circumference
        //     return 2 * Math.PI * this.radius;
        //   }
        // }

        // // Create a new Circle object using the 'new' keyword and the class name
        // let myCircle = new Circle(10); // Pass 10 as the radius to the constructor

        // console.log("Circle Area:", myCircle.getArea());        // Call the 'getArea' method
        // console.log("Circumference:", myCircle.getCircumference()); // Call 'getCircumference'
        // Class Declarations are Not Hoisted: Unlike function declarations, class declarations are not hoisted. You must declare a class before you can use it in your code to create objects. Trying to use a class before its declaration will result in a ReferenceError.

        // 4. import and export - Module Declarations (ES Modules)

        // import and export declarations are essential for working with JavaScript modules (introduced in ES Modules, a standard way to organize and modularize JavaScript code).  Modules are like self-contained units of code that can be reused and combined.

        // Modules: Encapsulation and Reusability: Modules help you break down large JavaScript projects into smaller, manageable files. Each module has its own private scope.  Variables, functions, and classes declared in a module are not automatically available in other modules (or in the global scope). This encapsulation prevents naming conflicts and makes code more organized.

        // export - Making Values Public from a Module: To make things (like variables, functions, classes) defined in one module accessible to other modules, you must explicitly export them using the export keyword.

        // Named Exports: Export specific values with names.

        // JavaScript

        // // geometry/constants.js (example module file)
        // export const PI = Math.PI; // Export the constant PI (named export)
        // export const TAU = 2 * Math.PI; // Export TAU (named export)

        // export function calculateRectangleArea(width, height) { // Export a function (named export)
        //   return width * height;
        // }

        // class Square { // Export a class (named export)
        //   constructor(side) { this.side = side; }
        //   getArea() { return this.side * this.side; }
        // }
        // export { Square }; // Another way to export named exports (useful for exporting multiple things at once)
        // Default Export:  Export a single, primary value as the "default" export of the module.  A module can have only one default export.

        // JavaScript

        // // geometry/circle.js (example module file)
        // export default class Circle { // Export the Circle class as the default export
        //   constructor(radius) { this.radius = radius; }
        //   getArea() { return Math.PI * this.radius * this.radius; }
        // }
        // import - Bringing Values into a Module: To use values that have been exported from another module, you must import them using the import keyword.

        // Importing Default Exports: When importing a module's default export, you can choose any name you want for it in your current module.

        // JavaScript

        // // main.js (example module file)
        // import Circle from './geometry/circle.js'; // Import the default export from circle.js and name it 'Circle' (you can choose a different name if you want)

        // let myCircle = new Circle(7); // Use the imported Circle class
        // console.log("Circle Area:", myCircle.getArea());
        // Importing Named Exports: When importing named exports, you must use curly braces {} and list the names of the exports you want to import, matching the names they were exported with.

        // JavaScript

        // // main.js (example module file)
        // import { PI, TAU, calculateRectangleArea } from './geometry/constants.js'; // Import named exports PI, TAU, and calculateRectangleArea

        // console.log("PI:", PI);
        // console.log("TAU:", TAU);
        // let rectangleArea = calculateRectangleArea(10, 5);
        // console.log("Rectangle Area:", rectangleArea);
        // Renaming Imports (using as): You can rename an imported value using as if you want to avoid name conflicts or use a more descriptive name locally.

        // JavaScript

        // // main.js (example module file)
        // import { magnitude as hypotenuse } from './vectors/utils.js'; // Import 'magnitude' and rename it to 'hypotenuse' in this module

        // let h = hypotenuse(3, 4); // Use the imported (and renamed) function as 'hypotenuse'
        // console.log("Hypotenuse:", h);
        // Summary of Declarations:

        // Declarations define the structure of your program: They introduce named entities like variables, functions, classes, and modules.
        // const, let, var: Declare variables and constants. Prefer const and let for block scoping and modern JavaScript.
        // function: Declares functions (blocks of reusable code). Function declarations are hoisted.
        // class: Declares classes (blueprints for objects). Class declarations are not hoisted.
        // import, export: Declare how values are shared between JavaScript modules, enabling modularity and code organization.
        // Declarations are fundamental to writing well-structured and maintainable JavaScript code. Understanding how they work and choosing the right types of declarations is essential for building complex applications.

        // Okay, let's summarize the JavaScript statements you've learned about in this chapter, just like Table 5-1! Here's a breakdown of each statement and its purpose:

        // Table 5-1. JavaScript Statement Summary

        // Statement	Purpose	Simplified Explanation
        // break	Exit from the innermost loop or switch or from named enclosing statement	"Get out!" - Immediately stops a loop or switch (can exit a labeled block too).
        // case	Label a statement within a switch	"If it's this case..." - Marks options in a switch statement to match against.
        // class	Declare a class	"Define a blueprint" - Creates a template for objects, with properties and methods.
        // const	Declare and initialize one or more constants	"Fixed value" - Creates named values that cannot be changed after initial setup.
        // continue	Begin next iteration of the innermost loop or the named loop	"Next round!" - Skips to the next cycle of a loop, skipping the rest of the current one.
        // debugger	Debugger breakpoint	"Pause here (for debugger)" - Temporarily stops code execution for debugging tools.
        // default	Label the default statement within a switch	"If no other case matches..." - Provides a fallback option in a switch statement.
        // do/while	An alternative to the while loop	"Do at least once, then repeat if..." - Loop that runs the body first, then checks condition.
        // export	Declare values that can be imported into other modules	"Share this!" - Makes variables, functions, etc., available for use in other modules.
        // for	An easy-to-use loop	"Counted loop" - Loop for iterating a specific number of times, often with a counter.
        // for/await	Asynchronously iterate the values of an async iterator	"Wait and loop (async)" - For iterating over asynchronous data sources (advanced).
        // for/in	Enumerate the property names of an object	"Loop through object keys" - Goes through each property name of an object.
        // for/of	Enumerate the values of an iterable object such as an array	"Loop through values" - Iterates over the values of arrays, strings, Maps, Sets, etc.
        // function	Declare a function	"Define a reusable action" - Creates a block of code that can be called and executed.
        // if/else	Execute one statement or another depending on a condition	"Decision time" - Executes different code blocks based on whether a condition is true/false.
        // import	Declare names for values defined in other modules	"Bring in shared things" - Gets access to exported values from other modules.
        // label	Give statement a name for use with break and continue	"Give it a name" - Attaches a name to a statement so break and continue can target it.
        // let	Declare and initialize one or more block-scoped variables (new syntax)	"Changeable value (local)" - Creates variables that can be reassigned, with block scope.
        // return	Return a value from a function	"Function result" - Sends a value back as the output of a function.
        // switch	Multiway branch to case or default: labels	"Choose one path" - Efficiently handles multiple possible cases based on a value.
        // throw	Throw an exception	"Something's wrong!" - Signals an error or unusual situation.
        // try/catch/finally	Handle exceptions and code cleanup	"Error handling" - Attempts code, catches errors if they happen, and ensures cleanup.
        // "use strict"	Apply strict mode restrictions to script or function	"Be strict!" - Enables stricter rules in JavaScript for better code quality.
        // var	Declare and initialize one or more variables (old syntax)	"Changeable value (function-wide)" - Older way to declare variables, function-scoped.
        // while	A basic loop construct	"Loop while true" - Loop that repeats as long as a condition remains true.
        // with	Extend the scope chain (deprecated and forbidden in strict mode)	"(Avoid this!)" - Temporarily treats object properties as variables (generally bad practice).
        // yield	Provide a value to be iterated; only used in generator functions	"Give next value (generator)" - Used in generator functions to produce a sequence of values.

        // Export to Sheets
        // This table provides a concise overview of all the JavaScript statements you've learned.  Understanding these statements is crucial for writing any JavaScript program, as they form the building blocks of control flow, data manipulation, and error handling in the language. Keep practicing and using them in your code to become proficient!