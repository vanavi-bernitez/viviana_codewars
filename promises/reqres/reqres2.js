const postUser = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
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

const registerUser = async () => {
  try {
    const registerURL = 'https://reqres.in/api/register';
    const registerInformation = {
      "email": "eve.holt@reqres.in",
      "password": "pistol"
    };
    const registerStatus = await postUser(registerURL, registerInformation);
    console.log(registerStatus);
  } catch (error) {
    console.error('Failed to register user: ', error);
  }
}

const loginUser = async () => {
  try {
    const loginURL = 'https://reqres.in/api/login';
    const loginInformation = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    };
    const loginStatus = await postUser(loginURL, loginInformation);
    console.log(loginStatus);
  } catch (error) {
    console.log('Failed login: ', error);
  }
}

registerUser();
loginUser();


