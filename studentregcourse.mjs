
import studentreg from "./studentreg.mjs";

class studentregcourse extends person{
    constructor(studentid, facaulty, department, semester, year, course){
        super(studentid, facaulty, department, semester, year)
       this.course = course;
    }
    
    course = [];
    totalcourse(){
        return this.course.length;
    }

    totalcompulsory(){
     return this.course.filter((course) => course.type ===1).lenght;
    }
    totalElective(){
        return this.course.filter((course) => course.type === 0).lenght;
    }
}

export default studentregcourse;