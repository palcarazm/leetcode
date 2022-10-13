/**
 * 707. Design Linked List
 *
 * Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
 * A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
 * If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
 * @see https://leetcode.com/problems/design-linked-list/
 */

/**
 * List Node implementation
 */
class ListNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * Linked List implementation
 */
class MyLinkedList {
  constructor() {
    this.head = new ListNode(null);
    this.length = 0;
  }

  /**
   * Get the value of the indexth node in the linked list.
   * If the index is invalid, return -1
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let node = this.#getNode(index);
    return node ? node.val : -1;
  }

  /**
   * Get the indexth node in the linked List
   * If the index is invalid, return null
   * @param {number} index
   * @returns {ListNode | null}
   * @private
   */
  #getNode(index) {
    if (index >= this.length || index < 0) return null;

    let cur = this.head;
    while (index > 0) {
      cur = cur.next;
      index--;
    }
    return cur;
  }

  /**
   * Add a node of value val before the first element of the linked list.
   * After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    if (this.length === 0) {
      this.head = new ListNode(val);
    } else {
      this.head = new ListNode(val, this.head);
      this.head.next.prev = this.head;
    }
    this.length++;
  }

  /**
   * Append a node of value val as the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    if (this.length === 0) {
      this.head = new ListNode(val);
    } else {
      let cur = this.#getNode(this.length - 1);
      let tail = new ListNode(val, null, cur);
      cur.next = tail;
    }
    this.length++;
  }

  /**
   * Add a node of value val before the indexth node in the linked list.
   * If index equals the length of the linked list, the node will be appended to the end of the linked list.
   * If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else if (index < this.length && index > 0) {
      let cur = this.#getNode(index - 1);
      let insert = new ListNode(val, cur.next, cur);
      cur.next.prev = insert;
      cur.next = insert;
      this.length++;
    }
  }

  /**
   * Delete the indexth node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index === 0 && this.length > 0) {
      if (this.length === 1) {
        this.head = new ListNode(null);
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
    } else if (index < this.length - 1 && index > 0) {
      let cur = this.#getNode(index);
      cur.next.prev = cur.prev;
      cur.prev.next = cur.next;
      this.length--;
    } else if (index === this.length - 1) {
      let cur = this.#getNode(index);
      cur.prev.next = null;
      this.length--;
    }
  }
}
