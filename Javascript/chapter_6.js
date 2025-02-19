// 6.1 Introduction to Objects
    // Alright class, let's talk about Objects in JavaScript.  Think of this chapter as unlocking the real power of JavaScript because objects are everywhere in this language!
    // Imagine you have a box. This box is special because you can put lots of different things inside it, and you can label each thing so you know what it is.  That's essentially what a JavaScript object is! It's like a container that holds a bunch of stuff, and each piece of "stuff" has a name.
    // Think of it like this:
    // Let's say you want to describe a dog. What are some things you'd want to know about a dog?
    // Name: Buddy
    // Breed: Golden Retriever
    // Age: 3 years
    // Color: Golden
    // In JavaScript, we can represent this "dog" as an object.  Each piece of information (name, breed, age, color) becomes a property of our "dog" object.

    // Properties: Name and Value Pairs

    // Every property has two parts:

    // Name (or Key): This is like the label on your box. It's always a string in JavaScript (most of the time). In our dog example, "name", "breed", "age", "color" are the property names.
    // Value: This is the actual information or "stuff" inside the box, associated with the name. It can be anything: a word, a number, even another object! For "name: Buddy", "Buddy" is the value.
    // So, in JavaScript, our "dog" object could look something like this (don't worry about the exact syntax yet, we'll get to that!):

    // JavaScript

    // let dog = {
    //   name: "Buddy",
    //   breed: "Golden Retriever",
    //   age: 3,
    //   color: "Golden"
    // };
    // See how we have pairs of name: value? That's what properties are all about!

    // Objects are like Dictionaries or Phonebooks

    // You might have heard of things called "dictionaries" or "hashmaps" in other contexts. JavaScript objects are very similar.  Imagine a phonebook:

    // You look up a name (like "John Doe").
    // You find their phone number (the value) associated with that name.
    // Objects work the same way. You use the property name to "look up" and get the property value.

    // Real-World Scenario: Think about storing information about a product in an online store. You'd want to store:

    // Product Name
    // Price
    // Description
    // Image URL
    // Available Stock
    // You could easily organize all this information into a JavaScript object, with each of these pieces of info as a property!

    // Dynamic and Changeable

    // JavaScript objects are dynamic. This is a fancy way of saying they are flexible! You can:

    // Add new properties later on. Maybe you forgot to add the "size" of the dog initially? No problem, you can add dog.size = "Large"; later.
    // Remove properties if you don't need them anymore. Maybe you realize "color" isn't important, you can delete it from the dog object.
    // This makes them super handy because you can adapt them as your needs change.

    // Mutable and References

    // Remember we talked about variables pointing to values? With objects, it's important to remember they are mutable and work by reference.

    // Mutable: You can change what's inside the object (the property values) even after you create it.
    // Reference: If you say let myDog = dog;, myDog doesn't become a copy of dog. Instead, myDog just becomes another "pointer" to the same dog object in memory. If you change something in dog, you'll see the change in myDog too, because they are both looking at the same box!
    // What can we do with objects?

    // The chapter will teach you how to:

    // Create new objects.
    // Set (add or change) property values.
    // Query (get) property values.
    // Delete properties.
    // Test if a property exists in an object.
    // Enumerate (list out) all the properties in an object.
    // These are the basic actions you'll perform all the time when working with objects.

    // Property Attributes (Just a sneak peek!)

    // Finally, just a quick heads-up that properties are not just name and value. They also have some hidden settings called "attributes." Think of these as extra controls for each property, like:

    // Writable: Can you change the value of this property? (Like making it read-only).
    // Enumerable: Does this property show up when you list all properties of an object? (Like hiding some "internal" properties).
    // Configurable: Can you delete this property or change its attributes later on? (Like locking down a property completely).
    // For now, just know these exist. We'll learn more about them later in the chapter.

    // In short: Objects are your go-to way to organize data in JavaScript. They are like labeled boxes holding information, and you'll use them constantly!

