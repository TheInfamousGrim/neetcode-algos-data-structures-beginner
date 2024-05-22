/* -------------------------------------------------------------------------- */
/*                             Design Linked List                             */
/* -------------------------------------------------------------------------- */
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

//     MyLinkedList() Initializes the MyLinkedList object.
//     int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
//     void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
//     void addAtTail(int val) Append a node of value val as the last element of the linked list.
//     void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
//     void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

class ListNode {
  constructor(val, next, prev) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // Check for invalid index
  if (index < 0 || index >= this.getLength()) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new ListNode(val);
  // Point the new head to the previous head
  node.next = this.head;
  // Point the previous head to the new head if there is one
  if (this.head !== null && this.tail !== null) {
    this.head.prev = node;
  } else if (this.head !== null && this.tail === null) {
    this.head.prev = node;
    this.tail = this.head;
  }
  // Reset to the new head
  this.head = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // Checking that there is something in the linked list
  if (this.head === null) {
    this.addAtHead(val);
    return;
  }

  //
  let node = new ListNode(val);
  if (this.tail !== null) {
    // Point the new tail to the previous tail
    node.prev = this.tail;
    // Point the previous tail to the new tail
    this.tail.next = node;
  } else {
    this.head.next = node;
    node.prev = this.head;
  }
  // Reset the new tail
  this.tail = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const length = this.getLength();

  // Check for invalid index
  if (index < 0 || index > length) return;

  // If the index is 0, add at head
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  // If the index is equal to the length, add at tail
  if (index === length) {
    this.addAtTail(val);
    return;
  }

  // Iterate to the node before the insertion
  let curr = this.head;
  let node = new ListNode(val);
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  // Prev <-> Curr
  // Previous node pointing to the new node
  curr.prev.next = node;
  // New node previous node to point the prev
  node.prev = curr.prev;

  // Point the new node to the current node
  node.next = curr;
  // Point the current node to the new node
  curr.prev = node;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  console.log("Deleting an index", index);
  const length = this.getLength();
  console.log(length);

  if (index < 0 || index >= length) return;

  if (length === 1) {
    this.tail = null;
    this.head = null;
    return;
  }

  if (this.tail === null) {
    this.head = null;
    return;
  }

  // Deleting at the head
  if (index === 0) {
    console.log(this.head);
    // New head is pointing at nothing
    this.head.next.prev = null;
    this.head = this.head.next;
    return;
  }

  // Deleting at the tail
  if (index === length - 1) {
    let temp = this.tail.prev;
    this.tail.prev.next = null;
    this.tail = temp;
    return;
  }

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  // ... <-> 4 <-> ...
  //       Delete
  curr.prev.next = curr.next;
  curr.next.prev = curr.prev;
};

/**
 *
 * @returns {number}
 */
MyLinkedList.prototype.getLength = function () {
  let len = 0;
  let curr = this.head;
  while (curr !== null) {
    curr = curr.next;
    len++;
  }
  return len;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/* -------------------------------------------------------------------------- */
/*                           Design Browser History                           */
/* -------------------------------------------------------------------------- */

// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

//     BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
//     void visit(string url) Visits url from the current page. It clears up all the forward history.
//     string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
//     string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

class WebPage {
  /**
   *
   * @param {string} url
   * @param {string} next
   * @param {string} prev
   */
  constructor(url, next, prev) {
    this.url = url === undefined ? "google.com" : url;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.page = {
    url: homepage,
    back: null,
    next: null,
  };
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.page.next = {
    url: url,
    back: this.page,
    next: null,
  };

  this.page = this.page.next;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (this.page.back && steps) {
    this.page = this.page.back;
    steps--;
  }

  return this.page.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (this.page.next && steps) {
    this.page = this.page.next;
    steps--;
  }

  return this.page.url;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
