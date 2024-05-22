/* -------------------------------------------------------------------------- */
/*                            Reverse a Linked List                           */
/* -------------------------------------------------------------------------- */

// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

//* null -> 0 -> 1 -> 2 -> 3 -> null

// next = curr.next
// curr.next = prev
//* null <- 0 -> 1 -> 2 -> 3 -> null

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let [prev, curr, next] = [null, head, null];

    // Start from node 0
    while (curr) {
      // Next node in the iteration will be 1
      next = curr.next;
      // changes null -> 0 -> 1 to null <- 0 -> 1
      curr.next = prev;

      // Previous node becomes 0 and not null
      prev = curr;
      // the current node become 1 and not 0
      curr = next;
    }

    return prev;
  }
}

/* -------------------------------------------------------------------------- */
/*                        Merge Two Sorted Linked Lists                       */
/* -------------------------------------------------------------------------- */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    const dummy = { val: 0, next: null };
    let node = dummy;

    while (list1 && list2) {
      console.log("Dummy", dummy);
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }
}
