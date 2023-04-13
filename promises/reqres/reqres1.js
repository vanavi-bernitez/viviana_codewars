const fetchUsers = async (page) => {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was an error fetching users: ', error);
    }
}

const getAllUsers = async () => {
    try {
        let allUsers = [] 
        let page = 1;
        let usersResource = await fetchUsers(page);
        let usersData = usersResource.data;
        while (usersData.length > 0) {
            allUsers = allUsers.concat(usersData);
            page += 1;
            usersResource = await fetchUsers(page);
            usersData = usersResource.data;
        }
        return allUsers;
    } catch (error) {
        console.error('There was an error getting users: ', error)
    }
} 

const modifyUsersNames = async () => {
    try {
        const allUsers = await getAllUsers();
        const usersMapped = allUsers.map((user) => user); 
        const createFullName = (user) => {
            user.fullName = `${user['first_name']} ${user['last_name']}`;
            delete user['first_name'];
            delete user['last_name']; 
        }
        usersMapped.forEach(createFullName);
        console.log(usersMapped);
    } catch (error) {
        console.error('There was an error modifying users: ', error)
    }
}

modifyUsersNames();