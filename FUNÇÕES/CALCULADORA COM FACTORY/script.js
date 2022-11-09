function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaC();
            this.pressionaDelete();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta Inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e){
                alert('Conta Inválida');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.realizaConta();
              }
            });
        },

        pressionaDelete() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.deleteOne();
              }
            });
        },

        pressionaC() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 67) {
                this.clearDisplay();
              }
            });
          },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

        

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();