/*============forEach============ */

let tab = [7,22,13,5,6]

console.log('======== / for / ========')
for(let i = 0; i < tab.length; i++){
    console.log(tab[i])
}

console.log('======== / forEach / ========')

tab.forEach(element =>{
    console.log(element)
})


/*===========callback============ */

console.log('======== / function callback / ========')

function salutation(name) {
    console.log("Bonjour " + name);
  }
  
  function processUserInput(callback) {
    var name = "John Doe"; 
    callback(name);
  }
  
  
  processUserInput(salutation);