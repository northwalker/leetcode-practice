/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  // 單純將傳進來的 Node ref 改為下一個，捨棄目前這個 Node
  node.val = node.next.val;
  node.next = node.next.next;
};
