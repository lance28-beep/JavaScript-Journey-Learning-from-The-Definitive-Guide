// Chapter 3: Types, Values, and Variables
    // // Overview:
    // Explains JavaScript's types, values, and variables.
    // Covers primitive types (numbers, strings, booleans, etc.) and object types.
    // Discusses type conversions, variable declarations, and scope.
// 3.1 Overview and Definitions
    // Types in JavaScript:
        // Primitive Types: Numbers, strings, booleans, null, undefined, and symbols.
        // Object Types: Objects, arrays, functions, and other specialized types like Date, RegExp, etc.
    // Mutable vs Immutable:
        // Primitives are immutable (e.g., numbers, strings).
        // Objects are mutable (e.g., arrays, objects).
// 3.2 Numbers
    // Number Type:
        // Represents integers and floating-point numbers.
        // Uses 64-bit floating-point format (IEEE 754).
    // Numeric Literals:
        // Integers: 0, 100, 0xFF (hex), 0b10101 (binary), 0o377 (octal).
        // Floating-point: 3.14, 6.02e23.
    // Arithmetic Operations:
        // Operators: +, -, *, /, %, ** (exponentiation).
        // Special values: Infinity, -Infinity, NaN.
    // BigInt:
        // Represents large integers: 1234n, 0x8000000000000000n.
        // Cannot mix with regular numbers in arithmetic.
       /*
       Imagine JavaScript is like a super smart calculator! It can do all the math stuff you learned in school and even more. Let's break down what this section is telling you about JavaScript and numbers.
            1. Basic Math Operations - Like your regular calculator buttons:
                + (Addition): Just like adding numbers. 5 + 3 is 8. Think of it as putting things together.
                - (Subtraction): Taking away. 10 - 4 is 6. Think of it as removing things.
                * (Multiplication): Repeated addition. 6 * 7 is 42. Think of it as groups of things.
                / (Division): Splitting into equal parts. 15 / 3 is 5. Think of it as sharing equally.
                % (Modulo - Remainder): The leftover after division. 16 % 5 is 1. Think of it as "how much is left over if I divide evenly?". For example, if you have 16 cookies and want to give 5 friends cookies each, you can give them 3 each (3 * 5 = 15), and you'll have 1 cookie left over. That '1' is the modulo.
                ** (Exponentiation - Power): Raising to a power. 2 ** 3 is 8 (because 2 * 2 * 2 = 8). Think of it as multiplying a number by itself a certain number of times.
                    Example:
                        JavaScript
                        let sum = 10 + 5;   // sum is 15
                        let difference = 20 - 8; // difference is 12
                        let product = 4 * 6;  // product is 24
                        let quotient = 30 / 5; // quotient is 6
                        let remainder = 17 % 4; // remainder is 1 (because 17 divided by 4 is 4 with a remainder of 1)
                        let power = 3 ** 2; // power is 9 (because 3 * 3 = 9)
            2.  Math Object - Your Advanced Math Toolkit:
            JavaScript has a special object called Math. Think of it as a box full of pre-made math tools and constants for more complex calculations. You access these tools by writing Math.toolName.
            Here are some tools in the Math box:
                Math.pow(base, exponent): Does the same as ** (exponentiation), but written as a function. Math.pow(2, 53) is 2 to the power of 53.
                Math.round(number): Rounds a number to the nearest whole number. Math.round(0.6) becomes 1, and Math.round(0.4) becomes 0.
                Math.ceil(number): Rounds a number up to the nearest whole number. Math.ceil(0.6) becomes 1, and Math.ceil(0.1) also becomes 1. Think of "ceiling" - you're always going up to the ceiling.
                Math.floor(number): Rounds a number down to the nearest whole number. Math.floor(0.6) becomes 0, and Math.floor(0.9) also becomes 0. Think of "floor" - you're always going down to the floor.
                Math.abs(number): Gives you the absolute value, which is the positive version of a number. Math.abs(-5) is 5, and Math.abs(5) is also 5. It's like asking "how far from zero is this number, regardless of direction?".
                Math.max(number1, number2, number3, ...): Finds the largest number among the ones you give it. Math.max(10, 5, 20) is 20.
                Math.min(number1, number2, number3, ...): Finds the smallest number. Math.min(10, 5, 20) is 5.
                Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive). It's like rolling a very special dice that always gives you a number less than 1 but not less than 0.
                Math.PI: A special number that represents Pi (π), which is about 3.14159... It's used in circle calculations.
                Math.E: Another special number, Euler's number (e), about 2.71828... Used in more advanced math.
                Math.sqrt(number): Calculates the square root of a number. Math.sqrt(9) is 3. It's like asking "what number multiplied by itself gives me this number?".
                Math.cbrt(number): Calculates the cube root of a number. Math.cbrt(27) is 3. It's like asking "what number multiplied by itself three times gives me this number?".
                Math.hypot(number1, number2, ...): Calculates the square root of the sum of the squares of the numbers. For two numbers, it's like finding the length of the hypotenuse of a right-angled triangle using the Pythagorean theorem. Math.hypot(3, 4) is 5 (because 3*3 + 4*4 = 25, and the square root of 25 is 5).
                Math.log(number): Calculates the natural logarithm (base e).
                Math.log10(number): Calculates the base-10 logarithm.
                Math.log2(number): Calculates the base-2 logarithm.
                Math.exp(number): Calculates e raised to the power of a number (e<sup>number</sup>).
                Math.sin(number), Math.cos(number), Math.tan(number): Trigonometric functions (if you ever need to work with angles and triangles).
                    Example using Math:
                    JavaScript
                    let powerOfTwo = Math.pow(2, 8); // powerOfTwo is 256
                    let roundedNumber = Math.round(3.7); // roundedNumber is 4
                    let randomNumber = Math.random(); // randomNumber will be a random number between 0 and 1 (like 0.4589...)
                    let circleCircumference = 2 * Math.PI * 5; // Calculate circumference of a circle with radius 5
            3.  Infinity, -Infinity, and NaN - What happens when math gets weird?
                  Sometimes, math operations can lead to results that aren't normal numbers. JavaScript has special values to handle these situations:
                Infinity: Represents positive infinity. This happens when a number is too big for JavaScript to handle, or if you divide a number by zero (except 0/0). Think of it as "bigger than any number you can imagine."
                    Example: 1 / 0 becomes Infinity. Number.MAX_VALUE * 2 also becomes Infinity (because it's too big).
                -Infinity: Represents negative infinity. Same as Infinity, but for very large negative numbers.
                     Example: -1 / 0 becomes -Infinity. -Number.MAX_VALUE * 2 also becomes -Infinity.
                NaN (Not-a-Number): Represents "not a number". This happens when a math operation doesn't make sense or gives an undefined result.
                     Example: 0 / 0 becomes NaN (because dividing zero by zero is undefined). Infinity / Infinity also becomes NaN. Trying to do math with text that isn't a number can also result in NaN (like parseInt("hello") - trying to turn "hello" into a number).
                     Example of Infinity and NaN:
                        JavaScript
                        let tooBig = Number.MAX_VALUE * 10; // tooBig is Infinity
                        let resultOfDivisionByZero = 5 / 0; // resultOfDivisionByZero is Infinity
                        let notANumber = 0 / 0; // notANumber is NaN
                        let invalidMath = Math.sqrt(-1); // invalidMath is NaN (you can't take the square root of a negative number in real numbers)
            4. Negative Zero (-0) - A Tiny Detail (mostly for experts):
                JavaScript has something called "negative zero" (-0).  It's very, very close to regular zero (0) and in most cases, JavaScript treats them as the same.
                0 === -0 is true (they are considered equal).
                However, there's a tiny difference when you use them for division:
                    1 / 0 is Infinity.
                    1 / -0 is -Infinity.
                 This is a very subtle point, and you usually don't need to worry about negative zero unless you're doing very precise calculations or dealing with edge cases in division.  For most practical purposes, just think of -0 as being almost exactly the same as 0.
            5.  Number Object - More Tools for Checking Numbers:
            Just like Math, Number is another built-in object, but this one has tools to help you check and work with numbers in specific ways:
                Number.isNaN(value): Checks if a value is NaN. Because NaN is weird and doesn't equal itself (NaN === NaN is false!), you need to use Number.isNaN() to check if something is NaN.
                Number.isFinite(value): Checks if a value is a normal number (not Infinity, -Infinity, or NaN). Think of "finite" as meaning "it has an end, it's not infinite."
                Number.isInteger(value): Checks if a value is a whole number (like 5, -10, 0, but not 3.5).
                Number.isSafeInteger(value): Checks if a value is a safe whole number. JavaScript can accurately represent whole numbers up to a certain limit. This checks if your number is within that safe range.
                Number.parseInt(string): Tries to convert a string into a whole number. For example, Number.parseInt("42") becomes 42. If it can't convert it (like "hello"), it will return NaN.
                Number.parseFloat(string): Tries to convert a string into a decimal number (a number with a decimal point). For example, Number.parseFloat("3.14") becomes 3.14.
                Number.EPSILON: A very, very small number. It's the smallest difference between two numbers that JavaScript can reliably distinguish. Used in very precise calculations.
                    Example using Number checks:
                    JavaScript
                        let result = 0 / 0; // result is NaN
                        Number.isNaN(result); // true (because result is NaN)
                        let bigNumber = 1000;
                        Number.isFinite(bigNumber); // true (it's a normal, finite number)
                        let decimalNumber = 3.14;
                        Number.isInteger(decimalNumber); // false (it's not a whole number)
                        let integerNumber = 7;
                        Number.isInteger(integerNumber); // true (it's a whole number)
                        let stringNumber = "123";
                        Number.parseInt(stringNumber); // 123 (converted string to number)
            6.  Checking for NaN - The Special Case:
                Remember, NaN is weird. You can't use === to check if something is NaN.
                    Incorrect: if (myValue === NaN) { ... } (This will always be false)
                    Correct way 1: if (Number.isNaN(myValue)) { ... } (This is the best way)
                    Correct way 2 (less common): if (myValue != myValue) { ... } (This works because NaN is the only value that is not equal to itself)
            7. Negative Zero is Equal to Positive Zero (mostly):
                 As mentioned before, for most practical purposes, 0 and -0 are the same. They are considered equal when you compare them using ===.  The difference mainly shows up when you divide by them, which results in Infinity or -Infinity.
            In Simple Words - Summary:
            JavaScript is good at math! It has:
                Basic math operators (+, -, *, /, %, **) like your regular calculator.
                A Math object with advanced math tools like rounding, square roots, logarithms, etc.
                Special values like Infinity, -Infinity, and NaN to handle results that aren't normal numbers (like division by zero or undefined operations).
                Number object with tools to check if values are NaN, finite numbers, integers, and to convert strings to numbers.
                A slightly weird value called negative zero (-0), which is almost the same as regular zero, but a tiny bit different in division.
                A special way to check for NaN using Number.isNaN() because NaN doesn't equal itself.
                So, whenever you need to do math in JavaScript, you have a lot of tools at your disposal, from basic calculations to complex mathematical functions and ways to handle special number situations!
       
       */
