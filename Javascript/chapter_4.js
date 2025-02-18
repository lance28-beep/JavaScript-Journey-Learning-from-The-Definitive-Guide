/*
Okay, let's get into Chapter 4: Expressions and Operators in JavaScript! This chapter is all about the building blocks you use to actually do things in your JavaScript code.

Think of Expressions and Operators as the verbs and the grammar of the JavaScript language. They are how you tell the computer to perform actions and calculations.

1. What is an Expression? -  Phrases that Produce Values

In JavaScript, an expression is any piece of code that can be evaluated to get a value.  Think of it as a phrase that, when you "ask" JavaScript to figure it out, it gives you back a result - a single value.

Simple Expressions:

Literals (Constants): Just writing a value directly is the simplest expression.
10 (number literal)
"hello" (string literal)
true (boolean literal)
Variable Names: A variable name is an expression. It evaluates to the value currently stored in that variable.
x (if x holds the value 5, then the expression x evaluates to 5)
message (if message holds "world", then message evaluates to "world")
Complex Expressions - Built from Simpler Ones:  You can combine simpler expressions using operators (and other techniques) to build more complex expressions.

Array Access Expression:

Example: myArray[2]
It's made up of:
myArray (an expression that must evaluate to an array)
2 (an expression that must evaluate to an integer index)
[] (array access operator)
When evaluated, it produces the value stored at index 2 of the myArray.
Function Invocation Expression (Function Call):

Example: add(5, 3)
It's made up of:
add (an expression that must evaluate to a function)
5, 3 (expressions for the arguments)
() (function call operator)
When evaluated, it executes the add function with arguments 5 and 3, and produces the value returned by the add function.
2. Operators - The Tools to Build Complex Expressions

Operators are special symbols or keywords that tell JavaScript to perform a specific operation on one or more values (called operands).  Operators are the most common way to build complex expressions from simpler ones.

How Operators Work: An operator takes operands, performs an action on them, and then evaluates to a new value.

Example: Multiplication Operator *

Operator: * (multiplication)
Operands: x and y (these are expressions that must evaluate to numbers)
Expression: x * y
Evaluation: JavaScript takes the values of x and y, multiplies them together, and the entire expression x * y evaluates to the product of those values.
3. Chapter Scope - What You'll Learn:

This chapter is going to be comprehensive. It will cover:

All of JavaScript's Operators: You'll learn about different types of operators (arithmetic, comparison, logical, assignment, bitwise, etc.) and how to use them.
Expressions that Don't Use Operators: The chapter will also cover expressions that aren't built with operators, such as:
Array indexing: myArray[index]
Function invocation: myFunction(arguments)
Object property access: myObject.property, myObject["property"]
and more!
4. Familiar Territory for C-Style Language Programmers:

If you already know languages like C, C++, Java, or similar languages that use C-style syntax, you'll find that most of JavaScript's expressions and operators will look very familiar to you. JavaScript borrowed a lot of its syntax for expressions and operators from these languages. This will make learning JavaScript easier if you have that background!

In Simple Words - Summary:

Chapter 4 is your guide to the action words and grammar of JavaScript. You'll learn about:

Expressions: Code phrases that result in values (simple ones like numbers and variables, and complex ones built from smaller parts).
Operators: Symbols and keywords that tell JavaScript to do things with values (like add, multiply, compare, etc.) and create more complex expressions.
You'll get a complete tour of all the operators and important expression types in JavaScript, laying the foundation for writing more dynamic and functional code! If you're used to C-style languages, a lot of this will feel quite natural.
*/
// 4.1 Primary Expressions

    /*
    Okay, let's talk about Primary Expressions in JavaScript. Think of them as the absolute simplest building blocks you can use in JavaScript to get a value. They are like the atoms of the expression world – they don't break down into smaller expressions!

    Imagine you're cooking.  Primary expressions are like the basic ingredients you start with, like a single apple, a bag of sugar, or a bottle of milk. You use these basic ingredients to create more complex dishes (expressions).

    There are three main types of Primary Expressions in JavaScript:

    1. Literals -  Writing Values Directly

    Literals are when you write a value directly into your code. It's like saying "I want this exact thing right here".

    Number Literals:  Just write a number.

    Example: 1.23, 100, -5
    It's literally the number value itself.
    String Literals: Write text inside quotes (single or double).

    Example: "hello", 'JavaScript', "123"
    It's literally the text you put between the quotes.
    Regular Expression Literals: Write patterns between forward slashes /.  Don't worry too much about these for now, but just know they are also primary expressions.

    Example: /pattern/, /^\d+$/ (These are for searching and matching text patterns).
    2. Keywords - Special Words with Built-in Meaning

    JavaScript has some special reserved words that are primary expressions because they represent specific, built-in values.

    true: Represents the boolean value "true". It's just the value true itself.
    false: Represents the boolean value "false". It's just the value false itself.
    null: Represents the special value "null", meaning "no object value" or "intentional absence of a value". It's the null value itself.
    this: This is a bit special. It's also a keyword and a primary expression, but its value changes depending on where you use it in your program. Think of it as "the current thing". For now, just know it's a keyword that's a primary expression. You'll learn more about this later in the book when you get to objects and object-oriented programming.
    3. Variable References - Using Names to Represent Values

    When you use a variable name or a constant name in your code, that name itself is a primary expression. It evaluates to whatever value is currently stored in that variable or constant.

    Variable Names: If you have a variable named i, and you write i in your code, JavaScript will look up the current value of i and that's what the expression i becomes.

    Example: If let i = 10;, then i as an expression evaluates to 10.
    Constant Names:  Same idea as variables, but for constants. If you have a constant SUM, and you write SUM, it evaluates to the constant value.

    Example: If const SUM = 0;, then SUM as an expression evaluates to 0.
    Global Object Properties (like undefined):  JavaScript has a special "global object" that holds a bunch of pre-defined things.  Some of these things are properties of the global object, like undefined.  So, just writing undefined is also a primary expression, and it evaluates to the special "undefined" value.

    Important Point about Variable References:

    When JavaScript sees a name in your code, it assumes you're talking about a variable, constant, or something from the global object. It tries to find a value associated with that name.

    If it finds a variable, constant, or global property with that name, it uses its value.
    If it cannot find anything with that name, JavaScript gets confused and throws a ReferenceError. This is like saying "Hey, I don't know what you're talking about! This name doesn't mean anything to me!"
    In Simple Words - Summary of Primary Expressions:

    Primary expressions are the simplest ways to represent values in JavaScript. They are:

    Literals: Writing values directly (numbers, strings, regex).
    Keywords: Special words like true, false, null, this that represent built-in values.
    Variable/Constant References: Using names that stand for values you've stored.
    Think of them as the basic building blocks. You'll use these primary expressions to build more complex and interesting expressions in JavaScript!

    */

