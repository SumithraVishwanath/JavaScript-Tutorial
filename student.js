function Student(name, age, gender,admissionNo, marks){
    this.name = name
    this.age = age
    this.gender = gender
    this.admissionNo = admissionNo 
} 

var student1 = new Student("Rashi", 10, "Female", "SA123") 

student1.Marks = function () {
    let allSub = [29, 44, 28, 42, 41, 47];
    let totalMarks = allSub.reduce((sum,marks)=> sum+marks,0)
    return totalMarks;
}

student1.Percentage = function () {
    let overAllMarks = 300;
    let percen = Math.round((student1.Marks()/overAllMarks)*100);
    return percen;
}
console.log(`*********** ${student1.name} Details ***************`);   
console.log(student1);
console.log(`Total Marks Obtained By Student1 = ${student1.Marks()}`);
console.log(`Percentage Obtained By Student1 = ${student1.Percentage()} %`);

var student2 = new Student("Praveen", 11, "Male", "SA154")

student2.scores = function () {
   let allsubs = [12,08,37,19,46,22] 
   let overAllMarks = 360;
   let internalMarks = 10;

   // add internal marks '10' to all the subjects and then find total marks and percentage
   let percentage =  Math.round((allsubs.map(sum=> sum+10).reduce((sum,marks)=> sum+marks,0)/overAllMarks)*100);
   return percentage;   
}
console.log(`*********** ${student2.name} Details ***************`);  
console.log(student2);
console.log(`Percentage Obtained By Student2 with Internal Marks = ${student2.scores()} %`);

