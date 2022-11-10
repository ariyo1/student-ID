class person {
  constructor(firstName, lastName, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
  }

  firstName = ''
  lastName = ''
  gender = ''
  walk() {}
  jump() {}
}
const check = new person('okon', 2022)
console.log(check.firstName)

export default person;