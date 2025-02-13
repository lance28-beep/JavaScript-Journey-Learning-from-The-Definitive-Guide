// CHAPTER 1
//  Introduction to JavaScript

// JavaScript Overview:
        // Dominant programming language of the web, used by most websites.
        // Supported by all modern web browsers on desktops, tablets, and phones.
        // Node.js expanded JavaScript beyond browsers, making it a top choice for developers.
    // Language Characteristics:
        // High-level, dynamic, and interpreted.
        // Suitable for object-oriented and functional programming.
        // Untyped variables, Java-like syntax, but unrelated to Java.
        // Influenced by Scheme (first-class functions) and Self (prototype-based inheritance).
    // Name and Versions:
        // Originally created by Netscape; trademarked as "JavaScript."
        // Standardized as ECMAScript (ES) by ECMA.
        // ES5 (widely supported) is the baseline; ES6 (2015) introduced major updates.
        // Yearly releases since ES6 (e.g., ES2016, ES2017, etc.).
    // Strict Mode:
        // Corrects flaws in early JavaScript versions.
        // Enabled with "use strict" directive.
        // Automatically invoked in ES6 features like classes and modules.
    // Host Environments:
        // Web Browsers: Original environment; handles input/output via HTML, CSS, and browser APIs.
        // Node.js: Enables JavaScript to interact with the OS, file systems, and networks; popular for servers and scripts.
    // Learning JavaScript:
        // Experiment with examples, modify them, and test understanding.
        // Requires a JavaScript interpreter.
    // Using Browser Developer Tools:
        // Open browser developer tools (F12, Ctrl-Shift-I, or Command-Option-I).
        // Use the Console tab to type and test JavaScript code interactively.
        // Developer tools can be detached into separate windows for convenience.
    // Using Node.js for JavaScript:
        // Download and install Node.js from https://nodejs.org.
        // Open a Terminal and type node to start an interactive JavaScript session.
        // Example commands:
          // let x = 2, y = 3;
          // x + y → 5
          // (x === 2) && (y === 3) → true
          // (x > 3) || (y < 3) → false
        // Additional REPL commands:
            // .help: View help.
            // .break or .clear: Exit stuck input. 
            // .exit: Exit the session.
            // .load: Load JS from a file. 
            // .save: Save session commands to a file.
        // Interactive vs. Non-Interactive Coding:
            // For longer code, switch from line-by-line interactive environments to text editors.
            // Save code in .js files and run using Node.js.
        // Running JavaScript with Node.js:
            // Use node filename.js to execute JavaScript files.
            // Use console.log() to print values in the terminal.
        // Example: Hello World:
            // Create hello.js with console.log("Hello World!");.
            // Run with node hello.js to see "Hello World!" in the terminal.
        // Browser Execution:
            // Create hello.html with <script src="hello.js"></script>.
            // Open hello.html in a browser using a file:// URL.
            // View "Hello World!" in the browser's developer console.
    // Introduction to JavaScript Syntax:
        // Comments: Use // for single-line comments.
        // Variables: Declared with let.
        let x = "lance"
        console.log(x)
            // Example: let x; declares a variable x.
        // Assignment: Use = to assign values.
            // Example: x = 0; assigns 0 to x.  
        // Data Types:
            // Numbers: 1, 0.01.   
            // Strings: "hello world", 'JavaScript'.  
            // Booleans: true, false.  
            // Special values: null, undefined. 
    // Objects:
        // Collections of key-value pairs.
            // Example:
        let book = { 
            topic: "JavaScript", 
            edition: 7 
        };
        // Access properties with . or []:  
        console.log(book.topic)
        console.log(book["edition"])
        // Optional chaining (?.): Safely access nested properties.
            // Example: book.contents?.ch01?.sect1 → undefined. 
    // Arrays:
        // Ordered lists of values.
            // Example: let primes = [2, 3, 5, 7];.
        // Access elements by index: primes[0] → 2.  
        // Modify arrays:  
            // primes[4] = 9; adds a new element. 
            // primes.length → 4.
        // Operators:
            // Arithmetic: +, -, *, /.
                // Example: 3 + 2 → 5.
            // Shorthand: ++, --, +=, *=.
                // Example: count++ increments count.
            // Comparison: ===, !==, <, >.
                // Example: x === y → false.
            // Logical: &&, ||, !.
                // Example: (x === 2) && (y === 3) → true. 
        // Functions:
            // Defined with function or arrow syntax (=>).
                function plus1(x) { return x + 1; }
                const square = x => x * x;

                const lance = (e) => {
                    console.log(e)
                }
                lance("hello")

                function lance2(e){
                    console.log(e)
                }
                lance2("hello also")
        // Methods:      
            // Functions assigned to object properties.
            let points = [
                {x:3},
                {x:7}
            ]
            points.lance = function() { 
                return Math.sqrt(this[1].x - this[0].x); 
            };
            console.log(points.lance())
     // Control Structures:
            // Conditionals: if, else.
            // if (x >= 0){
            //     return x;
            // }
            // else{
            //      return -x; 
            // }

            // if(xx > 5 ){
            //     console.log( xx * 5 );
            // }else{
            //     console.log( xx + 5);
            // }
            // let yy = 5;
            // console.log(yy > 5 ? yy + 5 : yy - 5)
    // // Loops: for, while.
    //         for (let x of array) { sum += x; }
    //         while (n > 1) { product *= n; n--; }
// Object-Oriented Programming: 
    // Classes and constructors.
            class Point { 
            constructor(x, y) { this.x = x; this.y = y; } 
            distance() { return Math.sqrt(this.x * this.x + this.y * this.y); }
            }
            let p = new Point(1, 1); 
            p.distance() //→ `Math.SQRT2`.
    // Upcoming Chapters:
            // Modules: Code organization across files.
            // Standard Library: Built-in functions and classes.
            // Iterators/Generators: for/of loops and yield.
            // Asynchronous JavaScript: Callbacks, Promises, async/await.
            // Metaprogramming: Advanced features for library authors.
            // Web Browsers: JavaScript in the browser environment.
            // Node.js: Server-side JavaScript.
            // Tools and Extensions: Productivity-enhancing tools.
            console.log("\u{1F600}"); 


            let a = 2

            let h = 5; z = 7

            console.log(h)