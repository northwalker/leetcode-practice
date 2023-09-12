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
const swapPairs = function (head) {
  if (!head || !head.next) return head;
  let prev = head;
  let cur = head.next;

  while (prev && cur) {
    let temp = prev.val;
    prev.val = cur.val;
    cur.val = temp;
    if (cur.next && cur.next.next) {
      prev = cur.next;
      cur = cur.next.next;
    } else break;
  }
  return head;
};
