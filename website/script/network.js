// Server URL
const SERVER = 'http://localhost:3000';

// Check connection to server
function getWelcome(){
    return fetch(SERVER+'/welcome')
        /* important is res.text().
            res.json() returns errors because the answer from
            the contact-server is NOT in JSON-format.
        */
        .then(res => res.text())
        .catch(err => {
            console.log(`Error occurred: ${err}`)
        })
}

// Variant 1 (not in use)
/*function sendForm1(data){
    return fetch(SERVER+'/customer/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}*/

// Variant 2 (in use)
function sendForm2(data) {
    //DO NOT FORGET the return!
    return fetch(SERVER+'/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.text())
        .catch(err => {
            console.log(`Error occurred: ${err}`)
        })
}