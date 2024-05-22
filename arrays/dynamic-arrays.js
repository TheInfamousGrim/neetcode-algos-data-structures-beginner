class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.arr = new Array(this.capacity).fill(0);
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.arr[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.arr[i] = n;
  }

  /**
   * Insert a value in the last position of the array.
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.arr[this.length] = n;
    this.length++;
  }

  /**
   * Remove the last element in the array
   * @returns {number}
   */
  popback() {
    if (this.length > 0) {
      // Soft delete the last element
      this.length--;
    }
    return this.arr[this.length];
  }

  /**
   * Resize the array to double its current capacity
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
    const newArr = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  /**
   * Get the current size of the array
   * @returns {number}
   */
  getSize() {
    return this.length;
  }

  /**
   * Get the current capacity of the array
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}

/* -------------------------------------------------------------------------- */
/*                        1929. Concatenation of Array                        */
/* -------------------------------------------------------------------------- */

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

/* -------------------------------- Example 1 ------------------------------- */
const nums1 = [1, 2, 1];

/* -------------------------------- Example 2 ------------------------------- */
const nums2 = [1, 3, 2, 1];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

getConcatenation(nums1);
getConcatenation(nums2);
