// Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/?envType=study-plan&id=level-2
// the idea was to do this in one pass with .next()

// const removeNthFromEnd = (head, n) => {
//     const elementBackward = head.at(n * -1); //count back from the last item in the array
//     const indexBackward = head.indexOf(elementBackward);
//     head.splice(indexBackward, 1); //changes the contents of an array by removing or replacing existing elements
//     return head;
// };

const removeNthFromEnd = (head, n) => {
    const elementBackward = head.at(n * -1);
    const indexBackward = head.findIndex((element) => {
        return element === elementBackward;
    })
    head.splice(indexBackward, 1); 
    return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));