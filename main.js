const xhr = new XMLHttpRequest();
        
const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
    changeSite('form.html');
});

const aboutUs = document.getElementById('aboutUs');
aboutUs.addEventListener('click', () => {
    changeSite('perro.html');
});

function changeSite(url) {
    const container = document.getElementById('container');
    xhr.onload = function() {
        if (this.status === 200) {
            container.innerHTML = this.responseText;
        } else {
            console.warn('did not receive 200 OK from server');
        }
    };
    xhr.open('get', url);
    xhr.send();
}