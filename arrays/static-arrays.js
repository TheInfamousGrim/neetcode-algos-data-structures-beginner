/* -------------------------------------------------------------------------- */
/*                   26 Remove Duplicates from Sorted Array                   */
/* -------------------------------------------------------------------------- */
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

/* -------------------------------- Example 1 ------------------------------- */
const nums1 = [1, 1, 2];

/* -------------------------------- Example 2 ------------------------------- */
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const k1 = removeDuplicates(nums1);
const k2 = removeDuplicates(nums2);

/* -------------------------------------------------------------------------- */
/*                             27. Remove Element                             */
/* -------------------------------------------------------------------------- */

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

/* -------------------------------- Example 1 ------------------------------- */
const nums3 = [3, 2, 2, 3];
const val1 = 3;

/* -------------------------------- Example 2 ------------------------------- */
const nums4 = [0, 1, 2, 2, 3, 0, 4, 2];
// [0, 1, 2, 3, 0, 4, 2, null]
// [0, 1, 3, 0, 4, 2, null, null]

const val2 = 2;

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  console.log("-----------------");
  console.log("Input:", val, nums);
  if (nums.length === 0) return 0;

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i];
      // Make the number null and put it at the end of the array
      nums[i] = null;
      for (let j = i; j < nums.length - 1; j++) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }

      // Reset back 1 index incase a value for deletion has been missed
      i--;
    } else if (nums[i] === null) {
      break;
    } else {
      k++;
    }
  }

  console.log("Result:", k, nums);

  return k;
};

removeElement(nums3, val1);
removeElement(nums4, val2);