// 4.2 Object and Array Initializers
        /*
        The user wants a simplified explanation of "Object and Array Initializers" in JavaScript, specifically section 4.2 of the book.  After the explanation, they want a short quiz to check their understanding.

        Explanation Plan:

        Analogy: Start with a real-world analogy for object and array initializers (e.g., creating boxes and lists).
        Array Initializers (Array Literals):
        Explain what they are - a way to create arrays directly in code.
        Syntax: [] for empty, [element1, element2, ...] for populated.
        Elements can be expressions.
        Nested arrays.
        Undefined elements (omitting values between commas).
        Trailing commas.
        Object Initializers (Object Literals):
        Explain what they are - a way to create objects directly in code.
        Syntax: {} for empty, {propertyName1: value1, propertyName2: value2, ...} for populated.
        Properties are key-value pairs.
        Values can be expressions.
        Nested objects.
        ES6 features mentioned are out of scope for this basic explanation, keep it simple.
        Key Difference from Primary Expressions: Emphasize they are not primary because they contain subexpressions. They are built from primary expressions.
        Summarize: Briefly recap object and array initializers.
        Quiz Plan:
        Create 5 multiple-choice questions covering:

        What are object and array initializers used for?
        Syntax of array initializers.
        Syntax of object initializers.
        Can initializers be nested?
        Are initializers primary expressions?
        Let's execute this plan.

        2.0 Flash Thinking Experimental. Lacks access to real-time info and some Gemini features.
        Alright, let's make Object and Array Initializers super easy to understand!

        Imagine you're organizing your stuff. You have two main ways to store things:

        Arrays (like Lists): Think of an array as a numbered list. You put items in a specific order, and you can find them by their position in the list (first item, second item, etc.).
        Objects (like Boxes with Labels): Think of an object as a box where each item has a label. Instead of order, you find things by their labels (like "name", "age", "color").
        Object and Array Initializers are just shortcuts in JavaScript to quickly create these lists and boxes right in your code! They are like pre-made templates for arrays and objects.  We often call them array literals and object literals.

        Let's break them down one by one:

        1. Array Initializers (Array Literals) - Making Numbered Lists Quickly

        What they are:  Array initializers are a way to create new arrays directly in your code, without having to add elements one by one.  Think of it as writing out your shopping list directly, instead of creating an empty list and adding items later.

        Syntax - How to write them: You use square brackets [] to create array initializers.

        Empty Array:  If you want to create an empty array (a list with nothing in it), you just use empty square brackets:

        JavaScript

        let myList = [];  // Creates an empty array called 'myList'
        Array with Elements: If you want to create an array with items already in it, you put those items inside the square brackets, separated by commas.

        JavaScript

        let numbers = [10, 20, 30, 40]; // Array with four numbers
        let fruits = ["apple", "banana", "orange"]; // Array with three strings
        Elements can be Expressions:  The items you put in the array initializer don't have to be just simple values. They can be expressions that JavaScript will calculate.

        JavaScript

        let sums = [1 + 2, 3 + 4]; // Array with two elements: [3, 7]
        let mixed = ["hello", 5 * 2, true]; // Array with string, number, and boolean
        Nested Arrays (Arrays inside Arrays): You can even put array initializers inside other array initializers to create lists within lists, like a grid or a table.

        JavaScript

        let matrix = [
        [1, 2, 3], // First row
        [4, 5, 6], // Second row
        [7, 8, 9]  // Third row
        ]; // 'matrix' is now like a 3x3 grid of numbers
        Undefined Elements (Gaps in the List): You can create "gaps" in your array list by just putting extra commas without a value in between. These positions in the array will be undefined.

        JavaScript

        let sparseList = [1, , , , 5]; // Array with 5 elements: [1, undefined, undefined, undefined, 5]
        Trailing Comma (Comma at the end):  JavaScript allows you to put a comma after the very last item in an array initializer. It doesn't create an extra undefined element. It's mostly for making code look a bit cleaner sometimes, especially in multi-line arrays.

        JavaScript

        let colors = [
        "red",
        "green",
        "blue", // Trailing comma here is okay
        ]; // Still just a 3-element array: ["red", "green", "blue"]
        2. Object Initializers (Object Literals) - Making Boxes with Labels Quickly

        What they are: Object initializers are a way to create new objects directly in your code. Think of it as making a box and putting labeled compartments inside all at once.

        Syntax - How to write them: You use curly braces {} to create object initializers.

        Empty Object: To create an empty object (a box with no labeled compartments yet), use empty curly braces:

        JavaScript

        let myBox = {}; // Creates an empty object called 'myBox'
        Object with Properties (Labeled Items): To create an object with labeled items inside, you put property names (labels), followed by a colon :, and then the value for that property, all inside the curly braces, separated by commas.

        JavaScript

        let person = {
        name: "Alice",    // Property name: "name", Value: "Alice"
        age: 30,          // Property name: "age", Value: 30
        city: "Wonderland" // Property name: "city", Value: "Wonderland"
        }; // 'person' is an object with name, age, and city properties
        Property Names and Values:

        Property Names: Are like labels. They are always strings (or symbols, but let's stick to strings for now). In the simple syntax we're using, they are written as words without quotes if they are valid JavaScript identifiers (like name, age, city).
        Values: Can be any JavaScript value, and just like array elements, they can also be expressions.
        JavaScript

        let item = {
        price: 25.99,
        discountedPrice: 25.99 * 0.8, // Value is an expression
        inStock: true
        };
        Nested Objects (Boxes inside Boxes): Just like arrays, you can nest object initializers inside other object initializers to create complex structures.

        JavaScript

        let book = {
        title: "The JavaScript Guide",
        author: { // 'author' property's value is another object
            firstName: "Jane",
            lastName: "Doe"
        },
        pages: 500
        }; // 'book' object contains a nested 'author' object
        Important Note: Not Primary Expressions (but built from them)

        The chapter mentions that object and array initializers are not "primary expressions," even though they look simple like literals. Why? Because they are made up of sub-expressions inside them.

        For example, in [1 + 2, 3 + 4], 1+2 and 3+4 are sub-expressions.
        In { x: 2.3, y: -1.2 }, 2.3 and -1.2 are sub-expressions.
        Primary expressions are the most basic - they don't contain other expressions within them.  Initializers are a bit more complex, even though we call them "literals" sometimes as shorthand (like "object literal" and "array literal").

        In Simple Words - Summary of Object and Array Initializers:

        Array Initializers ([]): Quickly create ordered lists of values. Use commas to separate elements, square brackets to enclose them. Can be empty or filled with expressions, even nested arrays.
        Object Initializers ({}): Quickly create boxes with labeled compartments (properties). Use curly braces, propertyName: value pairs separated by commas. Values can be expressions, and objects can be nested too.
        They are super handy shortcuts for creating arrays and objects directly in your JavaScript code, making your code cleaner and easier to write!
        */
