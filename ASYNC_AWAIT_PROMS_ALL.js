console.log('person 1 shows ticket');
console.log('person 2 shows ticket');

const preMovie = async() => {
    
    const willBringTicket = new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            resolve('ticket');
        }, 3000);

    });
    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));

    const getCandy = new Promise((resolve,reject)=> resolve('candy'));

    const getCake = new Promise((resolve,reject)=> resolve('Cake'));

    let ticket  = await willBringTicket;

    let [cake,popcorn,candy] = await Promise.all([getCake,getPopcorn,getCandy]);

    console.log(`${cake} ${candy} ${popcorn}`);

    return ticket;

    
    
}
preMovie().then((m) => console.log(`They now show ${m}`));

console.log('person 4 shows ticket');
console.log('person 5 shows ticket');
