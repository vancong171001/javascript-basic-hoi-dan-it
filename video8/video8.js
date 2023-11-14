// key: value
let obj = {
    name: 'Eric',
    address: 'Ha Noi',
    email: '',
    gender: ''
};

let b = 'name';
// obj[b] = 'Hary';
obj.name = 'Ali'

// console.log('What is your name?', `My name 's : `, obj.name);
// console.log('Where are you from?', `My name 's : `, obj.address);

console.log('What is your name?', `My name 's : `, obj['name'], obj);
console.log('Where are you from?', `My name 's : `, obj['address']);