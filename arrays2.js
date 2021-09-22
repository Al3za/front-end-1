students = [
    {name: "Jake", birthYear: 1980, marks: 80},
    {name: "John", birthYear: 1979, marks: 60},
    {name: "Abby", birthYear: 1990, marks: 70},
    {name: "Carter", birthYear: 2000, marks: 85},
    {name: "Dave", birthYear: 2010, marks: 62},
    {name: "Allison", birthYear: 1967, marks: 49},
    {name: "Isak", birthYear: 1949, marks: 30},
    {name: "Gerald", birthYear: 1996, marks: 83},
    {name: "George", birthYear: 2001, marks: 19},
] 
const getAge = (student) =>{
    return    2021 - student.birthYear
}

    const getName=(student)=>{
        return student.name
    }
   
 const getGrade=(student)=>{
     const mark= student.marks
     if(mark<=100&&mark>0){
        if(mark<=100&&mark>=90)
        return "A"
      if(mark<90&&mark>=80){
         return "B"
     }else if(mark<80&&mark>70){
         return "C"
     }else if(mark<70&&mark>60){
         return "D"
     }else if(mark<60&&mark>=50){
         return "E"
     }else {
         return "F"
     }
 } else{
     return "Ange ett giltig betyg"
 }
} 

  //students.forEach(student => {
     /* console.log(`${getGrade(student)} ${getAge(student)} ${getName(student)}`)*/
    
  //})

     

     const sameGradeStudents=((grade)=>{
     const degree= students.filter((fil)=>{
        
    return getGrade(fil)===grade
        
        
      })
      return degree
   })
          
      //return pairStudents
  
   const grades=["A","B","C","D","E","F"]
      
     const gradedStudent= grades.map((votes=>{
        return  sameGradeStudents(votes)
      }))
console.log(gradedStudent)
        
        

       //console.log(gradedStudent)
     
function fancyPrint(){
         for(i=0;i<gradedStudent.length;i++){
             if(gradedStudent[i].length!=0){
             console.log(`there are ${gradedStudent[i].length} entries that scored
             a grade of ${getGrade(gradedStudent[i] [0])}`)
             //console.log(gradedStudent[i])
             continue;
             }
             gradedStudent[i].push({marks:100-(i*10)})
             console.log(`no one has received ${getGrade(gradedStudent[i][0])} degree `)
        }
         }


    
fancyPrint()
  

  
       