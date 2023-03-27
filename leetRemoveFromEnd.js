// https://leetcode.com/problems/remove-nth-node-from-end-of-list/?envType=study-plan&id=level-2

const removeNthFromEnd = (head, n) => {
    const elementBackward = head.at(n * -1);
    const indexBackward = head.indexOf(elementBackward);

    head.splice(indexBackward, 1);
    return head;
};


// https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1164542/js-python-java-c-easy-two-pointer-solution-w-explanation/?envType=study-plan&id=level-2
// explanation and solution using .next

console.log(removeNthFromEnd([1,2], 1));

