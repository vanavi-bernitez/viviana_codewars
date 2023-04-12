
const getUsersNormal = () => {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
}
const findUserNormal = (username) => {
    const users = getUsersNormal; 
    const user = users.find((user) => user.username === username);
    return user;
}
console.log(findUserNormal('john'));



const getUsers = () => {
    const users = []; 
    setTimeout(() => {
        users = [
            {username: 'john', email: 'john@test.com' },
            {username: 'jane', email: 'jane@test.com' },
        ]
    } , 1000)
    // user is an empty array, jumps over setTimeout and the next code line its the return
    // so inmediately returns the empty array.
    // setTimeout simulates the delay when i  access a database or call an API 
    return users; 
}
const findUser = (username) => {
    const users = getUsers(); 
    const user = users.find((user) => user.username === username); 
    return user;
} 
console.log(findUser('john')); //output undefined 
// Because the getUsers() returns an empty array, the users array is empty (line A). 
// When calling the find() method on the users array, the method returns undefined (line B)
// The challenge is how to access the users returned from the getUsers() function after one second







