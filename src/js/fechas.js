let happybirthday = new Date("6 14, 1991");
console.log(happybirthday);

let today = new Date();

let isLate = today > happybirthday;
console.log(isLate);

let birthday = happybirthday.getDate();
console.log(birthday);

let monthBirthday = happybirthday.getMonth() + 1;
console.log(monthBirthday);

let yearBirthday = happybirthday.getFullYear();
console.log(yearBirthday);