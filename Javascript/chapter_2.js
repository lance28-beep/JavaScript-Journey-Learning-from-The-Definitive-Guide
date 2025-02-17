// Chapter 2: Lexical Structure
    // Overview:
        // Defines the basic rules for writing JavaScript programs.
        // Covers syntax elements like case sensitivity, comments, literals, identifiers, Unicode, and semicolons.
// 2.1 The Text of a JavaScript Program
    // Case Sensitivity:
        // JavaScript is case-sensitive.
        // Example: while, While, and WHILE are treated as different identifiers.
    // Whitespace:
        // Spaces, tabs, and line breaks are generally ignored but improve readability.
        // Unicode spaces and line terminators (e.g., \n, \r) are recognized.
// 2.2 Comments
    // Single-line Comments:
    // Use // for single-line comments.
        // // This is a single-line comment.
        // Multi-line Comments:
        // Use /* ... */ for multi-line comments.
            // /* This is a 
            //    multi-line comment. */
// 2.3 Literals
    // Definition:
        // Data values written directly in code.
    // Examples:
        // Numbers: 12, 1.2.
        // Strings: "hello world", 'Hi'
        // Booleans: true, false
        // Special values: null, undefined.
//2.4 Identifiers and Reserved Words
    // Identifiers:
        // Names for variables, functions, classes, etc.
        // Rules:
            // Must start with a letter, _, or $.
            // Subsequent characters can include digits.
            // Example: my_variable, $str, _dummy.
// Reserved Words:
    // Cannot be used as identifiers.
    // Examples: if, while, for, let, class.
    // Some words are contextually reserved (e.g., from, set).
// 2.5 Unicode
    // Character Set:
        // JavaScript uses Unicode for strings and identifiers.
        // Non-ASCII characters (e.g., π, é) are allowed in identifiers.
    // Unicode Escape Sequences:
        // Represent Unicode characters using \u followed by 4 hexadecimal digits or \u{...} for extended ranges.
        // let café = 1; // Using Unicode character
        // caf\u00e9;    // Using escape sequence
// Unicode Normalization:
    // Ensures consistent encoding of characters.
    // Example: é can be encoded as \u00E9 or e\u0301.
// 2.6 Optional Semicolons
    // General Rule:
    // Semicolons (;) are optional if statements are on separate lines.
        let x = 3
        let y = 4
// Exceptions:
    // Semicolons are required in certain cases to avoid ambiguity:
        // Statements starting with (, [, /, +, or -.
        // let x = 0
        // ;[x, x+1, x+2].forEach(console.log)
    // Special cases for return, throw, yield, break, and continue:
        // Line breaks after these keywords are treated as semicolons.
            // return
            // true; // Interpreted as `return; true;`
// 2.7 Summary
// Key Points:
    // JavaScript is case-sensitive and uses Unicode.
    // Comments can be single-line (//) or multi-line (/* ... */).
    // Identifiers must follow specific naming rules and avoid reserved words.
    // Semicolons are optional but recommended to avoid ambiguity.
// Next Chapter:
    // Introduces primitive types and values (numbers, strings, etc.).