// 6.2 Creating Objects
        // Okay class, let's learn about Creating Objects in JavaScript!  You know what objects are now – those labeled boxes that hold stuff. But how do we actually make these boxes in JavaScript?  There are a few ways, and we'll explore the three main ones today.
        // 1. Object Literals - The Easy Curly Brace Way!
        // This is the simplest and most common way to create objects.  Think of it as directly writing down the description of your box! You just use curly braces {} and list out the properties you want, with their names and values.
        // Analogy: Imagine you're making a quick label for a box right on the spot. You just write Name: Value, Name2: Value2, ... on the box itself.

        // Syntax:

        // JavaScript

        // let myObject = {
        // propertyName1: propertyValue1,
        // propertyName2: propertyValue2,
        // // ... more properties
        // };
        // Start with { and end with }.
        // Inside, you have name: value pairs separated by commas ,.
        // propertyName (the name) is usually a string, but can also be a simple identifier (like a variable name).
        // propertyValue can be anything - numbers, strings, booleans, other objects, even functions!
        // Examples:

        // JavaScript

        // // 1. An empty box (object with no properties)
        // let emptyBox = {};
        // console.log(emptyBox); // Output: {}

        // // 2. A box to store coordinates of a point
        // let point = { x: 10, y: 20 };
        // console.log(point); // Output: {x: 10, y: 20}

        // // 3.  Values can be expressions (calculations, accessing other properties)
        // let point2 = { x: point.x, y: point.y + 5 }; // 'point.x' and 'point.y + 5' are expressions
        // console.log(point2); // Output: {x: 10, y: 25}

        // // 4.  Object to describe a book with different types of properties
        // let myBook = {
        // "title": "The JavaScript Guide", // Property name as a string literal (needed if it has spaces)
        // author: "JS Guru",            // Property name as an identifier (simpler)
        // pages: 300,                  // Number value
        // isAvailable: true,            // Boolean value
        // publisher: {                  // Value is another object! (nested object)
        //     name: "Tech Books Inc.",
        //     location: "Online"
        // }
        // };
        // console.log(myBook);
        // /* Output (roughly):
        // {
        // title: 'The JavaScript Guide',
        // author: 'JS Guru',
        // pages: 300,
        // isAvailable: true,
        // publisher: { name: 'Tech Books Inc.', location: 'Online' }
        // }
        // */
        // Realistic Scenario: Imagine you are building a contact list app. For each contact, you want to store their name, phone number, and email. You could use object literals to create each contact:

        // JavaScript

        // let contact1 = {
        // name: "Alice Smith",
        // phone: "123-456-7890",
        // email: "alice@example.com"
        // };

        // let contact2 = {
        // name: "Bob Johnson",
        // phone: "987-654-3210",
        // email: "bob@work-email.com"
        // };

        // console.log(contact1.name); // Output: Alice Smith
        // console.log(contact2.email); // Output: bob@work-email.com
        // Object literals are perfect for creating simple, structured data quickly!

        // 2. Creating Objects with new Keyword and Constructors

        // This is like using a blueprint or a mold to create objects.  You use the new keyword followed by a special kind of function called a constructor.

        // Analogy: Think of a cookie cutter. The cookie cutter (constructor) is the pattern, and each cookie you cut out (object) is made using that pattern.

        // Syntax:

        // JavaScript

        // let myObject = new ConstructorFunction();
        // new: Keyword that tells JavaScript to create a new object.
        // ConstructorFunction: A function that acts as a blueprint for creating objects. It's usually named starting with a capital letter by convention (e.g., Object, Array, Date).
        // Built-in Constructors: JavaScript provides some built-in constructor functions for common object types:

        // new Object(): Creates a generic, empty object. It's almost the same as using {}.
        // new Array(): Creates an empty array (which is also a type of object in JavaScript!). It's the same as [].
        // new Date(): Creates a Date object representing the current date and time.
        // new Map(): Creates a Map object, which is used for key-value pairs (like objects, but keys can be anything, not just strings).
        // Examples using built-in constructors:

        // JavaScript

        // let obj = new Object(); // Create an empty generic object (like {})
        // console.log(obj);      // Output: {}

        // let arr = new Array();  // Create an empty array (like [])
        // console.log(arr);      // Output: []

        // let now = new Date();   // Create a Date object for the current time
        // console.log(now);      // Output: (Current date and time string)

        // let myMap = new Map();  // Create an empty Map object
        // console.log(myMap);    // Output: Map(0) {}
        // Realistic Scenario:  Let's say you need to work with dates and times in your application. You can use new Date() to easily get the current date and time, or to create date objects for specific dates:

        // JavaScript

        // let today = new Date(); // Get today's date and time
        // console.log("Today is:", today);

        // let christmas = new Date(2023, 11, 25); // Month is 0-indexed (11 is December)
        // console.log("Christmas 2023:", christmas);
        // The new keyword with constructors is useful when you want to create objects of specific built-in types (like Dates, Arrays, Maps) or when you define your own custom object "types" using constructor functions (we'll learn about creating your own constructors in Chapter 9!).

        // 3. Object.create() - Creating Objects with Prototypes

        // This method is a bit more advanced and gives you fine-grained control over something called the prototype of your object.  To understand this, we need a quick detour about prototypes.

        // Prototypes - Inheritance Link: Almost every JavaScript object has a secret link to another object called its prototype. Think of the prototype as a parent object that provides properties to its child object.  If you try to access a property on an object, and it doesn't have that property directly, JavaScript will look at its prototype object to see if it has that property. If the prototype doesn't have it either, it might look at its prototype, and so on – forming a prototype chain. This is how JavaScript achieves inheritance.

        // Object.create() Syntax:

        // JavaScript

        // let newObject = Object.create(prototypeObject);
        // Object.create(): A built-in function specifically for creating objects with custom prototypes.
        // prototypeObject: The object you want to use as the prototype for the new object. The new object will inherit properties from this prototypeObject.
        // Examples:

        // JavaScript

        // // 1. Create an object 'o1' that inherits from 'prototypeObj'
        // let prototypeObj = { x: 1, y: 2 };
        // let o1 = Object.create(prototypeObj);

        // console.log(o1.x); // Output: 1 (o1 inherits 'x' from prototypeObj)
        // console.log(o1.y); // Output: 2 (o1 inherits 'y' from prototypeObj)

        // o1.z = 3; // Add a NEW property 'z' DIRECTLY to o1
        // console.log(o1.z);      // Output: 3 (o1 now has its OWN 'z' property)
        // console.log(o1.x + o1.y + o1.z); // Output: 6 (1 + 2 + 3)

        // // 2. Create an object 'o2' with NO prototype (a truly empty object in terms of inheritance)
        // let o2 = Object.create(null);
        // console.log(o2); // Output: {} (looks empty when logged)
        // // o2 will NOT inherit any built-in object methods like toString(), valueOf(), etc.
        // //  Trying to use some default object methods might cause errors:
        // //  console.log(o2.toString()); // Error! o2.toString is not a function

        // // 3. Create an ordinary empty object using Object.create(Object.prototype) - similar to {} or new Object()
        // let o3 = Object.create(Object.prototype);
        // console.log(o3); // Output: {} (works like a regular empty object)
        // // o3 will inherit from Object.prototype, just like objects created with {} or new Object()
        // console.log(o3.toString); // Output: function toString() { [native code] } (inherits toString method)
        // Realistic Scenario: "Guarding" against accidental modifications.  Imagine you have a function from a library that you don't fully trust not to mess with the object you pass to it. You can use Object.create() to create a "safe" object that inherits from your original object. The library function can read properties, but if it tries to change properties, it will only affect the new, safe object, and your original object will remain untouched!

        // JavaScript

        // let originalSettings = {
        // theme: "dark",
        // notifications: true
        // };

        // function libraryFunction(settingsObject) {
        // // Library function might try to modify settingsObject...
        // settingsObject.theme = "light"; // Intentionally modifying (or maybe accidentally?)
        // console.log("Library function theme set to:", settingsObject.theme);
        // }

        // // Create a "safe" object that inherits from originalSettings
        // let safeSettings = Object.create(originalSettings);

        // libraryFunction(safeSettings); // Pass the safe object to the library function

        // console.log("Original settings theme:", originalSettings.theme); // Output: Original settings theme: dark (UNCHANGED!)
        // console.log("Safe settings theme (modified by library):", safeSettings.theme); // Output: Safe settings theme (modified by library): light
        // In this scenario, libraryFunction modified safeSettings.theme, but originalSettings.theme remained "dark" because safeSettings only inherited from originalSettings.  Any changes in libraryFunction only affected safeSettings itself.

        // In Summary - Creating Objects:

        // Object Literals {}: Quick, easy way for simple objects with known properties.
        // new Keyword with Constructors: For creating objects of built-in types (Object, Array, Date, etc.) or custom types defined by constructor functions (more on this later).
        // Object.create(): For creating objects with specific prototypes, giving you more control over inheritance. Very useful for advanced patterns and object relationships.