//4.3 Function Definition Expressions
/*
        Let's break down Function Definition Expressions in JavaScript!

        Think of it like this: you know how you can write down a number directly in your code (like 10) - that's a number literal.  And you know you can write an object directly (like { name: "Bob" }) - that's an object literal.

        Well, a Function Definition Expression is like a "function literal".  It's a way to write down a function directly as a value right in the middle of your JavaScript code!  The whole thing, the function keyword and all, becomes an expression that evaluates to a function.

        Think of a function as a mini-program, a set of instructions that does something. A Function Definition Expression lets you create this mini-program and treat it like any other value in JavaScript, like a number or a string!

        How to Write a Function Definition Expression

        The basic parts of a Function Definition Expression are:

        The function keyword: This word signals to JavaScript that you are about to define a function.

        An optional function name:  You can give your function a name right after the function keyword.  However, for function expressions, the name is often omitted, especially when you are assigning the function to a variable (like in the example below).

        Parentheses ():  After the optional name (or right after function if you skip the name), you put parentheses. Inside the parentheses, you can list parameters (also called arguments). Parameters are like placeholders for values that you'll give to the function when you use it later.  If the function doesn't need any input, you just leave the parentheses empty (). Parameters are separated by commas if you have more than one.

        Curly braces {} (the function body):  After the parentheses, you put curly braces. Inside these braces, you write the actual JavaScript code that the function will execute when it's called. This is called the function body.  Often, the function body will include a return statement to send a value back as the result of the function.

        Example from the Text - Squaring a Number

        Let's look at the example from the text:

        JavaScript

        let square = function(x) { return x * x; };
        Let's break it down:

        let square = ...: This is a variable declaration. We are declaring a variable named square.
        function(x) { return x * x; }: This is the Function Definition Expression!
        function: The keyword, starting the function definition.
        (x): Parentheses with x inside. x is the parameter name. This function expects to receive one value when it's used, and inside the function body, we'll refer to that value as x.
        { return x * x; }: The function body enclosed in curly braces.
        return x * x;: This is the code that runs when the square function is called. It takes the input value x, multiplies it by itself (x * x), and returns (sends back) the result.
        What Happens When You Run This Code?

        When JavaScript runs this line: let square = function(x) { return x * x; };

        It evaluates the Function Definition Expression function(x) { return x * x; }. This evaluation creates a new function object in memory.
        The value of this expression is the newly created function itself.
        This function value is then assigned to the variable named square.
        Analogy - Function Literal like a String Literal or Object Literal

        The text says "a function definition expression is a “function literal” in the same way that an object initializer is an “object literal.”"  Let's think about this:

        String Literal: "hello" is a string literal. When JavaScript sees "hello", it understands you mean the string value "hello".
        Object Literal (Initializer): { name: "Alice" } is an object literal. When JavaScript sees this, it understands you mean to create a new object with a name property set to "Alice".
        Function Literal (Definition Expression): function(x) { return x * x; } is a function literal (definition expression). When JavaScript sees this, it understands you mean to create a new function object that takes an argument x and returns its square.
        In all three cases, you are writing down the literal representation of a value directly in your code!

        Other Ways to Define Functions (Mentioned Briefly in Text)

        The text also mentions:

        Function Statements: Another way to define functions, which we'll learn about in Chapter 8. Function statements look a bit different from function expressions.
        Arrow Functions (ES6+): A more compact and newer syntax for writing function expressions, especially in ES6 and later versions of JavaScript. You'll learn more about these later too.
        For now, focus on understanding the basic Function Definition Expression syntax we've covered!

        In Simple Words - Summary of Function Definition Expressions:

        They are a way to write out a function directly as a value in your JavaScript code.
        They start with the function keyword, followed by optional parameters in parentheses (), and the function's code body in curly braces {}.
        The whole expression evaluates to the newly created function object, which you can then assign to a variable or use in other expressions.
        They are like "function literals" - just like number literals, string literals, and object literals are ways to write those types of values directly.
*/

