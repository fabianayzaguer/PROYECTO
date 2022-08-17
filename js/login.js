
let email = document.getElementById('email');
let contraseña = document.getElementById('contraseña');
let error = document.getElementsByClassName('alert-heading');

let form = document.getElementById('formulario');
    form.addEventListener('submit', e=> {
        e.preventDefault()
        
        if(email.value === null || email.value === ''){
            alert('Ingresa tu direccón email')
            console.log('Formulario NO Enviado..');

        }else if(contraseña.value === null || contraseña.value === ''){
            alert('Ingresa tu contraseña')
            console.log('Formulario NO Enviado..');

        }else {
            location.href ='index.html';
            console.log('Formulario Enviado..');
        }
        
    

        
     })