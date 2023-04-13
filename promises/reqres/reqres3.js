const putUser = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      return result;
    } catch (error) {
      throw error; 
    }
}

const updateUser = async () => {
    try {
        const userURL = 'https://reqres.in/api/users/2';
        const updateInformation = {
            "name": "morpheus",
            "job": "zion resident"
        }
        const updateStatus = await putUser(userURL, updateInformation);
        console.log(updateStatus);
    } catch (error) {
        console.error('Failed user update: ', error);
    }
}

updateUser();
