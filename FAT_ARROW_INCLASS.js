/*Take the student class which you made up and

write a function called egligible for placements which basically 
takes the minimum board marks required by a candidate to sit for the company coming for placement and it returns a fat arrow function.

The fat arrow function takes age as an argument and returns true if the given student has board marks greater than minimum board marks required by company and is above the required age set by the company.[If stuck check the hint 
*/
class Student{

   
    
    constructor(name,age,phone,marks){

        this.name = name;
        this.age = age;
        this.phone =phone;
        this.marks =marks;
       
      
    }

    eligible(){

          let age = this.age;
          let marks = this.marks;
          let logicFatArrow = (age) => {

            if(age>=18 && marks>40 ) return true;
            else return false;
          } 
          return logicFatArrow(age);
            //console.log(`${this.name} is not eligible`);

        
    }
   

}
let s1 = new Student("lulu",25,80081234,70);
let s2 = new Student("pulu",25,80081234,90);
let s3 = new Student("hulu",25,80081234,7);
let s4 = new Student("zulu",25,80081234,35);
let s5 = new Student("chtulu",25,80081234,25);


console.log(s1.eligible());
console.log(s2.eligible());
console.log(s3.eligible());
console.log(s4.eligible());
console.log(s5.eligible());