// 3.3 Text
// Strings:
// Immutable sequences of 16-bit Unicode characters.
// Literals: "hello", 'world', `template`.
// String Methods:
// length, substring(), slice(), indexOf(), replace(), toUpperCase(), etc.
// Template Literals:
// Allow embedded expressions: `Hello ${name}`.
// Can span multiple lines.
/*
    Okay, let's talk about Text in JavaScript!  In computer language, "text" is usually called a string.  Think of a string like a necklace made of beads, where each bead is a letter, number, symbol, or even a space.  JavaScript uses strings to handle words, sentences, and any kind of textual information.
    Here's a breakdown of what this section explains about strings in JavaScript:
    1. What are Strings? (Like a Necklace of Letters)
        Strings are for Text: Just like you use words to communicate, JavaScript uses strings to work with text in your programs. Anything you want to display as words or deal with as text will be a string.
        Ordered Sequence: The letters/characters in a string have a specific order. "hello" is different from "olleh". Just like the beads on a necklace are in a certain order.
        16-bit Values (Unicode): Computers need to represent characters as numbers. JavaScript uses a system called "Unicode" (specifically UTF-16). Imagine each bead on your necklace is represented by a number. This lets JavaScript handle pretty much any character from any language in the world, including emojis!
        Length: The length of a string is just how many characters (or "beads") are in it. "hello" has a length of 5.
        Zero-Based Indexing: This is a bit computer-y, but important! Imagine numbering the beads on your necklace starting from zero, not one. So, the first bead is at position 0, the second at position 1, and so on. This is how JavaScript refers to characters in a string.
        Immutable: Strings are like permanent necklaces. Once you make a string, you can't change it directly. If you want to change a string, you have to create a new string that's modified. You don't change the original necklace, you make a new one similar to it.
            Example:
            Imagine the string "JavaScript is fun!"
            It's text.
            The order is important.
            Each letter, space, and symbol is like a bead represented by a Unicode number.
            Its length is 18 (count all the letters, spaces, and the exclamation mark).
            'J' is at position 0, 'a' is at position 1, 'v' is at position 2, and so on.
    2. How to Write Strings - String Literals (Making the Necklace)
        You have three main ways to write strings in JavaScript, like choosing different types of clasps for your necklace:
            Single Quotes ' ': 'Hello' - Like using a simple hook clasp.
            Double Quotes " ": "World" - Like using a slightly fancier lobster clasp.
            Backticks ` ` (Template Literals): ``Hello, world!`` - Like using a magnetic clasp, which has extra powers! (We'll see why later).
            Key Points about Quotes:
            Matching Pairs: You must start and end a string with the same type of quote. 'Hello" (wrong - mismatched quotes). 'Hello' (correct).
            Quotes Inside Quotes: If you want to use quotes inside your string, you can use a different type of quote to enclose the string.
            "She said 'Hi'" (Double quotes outside, single quotes inside)
            'He said "Okay"' (Single quotes outside, double quotes inside)
            Backticks are Special (Template Literals): Backticks (``) are not just another quote style. They are for template literals, which are more powerful.
    3. Multi-line Strings and Escaping (Long Necklaces and Special Beads)
            Breaking Long Strings (Old Way - with \):  In older JavaScript, if you wanted a long string that went over multiple lines in your code, you had to use a backslash \ at the end of each line (except the last one).  It's like making a super long necklace by tying shorter strands together.
            JavaScript
            let longString = "This is a very \
            long string that \
            spans multiple lines.";
            The backslashes and the line breaks themselves are not part of the actual string. It's just a way to write it nicely in your code.
            Newlines in Strings (\n): To actually put a newline character (like pressing "Enter" on your keyboard) inside a string (using single or double quotes), you use the escape sequence \n. Think of \n as a special "newline bead" you add to your necklace.
                JavaScript
                let twoLines = 'First line\nSecond line';
                // When you display this, it will show as:
                // First line
                // Second line
            Backticks for Multi-line Strings (Easy Multi-line Necklaces): Backticks (template literals) make multi-line strings much easier! You can just write your string across multiple lines in your code, and the line breaks will be preserved in the string. It's like just laying out your necklace in a long line, no special joining needed!
                JavaScript
                let multiLineString = `This is a string
                that spans multiple
                lines using backticks.`;
                // This string will contain the newlines.
            Escape Sequences (\ + something): The backslash \ is like a special "escape key".  It tells JavaScript "treat the next character in a special way, don't take it literally".  We already saw \n for newline.  Here are some other common escape sequences (like special beads with special meanings):
            \' - Single quote. Use this if you want to put a single quote inside a single-quoted string. 'It\'s fun'
            \" - Double quote. Use this if you want to put a double quote inside a double-quoted string. "He said \"Hello\""
            \\ - Backslash itself. If you want to actually include a backslash character in your string. 'Path: C:\\folder\\file.txt'
            \t - Tab character (like pressing the Tab key).
            \r - Carriage return (older systems used this for newlines).
            \b - Backspace.
            \uXXXX - Unicode character (where XXXX is a 4-digit hexadecimal code for a Unicode character). For very specific symbols.
            \u{XXXXX} (ES6 onwards) - Unicode character for characters outside the basic range (like emojis), where XXXXX is the hexadecimal codepoint.
            Example of Escaping:
            JavaScript
            let quoteString = 'He said, "You\'re right!"'; // Using \' for apostrophe and " for double quotes
            let filePath = "C:\\documents\\report.txt"; // Using \\ to represent backslashes in a file path.
    4. Working with Strings (Playing with your Necklace)
        JavaScript provides lots of tools (methods and properties) to work with strings, like tools to:
        Concatenation (Joining Necklaces): The + operator is used to join strings together, end-to-end. It's like linking necklaces to make a longer one.
            JavaScript
            let firstName = "John";
            let lastName = "Doe";
            let fullName = firstName + " " + lastName; // fullName becomes "John Doe"
        Comparison (Comparing Necklaces): You can compare strings using === (equal), !== (not equal), <, <=, >, >=. JavaScript compares strings character by character based on their Unicode values (their "number representation").
            JavaScript
            "apple" === "apple"  // true (same characters in the same order)
            "apple" === "Apple"  // false (case-sensitive - 'a' and 'A' are different)
            "banana" > "apple" // true (in dictionary order, 'b' comes after 'a')
        Length (Counting Beads): The .length property tells you how many characters are in a string.
            JavaScript
            let myString = "programming";
            myString.length; // returns 11
        String Methods (Special Tools for Necklaces): JavaScript has many built-in functions (methods) that let you do all sorts of things with strings.  Here are some important ones (think of them as different tools in your necklace-making kit):
        substring(startIndex, endIndex) and slice(startIndex, endIndex):  Get a part of a string (like taking a section of your necklace). substring and slice are very similar for positive indices.
            JavaScript
            let message = "Hello, world";
            message.substring(0, 5); // "Hello" (from index 0 up to, but not including, index 5)
            message.slice(7, 12);    // "world" (from index 7 up to, but not including, index 12)
        slice also allows negative indexes to count from the end of the string:
            JavaScript
            message.slice(-5); // "world" (last 5 characters)
        split(delimiter):  Breaks a string into an array of smaller strings, using the delimiter as a separator (like cutting your necklace into pieces at certain points).
            JavaScript
            let csvData = "name,age,city";
            let fields = csvData.split(","); // fields becomes ["name", "age", "city"]
        indexOf(substring, startPosition) and lastIndexOf(substring): Find the position of a substring within a string (like finding a specific bead in your necklace).
        indexOf finds the first occurrence from the beginning.
        lastIndexOf finds the last occurrence from the end.
        They return the index (position) or -1 if the substring is not found.
            JavaScript
            let text = "banana";
            text.indexOf("a");      // 1 (first 'a' is at index 1)
            text.indexOf("a", 2);   // 3 (first 'a' starting from index 2 is at index 3)
            text.lastIndexOf("a");  // 5 (last 'a' is at index 5)
            text.indexOf("z");      // -1 ("z" is not in "banana")
       startsWith(substring), endsWith(substring), includes(substring) (ES6 and later):  Check if a string starts with, ends with, or contains a specific substring (like asking "Does my necklace start with a red bead?", "Does it end with a blue bead?", "Does it have any green beads?"). They return true or false.
            JavaScript
            let greeting = "Hello world!";
            greeting.startsWith("Hello");   // true
            greeting.endsWith("world!");   // true
            greeting.includes("o w");    // true
            greeting.includes("goodbye"); // false
        replace(searchValue, newValue):  Replaces a part of a string with another string. (Remember strings are immutable, so this creates a new string). It only replaces the first match by default.
            JavaScript
            let sentence = "I love cats. Cats are cute.";
            let newSentence = sentence.replace("cats", "dogs"); // newSentence is "I love dogs. Cats are cute." (only the first "cats" is replaced)
        toLowerCase() and toUpperCase():  Convert a string to all lowercase or all uppercase. (Creates new strings).
            JavaScript
            let mixedCase = "HeLlO";
            mixedCase.toLowerCase(); // "hello"
            mixedCase.toUpperCase(); // "HELLO"
        trim(), trimStart(), trimEnd(): Remove whitespace (spaces, tabs, newlines) from the beginning and/or end of a string.  (Creates new strings). trim() removes from both ends.
            JavaScript
            let spacedString = "   hello   ";
            spacedString.trim();      // "hello" (removes spaces from both sides)
            spacedString.trimStart(); // "hello   " (removes spaces from the start only)
            spacedString.trimEnd();   // "   hello" (removes spaces from the end only)
        padStart(targetLength, paddingString) and padEnd(targetLength, paddingString) (ES2017): Add padding (characters) to the beginning or end of a string to make it reach a certain length.
            JavaScript
            "5".padStart(3, "0");   // "005" (pad start with "0" to length 3)
            "hello".padEnd(10, "*"); // "hello*****" (pad end with "*" to length 10)
        charAt(index): Get the character at a specific index (position) in a string.
            JavaScript
            let word = "JavaScript";
            word.charAt(0); // "J" (character at index 0)
            word.charAt(4); // "S" (character at index 4)
        charCodeAt(index) and codePointAt(index):  Get the Unicode number (code) of the character at a specific index.
        concat(...):  Joins strings together (like +, but less common to use).
        repeat(count): Creates a new string by repeating the original string count times.
            JavaScript
            "abc".repeat(3); // "abcabcabc"
        Array-like Access: You can also access individual characters of a string using square brackets [] like you would with an array.  It's like directly picking a bead from your necklace using its position number.
            JavaScript
            let language = "Python";
            language[0]; // "P" (character at index 0)
            language[3]; // "h" (character at index 3)
        Important Note: String methods like replace(), toUpperCase(), toLowerCase(), trim() etc., do not change the original string. They always return a new, modified string.  Strings in JavaScript are immutable!
    5. Template Literals (Backtick Strings - Super Necklaces)
        Template literals (strings in backticks ``) are super useful because they allow for:
        Multi-line strings (as we saw earlier).
        Expression Interpolation:  You can embed JavaScript expressions directly inside a string using ${expression}.  It's like putting special, dynamic beads into your necklace!
            JavaScript
            let name = "Alice";
            let age = 30;
            let message = `Hello, my name is ${name} and I am ${age} years old.`;
            // message will be: "Hello, my name is Alice and I am 30 years old."
            Inside the ${ }, you can put any valid JavaScript expression (variables, calculations, function calls, etc.). The result of the expression will be converted to a string and inserted into the template literal.
            Tagged Template Literals (Advanced):  This is a more advanced feature briefly mentioned. You can put a function name right before the backticks (no parentheses!). This is called a "tagged template literal".  The function then gets called with the string parts and the expression values as arguments.  This is used for more specialized string processing (like automatically escaping HTML to prevent security issues). String.raw\...`` is a built-in example that gives you the "raw" string content without processing escape sequences.
    6. Pattern Matching (Regular Expressions - Finding Patterns in Necklaces)
    This section briefly introduces Regular Expressions (RegExps).  RegExps are a powerful way to describe patterns in text.  They are like super-flexible search tools that can find complex patterns in strings.
    RegExp Literals (Slashes / /): You write regular expressions between forward slashes /pattern/.
    /\d+/g - Example of a regular expression that finds one or more digits (\d+) globally (g - find all occurrences).
        RegExp Methods and String Methods with RegExps: JavaScript provides methods for working with regular expressions, both on RegExp objects themselves and on strings.
        pattern.test(text) - Checks if a text string matches a pattern (true or false).
        text.search(pattern) - Finds the index of the first match of a pattern in a text.
        text.match(pattern) - Returns an array of matches of a pattern in a text.
        text.replace(pattern, replacement) - Replaces matches of a pattern in a text with a replacement string.
        text.split(pattern) - Splits a text string into an array using a pattern as a delimiter.
        Example (Very Basic RegExp):
            JavaScript
            let myText = "I have 2 apples and 3 oranges.";
            let digitPattern = /\d+/g; // Regular expression to find one or more digits
            digitPattern.test(myText);       // true (because there are digits in the text)
            myText.search(digitPattern);     // 7 (index of the first digit '2')
            myText.match(digitPattern);      // ["2", "3"] (array of all digit matches)
            myText.replace(digitPattern, "#"); // "I have # apples and # oranges." (replaces digits with "#")
            myText.split(digitPattern);       // ["I have ", " apples and ", " oranges."] (splits at digits)
            Regular expressions are a big topic on their own! This section just gives you a tiny glimpse. They are incredibly useful for tasks like:
    Validating input (e.g., is this a valid email address?).
    Searching and replacing complex patterns in text.
    Extracting specific information from text.
    In a Nutshell:
        Strings in JavaScript are how you work with text. They are sequences of characters, and JavaScript gives you many tools to create, manipulate, and analyze them. You have different ways to write strings (quotes), special characters using escape sequences, and a rich set of methods for all sorts of string operations. Template literals (backticks) are a powerful modern feature for creating strings with embedded expressions. And regular expressions are for advanced pattern matching in text.  It's like having a complete toolkit for text manipulation in your JavaScript programs!


*/
// 3.4 Boolean Values
// Boolean Type:
    // Represents true or false.
    // Falsy values: false, 0, "", null, undefined, NaN.
    // Truthy values: Everything else.
    // Boolean Operators:
    // && (AND), || (OR), ! (NOT).
    /*
        Alright, let's talk about Boolean Values in JavaScript. Think of them as simple yes/no or true/false answers that your computer can understand.
        Imagine a light switch. It can be either on or off.  Boolean values in JavaScript are kind of like that light switch! They have only two possible states:
            true: This is like the light switch being on. It means "yes," "that's correct," or "the condition is met."
            false: This is like the light switch being off. It means "no," "that's not correct," or "the condition is not met."
        JavaScript has special words for these values: true and false.  These are called boolean literals.
        
        How do we get true or false?  Comparisons are key!
        
        Boolean values often come from comparisons.  Think of asking a question to JavaScript: "Is this true or false?".  JavaScript will give you a boolean answer.
        For example, imagine you have a variable named a and it has the value 5.  You can ask JavaScript: "Is a equal to 4?".  You write this question in code like this:
            JavaScript
            a === 4
        This === is a comparison operator (it checks for equality). JavaScript will look at this and think:
            "Hmm, a is 5, and 5 is not equal to 4."
            "Okay, the answer to 'Is a equal to 4?' is false."
        So, the result of a === 4 in this case is the boolean value false.
        If you asked: "Is a equal to 5?" (written as a === 5), JavaScript would say:
            "a is 5, and 5 is equal to 5."
            "The answer is true."
        So, a === 5 would give you the boolean value true.
        Boolean Values in Action:  Controlling your program with if/else
        
        Boolean values are super useful for making decisions in your JavaScript programs.  They are often used with things called control structures, like the if/else statement.
        Imagine an if/else statement like a fork in a road.  You need to decide which path to take based on whether something is true or false.
        Let's say we have some code like this:
            JavaScript
            let a = 3;
            let b = 10;
            if (a === 4) {
            // If 'a === 4' is TRUE, do this code block:
            b = b + 1;
            } else {
            // If 'a === 4' is FALSE, do this code block instead:
            a = a + 1;
            }
            // After this code runs, what will 'a' and 'b' be?
        Let's break it down:
            if (a === 4): JavaScript first checks the condition inside the parentheses: a === 4.
            Since a is 3, a === 4 is false.
            Because the condition is false, JavaScript skips the code inside the first curly braces {} (the if block).
            It goes to the else part.
            It executes the code inside the else curly braces {}: a = a + 1;. This adds 1 to a, so a becomes 4.
            The program continues.
        After this if/else block, a will be 4 and b will still be 10 (because the if part, which would have changed b, was skipped).
        
        Truthy and Falsy:  Not exactly true or false, but they act like it!
        JavaScript is a bit flexible.  It doesn't just use true and false as boolean values.  It has a concept of "truthy" and "falsy".
            Falsy values: These are values that, when JavaScript expects a boolean (like in an if condition), are treated as if they were false.  There are only a few falsy values:
            undefined (when a variable hasn't been assigned a value)
            null (intentional absence of a value)
            0 (the number zero)
            -0 (negative zero, practically the same as zero)
            NaN (Not-a-Number - the result of invalid math operations)
            "" (the empty string - a string with no characters)
        Truthy values:  Everything else that is not on the falsy list is considered truthy. This includes:
            All numbers except 0 and -0 (like 1, -5, 3.14, Infinity).
            All strings except the empty string "" (like "hello", " ", "0").
            All objects (we'll learn about objects later), even empty objects {}.
            Arrays, even empty arrays [].
            The boolean value true itself, of course!
        Using Truthy/Falsy in if statements (Shorter code!)
        Because of truthy and falsy, you can sometimes write shorter if statements.
        Let's say you have a variable o that might hold an object, or it might be null if there's no object.  You want to do something only if o actually contains an object (i.e., it's not null).
        Long way (explicit comparison):

        JavaScript
        if (o !== null) { // Check if 'o' is NOT equal to null
        // Do something with 'o' because it's (hopefully) an object
        console.log("Object 'o' exists!");
        }
        
        Shorter way (using truthy/falsy):

        JavaScript
        if (o) { // Just check 'o' directly
        // Do something with 'o' - it will only run if 'o' is truthy (not falsy)
        console.log("Object 'o' exists!");
        }

        In the shorter version, JavaScript checks if o is truthy.  If o is null (which is falsy), the condition is treated as false, and the code inside the if block is skipped. If o holds an object (which is truthy), the condition is treated as true, and the code inside the if block runs.
        Which way to use? It depends on what you need!  If you specifically need to check if something is not null, the explicit o !== null is clearer.  But if you just want to know if a variable has some meaningful value (and you know that falsy values mean "no value" in your context), the shorter if (o) can be more concise.

        Boolean Operators: Combining True/False Conditions
        JavaScript gives you operators to combine boolean values to make more complex conditions.

        && (AND operator):  Think of this as "both conditions must be true."  The && operator returns true only if both the things you're connecting with && are truthy. Otherwise, it returns false.
            JavaScript
            let isRaining = true;
            let hasUmbrella = false;
                if (isRaining && hasUmbrella) { // "Is it raining AND do I have an umbrella?"
                console.log("I can go out and stay dry!"); // This won't run because hasUmbrella is false
                } else {
                console.log("Maybe I should stay inside or get an umbrella."); // This will run
                }

        || (OR operator): Think of this as "at least one condition must be true." The || operator returns true if at least one of the things you connect with || is truthy. It only returns false if both are falsy.
            JavaScript
            let isWeekend = true;
            let haveTickets = false;
                if (isWeekend || haveTickets) { // "Is it the weekend OR do I have tickets?"
                console.log("Let's do something fun!"); // This WILL run because isWeekend is true
                } else {
                console.log("Just another day...");
        }
        ! (NOT operator): This is like flipping a boolean value to its opposite. If something is true, ! makes it false, and if it's false, ! makes it true.
                JavaScript
                let isReady = false;
                if (!isReady) { // "Is it NOT ready?" (opposite of 'isReady')
                console.log("Still preparing..."); // This will run because !isReady is true (opposite of false)
                } else {
                console.log("Let's go!");
                }
        Example combining operators:
                JavaScript
                let x = 0;
                let y = 0;
                let z = 5;
                if ((x === 0 && y === 0) || !(z === 0)) {
                // Condition breakdown:
                // (x === 0 && y === 0) : Is x zero AND y zero?  (true because both are 0)
                // !(z === 0) :  Is it NOT true that z is zero? (true because z is 5, which is not zero, so NOT true is false, and NOT false is true)
                // (true) || (true) : Is the first part OR the second part true? YES, both are true!
                console.log("Condition is met!"); // This will run
                }
        In Simple Words - Summary:
        Boolean values (true and false) are JavaScript's way of saying "yes" or "no." They are often created by comparisons and are essential for making decisions in your code using if/else and other control structures.  JavaScript also has "truthy" and "falsy" values that act like true and false in boolean contexts. Finally, boolean operators (&&, ||, !) let you combine boolean conditions to create more complex logic in your programs. 
    */

