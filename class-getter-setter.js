class BasicStudentInfo {
  constructor(studentName, phoneNumber, subNumber, email, cityName) {
    this.studentName = studentName;
    this.phoneNumber = phoneNumber;
    this.subNumber = subNumber;
    this.email = email;
    this.cityName = cityName;
  }
  get cityName() {
    return this._cityName;
  }
  set cityName(value) {
    if (typeof value === "string") {
      this._cityName = value;
    } else {
      console.log("데이터타입이 string이 아닌 관계로 강제로 바꾸었습니다.");
      this._cityName = String(value);
    }
  }
}
const kongukjae = new BasicStudentInfo(
  "공욱재",
  "010-9139-0957",
  "042-476-2111",
  "kongukjae@gmail.com",
  12345
);

console.log(kongukjae);
console.dir(kongukjae);
console.log(typeof kongukjae.cityName);
console.log(typeof kongukjae._cityName);
console.log(kongukjae.cityName === kongukjae._cityName); // 놀랍게도 true를 반환한다.
/**
 * Todo: 여기까지 확인되었다면, 생성자 함수의 get 부분을 잠시 주석처리하고 다시 확인해본다.
 */