//  6.4 Deleting Properties

        // Alright class, let's talk about Deleting Properties from JavaScript objects! You've learned how to put things in your object boxes and how to look inside. Now, what if you want to remove something from your box completely? That's where the delete operator comes in!

        // 6.4 Deleting Properties -  Taking Things Out of the Box

        // Imagine you have your "dog" object again:

        // JavaScript

        // let dog = {
        //   name: "Buddy",
        //   breed: "Golden Retriever",
        //   age: 4,
        //   color: "Cream",
        //   ownerName: "Sarah",
        //   favoriteToy: "Frisbee"
        // };
        // Let's say Buddy is getting older, and we don't want to keep track of his favoriteToy anymore, or Sarah is no longer his ownerName. We can delete these properties!

        // The delete Operator -  The Eraser!

        // The delete operator is used to remove a property from an object. Think of it like using an eraser to wipe out a label and its contents from a compartment in your object box.

        // Syntax:

        // JavaScript

        // delete objectName.propertyName;    // Using dot notation
        // delete objectName["propertyName"];  // Using square bracket notation
        // delete: The keyword that tells JavaScript you want to remove a property.
        // objectName.propertyName or objectName["propertyName"]: This is the property access expression we learned about. You specify which property you want to delete from which object.
        // What delete Actually Deletes:  It's important to understand that delete operates on the property itself, not just the value of the property.  It's like removing the entire compartment with its label and contents, not just emptying the compartment.

        // Example:

        // JavaScript

        // console.log(dog);
        // /* Output (initially):
        // {
        //   name: "Buddy",
        //   breed: "Golden Retriever",
        //   age: 4,
        //   color: "Cream",
        //   ownerName: "Sarah",
        //   favoriteToy: "Frisbee"
        // }
        // */

        // delete dog.favoriteToy; // Delete the 'favoriteToy' property using dot notation
        // console.log(dog);
        // /* Output (after deleting 'favoriteToy'):
        // {
        //   name: "Buddy",
        //   breed: "Golden Retriever",
        //   age: 4,
        //   color: "Cream",
        //   ownerName: "Sarah"  // 'favoriteToy' is gone!
        // }
        // */

        // delete dog["ownerName"]; // Delete the 'ownerName' property using square brackets
        // console.log(dog);
        // /* Output (after deleting 'ownerName' too):
        // {
        //   name: "Buddy",
        //   breed: "Golden Retriever",
        //   age: 4,
        //   color: "Cream" // 'ownerName' is also gone!
        // }
        // */
        // delete Only Works on "Own" Properties - Not Inherited Ones!

        // A crucial point: delete only removes "own properties". These are properties that are directly defined on the object itself (like name, breed, age, color in our dog object).  delete cannot remove inherited properties.

        // To delete an inherited property, you have to go to the prototype object where it's defined and delete it from there.  This is because inherited properties are not actually on the object, they are just accessible through the prototype chain. Deleting from the prototype affects all objects that inherit from that prototype! (We'll touch more on prototypes later).

        // Example: Let's use our animal and myDog prototype example again:

        // JavaScript

        // let animal = { hasFur: true }; // Prototype object
        // let myDog = Object.create(animal); // myDog inherits from 'animal'
        // myDog.name = "Spot"; // 'name' is an own property of 'myDog'

        // console.log(myDog.hasFur); // Output: true (inherited from 'animal')
        // console.log(myDog.name);   // Output: Spot (own property)

        // delete myDog.name;      // Delete the OWN property 'name' - this works!
        // console.log(myDog.name);   // Output: undefined (own property 'name' is gone)

        // delete myDog.hasFur;      // Try to delete inherited 'hasFur' - this does NOT work on the inherited property!
        // console.log(myDog.hasFur); // Output: true (still inherited from 'animal'!)
        // console.log(animal.hasFur); // Output: true (prototype 'animal' is unchanged)
        // What delete Returns: true for Success (or No Effect), Sometimes false (or Error)!

        // The delete operator is a bit quirky in what it returns.  It returns true in a few situations:

        // Successful Deletion: If delete successfully removes an own property that was configurable.
        // No Effect (Property Doesn't Exist): If you try to delete a property that doesn't even exist on the object, delete still returns true! It's like saying "I tried to delete it, and whether it was there or not, my attempt to delete is considered 'successful' in the sense that no error occurred."
        // Nonsense Deletions: Even if you use delete on something that isn't even a property access expression (like delete 1;), it still just returns true and does nothing meaningful.
        // Examples of delete returning true:

        // JavaScript

        // let obj = { x: 1 };
        // console.log(delete obj.x);      // Output: true (property 'x' deleted)
        // console.log(delete obj.x);      // Output: true (property 'x' already gone, no effect)
        // console.log(delete obj.toString); // Output: true ('toString' is inherited, not own, no effect on obj itself)
        // console.log(delete 1);          // Output: true (nonsense, but true anyway)
        // Non-Configurable Properties: delete Might Fail (Return false or Throw Error)

        // Some properties are special and are marked as "non-configurable". This means they are protected and cannot be deleted (and their attributes cannot be changed).

        // Built-in Object Properties: Many properties of built-in JavaScript objects (like Object.prototype) are non-configurable. They are essential parts of the language and cannot be removed.

        // Global Variables and Functions (Declared with var, function): When you declare global variables or functions using var or function in non-strict mode, these also become non-configurable properties of the global object (like window in browsers).  You cannot delete these.

        // Behavior with Non-Configurable Properties:

        // Strict Mode: In strict mode ("use strict";), if you try to delete a non-configurable property, JavaScript will throw a TypeError! This is to be more explicit about errors.
        // Non-Strict Mode: In non-strict mode, trying to delete a non-configurable property will silently fail and return false. No error is thrown, but the property is also not deleted.
        // Examples of delete failing with non-configurable properties:

        // JavaScript

        // "use strict"; // Try in strict mode to see TypeError

        // // Attempt to delete a non-configurable built-in property (Object.prototype)
        // console.log(delete Object.prototype); // Output (strict mode): false,  (non-strict mode): false - but in strict mode it THROWS TypeError!

        // var globalVar = 10; // Global variable declared with var (non-configurable in non-strict)
        // console.log(delete globalThis.globalVar); // Output (strict & non-strict): false - cannot delete

        // function globalFunc() {} // Global function declaration (non-configurable)
        // console.log(delete globalThis.globalFunc); // Output (strict & non-strict): false - cannot delete
        // Deleting Configurable Global Properties (Without var, let, const, function in non-strict mode only!)

        // If you accidentally create a global property by simply assigning a value to a name without using var, let, or const (in non-strict mode only!), then this global property is configurable and can be deleted!

        // Example (Non-Strict Mode ONLY):

        // JavaScript

        // // NOTE: This example behavior is for NON-STRICT mode ONLY!
        // globalThis.myGlobalConfigurableVar = 20; // Create a configurable global (without let/var/const)
        // console.log(delete myGlobalConfigurableVar); // Output: true (successfully deleted!)
        // console.log(globalThis.myGlobalConfigurableVar); // Output: undefined (gone!)
        // Strict Mode Restriction: In strict mode, you cannot even use delete x; (without specifying it's a property like delete globalThis.x;) if x is an unqualified identifier (just a name). Strict mode requires you to be explicit and use delete globalThis.x; to try and delete a global property.  However, even in strict mode, variables/functions declared globally with var/function are still non-configurable and cannot be deleted.

        // Realistic Scenarios for Using delete:

        // Cleaning up Objects to Save Memory:  If you have a large object that's holding a lot of data, and you know you no longer need certain properties, you can use delete to remove them. This can potentially free up memory, especially in long-running applications.

        // Removing Outdated or Irrelevant Information:  Imagine a user profile object. If a user decides to remove their profile picture, you might use delete userProfile.profilePictureURL; to remove that property.

        // Dynamic Property Management:  In some cases, you might add temporary properties to objects for specific calculations or processing. Once you're done with those, you can use delete to clean them up and keep your object tidy.

        // In Summary - Deleting Properties:

        // Use the delete operator (delete object.property or delete object["property"]) to remove own properties from objects.
        // delete does not affect inherited properties.
        // delete returns true in most cases (success, no effect), but can return false or throw TypeError for non-configurable properties (especially in strict mode).
        // Be aware of non-configurable properties, especially those of built-in objects and global variables/functions declared with var/function.
        // Use delete to clean up objects, remove outdated data, or manage dynamic properties.

