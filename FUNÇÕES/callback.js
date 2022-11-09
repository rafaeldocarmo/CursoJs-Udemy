// CALLBACK _ Coisa que são chamadas quando outras terminarem de ocorrer

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
      min;
    return Math.floor(num);
  }

  // FUNCAO PARA CRIAR NUMERO ALEATORIO ENTRE 1SEG E 3 SEG
  
  function f1(callback) {
    setTimeout(function() {
      console.log('f1');
      if (callback) callback(); // callback serve para a f2 não ser realizada antes da f1
    }, rand());
  }

  
  function f2(callback) {
    setTimeout(function() {
      console.log('f2');
      if (callback) callback();
    }, rand());
  }
  
  function f3(callback) {
    setTimeout(function() {
      console.log('f3');
      if (callback) callback();
    }, rand());
  }
  
  f1(f1Callback);
  
  function f1Callback() {
    f2(f2Callback);
  }
  
  function f2Callback() {
    f3(f3Callback);
  }
  
  function f3Callback() {
    console.log('Olá mundo!');
  }