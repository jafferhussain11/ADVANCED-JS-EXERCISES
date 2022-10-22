console.log('person 1 shows ticket');
console.log('person 2 shows ticket');

const preMovie = async() => {
    
    const willBringTicket = new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            resolve('ticket');
        }, 3000);

    });
    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));

    let ticket  = await willBringTicket;
    console.log('i have tickets');
    console.log('husband : we should go in');
    console.log(`no i am hungry`);

    let popcorn = await getPopcorn; //wait for promise of getting popcorn to resolve !

    console.log('i GOT some popcorn')
    console.log('husband : we should go in');
    console.log(`i need butter`);

    const getButter = new Promise((resolve,reject)=>resolve('butter'));

    let butter = await getButter; //wait for promise of getting butter to resolve !
    console.log('i GOT some butter')
    console.log('husband : we should go in');
    console.log(`NO WAIT! i need coldDRINKS`);

    const getCold = new Promise((resolve,reject)=> resolve('cold drinks!'));

    let drinks = await getCold;
    console.log('i GOT the Drinks')
    console.log('husband : we should go in');
    console.log(`OKAY !`);

    return ticket;

    
    
}
preMovie().then((m) => console.log(`They now show ${m}`));

console.log('person 4 shows ticket');
console.log('person 5 shows ticket');
