function simulador(){
    alert("hola negro")

    // let nombres = document.getElementById('nombres');
    // let telefono = document.getElementById('telefono');
    // let email = document.getElementById('email');
    // let monto = document.getElementById('monto');
    // let tiempo = document.getElementById('tiempo');



    const contpre = document.getElementById('pre-simulation')
    const contPost = document.getElementById('post-simulation')

    contPost.classList.remove('disabled');
    contpre.classList.add('disabled');


    
    }
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('calcular').addEventListener('click',simulador);
})