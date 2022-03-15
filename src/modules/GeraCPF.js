import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCPF () {
        const cpfSemDigito = this.rand();

        const primeiroDigito = ValidaCPF.criaDigito(cpfSemDigito);

        const segundoDigito = ValidaCPF.criaDigito(cpfSemDigito + primeiroDigito);
    
        const novoCPF = cpfSemDigito + primeiroDigito + segundoDigito;

        return this.formataCPF(novoCPF);
        //console.log(novoCPF);
    }

    formataCPF(cpf){
        return (
            cpf.slice(0,3) + '.' +

            cpf.slice(3,6) + '.' +

            cpf.slice(6,9) + '-' +

            cpf.slice(9,11)
        );
    }
}

// const c1 = new GeraCPF();

// c1.geraNovoCPF();