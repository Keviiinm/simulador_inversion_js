function simulador(){
    

    // VALORES DE LOS CAMPOS DEL FORMULARIO
    let nombres = document.getElementById('nombres').value
    let telefono = document.getElementById('telefono').value
    let email = document.getElementById('email').value
    let monto = document.getElementById('monto').value
    let tiempo = document.getElementById('tiempo').value

    // CONSTANTES QUE CAPTURAN LAS ETIQUETAS SPAN EN LAS QUE SE MUESTRAN LOS VALORES 



    const showTiempo = document.getElementById('showTiempo')
    const showInteres = document.getElementById('showInteres')
    const showTotal= document.getElementById('showTotal')
    const showGanancia = document.getElementById('showGanancia')
    const showNombres = document.getElementById('showNombres')
    const showCorreo = document.getElementById('showCorreo')

    // variables para realizar las operaciones 

    let ganancia = 0
    let total = 0


    switch (tiempo) {
        // en este case realizaremos el calculo si el tiempo corresponde a 1 años
        case '1':
            ganancia = (monto*0.008)*12
            total = parseInt (monto) + parseInt(ganancia)
            showInteres.textContent = '0.8%'
            showTiempo.textContent = '12 MESES'
            break;

        // en este case realizaremos el calculo si el tiempo corresponde a 2 años
        case '2':
            ganancia = (monto*0.013)*24
            total = parseInt(monto) + parseInt(ganancia)
            showInteres.textContent = '0.13%'
            showTiempo.textContent = '24 MESES'
            break;

        // en este case realizaremos el calculo si el tiempo corresponde a 3 años
        case '3':
            ganancia = (monto * 0.017)*36
            total = parseInt(monto) + parseInt(ganancia)
            showInteres.textContent = '1.17%'
            showTiempo.textContent = '36 MESES'
        break;
    
        default:
            break;
    }

    if (nombres == "" || email == "" || monto == "" || tiempo == "") {
        alert("Complete los cambios obligatorios")
        
    }else{
        contPost.classList.remove('disabled')
        contpre.classList.add('disabled')
        switch (tiempo) {

        }
    }

    showTotal.textContent = total
    showGanancia.textContent = ganancia
    showNombres.textContent = nombres
    showCorreo.textContent = email


    const contpre = document.getElementById('pre-simulation')
    const contPost = document.getElementById('post-simulation')

    contPost.classList.remove('disabled');
    contpre.classList.add('disabled');


    
    }
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('calcular').addEventListener('click',simulador);
})