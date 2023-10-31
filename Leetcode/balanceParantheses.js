// #  A balanced sequence of parentheses is one in which every opening bracket has a corresponding closing bracket to it.
// #  More formally, a sequence of parantheses is considered balanced if it can be represented in the form s1(s2) where both s1
// #  and s2 are either empty or balanced strings.

// #  Given a sequence of parentheses, find the minimum number of swaps needed to make the sequence balanced.
// #  It is not necessary to swap adjacent characters only. If it is impossible to balance the string, return -1.

// #  Example
// #  brackets = ")()(())("
// #  Swap the characters at the first and last index to get "(()(()))" which is balanced. The string can be balanced with 1 swap.

// #  Function Description
// #  Complete the function minimumSwaps in the editor below.
// #  minimumSwaps has the following parameters: string brackets: the string to analyze


function minimumSwaps(parentheses) {
    let count = 0;  // To track unbalanced opening brackets
    let swaps = 0;  // To count the number of swaps needed

    for (let i = 0; i < parentheses.length; i++) {
        let char = parentheses[i];
        if (char === '(') {
            count++;
            // unbalanced opening bracket is encountered so increment count
        } else if (char === ')') {
            if (count > 0) {
                count--;
                // if count exists, decrement to balance
            } else {
                swaps++;
                // if count does not exist, swap is needed and increment swap
            }
        }
    }
    return swaps;
}

// Example usage:
const input = ")()(())("
const result = minimumSwaps(input);
console.log(result);  // Output: 1

// def minimumSwaps(parentheses):
//         count = 0  # To track unbalanced opening brackets
//         swaps = 0  # To count the number of swaps needed

//         for char in parentheses:
//             if char == '(':
//                 count += 1
//             elif char == ')':
//                 if count > 0:
//                     count -= 1
//                 else:
//                     swaps += 1

//     # Check if there are unmatched opening brackets
//         if count > 0:
//             return -1

//         return swaps
