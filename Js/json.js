const user = {
    user: 'Anil',
    regNo: 12320485,
    email: 'anil40@gmail.com'
}
const JSONObj = JSON.stringify(user);
const data = JSON.parse(JSONObj);
console.log(data);