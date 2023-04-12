// const promise = new Promise((resolve, reject) => {
//     // contain an operation
//     // ...
  
//     // return the state
//     if (success) {
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });


const isMomHappy = true;

// create promise
const willGetNewPhone = new Promise ((resolve, reject) => {
    const phone = {
        brand: 'huawei',
        color: 'green'
    }

    const reason = new Error("mom isn't happy");

    if (isMomHappy) {
        resolve(phone);
    } else { 
        reject(reason);
    }
});

// chaining promises
const showOff = (phone) => {
    // const message = `Hi, I have a new ${phone.brand}`
    // return Promise.resolve(message);  // ???
    return new Promise ((resolve, reject) => {
        const message = `Hi, I have a new ${phone.brand}`
        resolve(message);
    });
}

//call promise
const askMom = () => {
    willGetNewPhone
        .then((fulfilled) => console.log(fulfilled))
        .catch((error) => console.log(error.message));
};

askMom();

//call chain promise
const askMomChain = () => {
    willGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error.message)); 
};

askMomChain();