import person from './person.mjs'

class student extends person {
  constructor(firstname, lastname, gender, studentid) {
    super(firstname, lastname, gender)
    this.studentid = studentid
  }
  studentid = ''
}
