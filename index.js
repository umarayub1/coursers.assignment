// Define an array of names
var names = ["John", "Jane", "Jim", "Alice", "Bob"];

// Loop through the array
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];

    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0) === 'j' || name.charAt(0) === 'J') {
        // If it does, print Goodbye
        console.log("Goodbye " + name);
    } else {
        // If it doesn't, print Hello
        console.log("Hello " + name);
    }
}