// 3.5 null and undefined
    // null:
    // Represents an intentional absence of value.
    // undefined:
    // Represents an uninitialized or missing value.
    // Comparison:
    // null == undefined → true.
    // null === undefined → false.
    /*
    Let's talk about null and undefined in JavaScript. These are special values that basically mean "no value," but they have slightly different flavors of "no value." Think of them like different kinds of "empty boxes."
            1. null - The "Intentional Empty Box"
            Imagine you have a box, and you purposely put nothing in it. You're saying, "This box is meant to be empty. I know it's empty, and that's okay."
            That's kind of what null is in JavaScript.
            null means "intentionally no value." Programmers use null to explicitly say, "This variable or object property is supposed to have no value right now, or it's intentionally set to be empty."
            typeof null is "object" - This is a bit weird and considered a historical quirk in JavaScript. Don't get too hung up on this. Just know that typeof null will tell you it's an "object," even though it's not really like a regular object. Think of it as a "special object value" that means "no object."
            It's its own type. Even though typeof null is "object," in practice, think of null as being the only value of its own special type. It's a unique "no value" type.
            Used for numbers, strings, objects... anything. You can use null to indicate "no value" for variables that are supposed to hold numbers, strings, objects, or anything else. It's a general way to say "this is empty right now."
            Similar to other languages: If you've programmed in other languages, you might have seen similar concepts like NULL, nil, or None. They all serve a similar purpose – representing the absence of a value.
            Example Analogy for null:

            Imagine you're ordering a custom-made t-shirt online. There's a field for "Special Instructions." If you don't have any special instructions, you might intentionally leave that field blank.  Leaving it blank is like setting it to null - you're deliberately saying "no special instructions."

            In code, you might see:

            JavaScript

            let customerName = "Alice";
            let specialInstructions = null; // Intentionally set to null because there are no special instructions

            console.log(customerName);        // Output: Alice
            console.log(specialInstructions); // Output: null
            2. undefined - The "Accidental Empty Box" or "Never Filled Box"

            Now imagine you have another box. But this time, it's empty because:

            You forgot to put anything in it. You declared the box existed, but you never actually placed anything inside.
            You looked in a drawer for a specific box, but that box doesn't even exist in the drawer. You're trying to access something that was never there.
            That's closer to what undefined represents in JavaScript.

            undefined means "absence of value" in a more system-level or unexpected way.  It often happens when JavaScript expects a value, but there isn't one.

            Uninitialized variables: If you declare a variable but don't give it a value right away, it starts out as undefined.

            JavaScript

            let myVariable; // Declared but not assigned a value
            console.log(myVariable); // Output: undefined
            Non-existent object properties or array elements: If you try to access a property that doesn't exist on an object or an element outside the bounds of an array, you get undefined.

            JavaScript

            let myObject = { name: "Bob" };
            console.log(myObject.age); // Output: undefined (object doesn't have an 'age' property)

            let myArray = [1, 2, 3];
            console.log(myArray[5]);  // Output: undefined (index 5 is out of bounds)
            Functions that don't explicitly return: If a function doesn't have a return statement (or has a return statement without a value), it implicitly returns undefined.

            JavaScript

            function greet(name) {
            console.log("Hello, " + name); // No 'return' statement
            }

            let result = greet("Charlie");
            console.log(result); // Output: undefined (function didn't return anything explicitly)
            Function parameters with missing arguments: If you define a function with parameters, but you call it without providing arguments for all of them, the missing parameters become undefined inside the function.

            JavaScript

            function multiply(a, b) {
            console.log("a:", a); // a will be undefined
            console.log("b:", b); // b will be 5
            return a * b;
            }

            multiply(undefined, 5); // Called with only one argument for 'b'
            // Output:
            // a: undefined
            // b: 5
            // NaN (because undefined * 5 is NaN - Not-a-Number)
            typeof undefined is "undefined" - This is more straightforward. undefined is considered to be of the "undefined" type.

            undefined is a global constant. It's a predefined value in JavaScript. You can technically reassign it (though you really shouldn't!), but it starts out as this "undefined value."  null is a keyword, whereas undefined is a global variable initialized to the undefined value. (This distinction is not practically very important).

            Example Analogy for undefined:

            Imagine you ask someone, "Hey, what's in that drawer over there?".  They open the drawer, and it's completely empty.  You didn't intentionally put nothing in it; it just turned out to be empty because nothing was ever placed there, or maybe something was supposed to be there, but it's missing. That's more like undefined – an absence that's not necessarily deliberate.

            3. Similarities and Differences: "No Value" Brothers (but not Twins)

            Similarities:

            Both mean "no value."  In a general sense, both null and undefined indicate that something lacks a meaningful value.

            Loosely Equal:  JavaScript considers them loosely equal when you use the == operator:  null == undefined is true.

            Falsy Values: Both null and undefined are falsy values. This means in situations where JavaScript expects a boolean (like in an if condition), they both act like false.

            JavaScript

            if (null) {
            console.log("This won't print because null is falsy");
            }

            if (undefined) {
            console.log("This won't print either because undefined is falsy");
            }
            No Properties or Methods:  Neither null nor undefined has any properties or methods you can access. If you try to use dot notation (.) or bracket notation ([]) to access a property or method of null or undefined, you'll get a TypeError (an error because you're trying to do something that's not allowed).

            JavaScript

            null.toString(); // Error: TypeError: Cannot read properties of null (reading 'toString')
            undefined.length; // Error: TypeError: Cannot read properties of undefined (reading 'length')
            Key Differences:

            Feature	null	undefined
            Meaning	Intentional absence of value	System-level or unexpected absence of value
            How it arises	Programmer explicitly sets it	JavaScript implicitly sets it in various cases
            typeof	"object" (historical quirk)	"undefined"
            Strict Equality	null === undefined is false	
            Loose Equality	null == undefined is true	

            Export to Sheets
            4. When to Use Which (and When to Avoid Both)

            Author's Recommendation (in the text):

            Use null when you intentionally want to represent the absence of a value in your program logic. It's a signal to other programmers (and yourself) that "yes, this variable is supposed to be empty here, and I'm doing it on purpose."
            Think of undefined more as a system-level thing or something that happens when you forget to assign a value or try to access something that doesn't exist.
            General Good Practice:

            Avoid using null and undefined when you can. Try to design your code so that variables and properties always have meaningful values if possible. Good code often aims to minimize situations where you need to rely on null or undefined.
            Be explicit if you do need to represent "no value." If you must represent the intentional absence of something, using null can be a clear way to do it (according to the text's author). However, some developers prefer to avoid null altogether and manage absence differently.
            In Simple Words - Summary:

            Both null and undefined in JavaScript mean "no value."

            null: Think "intentional emptiness." You, the programmer, are deliberately saying "this is supposed to be empty."
            undefined: Think "unintentional or system emptiness." JavaScript uses it when something is missing or hasn't been initialized.
            They are similar because they both represent absence, are loosely equal, and are falsy. They are different in how they arise and what they conceptually represent.  It's generally good to be aware of them, but strive to write code where you minimize relying on them to represent normal program flow, opting for more explicit value representation when possible.
                
    */

