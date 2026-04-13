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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;

        let depth = 1;

        const leftDepth = root.left ? this.maxDepth(root.left) : 0;
        const rightDepth = root.right ? this.maxDepth(root.right) : 0; 

        depth += Math.max(leftDepth, rightDepth)

        return depth;
    }
}
