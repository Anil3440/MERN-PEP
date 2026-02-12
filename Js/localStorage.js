// const btn = document.getElementById('addBtn');
// const input = document.getElementById('textInput');
// const list = document.createElement('ul');
// document.body.appendChild(list);
// btn.addEventListener('click',()=>{
//     list.innerHTML += `<li>${input.value}</li>`;
// });
// btn.addEventListener('dblclick',()=>{
//     list.innerHTML = ``;
// });

// localStorage.setItem('fruit','banana');
// console.log(localStorage.getItem('fruit'));
// localStorage.removeItem('fruit');

let obj = {
    name: 'Anil',
    regNo: 12320485,
    email: 'anil40@gmail.com',
    gender: 'Male'
}
let key = String(obj.regNo);
let data = JSON.stringify(obj);
localStorage.setItem(key,data);

let fetchedData = localStorage.getItem(key);
let parsedData = JSON.parse(fetchedData);
for(let i in parsedData){
    console.log(parsedData[i]);
}