// 3.6 Symbols
// Symbol Type:
// Unique and immutable values used as property keys.
// Created with Symbol(): let sym = Symbol("description").
// Used for creating non-string property names.
/*
            Let's talk about Symbols in JavaScript.  This is a newer and a bit more advanced concept, but we can break it down simply!
            Imagine you have a box (an object in JavaScript).  You want to put things inside this box and give each thing a name so you can find it later. These names are called property names.
            Before Symbols (Old way - using Strings for names):
            In JavaScript's early days, you could only use strings as names for things inside your object-box.  Like this:

            JavaScript

            let myBox = {}; // Create an empty box

            // Using strings as names:
            myBox["color"] = "red";   // Put "red" inside and name it "color"
            myBox["size"] = "large";  // Put "large" inside and name it "size"

            console.log(myBox["color"]); // To get what's named "color" - you get "red"
            console.log(myBox["size"]);  // To get what's named "size" - you get "large"
            This works fine!  Strings are easy to use as names.  But sometimes, using strings as names can lead to problems, especially in bigger programs.

            The Problem with String Names: Name Clashes

            Imagine you're working on a big project with many programmers.  You create an object, and you use string names like "id", "name", "description", etc., for its properties.

            Now, someone else on your team also creates code that works with the same object.  They also might use strings like "id", "name", "description" for their code, maybe for a totally different purpose!

            Uh oh!  Name clash! If you both try to use the same string name for properties in the same object, you might accidentally overwrite 1  each other's properties, or your code might interfere with each other in unexpected ways. It's like if two people in a crowded room try to call out for "John" - which "John" are they talking to?   
            1. 
            github.com
            github.com

            Symbols to the Rescue: Secret, Unique Names!

            Symbols are introduced to solve this "name clash" problem. Think of Symbols as secret, unique IDs that you can use as property names.  They are not strings.  Every time you create a Symbol, you get a brand new, unique name that's guaranteed not to clash with any other Symbol or any string name.

            How to Create a Symbol:

            You use the Symbol() function to create a Symbol.

            JavaScript

            let mySymbolName = Symbol(); // Create a new, unique Symbol

            console.log(typeof mySymbolName); // Output: "symbol" - it's a new type!
            Using Symbols as Property Names:

            You can use Symbols just like strings to name properties in objects:

            JavaScript

            let myObject = {};

            let stringPropertyName = "myStringProperty";
            let symbolPropertyName = Symbol("mySymbolProperty"); // Give the symbol a description (optional)

            myObject[stringPropertyName] = "This is a string property value";
            myObject[symbolPropertyName] = "This is a symbol property value";

            console.log(myObject[stringPropertyName]);    // Output: "This is a string property value"
            console.log(myObject[symbolPropertyName]);    // Output: "This is a symbol property value"
            Key Idea: Uniqueness!

            The most important thing about Symbols is that every time you call Symbol(), you get a completely unique Symbol. Even if you give them the same "description" (the string inside the parentheses in Symbol("description")), they are still different and unique.

            JavaScript

            let symbol1 = Symbol("test");
            let symbol2 = Symbol("test");

            console.log(symbol1 === symbol2); // Output: false! They are NOT the same, even with the same description.
            Why is Uniqueness Useful? Avoiding Overwriting!

            Because Symbols are unique, you can use them as property names and be very confident that you won't accidentally overwrite a property that was set by another part of your code or someone else's code.

            Imagine you're writing a library that adds some special functionality to objects. You can use Symbols as property names for your library's internal stuff.  Because your Symbols are unique, you're much less likely to accidentally mess with properties that users of your library might already be using with string names.

            Example - Avoiding Accidental Overwriting:

            Let's say you want to add a "secret ID" to an object, but you don't want anyone else to accidentally access or change it. You can use a Symbol for this:

            JavaScript

            let myObject = {
            name: "Product A",
            // ... other properties ...
            };

            // Create a Symbol for our "secret ID"
            let secretIdSymbol = Symbol("productId");

            // Add the secret ID property using the Symbol
            myObject[secretIdSymbol] = "XyZ-123-Unique";

            // Now, even if someone else tries to add a property called "productId" (as a string),
            // it won't clash with our Symbol-named property!
            myObject["productId"] = "Oops, someone tried to set a string-named 'productId' property!";

            console.log(myObject["productId"]);        // Output: "Oops, someone tried to set..." (string property)
            console.log(myObject[secretIdSymbol]);     // Output: "XyZ-123-Unique" (our Symbol property is still safe!)
            See? The Symbol property and the string property with a similar name exist side-by-side without interfering with each other.  Symbols provide a way to create truly distinct property names.

            Descriptions for Symbols (Optional, for Debugging):

            When you create a Symbol using Symbol("description"), the string "description" is just for making it easier to identify the Symbol when you're debugging or logging it.  It shows up when you convert the Symbol to a string using toString().  But the description doesn't make Symbols equal or unequal; uniqueness is always guaranteed.

            JavaScript

            let symbolA = Symbol("userId");
            let symbolB = Symbol("userId");

            console.log(symbolA.toString()); // Output: "Symbol(userId)" - description is there for info
            console.log(symbolB.toString()); // Output: "Symbol(userId)" - description is the same, but...
            console.log(symbolA === symbolB);  // Output: false - still unique!
            Global Symbol Registry - Sharing Symbols (Sometimes you do want to share):

            Sometimes, you do want to have a Symbol that is the same Symbol if different parts of your code refer to it using the same "key."  This is where the global Symbol registry and Symbol.for() come in.

            Symbol.for("keyString"): This function checks if a Symbol with the given "keyString" already exists in a global registry.
            If a Symbol with that key exists, it returns the existing Symbol.
            If no Symbol exists with that key, it creates a new Symbol, registers it in the global registry with that key, and returns the new Symbol.
            Example of Symbol.for() - Getting the same Symbol:

            JavaScript

            let sharedSymbol1 = Symbol.for("app.specialFeature"); // Get or create Symbol with key "app.specialFeature"
            let sharedSymbol2 = Symbol.for("app.specialFeature"); // Get or create Symbol with key "app.specialFeature" again

            console.log(sharedSymbol1 === sharedSymbol2); // Output: true!  They are now the SAME Symbol!
            console.log(sharedSymbol1.toString());       // Output: "Symbol(app.specialFeature)"
            Symbol.keyFor(symbol) - Getting the Key back:

            If you have a Symbol that was created using Symbol.for(), you can get back the "keyString" that was used to register it using Symbol.keyFor(symbol).

            JavaScript

            let sharedSymbol = Symbol.for("my.shared.symbol");
            let key = Symbol.keyFor(sharedSymbol);

            console.log(key); // Output: "my.shared.symbol"
            Important Note about Symbol.keyFor(): It only works for Symbols created with Symbol.for(). If you create a Symbol using just Symbol(), it's not in the global registry, and Symbol.keyFor() will return undefined for it.

            When to use Symbol.for() vs. Symbol():

            Symbol() (plain Symbol()): Use this when you want to create a completely unique, private-ish property name that you don't intend to share with other parts of your code or external code. This is the most common use case for Symbols - for avoiding property name conflicts.
            Symbol.for("keyString"): Use this when you want to create a well-known, shared Symbol that different parts of your code (or even different libraries) can consistently refer to using the same "keyString." This is useful for creating standardized extension points, like Symbol.iterator (used for making objects iterable in loops).
            In Simple Words - Summary:

            Symbols are like unique, secret IDs for naming properties in JavaScript objects.

            They are not strings. They are a new, special type.
            Symbol() creates a brand new, unique Symbol every time, even with the same description. This helps prevent property name clashes in objects, especially in larger projects or when working with external code.
            Symbol.for("keyString") creates or re-uses a Symbol from a global registry based on a "keyString." This is for creating shared, well-known Symbols that different parts of code can agree on.
            Think of Symbols as a way to create truly distinct and non-colliding property names, which is very helpful for organizing larger JavaScript codebases and creating extension mechanisms.
            */

