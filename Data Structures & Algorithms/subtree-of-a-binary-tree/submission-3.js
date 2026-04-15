/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    isSameTree(a, b) {
        if (!a && !b) return true;
        if ((!a && b) || (!b && a)) return false;
        if (a.val !== b.val) return false;

        return this.isSameTree(a.left, b.left) && this.isSameTree(a.right, b.right)
    }


    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && subRoot) return false;

        if (root && !subRoot) return true; //pas sur ?

        if (root.val === subRoot.val) {
            
            return this.isSameTree(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }
}
