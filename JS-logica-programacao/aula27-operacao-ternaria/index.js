// A operação ternáriaé  um encurtador de código que substitui o if e o else. Pode ser utilizada da seguinte forma:
const userPoints = 1000;

// Com if e else:
if (userPoints >= 1000) {
    console.log('VIP User');
} else {
    console.log('Normal User');
}

// Com o encurtador de operação ternária: '? :'
const userPoints2 = 998;
//                      (condição)   ? valor para True : valor para False
const userLevel2 = userPoints2 >= 1000 ?  'VIP User' : 'Normal User';
console.log(userLevel2);

// Em outro exemplo:
const corUsuario = 'Blue';
const corDeFundo = corUsuario || 'Preta';

console.log(userLevel2, corDeFundo);
