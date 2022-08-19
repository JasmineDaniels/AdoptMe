//const { response } = require("express");

// const { response } = require("express");

console.log('I am connected')

document.querySelector('#submit-form').addEventListener('click', (event) => {
    event.preventDefault();

    console.log('I was clicked')

    const name = document.getElementsByTagName('input')[0].value;
    console.log(name)
    const email = document.getElementsByTagName('input')[1].value;
    console.log(email)
    const subject = document.getElementsByTagName('input')[2].value;
    console.log(subject)
    const petID = document.getElementsByTagName('input')[3].value;
    console.log(petID)
    const message = document.getElementsByTagName('textarea')[0].value;
    console.log(message)

        fetch('https://formsubmit.co/ajax/contact.adoptme5@gmail.com', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                petID,
                message,
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))


        // const feedback = response.json(submitForm)
    
    
})




// document.querySelector('.contact-forms').forEach(form => {
    
//     const submitBtn = form.querySelector('#submit-form')

//     submitBtn.addEventListener('click', (event) => {
//         event.preventDefault();

//         const name = document.getElementsByTagName('input')[0].value;
//         const email = document.getElementsByTagName('input')[1].value;
//         const subject = document.getElementsByTagName('input')[2].value;
//         const message = document.getElementsByTagName('input')[3].value;
        

//         fetch('https://formsubmit.co/el/36cdf350c1201af95a6069bf6ccc4a84', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({
//                 name,
//                 email,
//                 subject,
//                 message,
//             })
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
//     })
// })
