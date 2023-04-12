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

// solo funciona con la estructur
async function showOff (phone) {
    return new Promise ((resolve, reject) => {
        const message = `Hi, I have a new ${phone.brand}`
        resolve(message);
    });
}

//call promise 
// async function askMom()
const askMom = async () => 
{
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

// async await it here too

// meto esto en un async await porque si quiero utilizar lo que esta DENTRO de askMom, necesito esperar por eso
// LA INFORMACION DE ESA PROMESA NO LA PUEDO USAR SI NO USO AWAIT
// si no lo meto dentro de un async await solo retorna el tipo objeto promesa 
(async () => {
    await askMom();
})();