// 6.5 Testing Properties
        // Alright class, let's learn about Testing for Properties in JavaScript objects! You know how to look inside your object boxes and get things out. But what if you want to check if something is even in the box before you try to grab it?  That's what property testing is for!

        // 6.5 Testing Properties -  Checking if Something is in the Box

        // JavaScript provides a few ways to check if an object has a property with a specific name. Think of these as different ways to "ask the box" if it contains a compartment with a certain label.

        // We'll look at four main methods:

        // The in Operator - The General Membership Check
        // hasOwnProperty() Method - Is it My Own?
        // propertyIsEnumerable() Method - Is it Visible and My Own?
        // Simple Property Querying (!== undefined) - Just Try to Get It and See!
        // Let's dive into each one:

        // 1. The in Operator - "Is there something with this name, anywhere in the chain?"

        // The in operator is like asking: "Hey object, do you have a property with this name, either directly in you or in any of your 'parent' objects (prototypes)?" It's a broad check for property existence, considering inheritance.

        // Syntax:  propertyName in objectName

        // propertyName: A string or Symbol representing the property name you're checking for.
        // objectName: The object you're testing.
        // Returns: true if the object (or its prototype chain) has a property with that name, false otherwise.
        // Example:

        // JavaScript

        // let myObject = { x: 1 }; // Object with own property 'x'

        // console.log("x" in myObject);        // Output: true  ('x' is an own property of myObject)
        // console.log("y" in myObject);        // Output: false ('y' is not a property of myObject or its prototypes)
        // console.log("toString" in myObject); // Output: true  ('toString' is an *inherited* property from Object.prototype)
        // "x" in myObject is true: Because myObject directly has a property named "x".
        // "y" in myObject is false: Because myObject and its prototypes do not have a property named "y".
        // "toString" in myObject is true: Even though myObject doesn't directly define toString, it inherits it from Object.prototype. The in operator finds it in the prototype chain!
        // Analogy: Imagine asking "Is there any compartment labeled 'ingredients' in this whole family of boxes (the object and its prototype boxes)?" in operator says "yes" if it finds it anywhere in the lineage.

        // 2. hasOwnProperty() Method - "Is it directly in my box, not inherited?"

        // The hasOwnProperty() method is more specific. It asks: "Hey object, do you have this property directly defined in you?  Don't look at your 'parents' (prototypes), just tell me about your own properties."

        // Syntax:  objectName.hasOwnProperty("propertyName")

        // objectName: The object you're testing.
        // "propertyName": The string or Symbol name of the property.
        // Returns: true if the object has the property as an own property (not inherited), false otherwise.
        // Example (using the same myObject from before):

        // JavaScript

        // let myObject = { x: 1 };

        // console.log(myObject.hasOwnProperty("x"));        // Output: true  ('x' is myObject's own property)
        // console.log(myObject.hasOwnProperty("y"));        // Output: false ('y' is not even a property, own or inherited)
        // console.log(myObject.hasOwnProperty("toString")); // Output: false ('toString' is INHERITED, not own)
        // hasOwnProperty("x") is true: Because 'x' is directly defined in myObject.
        // hasOwnProperty("y") is false: 'y' is not an own property.
        // hasOwnProperty("toString") is false: Even though myObject can use toString, it's inherited, not defined directly on myObject, so hasOwnProperty() says "false".
        // Analogy: Asking "Is there a compartment labeled 'ingredients' directly attached to this specific box?  Not in its parent boxes, just this one." hasOwnProperty() is for checking direct ownership.

        // 3. propertyIsEnumerable() Method - "Is it visible and directly mine?"

        // propertyIsEnumerable() is even more refined. It checks two things:

        // Is it an own property? (Like hasOwnProperty()).
        // Is its enumerable attribute set to true? (We briefly mentioned property attributes before. The enumerable attribute controls whether a property shows up when you loop through an object's properties, for example, with for...in loops). Most properties you create are enumerable by default. Built-in properties often are not enumerable.
        // Syntax:  objectName.propertyIsEnumerable("propertyName")

        // objectName: The object to test.
        // "propertyName": The property name (string or Symbol).
        // Returns: true only if the property is an own property AND its enumerable attribute is true. false otherwise (if it's not own, or not enumerable, or doesn't exist).
        // Example:

        // JavaScript

        // let myObject = { x: 1 };

        // console.log(myObject.propertyIsEnumerable("x"));          // Output: true ('x' is own AND enumerable by default)
        // console.log(myObject.propertyIsEnumerable("toString"));   // Output: false ('toString' is NOT own property)
        // console.log(Object.prototype.propertyIsEnumerable("toString")); // Output: false ('toString' on Object.prototype is NOT enumerable - it's built-in)
        // propertyIsEnumerable("x") is true: 'x' is an own property and (by default) is enumerable.
        // propertyIsEnumerable("toString") is false: Because 'toString' is not an own property of myObject.
        // Object.prototype.propertyIsEnumerable("toString") is also false: Because even though toString is a property of Object.prototype, it's a built-in property and is intentionally set to be non-enumerable (hidden from typical property loops).
        // Analogy: Asking "Is there a compartment labeled 'secrets' directly in my box, and is it meant to be shown when you list the box's contents?" propertyIsEnumerable() checks for both ownership and visibility.

        // 4. Simple Property Querying (!== undefined) - "Just try to get it and see if you get something real!"

        // This is the most straightforward approach in many cases. You simply try to access the property using dot or square bracket notation and check if the result is not undefined.

        // Syntax: objectName.propertyName !== undefined  OR  objectName["propertyName"] !== undefined

        // objectName.propertyName (or objectName["propertyName"]): Attempt to access the property.
        // !== undefined: Compare the result to undefined.
        // Returns: true if the property exists (either own or inherited) and its value is not undefined, false if the property doesn't exist (or exists and is explicitly set to undefined).
        // Example:

        // JavaScript

        // let myObject = { x: 1 };

        // console.log(myObject.x !== undefined);        // Output: true ('x' exists and has value 1, which is not undefined)
        // console.log(myObject.y !== undefined);        // Output: false ('y' doesn't exist, accessing it returns undefined)
        // console.log(myObject.toString !== undefined); // Output: true ('toString' is inherited and is a function, not undefined)
        // myObject.x !== undefined is true: Because myObject has a property 'x' and its value (1) is not undefined.
        // myObject.y !== undefined is false: Because myObject (and its prototypes) does not have a property 'y', so accessing it results in undefined.
        // myObject.toString !== undefined is true: Because myObject inherits toString, and even though it's inherited, it's a function (not undefined).
        // Analogy: "Just reach into the box for the compartment labeled 'important_item'. Did you pull something out that's not just 'nothing' (undefined)? If yes, then there's something there!"

        // Special Case: Distinguishing Non-Existent vs. Explicitly undefined Properties

        // There's a subtle but important difference between the in operator and the simple !== undefined check.

        // in operator:  Tells you if a property name exists, even if the value of that property is explicitly set to undefined.

        // !== undefined check:  Only tells you if the property exists and its value is not undefined.  If the property exists but its value is undefined, this check will return false.

        // Example to illustrate the difference:

        // JavaScript

        // let specialObject = { x: undefined }; // Property 'x' is explicitly set to 'undefined'

        // console.log("x" in specialObject);          // Output: true  ('x' NAME exists in specialObject)
        // console.log(specialObject.x !== undefined);  // Output: false (value of 'x' IS undefined)

        // console.log("y" in specialObject);          // Output: false ('y' NAME does NOT exist)
        // console.log(specialObject.y !== undefined);  // Output: false ('y' NAME does NOT exist - same result)

        // delete specialObject.x; // Remove property 'x' completely

        // console.log("x" in specialObject);          // Output: false ('x' NAME no longer exists after delete)
        // console.log(specialObject.x !== undefined);  // Output: false ('x' NAME no longer exists - same result)
        // When specialObject has x: undefined, "x" in specialObject is true because the property name "x" is defined. But specialObject.x !== undefined is false because the value of property "x" is undefined.
        // When you delete specialObject.x;, the property name "x" is completely removed. Now both "x" in specialObject and specialObject.x !== undefined are false.
        // When to use which method?

        // in operator: Use when you need to know if a property with a given name exists in the object or its prototype chain, regardless of its value (even if the value is undefined). Useful for checking if an object has a certain feature or characteristic (represented by a property name).
        // hasOwnProperty(): Use when you need to know if the object itself directly defines a property, and you want to exclude inherited properties. Useful for iterating over only the own properties of an object.
        // propertyIsEnumerable(): Use when you need to check if a property is both an own property and is intended to be visible in property enumeration (e.g., in for...in loops). Less commonly used than in and hasOwnProperty() in typical scenarios.
        // !== undefined check: Use when you just need to know if a property exists and has a value that's not undefined. This is often the simplest and most common approach when you just want to check if you can safely use a property value. However, be mindful that if a property is intentionally set to undefined, this check will give you a false positive (it will say the property doesn't "effectively exist" even though it is technically defined).
        // In Summary - Testing Properties:

        // JavaScript provides multiple ways to check if a property exists on an object.
        // in operator: Broad existence check (own or inherited).
        // hasOwnProperty(): Checks for own properties only.
        // propertyIsEnumerable(): Checks for own and enumerable properties.
        // !== undefined check: Simple check if a property exists and its value is not undefined.
        // Choose the method that best fits your specific need: Do you care about inheritance? Do you need to distinguish between non-existent and explicitly undefined properties? Do you care about enumerability?
