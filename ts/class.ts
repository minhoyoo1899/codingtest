class GreenStudentList {
  student: string;  
  classNum: string;
  year: string;
  month: string;
  day: string;
  
  constructor(student, year, month, day, classNum) {
    this.student = student;
    this.year = year;
    this.month = month;
    this.day = day;
    this.classNum = classNum;
  }
  NCS(number: string, name: string) {
    number = number;
    name = name;
  }
}



// getter setter
class PhoneNum {
  PhoneNum1: string;
  PhoneNum2: string;
  PhoneNum3: string;

  get PhoneNum() {
    return `${this.PhoneNum1} - ${this.PhoneNum2} - ${this.PhoneNum3}`;
  }

  set PhoneNum(value) {
    [this.PhoneNum1, this.PhoneNum2, this.PhoneNum3] = value;
  }
}

class DateTime {
  Year: string;
  Month: string;
  Day: string;

  get Now() {
    return `${this.Year}-${this.Month}-${this.Day}`;
  }

  set Now(value) {
    [this.Year, this.Month, this.Day] = value;
  }
}

class Eaddress {
  eAddr1: string;
  eAddr2: string;
  eAddr3: string;

  get address() {
    return `${this.eAddr1} @ ${this.eAddr2}.${this.eAddr3}`;
  }

  set address(value) {
    [this.eAddr1, this.eAddr2, this.eAddr3] = value;
  }
}



// class persInfo extends GreenStudentList {
//   phoneNum1: string;
//   phoneNum2: string;
//   phoneNum3: string;
//   eAddr1: string;
//   eAddr2: string;
//   eAddr3: string;
//   // constructor() {
//   //   super();
//   // }
// }

//.padStart(자릿수, '0');
/**
 * Todo : 그린컴퓨터 아트학원 훈련생 명단 만들기
 * ? 학사 행정팀에서 학사 운영을 진행 하려면, 훈련생 한명에 대한 다음과 같은 정보가 필요하다.
 * * 임의의 훈련생
 * * 1. 이름: 공욱재 // string
 * * 2. 생년월일 : 19990101 //년단위 4자리, 월 2자리, 일 두자리로 이루어진 string
 * * 3. NCS직종 : {
 * *      번호 : 1 // string
 * *      이름 : 정보기술개발 // string
 * *    }
 * * 훈련강의실 : 305호 // string이어야 하며, 상황에 따라 다른 호수로 배정 될 수있다.
 * * 연락처 : 010-9139-0957 // string - 기준으로 다른 입력을 받게
 * * 이메일 : asdsadasd@asdasda.com // string @(atsign)표시와 도메인 규격에 맞게
 * * 훈련강의명 : KDT Trainning // strnig
 * * 훈련시작일 : 2022-07-19 //string 입력받은 데이터에 -이 들어가게 
 * * 훈련종료일 : 2022-07-19 //string 입력받은 데이터에 -이 들어가게 
 * * 훈련생 번호 : 305-01 // string 앞부분은 강의실 번호 상속, 뒷부분을 카운팅 되게? 
*/