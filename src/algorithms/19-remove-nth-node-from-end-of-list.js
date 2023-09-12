/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let ans = new ListNode(0),
    count = 1;
  ans.next = head; // 預留第一個Node就是要移除的Node
  let walk = ans;

  for (let curr = head; curr.next; curr = curr.next) {
    count++;
  }
  // console.log('count', count, count - n);

  while (walk) {
    if (n - count === 0) {
      walk.next = walk.next.next;
    } else walk = walk.next;

    count--;
  }
  return ans.next;
};
