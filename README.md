# xhr_example

como cambiar contenido solo con javascript

```javascript
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
```

