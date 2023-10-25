// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

var isValid = function(s) {
    let expectedBrackets = [];

    // Loop through the letters in the input string
    for (let i = 0; i < s.length; i++) {
        // Push the closing equivelant of any open brackets found
        if (s[i] == '{') {
            expectedBrackets.push('}');
        } else if (s[i] == '[') {
            expectedBrackets.push(']');
        } else if (s[i] == '(') {
            expectedBrackets.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (expectedBrackets.pop() !== s[i]) {
            return false;
        }
    }
    return !expectedBrackets.length;
}

var isValid = function(s) {
    
}
