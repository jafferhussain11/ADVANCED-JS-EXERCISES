/*Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.

Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.

Create 5 students with different names and age.
Write a funchich keep track of the number of students created. Have you heard of static variables. Leverage that nowtion w
*/

class Student{

    static count=0;
    
    constructor(name,age,phone,marks){

        this.name = name;
        this.age = age;
        this.phone =phone;
        this.marks =marks;
        Student.count+=1;
      
    }

    eligible(){

        if(this.marks>40) console.log(`${this.name} is eligible`);
        else{

            console.log(`${this.name} is not eligible`);

        }
    }
    getCount(){

        console.log(Student.count);
    }

}
let s1 = new Student("lulu",25,80081234,70);
let s2 = new Student("pulu",25,80081234,90);
let s3 = new Student("hulu",25,80081234,7);
let s4 = new Student("zulu",25,80081234,35);
let s5 = new Student("chtulu",25,80081234,25);


s2.eligible();
s3.eligible();
s4.eligible();
s4.getCount();
