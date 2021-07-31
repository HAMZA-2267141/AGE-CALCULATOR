// -- -- -- -- --age calculater-- -- -- -- -- -- -- -
var Name = prompt("Enter your Name :")
var date = prompt("Enter date :")
var month = prompt("Enter month :")
var year = prompt("Enter year :")

document.write("========== " + Name + " ==========")
document.write("<br>")
document.write("<br>")
document.write(Name + " " + " " + " Your date of brith is :" + " " + month + " " + date + " " + year)
document.write("<br>")
document.write("<br>")


month = month.toLowerCase();

// var arrmonths=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// for(var i = 0 ; i<=arrmonths.length ; i++){
if (month === "jan" || month === "january" || month === "01" || month === "1") {
    month = 0;
} else if (month === "feb" || month === "february" || month === "02" || month === "2") {
    month = 1;
} else if (month === "mar" || month === "march" || month === "03" || month === "3") {
    month = 2;
} else if (month === "apr" || month === "april" || month === "04" || month === "4") {
    month = 3;
} else if (month === "may" || month === "05" || month === "5") {
    month = 4;
} else if (month === "jun" || month === "june" || month === "06" || month === "6") {
    month = 5;
} else if (month === "jul" || month === "july" || month === "07" || month === "7") {
    month = 6;
} else if (month === "aug" || month === "august" || month === "08" || month === "8") {
    month = 7;
} else if (month === "sep" || month === "september" || month === "09" || month === "9") {
    month = 8;
} else if (month === "oct" || month === "october" || month === "10") {
    month = 9;
} else if (month === "nov" || month === "november" || month === "11") {
    month = 10;
} else if (month === "dec" || month === "december" || month === "12") {
    month = 11;
}



var NEW = new Date();
NEW.setDate(date);
NEW.setMonth(month);
NEW.setFullYear(year);

var today = new Date();
var msToday = today.getTime();
var msNew = NEW.getTime();


// YEAR 
var Diff = msToday - msNew;
var res = Diff / (1000 * 60 * 60 * 24 * 365.25);
res = Math.floor(res);


// MONTH
var finaMonth;
var presentDay = new Date();
presentDay.getMonth();
if (presentDay.getMonth() > month) {
    finaMonth = (presentDay.getMonth() + 1) - (month + 2);
} else if (presentDay.getMonth() == month) {
    finaMonth = 0
} else {
    finaMonth = (month + 1) - (presentDay.getMonth());
}

// DAY
var finalDate;
presentDay.getDate();
if (presentDay.getDate() < date) {
    finalDate = 30 - (date - presentDay.getDate());
} else if (presentDay.getDate() === date) {
    finalDate = 0;
} else {
    finalDate = presentDay.getDate() - date;
}


document.write(res + " " + "years.." + " " + " " + finaMonth + " " + "months..." + " " + finalDate + " " + "days.... ")