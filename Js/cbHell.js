function fn(){ 
    setTimeout(()=>{
        console.log('1st func');
        setTimeout(()=>{
            console.log('2nd func');
            setTimeout(()=>{
                console.log('3rd func');
                fn();
            },1000);
        },1000);
    },1000);
};
fn();