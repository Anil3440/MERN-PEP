let i = 0;
const id = setInterval(()=>{
    if(i == 5){
        clearInterval(id);
    }
    console.log(++i);
},1000);

