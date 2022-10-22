console.log('person 1 shows ticket');
console.log('person 2 shows ticket');

const priseBringTicket = new Promise((resolve,reject)=>{


    setTimeout(()=>{

        resolve('ticket');

    },3000)
})

const getPopcorn = priseBringTicket.then((t)=>{

    console.log('i have tickets');
    console.log('husband : we should go in');
    console.log(`no i am hungry`);
    return new Promise((resolve,reject)=> resolve(`${t} popcorn`));

});
const getButter = getPopcorn.then((t)=>{

    console.log('i GOT some popcorn')
    console.log('husband : we should go in');
    console.log(`i need butter`);
    return new Promise((resolve,reject)=> resolve(`${t} butter`));

});
const getColdd = getButter.then((t)=>{

    console.log('i GOT some BUTTER ON POPCORN')
    console.log('husband : we should go in');
    console.log(`NO DRINKS!`);
    return new Promise((resolve,reject)=>resolve(`${t} drinks`));

})
getColdd.then((t)=>console.log(t));
console.log('person 4 shows ticket');
console.log('person 5 shows ticket');
