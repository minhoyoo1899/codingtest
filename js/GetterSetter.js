class Student {
  constructor(studentName, age, phoneNumber) {
    this.studentName = studentName;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }
  set age(value) {
    if(value > 20) {
      this._age = String(value);
    } else {
      throw new Error('Age must be more than 20');
    }
  }

  set phoneNumber(value) {
    value = typeof(value) === "string" ? value : String(value);
    if( value.length > 10) {
      this._phoneNumber = value;
    } else {
      throw new Error('Phone number must be more than 10 digits');
    }
  }
}
const testData = new Student("공욱재", 23, "01091390957");
console.log(testData);