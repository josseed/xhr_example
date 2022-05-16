const xhr = new XMLHttpRequest();

const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
  changeSite('form.html');
  getRegions();
});

const aboutUs = document.getElementById('aboutUs');
aboutUs.addEventListener('click', () => {
  changeSite('perro.html');
});

function changeSite(url) {
  const container = document.getElementById('container');
  xhr.onload = function () {
    if (this.status === 200) {
      container.innerHTML = this.responseText;
    } else {
      console.warn('did not receive 200 OK from server');
    }
  };
  xhr.open('get', url);
  xhr.send();
}

function getRegions() {
  const _xhr = new XMLHttpRequest();
  _xhr.onload = function () {
    if (this.status === 200) {
      regions = JSON.parse(this.responseText);
      console.log(regions);
      select = document.getElementById('selectRegionId');
      while (select == null) {
        select = document.getElementById('selectRegionId');
        console.log('select is null');
      }
      for (let index = 0; index < regions.length; index++) {
        const region = regions[index];
        let optionElem = document.createElement('option');
        optionElem.value = region.codigo;
        optionElem.textContent = region.nombre;
        select.appendChild(optionElem);
      }   
    }
  }
  _xhr.open('get', 'https://apis.digital.gob.cl/dpa/regiones');
  _xhr.send();
}