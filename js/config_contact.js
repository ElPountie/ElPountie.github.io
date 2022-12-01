// TP 4 EXO 1
console.log('function exercise 1 apply');

document.getElementById('message_label').style.display = 'none';
document.getElementById('message').style.display = 'none';

document.getElementById('email').addEventListener('change', event => {
    if (event.target.value != '') {
        document.getElementById('message').style.display = 'block';
        document.getElementById('message_label').style.display = 'block';
    } else {
        document.getElementById('message').style.display = 'none';
        document.getElementById('message_label').style.display = 'none';
    }
})


// TP 4 EXO 2
console.log('function exercise 2 apply');

var contactbutton = document.getElementById('submit_button');
contactbutton.setAttribute('disabled', 'true');
contactbutton.style.background = "black";
contactbutton.style.color = "grey";
contactbutton.style.border = "1px solid grey";

document.getElementById('form-contact').addEventListener('change', event => {
    if (
        document.getElementById('email').value != ''
        && document.getElementById('nom').value != ''
        && document.getElementById('prenom').value != ''
        && document.getElementById('message').value != ''
    ) {
        document.getElementById('submit_button').removeAttribute('disabled')
        contactbutton.style.background = "#4CAF50";
        contactbutton.style.color = "white";
        contactbutton.style.border = "1px solid white";
    }
})