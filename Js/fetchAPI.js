let container = document.getElementById('container');

async function fetchData(){
    try{
        container.innerHTML = `<h2>LOADING DATA</h2>`;
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error('Error fetching the API data');
        }
        let data = await response.json();
        container.innerHTML = `<h1>Fetched API Data</h1>`;
        data.forEach(i=>{
            container.innerHTML += `<li>username is ${i.name}.</li>`;
            container.innerHTML += `<li>email is ${i.email}.</li></br>`;
        });
    }
    catch(err){
        console.log(err.message);
    }
}
fetchData();