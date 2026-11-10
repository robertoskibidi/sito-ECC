document.addEventListener('DOMContentLoaded', function() {
    const bottone = document.getElementById('download-button');
    const msg_ringraziamento = document.getElementById('ringraziamento');

    const url_file = '../GoodUSB.exe';

    let ha_scaricato = false;  

    if (bottone) {
        bottone.addEventListener('click', function() {
            if (!ha_scaricato) {
                // Avvia il download diretto dell'EXEx  
                window.location.href = url_file;
                
                bottone.innerHTML = 'Installato';
                bottone.classList.add('checked');
                if (msg_ringraziamento) {
                    msg_ringraziamento.style.display = 'inline';
                }
                ha_scaricato = true;
            } else {
                bottone.innerHTML = 'Installa';
                bottone.classList.remove('checked');
                if (msg_ringraziamento) {
                    msg_ringraziamento.style.display = 'none';
                }
                ha_scaricato = false;
            }
        });
    }
});
