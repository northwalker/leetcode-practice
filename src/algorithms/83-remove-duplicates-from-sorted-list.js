/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let curr = head;
  while (curr) {
    if (curr.next !== null && curr.val === curr.next.val) {
      curr.next = curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};