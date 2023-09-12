/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */ const mergeTwoLists = function (list1, list2) {
  let walk = new ListNode(null);
  let ans = walk;

  while (list1 || list2) {
    if (!list1 && list2) {
      walk.next = list2;
      list2 = list2.next;
    } else if (list1 && !list2) {
      walk.next = list1;
      list1 = list1.next;
    } else {
      if (list1.val >= list2.val) {
        walk.next = list2;
        list2 = list2.next;
      } else {
        walk.next = list1;
        list1 = list1.next;
      }
    }
    walk = walk.next;
  }

  return ans.next;
};
