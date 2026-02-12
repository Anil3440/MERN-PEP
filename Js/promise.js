function getNumber(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10);
        },1000)
    });
}
getNumber()
    .then((data)=>{
        console.log('data');
    })
    .then(()=>{
        console.log(data2);
    })
    .catch((err)=>{
        console.log(`error is: ${err}`);
        
    })
    .finally(()=>{
        console.log('Done');
    })