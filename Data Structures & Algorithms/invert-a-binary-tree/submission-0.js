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
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
         if (root === null) return null;
        
        if (root.left === null && root.right === null) {
            return root;
        }

        const left = root.left ? new TreeNode(root.left.val, root.left.left, root.left.right) : null;
        root.left = this.invertTree(root.right);
        root.right = this.invertTree(left);

        return root;
    }
}
