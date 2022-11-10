class studentreg extends person{
    constructor(studentid, faculty, department, semester, year) {
        super(semester, year)
        this.studentid = studentid
        this.faculty = faculty
        this.department = department
        this.semester = semester
        this.year = year
    }
    studentid = ''
    faculty = ''
    department = ''
    semester = ''
    year = ''
}