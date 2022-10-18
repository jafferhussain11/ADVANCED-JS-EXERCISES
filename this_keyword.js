

this.table = 'hall table' // table in the window object

this.room1 = {

    table : 'room1 table',
    cleanTable(){

        console.log(this.table); //this in object and method,this here points table within room1
    }
}
console.log(this.table);////this in global scope

this.room1.cleanTable();// calling method of room1 

//using this in a function

let cleanTable = function(){

    console.log(this.table);
}
cleanTable.call(this); //attached the window object to cleantable function

//this inside inner function

let deepCleaning = function(){

    const cleanTable = function(){

        console.log(this.table);
    }
    cleanTable.bind(this)(); //bind gives us a copy of cleanTable with 'this' object bound to it.
    //cleanTable.call(this);
}
deepCleaning.call(this)
//deepCleaning.call(this);


//this inside inner function part2

let deepCleaning2 = function(){

    const cleanTable2 = ()=>{ //using fat arrow 

        console.log(this.table);
    }
    cleanTable2();
    
}
deepCleaning2.call(this);



