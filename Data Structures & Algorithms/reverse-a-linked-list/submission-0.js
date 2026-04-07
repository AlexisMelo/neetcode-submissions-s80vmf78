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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) return null;
        
        let newList = new ListNode(head.val, null)
        let current = head.next;

        while (current) {
            newList = new ListNode(current.val, newList)
            current = current.next
        }

        return newList;
    }
}