// 3.7 The Global Object
// Global Scope:
// In browsers: window or globalThis.
// In Node.js: global.
// Global Properties:
// undefined, NaN, Infinity, isNaN(), parseInt(), etc.
/*
        Let's talk about the Global Object in JavaScript. Think of it as the most important box in your JavaScript world, a central hub that contains all the essential tools and information that every JavaScript program needs and can access.

        Imagine it like this:

        The Global Object is like the City Hall or Town Square of JavaScript City.

        Central Hub: It's the main central place where everything important is located.
        Public Resources: It holds resources that are available to everyone in JavaScript City.
        Always There: Whenever JavaScript City is set up (when your program starts running), the City Hall is automatically created.
        What's Inside the Global Object (City Hall)?

        The global object is basically a big collection of properties.  These properties are like the important buildings, services, and information desks inside City Hall.  They are things that are globally defined and always available in your JavaScript program.

        Here are the main types of things you'll find inside the Global Object:

        Global Constants (Like basic facts everyone knows):

        undefined: The value representing "no value assigned yet."
        Infinity: Represents infinity (a number larger than any representable number).
        NaN (Not-a-Number): Represents an invalid number result (like 0/0).
        These are like basic facts everyone in JavaScript City just knows. You don't need to declare them or import them; they're just always there.

        Global Functions (Like public services everyone can use):

        isNaN(): A function to check if a value is NaN.
        parseInt(): A function to convert a string to an integer number.
        eval(): A function that can run JavaScript code from a string (use with caution!).
        These are like public services everyone in JavaScript City can use.  You can call these functions directly from anywhere in your code.

        Constructor Functions (Like blueprints for making new things):

        Date(): Used to create Date objects (for working with dates and times).
        RegExp(): Used to create Regular Expression objects (for pattern matching in text).
        String(), Object(), Array(): Used to create String, Object, and Array objects respectively.
        These are like blueprints or factories in City Hall for creating new types of things in JavaScript.  You use them to "construct" new objects.

        Global Objects (Like important departments or agencies within City Hall):

        Math: A global object containing math-related constants and functions (like Math.PI, Math.sqrt(), Math.random()).
        JSON: A global object for working with JSON data (converting between JavaScript objects and JSON text).
        These are like important departments or agencies within City Hall that group together related tools and information.

        Important Point: They are Global!

        The key thing is that all these things inside the Global Object are global. This means you can use them directly in your JavaScript code from anywhere, without having to define them yourself or import them from somewhere else.

        For example, you can use Math.random() or parseInt() in any JavaScript file, in any function, and they will just work. That's because they are properties of the Global Object, which is always accessible.

        Different Names for the Global Object in Different Environments:

        The concept of the Global Object is the same everywhere, but the name you use to access it can be a bit different depending on where your JavaScript is running:

        In Web Browsers:  The Global Object is represented by the window object. So, in a browser, you can access global things like window.parseInt(), window.Math.PI, or just simply parseInt() and Math.PI because window is often assumed.  The browser also adds a special property to window called window.window which just refers back to the window object itself (a bit self-referential!).

        In Node.js (for server-side JavaScript):  The Global Object is called global.  So in Node.js, you would use global.parseInt(), global.Math.PI, or again, just parseInt() and Math.PI.

        In Web Workers: Web workers are like separate threads running in a browser. They have their own Global Object, and within a web worker, you refer to it as self.

        globalThis (The Modern Standard - ES2020 and later):  To make it easier to refer to the Global Object in a consistent way across all environments (browsers, Node.js, web workers, etc.), JavaScript introduced globalThis in ES2020.  globalThis is designed to always point to the Global Object, no matter where your JavaScript code is running.  It's the recommended way to access the Global Object now because it's universal.

        Think of it like this for accessing City Hall:

        Browser: "Go to the window building (or just assume you're already there)"
        Node.js: "Go to the global building"
        Web Worker: "Go to self (your own local City Hall)"
        Everywhere (Modern): "Go to globalThis - the standard City Hall entrance"
        "Treat them like Reserved Words"

        The text mentions that the initial properties of the Global Object are "not reserved words, but they deserve to be treated as if they are." What this means is:

        They are very important and fundamental to JavaScript. They are core parts of the language.
        You can technically overwrite them, but you should almost never do it! For example, you could try to do parseInt = "hello"; but this would break the normal parseInt() function and cause chaos in your program. It's like trying to rename or demolish important parts of City Hall - bad idea!
        In Simple Words - Summary:

        The Global Object is a super important container in JavaScript that holds all the globally available things you can use in your programs – like constants (undefined, Infinity), functions (parseInt(), isNaN()), constructors (Date(), Array()), and objects (Math, JSON).  It's like a central resource hub.

        You can access these global things directly in your code. The name you use to access the Global Object itself might vary slightly depending on where your JavaScript is running (window in browsers, global in Node.js, self in web workers), but globalThis is the modern, standard way to refer to it everywhere.

        Treat the properties of the Global Object as fundamental parts of JavaScript that are always available and should generally not be redefined or messed with!

*/
// 3.8 Immutable Primitives vs Mutable Objects
// Primitives:
// Immutable: Cannot change their value.
// Compared by value: "hello" === "hello" → true.
// Objects:
// Mutable: Can change their properties.
// Compared by reference: {} === {} → false.
        /* 
        Let's dive into the key difference between Primitive Values and Object References in JavaScript. This is a super important concept to grasp!

        Think about it like this:  Imagine you have two kinds of things:

        1.  Primitive Values - Like Basic Building Blocks (Immutable)

        Think of primitive values as the basic, unchangeable building blocks of JavaScript, like LEGO bricks.  These are:

        undefined (like an empty space)
        null (like a "nothing" brick)
        Booleans (true, false) (like "yes" and "no" flags)
        Numbers (10, 3.14, -5) (like number blocks)
        Strings ("hello", "JavaScript") (like letter blocks)
        Key Feature of Primitive Values: Immutable (Unchangeable)

        Immutable means "cannot be changed" after they are created.  Once you have a primitive value, you can't alter it.  It's like a LEGO brick - you can't reshape it or change its color.

        Let's look at the string example from the text:

        JavaScript

        let s = "hello";   // Start with a string "hello"
        s.toUpperCase();   // Try to make it uppercase. This *returns* "HELLO"
        s;                 // Check 's' again
        // => "hello":  's' is STILL "hello"! The original string hasn't changed!
        When you do s.toUpperCase(), it doesn't change the original string "hello". Instead, toUpperCase() creates a brand new string "HELLO" and returns it. The original string s remains untouched.

        Comparison by Value:  When you compare primitive values (like using ===), JavaScript checks if they have the same value.  It's like checking if two LEGO bricks are the same color and shape.

        JavaScript

        let str1 = "hello";
        let str2 = "hello";
        let num1 = 10;
        let num2 = 10;

        str1 === str2; // => true: Both strings have the same sequence of characters
        num1 === num2; // => true: Both numbers have the same numeric value
        For primitives, if they look the same (have the same value), they are considered equal in JavaScript.

        2. Object References - Like Containers Holding Things (Mutable)

        Objects, on the other hand, are like containers or boxes that can hold collections of things (properties and values).  Arrays and functions are also considered types of objects in JavaScript.

        Objects (e.g., { name: "Alice", age: 30 })
        Arrays (e.g., [1, 2, 3])
        Functions (e.g., function myFunction() { ... })
        Key Feature of Objects: Mutable (Changeable)

        Mutable means "can be changed" after they are created. You can modify the contents of an object. It's like a box – you can add things to it, remove things from it, or change what's already inside.

        Let's see the object and array examples from the text:

        JavaScript

        let o = { x: 1 };  // Create an object
        o.x = 2;           // Change the value of the 'x' property - MUTATE the object
        o.y = 3;           // Add a new property 'y' - MUTATE the object

        let a = [1, 2, 3];   // Create an array
        a[0] = 0;          // Change the first element - MUTATE the array
        a[3] = 4;          // Add a new element - MUTATE the array
        In these examples, we are directly changing the contents of the object o and the array a. We're not creating new objects or arrays; we're modifying the existing ones.

        Comparison by Reference: Objects are not compared by value. Instead, they are compared by reference.  This means JavaScript checks if two object variables are pointing to the exact same object in memory. It's not enough for two boxes to contain the same things; they have to be the very same box to be considered equal by reference.

        Let's look at the examples from the text:

        JavaScript

        let o = {x: 1}, p = {x: 1};  // Two DIFFERENT objects, even with same content
        o === p;                      // => false: They are distinct objects, even though they look alike

        let a = [], b = [];          // Two DIFFERENT empty arrays
        a === b;                      // => false:  Distinct arrays are never equal by reference
        Even though o and p have the same properties and values, and a and b are both empty arrays, they are considered not equal when using === because they are separate objects in memory.

        Now, consider this:

        JavaScript

        let a = [];   // 'a' is a variable that REFERS to an empty array
        let b = a;    // 'b' is now also REFERS to the SAME array as 'a'

        b[0] = 1;     // We change the array through variable 'b'
        a[0];          // Let's check 'a' now
        // => 1:  The change made through 'b' is VISIBLE through 'a'!
        a === b;       // Check if 'a' and 'b' refer to the same object
        // => true: YES! They refer to the SAME object!
        When you do let b = a; with objects (or arrays), you are not creating a copy. You are just making b a new "name tag" or "reference" that points to the same object that a is pointing to. So, if you change the object through b, you are actually changing the single, shared object, and those changes are visible through both a and b.

        Object References: Like Pointers to a House, not Copies

        Think of object variables as holding addresses or pointers to houses (the objects themselves).

        When you create an object, you're building a house at a specific location.
        A variable that holds an object is like a piece of paper with the address of that house written on it (the "reference").
        When you do let b = a; with objects:

        You're not making a copy of the house.
        You're just making a second piece of paper (b) that has the same address written on it as the first piece of paper (a). Both pieces of paper now point to the same house.
        Copying Objects (Making a New House, not just another address)

        If you want to make a true copy of an object or array (a completely separate "house" that's just like the original), you need to do it explicitly.  Simple assignment (let b = a;) just copies the reference, not the object itself.

        The text gives examples of how to copy:

        Manual Copying (for arrays - using a loop):

        JavaScript

        let a = ["a", "b", "c"]; // Original array
        let b = [];             // New, empty array to copy into

        for (let i = 0; i < a.length; i++) {
        b[i] = a[i]; // Copy each element from 'a' to 'b'
        }

        b[0] = "x"; // Change 'b' - this will NOT affect 'a' because 'b' is now a separate array

        console.log(a); // => ["a", "b", "c"] - 'a' is unchanged
        console.log(b); // => ["x", "b", "c"] - 'b' is modified, but 'a' is not
        Using Array.from() (ES6 and later - for arrays): This is a simpler way to copy arrays.

        JavaScript

        let a = ["apple", "banana"];
        let c = Array.from(a); // 'c' is now a *new* array, a copy of 'a'

        c[0] = "orange"; // Change 'c', 'a' remains unaffected

        console.log(a); // => ["apple", "banana"]
        console.log(c); // => ["orange", "banana"]
        Comparing Objects for Content (Checking if two houses are built the same, even if they are different houses):

        If you want to check if two objects or arrays have the same content (same properties and values or same elements in the same order), you can't just use ===.  You need to compare them "property by property" or "element by element."

        The text shows an example of a function to compare arrays for content equality:

        JavaScript

        function equalArrays(a, b) {
        if (a === b) return true; // If they are REFERENCING the same array, they are equal (shortcut)
        if (a.length !== b.length) return false; // If lengths are different, they can't be equal

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false; // If any elements at the same position are different, they are not equal
        }

        return true; // If all elements are the same and lengths are the same, then arrays are considered equal (by content)
        }

        let array1 = [1, 2, 3];
        let array2 = [1, 2, 3];
        let array3 = array1; // array3 references the same array as array1

        equalArrays(array1, array2); // => true (same content)
        equalArrays(array1, array3); // => true (same reference, so also same content)
        array1 === array2;         // => false (different objects)
        array1 === array3;         // => true (same object reference)
        In Simple Words - Summary:

        Primitive values (numbers, strings, booleans, null, undefined) are immutable. You can't change them once created. Comparisons are based on their value.
        Objects (including arrays and functions) are mutable. You can change their properties or contents. Comparisons of objects are based on reference. Two objects are only === if they are the exact same object in memory (same address/reference).
        Assigning objects just copies references, not the objects themselves. To make a true copy, you need to do it explicitly (e.g., using loops or Array.from()).
        To check if two objects or arrays have the same content, you need to compare their properties or elements individually, not just rely on ===.
        Understanding this difference between primitives and objects (especially object references) is crucial for writing correct and efficient JavaScript code, especially when you start working with more complex data structures and operations.
        */

