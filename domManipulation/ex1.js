function calculateArea(){
    let width = document.getElementById('width');
    let height = document.getElementById('height');
    let area = width.value * height.value;
    let areaElem = document.createElement('p');
    areaElem.innerHTML = 'Area: '+area;
    document.body.appendChild(areaElem);
}
// let arr = [1,2,3,4,5]
// function sumArr(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// sumArr(arr);

// function intro(fName,lName){
//     console.log(`Hello Mr. ${fName} ${lName}`);
// }
// intro('Anil','Choudhary');

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.slice(1,5));

// let obj = {
//     name: "Anil",
//     age: 21,
//     course: "btech",
// }
// obj['gender'] = 'male';
// console.log(obj.age);

let string = "Choudhary";
function revStr(str){
    let ans = '';
    for(let i = str.length-1;i>=0;i--){
        ans[str.length-1-i] = str[i];
    }
    return ans;
}
console.log(revStr(string));

