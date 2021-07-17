/*
 * creates json object with current year of days
 * if file already exists, it extends it (alternative to create file for each year)
 * 
 */

const fs = require('fs');
const c = require('calendar')

// leap year check function

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// set year data

function setDay(value, index, m, day_num, year_data, current_year) {

    // set calendar data
    if(index == 0) {
        (year_data[String(current_year) + "-" + String(day_num)]) = {"day_name": "Monday"}
    }
    else if(index == 1) {
        (year_data[String(current_year) + "-" + String(day_num)]) = {"day_name": "Tuesday"}
    }
    else if(index == 2) {
        (year_data[String(current_year) + "-" + String(day_num)]) = {"day_name": "Wednesday"}
    }
    else if(index == 3) {
        (year_data[String(current_year) + "-" + String(day_num)]) = {"day_name": "Thursday"}
    }
    else if(index == 4) {
        (year_data[String(current_year) + "-" + String(day_num)]) = {"day_name": "Friday"}
    }
    else if(index == 5) {
        (year_data[String(current_year) + "-" + String(day_num)]) = {"day_name": "Saturday"}
    }
    else if(index == 6) {
        (year_data[String(current_year) + "-" + String(day_num)]) = {"day_name": "Sunday"}
    }
   
    (year_data[String(current_year) + "-" + String(day_num)])["day_num"] = day_num;
    (year_data[String(current_year) + "-" + String(day_num)])["day"] = value;
    (year_data[String(current_year) + "-" + String(day_num)])["month"] = m;
    (year_data[String(current_year) + "-" + String(day_num)])["year"] = current_year;
    
    // weekend

    if(index == 5 || index == 6) {
        (year_data[String(current_year) + "-" + String(day_num)])["day_type"] = "weekend";
    }
    else {
        (year_data[String(current_year) + "-" + String(day_num)])["day_type"] = "working";
    }
    
    
    // set values

    
    
}


// data

var year_data = {}
var day_num = 1


// check what year it is

var current_year = new Date()
current_year = current_year.getUTCFullYear()

if(leapYear(current_year)) {
    num_of_days = 366
}
else {
    num_of_days = 365
}

// create json data

console.log(year_data)

cal = new c.Calendar(1);

for (m = 0; m < 12 ; m++ ) {
    month = cal.monthDays(current_year, m); 
   
    // iterate over month to get day and type (weekday / workday)
    month.forEach(week => {
        week.forEach((value, index, array) => {
            console.log(value)
            if(value != 0) {
                setDay(value, index, m, day_num, year_data, current_year)
                day_num++
            }
        })
    });
    
}

console.log(year_data)