// 4.4 Property Access Expressions
/*
        Let's understand Property Access Expressions in JavaScript. This is how you "reach into" objects and arrays to get the values stored inside!

        Imagine objects and arrays are like containers. Property access expressions are the "keys" or "tools" you use to open these containers and get what's inside.

        JavaScript gives you two main ways to access properties: Dot Notation and Bracket Notation.

        1. Dot Notation (.) - The Simpler, Cleaner Key

        What it is:  You use a dot . followed by the name of the property you want to access. It's like saying "Give me the 'name' label's content from this box."

        Syntax:

        JavaScript

        expression . identifier
        expression: This part must evaluate to an object. It's the "box" you're trying to open.
        .: The dot operator - the key!
        identifier: This is the property name you want to access. It must be a valid JavaScript identifier (basically, a name that follows variable naming rules - letters, numbers, _, $, but can't start with a number, and no spaces or special punctuation except _ and $). It's like the "label" on the box.
        Example:

        JavaScript

        let myObject = { x: 10, y: 20, name: "Example" };

        let xValue = myObject.x;     // Access property 'x' using dot notation
        let nameValue = myObject.name; // Access property 'name' using dot notation

        console.log(xValue);    // Output: 10
        console.log(nameValue); // Output: Example
        When to use Dot Notation:

        When you know the property name in advance and it's a valid identifier.
        It's generally preferred because it's shorter and easier to read when you can use it.
        2. Bracket Notation ([]) - The More Flexible Tool

        What it is: You use square brackets [] and put an expression inside the brackets that evaluates to the property name (as a string) or the array index (as a number) you want to access.  It's like saying "Give me the content of the box labeled with...[calculate this label]... " or "Give me the item at position...[figure out this position]... in this list."

        Syntax:

        JavaScript

        expression [ expression ]
        expression (before [): This still must evaluate to an object or an array - the container.
        []: The square bracket operator - the tool.
        expression (inside []): This expression will be evaluated.
        If the container is an object, this inner expression should evaluate to a string that is the property name.
        If the container is an array, this inner expression should evaluate to a number that is the array index (position).
        Examples:

        JavaScript

        let myObject = { x: 10, y: 20, "property with space": "value" };
        let myArray = ["apple", "banana", "orange"];

        let xValue = myObject["x"];                // Access property 'x' using bracket notation (string)
        let spaceProperty = myObject["property with space"]; // Property with a space - MUST use brackets
        let firstFruit = myArray[0];                  // Access element at index 0 of array
        let index = 1;
        let secondFruit = myArray[index];              // Index is calculated/dynamic

        console.log(xValue);        // Output: 10
        console.log(spaceProperty); // Output: value
        console.log(firstFruit);   // Output: apple
        console.log(secondFruit);  // Output: banana
        When to use Bracket Notation:

        When the property name is not a valid identifier (e.g., contains spaces, punctuation, starts with a number). You must use bracket notation in these cases.
        When the property name or array index is not known when you write the code, but is determined at runtime (e.g., it's stored in a variable, or it's the result of a calculation). This makes it very dynamic!
        Important Behavior for Both Notations

        Evaluation of the "Container" Expression First:  In both expression.identifier and expression[expression], JavaScript first evaluates the expression part (the one before the dot or square brackets).  This must result in an object or an array.

        Error if null or undefined: If the expression (the container) evaluates to null or undefined, JavaScript will throw a TypeError.  This is because null and undefined are special values in JavaScript that do not have properties. You can't "open" a container that doesn't exist!

        Property Doesn't Exist? undefined: If you try to access a property that does not exist on an object (using either dot or bracket notation), JavaScript will not throw an error. Instead, it will return the value undefined.

        JavaScript

        let myObject = { x: 10 };
        let nonExistentProperty = myObject.z; // Property 'z' doesn't exist
        console.log(nonExistentProperty);    // Output: undefined (no error)
        Nested Property Access - Chains of Keys

        You can chain property access expressions together to reach into nested objects and arrays:

        JavaScript

        let data = {
        person: {
            name: "Alice",
            address: {
            city: "Wonderland"
            }
        },
        items: ["book", "pen"]
        };

        let cityName = data.person.address.city; // Dot notation chaining
        let firstItem = data.items[0];            // Bracket notation and dot notation combined

        console.log(cityName);  // Output: Wonderland
        console.log(firstItem); // Output: book
        3. Conditional Property Access (?. and ?.[]) -  New in ES2020 (Optional Chaining)

        This is a newer, very handy feature in JavaScript to make property access safer, especially when you are not sure if an object or property actually exists. It helps prevent errors when dealing with potentially null or undefined values in a chain of property accesses.

        Purpose: To access properties without causing errors if an intermediate object in the chain is null or undefined.  It's like saying "If this step works, continue; if it's null or undefined at any point, just stop and give me undefined as the result, but don't crash!".

        Syntax:

        Conditional Dot Notation: expression ?. identifier (use ?. instead of .)
        Conditional Bracket Notation: expression ?.[ expression ] (use ?.[ instead of [)
        How it Works (Optional Chaining/Short-Circuiting):

        Let's look at a?.b.c.d example:

        JavaScript first evaluates a.
        Check a:
        If a is null or undefined: The whole expression a?.b.c.d immediately stops and evaluates to undefined. It does not try to access b, c, or d. No error is thrown! This is the "short-circuiting" part.
        If a is not null or undefined (it's a valid object): JavaScript proceeds to access property b as if it were a normal dot notation access (a.b).
        After a?.b: Whatever a?.b results in (which could be a value, or undefined if a was nullish or if b didn't exist on a even if a was valid), the process continues for the rest of the chain (.c.d). However, if at any point in the chain (like at a?.b), the result becomes null or undefined due to optional chaining, the entire chain evaluates to undefined without error.
        Examples:

        JavaScript

        let objectA = { b: { c: { d: 10 } } };
        let objectB = { b: null };
        let objectC; // undefined

        console.log(objectA.b?.c.d);  // Output: 10 (all properties exist)
        console.log(objectB.b?.c.d);  // Output: undefined (a.b is null, short-circuits before accessing 'c')
        console.log(objectC?.b.c.d);  // Output: undefined (a is undefined, short-circuits immediately)

        let myArray = [objectA, objectB, objectC];
        console.log(myArray[0]?.b?.c?.d); // Output: 10 (first element is objectA, chain works)
        console.log(myArray[1]?.b?.c?.d); // Output: undefined (second element is objectB, a.b is null, short-circuits)
        console.log(myArray[2]?.b?.c?.d); // Output: undefined (third element is objectC (undefined), short-circuits)

        let index = 0;
        let a; // undefined

        // Regular property access throws error if 'a' is undefined
        // try {
        //   a[index++]; // TypeError!
        // } catch (e) {
        //   console.log("Error caught");
        // }
        // console.log(index); // Output: 1 (increment happened before error)

        index = 0; // Reset index
        let result = a?.[index++]; // Conditional access - no error
        console.log(result);       // Output: undefined (a is undefined, whole expression is undefined)
        console.log(index);       // Output: 0 (index NOT incremented - short-circuited!)
        Benefit of Conditional Access: Makes your code cleaner and more robust when dealing with data structures that might have missing or optional parts. Avoids lots of if checks to see if objects exist before accessing their properties.

        Browser Support:  Conditional property access (?. and ?.[]) is a relatively recent addition to JavaScript (ES2020). Most modern browsers now support it.

        In Simple Words - Summary of Property Access Expressions:

        Dot Notation (.identifier): Quick and clean for accessing known properties with valid identifiers.
        Bracket Notation ([expression]): Flexible - use for any property name (even with spaces), and for dynamic property names or array indices.
        Both can be chained to access nested properties.
        Be aware of TypeError if you try to access properties of null or undefined using regular dot or bracket notation.
        Conditional Property Access (?. and ?.[]): Safe way to access properties when you are unsure if an object or property in the chain exists. Avoids errors by short-circuiting and returning undefined if any part of the chain is null or undefined. Use this for more resilient code!
*/

