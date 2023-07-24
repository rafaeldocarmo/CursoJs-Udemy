function greeting(name) {
    console.log("Olá " + name);
  }
  
function processUserInput(callback) {
    var name = 'rafael';
    callback(name);
}
  
processUserInput(greeting);