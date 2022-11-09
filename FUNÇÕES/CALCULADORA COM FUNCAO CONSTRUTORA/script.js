function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClicks();
        this.capturaEnter();
    };

    this.addNumDisplay = (el) => this.display.value += el.innerText;
    this.clearDisplay = () => this.display.value = '';
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta Inválida') 
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta Inválida')
            return;
        };
        };
    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    };s
    this.capturaClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.deleteOne();
            if (el.classList.contains('btn-eq')) this.realizaConta();
            this.display.focus();
        });
    };
}
const calculadora = new Calculadora();
calculadora.inicia();