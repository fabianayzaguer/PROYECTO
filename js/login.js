
let email = document.getElementById('email');
let contraseña = document.getElementById('contraseña');


let form = document.getElementById('formulario');
    form.addEventListener('submit', e=> {
        e.preventDefault()
        let warning1 = ""
        let warning2 = ""
        if(email.value === null || email.value === ''){
            warning1 +='Ingresa tu direccón email'
            console.log('Formulario NO Enviado..');
            vacio = true

        }else if(contraseña.value === null || contraseña.value === ''){
            warning2 += 'Ingresa tu contraseña'
            console.log('Formulario NO Enviado..');
            vacio = true

        }else {
            location.href ='home.html';
            console.log('Formulario Enviado..');
            vacio = true
        }
        
        if(vacio){
            document.getElementById('warning1').innerHTML = warning1
        }
        
        if(vacio){
            document.getElementById('warning2').innerHTML = warning2
        }

        
     })