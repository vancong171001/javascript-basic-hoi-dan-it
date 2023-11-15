arr = [
    {name: 'Eric', age: 25},
    {name: 'Ross', age: 24},
    {name: 'ABC', age: 25},
    {name: 'Cong', age: 29},
    {name: 'Venus', age: 30},
];

// filtet / find
let filter = arr.filter((item, index)=>{
    return item && item.age === 25
});

// let filter = arr.filter((item, index)=>{
//     return item && item.age === 40
// });

// let filter = arr.find((item, index)=>{
//     return item && item.age === 25
// });

// let filter = arr.filter((item, index)=>{
//     return item && item.age === 0
// }); 

console.log(filter);