// 3.9 Type Conversions
    // Implicit Conversions:
    // JavaScript automatically converts types when needed (e.g., 10 + " objects" → "10 objects").
    // Explicit Conversions:
    // Use Number(), String(), Boolean().
    // Object to Primitive:
    // Uses toString() and valueOf() methods.
    /*
            Let's explore Type Conversions in JavaScript! JavaScript is like a super flexible chef who can often work with whatever ingredients you give them, even if they are not exactly what the recipe called for.  This flexibility is all about type conversion - JavaScript often tries to automatically change a value from one type to another to make your code work.

            1. JavaScript is Flexible with Types - Like a "Value Chameleon"

            JavaScript isn't strict like some languages. It often automatically tries to convert values to the type it expects in a given situation.

            Boolean Context: If JavaScript expects a boolean (true/false), but you give it something else, it will figure out if that something else should be treated as true (truthy) or false (falsy). We talked about truthy/falsy in the Boolean section!
            String Context: If JavaScript expects a string, and you give it something else (like a number or an object), it will try to turn it into a string.
            Number Context: If JavaScript expects a number, and you give it something else (like a string), it will try to convert it to a number. If it can't make sense of it as a number, it might give you NaN (Not-a-Number).
            Examples of Automatic (Implicit) Conversion:

            JavaScript

            10 + " objects";  // => "10 objects"
            // JavaScript expects a string for concatenation (+) because one operand is a string.
            // It *converts* the number '10' to the string "10" and then joins them.

            "7" * "4";       // => 28
            // JavaScript expects numbers for multiplication (*).
            // It *converts* both strings "7" and "4" to the numbers 7 and 4 and then multiplies.

            let n = 1 - "x";   // n becomes NaN
            // JavaScript expects numbers for subtraction (-).
            // It tries to convert "x" to a number, but fails and gets NaN (Not-a-Number).

            n + " objects";    // => "NaN objects" (since n is NaN)
            // Again, concatenation. NaN gets converted to the string "NaN".
            2. Type Conversion Table - Your Cheat Sheet (Table 3-2)

            Table 3-2 summarizes how JavaScript converts different values to strings, numbers, and booleans. Let's break it down:

            Value	To String	To Number	To Boolean
            undefined	"undefined"	NaN	false
            null	"null"	0	false
            true	"true"	1	
            false	"false"	0	
            "" (empty string)		0	false
            "1.2" (numeric string)		1.2	true
            "one" (non-numeric string)		NaN	true
            0	"0"		false
            1 (non-zero number)	"1"		true
            Infinity	"Infinity"		true
            -Infinity	"-Infinity"		true
            NaN	"NaN"		false
            {} (any object)	(see §3.9.3)	(see §3.9.3)	true
            [] (empty array)	""	0	true
            [9] (one numeric element)	"9"	9	true
            ['a'] (other arrays)	(using join())	NaN	true
            function(){} (any function)	(see §3.9.3)	NaN	true

            Export to Sheets
            Key Takeaways from the Table:

            Falsy Values Become false Boolean: undefined, null, 0, -0, NaN, and "" all become false when converted to a boolean.
            Truthy Values Become true Boolean: Pretty much everything else, including non-empty strings, non-zero numbers, objects, arrays (even empty ones), and functions, becomes true when converted to a boolean.
            Numeric Strings to Numbers: Strings that look like numbers (e.g., "1.2", " -5 ") get converted to those numbers.
            Non-Numeric Strings to NaN: Strings that can't be parsed as numbers (e.g., "one", "hello") become NaN when converted to a number.
            Empty String to Number 0: The empty string "" converts to the number 0. This is a bit of a quirk.
            Objects and Arrays - More Complex: Conversions for objects and arrays are a bit more involved (we'll get to §3.9.3 and object-to-primitive conversions later!). For now, just notice they are generally truthy.
            3. Conversions and Equality: == vs. ===

            JavaScript has two ways to check for equality:

            === (Strict Equality): This operator is strict. It does not do any type conversion. It only returns true if the values are of the same type and have the same value.  This is generally the operator you should use in most cases because it's more predictable.

            == (Loose Equality): This operator is lenient. It does perform type conversion if the operands are of different types.  It tries to convert them to a common type and then compares their values.  This can lead to some surprising results and is generally best to avoid unless you really understand the type conversion rules and have a specific reason to use it.

            Examples of Loose Equality (== - often surprising!):

            JavaScript

            null == undefined;   // => true:  JavaScript considers them loosely equal.

            "0" == 0;            // => true:  String "0" is converted to the number 0, and then compared to 0.

            0 == false;          // => true: Boolean 'false' is converted to the number 0, and then compared to 0.

            "0" == false;        // => true: Both "0" and false get converted to 0 before comparison!
            Why === is usually better:  === is more straightforward and avoids unexpected type conversions. It's clearer and less prone to subtle bugs.  For example, you probably don't want "0" == false to be true in most situations!

            4. Explicit Type Conversions - You Take Control!

            While JavaScript does automatic conversions, you can also force conversions yourself to make your code clearer or to ensure a specific type.

            Explicit Conversion Functions:

            Boolean(value): Converts value to a boolean (true or false).

            JavaScript

            Boolean(0);      // => false
            Boolean("hello");  // => true
            Boolean([]);      // => true (even empty array is truthy)
            Number(value): Converts value to a number.

            JavaScript

            Number("3.14"); // => 3.14
            Number("  10  "); // => 10 (leading/trailing spaces are okay)
            Number("hello");  // => NaN
            Number(true);   // => 1
            Number(false);  // => 0
            Number(null);   // => 0
            Number(undefined); // => NaN
            String(value): Converts value to a string.

            JavaScript

            String(123);   // => "123"
            String(true);  // => "true"
            String(null);  // => "null"
            String(undefined); // => "undefined"
            String({});     // => "[object Object]" (default object string representation)
            String([1, 2, 3]); // => "1,2,3" (array string representation)
            Wrapper Objects (Historical Note - Usually Avoid):

            The text mentions Boolean(), Number(), and String() can also be used with new (like new Boolean(false)).  This creates "wrapper objects." These are objects that wrap primitive values.  They are mostly a historical quirk from early JavaScript and are generally not recommended for modern JavaScript.  Just use the functions without new for explicit type conversion.

            5. Implicit Conversion Operators as Idioms (Shorthand Tricks)

            Some JavaScript operators themselves trigger implicit type conversions, and these are sometimes used intentionally as shortcuts for type conversion:

            x + "" (String Conversion Idiom): Adding an empty string "" to any value x will convert x to a string. This works because the + operator, when one operand is a string, performs string concatenation and converts the other operand to a string too.

            JavaScript

            let count = 42;
            let countString = count + ""; // countString becomes "42" (string)
            +x (Number Conversion Idiom - Unary Plus):  Putting a + sign in front of a value x (unary plus) will try to convert x to a number.

            JavaScript

            let strNum = "123";
            let num = +strNum; // num becomes 123 (number)
            let notNum = +"hello"; // notNum becomes NaN
            x - 0 (Number Conversion Idiom): Subtracting 0 from a value x can also convert x to a number (if it can be meaningfully converted).

            JavaScript

            let strNum = "50";
            let num = strNum - 0; // num becomes 50 (number)
            !!x (Boolean Conversion Idiom - Double NOT):  Using the NOT operator ! twice (!!) is a common trick to convert any value x to a boolean.

            !x first converts x to a boolean and then negates it (flips true to false, false to true).
            !!x then negates it again, giving you back the original truthiness/falsiness of x as a pure boolean true or false.
            JavaScript

            let value = "non-empty string";
            let boolValue = !!value; // boolValue becomes true (because "non-empty string" is truthy)

            let emptyStr = "";
            let emptyStrBool = !!emptyStr; // emptyStrBool becomes false (because "" is falsy)
            6. Number Formatting and Parsing - Working with Numbers as Strings and vice-versa

            JavaScript has tools for more specific control over converting numbers to strings (formatting) and strings to numbers (parsing).

            Number to String Formatting:

            number.toString(radix): Converts a number to a string in a specified base (radix).

            radix is the base (like 2 for binary, 8 for octal, 10 for decimal, 16 for hexadecimal). If you don't provide a radix, it defaults to base 10.
            JavaScript

            let n = 17;
            n.toString(2);  // => "10001" (binary - base 2)
            n.toString(8);  // => "21" (octal - base 8)
            n.toString(16); // => "11" (hexadecimal - base 16)
            n.toString(10); // => "17" (decimal - base 10 - default)
            number.toFixed(decimalPlaces): Formats a number as a string with a fixed number of decimal places.  It rounds as needed and never uses exponential notation.

            JavaScript

            let num = 123.456789;
            num.toFixed(0); // => "123" (rounded to 0 decimal places)
            num.toFixed(2); // => "123.46" (rounded to 2 decimal places)
            num.toFixed(5); // => "123.45679" (rounded/padded to 5 decimal places)
            number.toExponential(fractionDigits): Formats a number as a string in exponential notation. fractionDigits specifies the number of digits after the decimal point in the exponent part.

            JavaScript

            let num = 123456.789;
            num.toExponential(1); // => "1.2e+5" (1 digit after decimal in exponent)
            num.toExponential(3); // => "1.235e+5" (3 digits after decimal in exponent)
            number.toPrecision(precision): Formats a number as a string with a specified number of significant digits. Uses exponential notation if needed to represent the number in the given precision.

            JavaScript

            let num = 123456.789;
            num.toPrecision(4); // => "1.235e+5" (4 significant digits, needs exponent)
            num.toPrecision(7); // => "123456.8" (7 significant digits, no exponent needed)
            num.toPrecision(10); // => "123456.7890" (10 significant digits)
            String to Number Parsing:

            Number(string):  Tries to convert a string to a number.  Works well for standard base-10 decimal numbers, but is less flexible than parseInt() and parseFloat().

            parseInt(string, radix): Parses a string as an integer.

            string: The string to parse.
            radix (optional): The base of the number in the string (e.g., 10 for decimal, 16 for hexadecimal). If omitted, it tries to guess the base (base 10 unless it starts with "0x" or "0o").
            Skips leading whitespace.
            Parses as many numeric characters as it can from the beginning of the string.
            Ignores any non-numeric characters after the parsed number.
            Returns NaN if the string doesn't start with something that looks like a number in the given base.
            JavaScript

            parseInt("3 blind mice");   // => 3 (parses "3" and stops at " ")
            parseInt("0xFF");         // => 255 (hexadecimal, base 16 by default)
            parseInt("077", 8);       // => 63 (octal, base 8 - explicitly specified)
            parseInt("077", 10);      // => 77 (decimal, base 10 - explicitly specified)
            parseInt("-12.34");        // => -12 (parses integer part, ignores decimal part)
            parseInt(".1");           // => NaN (integers can't start with ".")
            parseInt("$72");          // => NaN (integers can't start with "$")
            parseFloat(string): Parses a string as a floating-point number (number with decimals).

            Similar to parseInt() in terms of skipping whitespace and parsing from the beginning.
            Parses both integers and decimal numbers.
            Returns NaN if it can't parse a number from the beginning of the string.
            JavaScript

            parseFloat(" 3.14 meters"); // => 3.14 (parses "3.14", ignores " meters")
            parseFloat("-12.34");      // => -12.34 (parses decimal number)
            parseFloat(".1");         // => 0.1 (floats *can* start with ".")
            parseFloat("$72.47");     // => NaN (numbers can't start with "$")
            7. Object to Primitive Conversions - Deep Dive (Section 3.9.3 - More Advanced)

            This is the most complex part.  When JavaScript needs to convert an object to a primitive value (like a string or a number), it follows specific algorithms.  Why is this needed? Because some objects can be represented as either strings or numbers (e.g., Date objects can be strings or timestamps).

            JavaScript defines three algorithms for object-to-primitive conversion:

            prefer-string: Tries to convert to a string first. If it can't get a string primitive, it tries to get any other primitive.
            prefer-number: Tries to convert to a number first. If it can't get a number primitive, it tries to get any other primitive.
            no-preference: No preference for string or number. For most built-in objects (except Date), it behaves like prefer-number. For Date objects, it behaves like prefer-string.
            How do these algorithms work? They use two special methods that objects can have:

            toString(): This method is supposed to return a string representation of the object.

            The default toString() for plain objects is not very informative: "[object Object]".
            Arrays, functions, Dates, and regular expressions have more useful toString() methods. For example:
            [1,2,3].toString() => "1,2,3"
            (function(){}).toString() => "function(){}"
            new Date().toString() => (a date/time string)
            valueOf(): This method is supposed to return a primitive value that represents the object, if possible.

            For most objects, there isn't a simple primitive representation, so the default valueOf() just returns the object itself (not a primitive).
            Wrapper objects (like new Number(5)) have valueOf() that returns the primitive number (e.g., (new Number(5)).valueOf() returns 5).
            Date objects have valueOf() that returns a number representing the timestamp (milliseconds since Jan 1, 1970).
            Object-to-Primitive Conversion Algorithm Details:

            prefer-string Algorithm:

            Call the object's toString() method.
            If toString() exists and returns a primitive value, use that primitive value (even if it's not a string!).
            Otherwise, try to call the object's valueOf() method.
            If valueOf() exists and returns a primitive value, use that primitive value.
            If neither toString() nor valueOf() returns a primitive value, or if they don't exist, throw a TypeError (conversion fails).
            prefer-number Algorithm:

            It's the same as prefer-string, but it swaps the order.
            Call valueOf() first.
            If it returns a primitive, use it.
            Otherwise, call toString().
            If it returns a primitive, use it.
            Otherwise, throw a TypeError.
            no-preference Algorithm:

            For Date objects, it uses prefer-string.
            For all other objects, it uses prefer-number.
            Special Case Operators and Object Conversion:

            + operator: (Addition/Concatenation) - Uses no-preference algorithm. If either operand becomes a string after conversion, it does string concatenation; otherwise, it does numeric addition.
            == and != (Loose Equality/Inequality): Use no-preference algorithm to convert objects to primitives before comparing.
            Relational Operators (<, <=, >, >=): Use prefer-number algorithm to convert objects to primitives. But, unlike object-to-number conversion, the primitive result is not further converted to a number. It directly compares the primitive values (which could be strings or numbers). This is important for comparing Date objects numerically.
            Why Number([]) is 0 and Number([99]) is 99 - Tracing the Conversion:

            Let's see why these array-to-number conversions happen as they do:

            Number([]):

            Object-to-number conversion starts (using prefer-number for arrays).
            prefer-number algorithm tries valueOf() first on the empty array [].
            Arrays inherit the default valueOf() from Object, which returns the object itself (not a primitive).
            valueOf() didn't return a primitive, so prefer-number tries toString() on [].
            [].toString() returns the empty string "". The empty string is a primitive value!
            prefer-number algorithm gets the primitive "" and uses it.
            Finally, Number("") is called to convert the empty string "" to a number, which results in 0.
            Therefore, Number([]) is 0.
            Number([99]):

            Object-to-number conversion (using prefer-number).
            prefer-number algorithm tries valueOf() on [99].
            Array's valueOf() is default object valueOf(), returns the object itself (not primitive).
            prefer-number tries toString() on [99].
            [99].toString() returns the string "99". "99" is a primitive!
            prefer-number uses the primitive "99".
            Finally, Number("99") is called, converting the string "99" to the number 99.
            Therefore, Number([99]) is 99.
            In Simple Words - Summary:

            JavaScript is very flexible and often converts types automatically.  It has rules for converting to booleans (truthy/falsy), strings, and numbers.

            Use === (strict equality) in most cases to avoid surprising type conversion behavior.
            Use explicit conversion functions (Boolean(), Number(), String()) when you want to be clear about type conversions.
            Be aware of the implicit conversion idioms (like x + "", +x, !!x).
            Understand number formatting/parsing methods (toString(radix), toFixed(), parseInt(), parseFloat()) for working with numbers and strings related to numbers.
            Object-to-primitive conversions are more complex, using toString() and valueOf() and algorithms like prefer-string, prefer-number, and no-preference. These are often used implicitly by operators and functions when they expect a primitive value but get an object. Understanding these helps explain some of JavaScript's seemingly quirky behavior.
    
    */

