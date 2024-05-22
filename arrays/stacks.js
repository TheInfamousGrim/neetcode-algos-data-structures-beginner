/* -------------------------------------------------------------------------- */
/*                             682. Baseball Game                             */
/* -------------------------------------------------------------------------- */

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

//     An integer x.
//         Record a new score of x.
//     '+'.
//         Record a new score that is the sum of the previous two scores.
//     'D'.
//         Record a new score that is the double of the previous score.
//     'C'.
//         Invalidate the previous score, removing it from the record.

// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

/* -------------------------------- Example 1 ------------------------------- */
const ops1 = ["5", "2", "C", "D", "+"];

/* -------------------------------- Example 2 ------------------------------- */
const ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];

//* D record a new score that is the double of the previous score
/**
 *
 * @param {number[]} record
 */
function addDoubleOfLastScore(record) {
  if (record.length > 0) {
    record.push(record[record.length - 1] * 2);
  }
}

//* C Invalidate the previous score, removing it from the record.
/**
 *
 * @param {number[]} record
 */
function invalidateLastScore(record) {
  console.log("Invalidating last record");
  if (record.length > 0) {
    record.pop();
  }
}

//* "+" Record a new score that is the sum of the previous two scores
/**
 *
 * @param {number[]} record
 */
function sumUpLastTwoScores(record) {
  if (record.length > 1) {
    record.push(record[record.length - 1] + record[record.length - 2]);
  }
}

//* An integer X: Record a new score
/**
 *
 * @param {number[]} record
 * @param {number} num
 */
function recordNewScore(record, num) {
  console.log("Recording new score");
  record.push(num);
}

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  if (operations.length === 0) {
    return operations;
  }

  // Stack
  let record = [];

  for (let i = 0; i < operations.length; i++) {
    console.log("record:", record);
    if (Number.isInteger(Number(operations[i]))) {
      recordNewScore(record, parseInt(operations[i]));
    } else if (operations[i] === "+") {
      sumUpLastTwoScores(record);
    } else if (operations[i] === "C") {
      invalidateLastScore(record);
    } else if (operations[i] === "D") {
      addDoubleOfLastScore(record);
    }
  }

  if (record.length === 0) {
    return 0;
  } else if (record.length === 1) {
    return record[0];
  } else {
    return record.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
};

/* -------------------------------------------------------------------------- */
/*                              Valid Parentheses                             */
/* -------------------------------------------------------------------------- */
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

//     Every open bracket is closed by the same type of close bracket.
//     Open brackets are closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Return true if s is a valid string, and false otherwise.

/* -------------------------------- Example 1 ------------------------------- */
const s1 = "[]";
// True

/* -------------------------------- Example 2 ------------------------------- */
const s2 = "([{}])";
// True

/* -------------------------------- Example 3 ------------------------------- */
const s3 = "[(])";
// False

/* -------------------------------- Example 4 ------------------------------- */
const s4 = "()[]{}";
// True

/* -------------------------------- Example 5 ------------------------------- */
const s5 = "((";
// False

/**
 *
 * @param {string} s
 */
function isValid(s) {
  // If it's an odd number of chars then it's false
  // There will not be a closing parentheses
  if (s.length % 2 !== 0) {
    return false;
  }

  // Split the string into chars
  const splitStr = s.split("");

  let isClosing = true;

  // Only opening parens can go on the stack
  let openParenStack = [];

  for (let i = 0; i < splitStr.length; i++) {
    const currParen = splitStr[i];
    // Check for open parens and add them to the stack
    if (currParen === "(" || currParen === "[" || currParen === "{") {
      openParenStack.push(currParen);
    } else {
      const lastOpenParen = openParenStack.pop();
      if (lastOpenParen === "(" && currParen !== ")") {
        isClosing = false;
        break;
      } else if (lastOpenParen === "[" && currParen !== "]") {
        isClosing = false;
        break;
      } else if (lastOpenParen === "{" && currParen !== "}") {
        isClosing = false;
        break;
      }
    }
  }

  if (openParenStack.length > 0) {
    return false;
  } else {
    return isClosing;
  }
}

/* -------------------------------------------------------------------------- */
/*                                Minimum Stack                               */
/* -------------------------------------------------------------------------- */
// Design a stack class that supports the push, pop, top, and getMin operations.

//     MinStack() initializes the stack object.
//     void push(int val) pushes the element val onto the stack.
//     void pop() removes the element on the top of the stack.
//     int top() gets the top element of the stack.
//     int getMin() retrieves the minimum element in the stack.

// Each function should run in O(1)O(1) time.

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    val = Math.min(
      val,
      this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1]
    );
    this.minStack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
