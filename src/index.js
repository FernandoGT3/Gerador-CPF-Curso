import GeraCPF from './modules/GeraCPF';

import './assets/css/styles.css';


(function () {
    const resultado = document.querySelector('.resultado');
    document.addEventListener('click', (event) => {
        const elemento = event.target;
        event.preventDefault();
        if (elemento.classList.contains('btn-gerar')) {
            for (let cpfText of document.querySelectorAll('.cpf-gerado')) {
                cpfText.remove();
            }
            const div = document.createElement('div');
            div.classList.add('cpf-gerado');

            mostraValor(div);
            resultado.appendChild(div);
        }
    });

    function mostraValor(div) {
        const novoCPF = new GeraCPF();

        div.innerHTML = novoCPF.geraNovoCPF();
    }


})();