// 3.10 Variable Declaration and Assignment
// Declarations:
// let: Block-scoped variables.
// const: Block-scoped constants.
// var: Function-scoped variables (avoid in modern code).
// Destructuring Assignment:
// Extracts values from arrays or objects:

/*
        Let's break down Variable Declaration and Assignment in JavaScript!  This is fundamental to how you store and work with data in your programs.

        Think of Variables and Constants as Named Containers for Values.

        When you write code, you often need to remember and reuse values.  Variables and constants are like labels you put on containers so you can easily refer back to the value inside.

        Variable: A named container whose value can change during your program's execution. Think of it as a box where you can swap out the contents.
        Constant: A named container whose value is set once and cannot be changed afterwards. Think of it as a box that is sealed shut once you put something in.
        Declaring Variables and Constants (Modern Way - ES6 and later)

        In modern JavaScript (ES6 and newer), you use two main keywords to declare variables and constants: let and const.

        1. let - For Variables that Can Change

        Use let to declare variables whose values you expect to change as your program runs.

        Declaration Syntax:

        JavaScript

        let variableName;          // Declare a variable (initially undefined)
        let anotherVariable, yetAnother; // Declare multiple variables
        let message = "Hello!";     // Declare and initialize with a value
        let count = 0, index = 10;  // Declare and initialize multiple
        let previousValue = count;  // Initialize using another variable's value
        Block Scope:  Variables declared with let have block scope. This means they are only "visible" and accessible within the curly braces {} block where they are declared (like inside functions, if statements, loops).  Once you exit that block, the variable is no longer accessible.

        Reassignment Allowed: You can change the value of a variable declared with let after its initial declaration.

        JavaScript

        let counter = 5;
        console.log(counter); // Output: 5
        counter = 10;       // Reassign a new value
        console.log(counter); // Output: 10 (value changed!)
        2. const - For Constants that Should Not Change

        Use const to declare constants - values that are meant to stay the same throughout your program.

        Declaration Syntax:

        JavaScript

        const CONSTANT_VALUE = 100;  // Declare and initialize a constant
        const SPEED_OF_LIGHT = 299792458;
        Block Scope: Constants declared with const also have block scope, just like let.

        Initialization Required:  You must initialize a constant with a value when you declare it. You can't just declare const myConstant; and assign a value later.

        No Reassignment Allowed:  Once you assign a value to a const, you cannot change it later.  Trying to reassign a const will cause a TypeError error in your program.

        JavaScript

        const PI = 3.14159;
        console.log(PI); // Output: 3.14159
        // PI = 3.14;  // Error! TypeError: Assignment to constant variable.
        Naming Convention (ALL_CAPS): It's a common practice to name constants using all capital letters with underscores (like MAX_SIZE, API_KEY) to visually distinguish them from variables. This is a convention, not a rule enforced by JavaScript.

        const in Loops (for...of, for...in): Surprisingly, you can use const to declare loop variables in for...of and for...in loops if you are not reassigning the loop variable inside the loop body. In these cases, const means the value is constant for each iteration of the loop.

        JavaScript

        const myArray = [1, 2, 3];
        for (const number of myArray) { // 'number' is constant for each loop iteration
        console.log(number); // This is fine, 'number' changes with each element
        // number = number + 1; // Error! Reassignment of const is not allowed here
        }
        When to Use const vs. let - Two Philosophies

        There are two common approaches to deciding when to use const and when to use let:

        "Strictly Constant" Approach: Use const only for values that are truly fundamental and unchanging throughout the program's lifecycle (like physical constants, configuration values, etc.). Use let for everything else that might change.

        "Default to const" Approach:  Start by declaring everything with const. Then, if you find that you actually need to change the value of a variable later in your code, change the declaration to let.  This approach can help catch accidental reassignments and make your code more robust.

        The author of the text prefers the "strictly constant" approach, using const only for truly unchanging values, but the "default to const" approach is also gaining popularity as a way to write safer code.

        Variable and Constant Scope - Where are they Visible?

        Scope refers to the region of your code where a declared variable or constant is accessible and can be used.

        let and const declarations create block-scoped variables/constants.

        Blocks: Blocks are sections of code enclosed in curly braces {}. Examples:

        Function bodies
        if/else statement blocks
        Loop bodies (for, while)
        Class definitions
        Block Scope in Action: Variables/constants declared inside a block are only accessible within that block. They are not visible from outside the block.

        JavaScript

        function exampleFunction() {
        if (true) {
            let blockScopedVar = "I'm inside the if block";
            const blockScopedConst = 123;
            console.log(blockScopedVar); // Works here
            console.log(blockScopedConst); // Works here
        }
        // console.log(blockScopedVar); // Error! blockScopedVar is not defined here (outside the if block)
        // console.log(blockScopedConst); // Error! blockScopedConst is not defined here
        }
        exampleFunction();
        Global Scope: If you declare a variable or constant outside of any function or block (at the top level of your script), it becomes a global variable or global constant.

        Global Scope in Modules/Node.js: In modern JavaScript modules (and in Node.js), global variables/constants are scoped to the file where they are declared. They are not truly "global" across your entire application in the older sense.
        Global Scope in Traditional Browsers: In older browser JavaScript (without modules), global variables/constants declared in one <script> tag were accessible from all <script> tags within the same HTML document (at least those that executed after the declaration).
        Repeated Declarations - Be Careful!

        let and const - No Redeclaration in the Same Scope: You cannot declare a variable or constant with the same name more than once within the same scope (e.g., within the same function or block).  Doing so will result in a SyntaxError.

        JavaScript

        let myVar = 10;
        // let myVar = 20;  // Error! SyntaxError: Identifier 'myVar' has already been declared
        Nested Scopes - Allowed: You can declare a new variable or constant with the same name in a nested scope (a block inside another block or function). This creates a separate, new variable/constant that shadows (temporarily hides) the outer one within the inner scope.  This is legal but can sometimes be confusing to read.

        JavaScript

        const globalVar = "outer";

        function example() {
        console.log(globalVar); // Output: "outer" (accessing the global 'globalVar')

        if (true) {
            let globalVar = "inner"; // Declares a *new*, block-scoped 'globalVar'
            console.log(globalVar);   // Output: "inner" (now referring to the inner one)
        }

        console.log(globalVar); // Output: "outer" (back to the outer/global 'globalVar' again)
        }

        example();
        Declarations and Types - JavaScript is Dynamically Typed

        No Type Associated with Declarations: Unlike languages like C or Java, JavaScript variable declarations do not specify the data type of the value the variable will hold.  You just use let or const and the variable name.

        Dynamic Typing: JavaScript is dynamically typed. This means a variable can hold a value of any type, and the type of value it holds can change during the program's execution.

        JavaScript

        let dynamicVar = 10;   // Initially holds a number
        console.log(typeof dynamicVar); // Output: "number"

        dynamicVar = "Hello"; // Now holds a string
        console.log(typeof dynamicVar); // Output: "string"

        dynamicVar = true;   // Now holds a boolean
        console.log(typeof dynamicVar); // Output: "boolean"
        var - The Older Way (Pre-ES6) - Be Aware, but Prefer let and const

        Before ES6, the only way to declare variables in JavaScript was using the var keyword.  var still works in modern JavaScript, but let and const are generally preferred because var has some quirks and potential for confusion.

        Function Scope (Not Block Scope): Variables declared with var have function scope. This means they are visible throughout the entire function in which they are declared, even if they are declared inside blocks within that function (like if or for blocks). If declared outside any function, they become global.

        JavaScript

        function varScopeExample() {
        if (true) {
            var functionScopedVar = "I'm in the if block (but function-scoped)";
        }
        console.log(functionScopedVar); // Output: "I'm in the if block (but function-scoped)" - VAR is still accessible here!
        }
        varScopeExample();
        Global var and the Global Object (globalThis, window):

        When you declare a global variable using var (outside any function), it does become a property of the global object (e.g., window in browsers, globalThis in modern environments).
        For example, var globalVar = 5; outside a function is roughly like globalThis.globalVar = 5;.
        Important Difference: Global variables declared with var as global object properties cannot be deleted using the delete operator (unlike accidentally created globals or globals created with let/const).
        Redeclaration with var is Legal (and Common):  You can redeclare a variable with var multiple times in the same scope without causing an error. JavaScript treats subsequent var declarations of the same name as if they are just referring to the same variable declared earlier.  This is sometimes done in older code, especially in functions with multiple loops using the same loop counter variable like i.

        JavaScript

        function varRedeclarationExample() {
        var count = 1;
        console.log(count); // Output: 1
        var count = 2;      // Redeclaration is okay with var!
        console.log(count); // Output: 2 (value is just reassigned)
        }
        varRedeclarationExample();
        Hoisting with var (Declaration Moves to Top): This is one of the most confusing aspects of var. When you declare a variable with var, the declaration itself (not the initialization) is "hoisted" to the top of the function scope. This means JavaScript effectively moves the var variableName; part to the very beginning of the function, even if you write the var declaration later in the code.  The initialization part (e.g., = 5) stays where you wrote it.

        Consequence of Hoisting: You can use a var variable before the line where you actually declare it in your code, and you won't get an error. However, if you use it before it's initialized, its value will be undefined. This can be a source of bugs. let and const are designed to not have hoisting; using them before their declaration line will cause an error, which helps catch potential problems earlier.
        JavaScript

        function hoistingExample() {
        console.log(hoistedVar); // Output: undefined (no error, but value is undefined)
        var hoistedVar = "I'm hoisted!"; // Declaration is hoisted to the top, initialization stays here
        console.log(hoistedVar); // Output: "I'm hoisted!"
        }
        hoistingExample();

        function letConstExample() {
        // console.log(letConstVar); // Error! ReferenceError: Cannot access 'letConstVar' before initialization
        let letConstVar = "No hoisting with let/const";
        console.log(letConstVar);
        }
        letConstExample();
        Why Prefer let and const over var?

        Block Scope is More Intuitive: Block scope (of let and const) is generally easier to understand and reason about than function scope (of var). Block scoping aligns better with how scoping works in many other programming languages.
        No Hoisting with let and const (Prevents Bugs): The absence of hoisting in let and const makes code less prone to errors related to using variables before they are properly initialized. You get an error if you try to use them too early, which is usually a good thing.
        const for Immutability: const allows you to declare constants, signaling intent and helping prevent accidental reassignments.
        Using Undeclared Variables (Bad Practice - Especially outside Strict Mode!)

        Strict Mode (Recommended): If you use JavaScript's strict mode (by adding "use strict"; at the beginning of your script or function), trying to use a variable that has not been declared with let, const, or var will cause a ReferenceError error. This is a good thing because it helps you catch errors where you might have accidentally misspelled a variable name or forgotten to declare something.

        Non-Strict Mode (Avoid): If you are not in strict mode and you assign a value to a name that hasn't been declared, JavaScript will automatically create a new global variable with that name. This is almost always not what you intend and is a major source of bugs and confusion.  It's strongly recommended to always use strict mode to prevent accidental global variable creation.

        JavaScript

        "use strict"; // Enable strict mode

        // accidentalGlobal = "Oops, forgot to declare"; // Error! ReferenceError: accidentalGlobal is not defined

        function strictFunction() {
        // inside a strict function, undeclared variables are also errors
        // accidentalFunctionGlobal = "Still an error"; // Error! ReferenceError
        }
        strictFunction();
        Destructuring Assignment - Unpacking Arrays and Objects

        ES6 introduced destructuring assignment, which is a concise way to extract values from arrays or objects and assign them to variables in a single statement.

        Array Destructuring:  Use square brackets [] on the left-hand side of the assignment to mimic an array literal and unpack values from an array (or any iterable) on the right-hand side.

        JavaScript

        let [first, second] = [10, 20]; // first gets 10, second gets 20
        console.log(first, second); // Output: 10 20

        let coordinates = [5, 8];
        let [x, y] = coordinates;   // x gets 5, y gets 8

        // Swap variable values easily:
        let a = 1, b = 2;
        [a, b] = [b, a]; // Swaps a and b
        console.log(a, b); // Output: 2 1

        // Skipping elements:
        let colors = ["red", "green", "blue", "yellow"];
        let [, , color3, color4] = colors; // Skip first two, get 3rd and 4th
        console.log(color3, color4); // Output: blue yellow

        // Rest syntax (...) - collect remaining elements:
        let numbers = [1, 2, 3, 4, 5];
        let [firstNum, ...restOfNumbers] = numbers;
        console.log(firstNum);        // Output: 1
        console.log(restOfNumbers);   // Output: [2, 3, 4, 5]

        // Nested destructuring:
        let nestedArray = [1, [2, 3]];
        let [outerValue, [innerValue1, innerValue2]] = nestedArray;
        console.log(outerValue, innerValue1, innerValue2); // Output: 1 2 3

        // Works with strings too (strings are iterable):
        let message = "JS";
        let [char1, char2] = message;
        console.log(char1, char2); // Output: J S
        Object Destructuring: Use curly braces {} on the left-hand side to mimic an object literal and extract values based on property names from an object on the right-hand side.

        JavaScript

        let person = { firstName: "Alice", lastName: "Smith", age: 30 };
        let { firstName, age } = person; // Extract 'firstName' and 'age' properties
        console.log(firstName, age); // Output: Alice 30

        // Renaming variables during destructuring (property: newVariableName):
        let color = { r: 255, g: 0, b: 100 };
        let { r: redValue, b: blueValue } = color; // Rename r to redValue, b to blueValue
        console.log(redValue, blueValue); // Output: 255 100

        // Ignoring properties - just list the ones you want to extract:
        let { firstName } = person; // Only extracts 'firstName', ignores others
        console.log(firstName); // Output: Alice

        // Nested object destructuring (can get complex):
        let company = {
        name: "Tech Corp",
        location: { city: "Silicon Valley", state: "CA" }
        };
        let { location: { city: companyCity, state: companyState } } = company;
        console.log(companyCity, companyState); // Output: Silicon Valley CA

        // Using destructuring to import Math functions concisely:
        const { sin, cos, tan } = Math; // Creates const sin = Math.sin, cos = Math.cos, tan = Math.tan
        console.log(sin(0)); // Can now use sin(), cos(), tan() directly
        Destructuring Power:

        Conciseness: Makes code shorter and often more readable, especially when dealing with objects and arrays.
        Extracting Specific Data: Easily pull out only the parts of an array or object you need.
        Working with Functions Returning Arrays/Objects: Great for handling functions that return structured data.
        Complex Destructuring Caveat: Nested destructuring can become very complex and harder to read. For very deeply nested structures, sometimes it's clearer to use traditional property access (like object.property1.property2[index]).  If you find yourself struggling to understand a complex destructuring assignment, it might be better to break it down into simpler, explicit assignments for clarity.

        In Simple Words - Summary:

        Use let for variables whose values might change, and const for constants whose values should stay fixed. let and const are modern and block-scoped.
        Block scope means variables/constants are limited to the curly braces {} block they are declared in.
        JavaScript variables are dynamically typed - they can hold values of any type.
        var is the older way - it has function scope and hoisting, which can be confusing. Prefer let and const.
        Avoid undeclared variables (always use strict mode to catch these errors).
        Destructuring assignment is a cool ES6 feature to unpack arrays and objects into individual variables in a compact way. Use it to simplify code when working with structured data, but keep it readable, and don't overcomplicate nested destructuring if it hurts clarity.
        */

// javascript
// Copy
// let [x, y] = [1, 2];
// let {r, g} = {r: 0.0, g: 0.0};
// 3.11 Summary
// Key Points:
// JavaScript has primitive and object types.
// Primitives are immutable; objects are mutable.
// Type conversions can be implicit or explicit.
// Use let and const for variable declarations.
// Destructuring assignment simplifies extracting values from arrays and objects.