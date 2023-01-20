 //задание 1
 function reverseStr(str) {
      let a = "";
      for (let i = 0; i < str.length; i++) {
            a += str[str.length - 1 - i];
           }
       return a;
  }
  console.log(reverseStr("Привет"));



 //задание 2
 const getAverage = (arifNum) => {
     const num = arifNum.reduce((acc, number) => acc + number, 0);

     const arif = arifNum.length;

     return num / arif;}
 const arifNum = [28, 36, 19, 41];

 console.log(getAverage(arifNum));

