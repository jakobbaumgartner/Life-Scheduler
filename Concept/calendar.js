const fs = require('fs');
const c = require('calendar')

class Calendar {

    /*
    * creates json object with current year of days
    * if file already exists, it extends it (alternative to create file for each year)
    * 
    */

    constructor() {

        console.log("creating empty calendar object")
    
    // data
    this.year_data = {}
    this.day_num = 1


    // check what year it is

    var current_year = new Date()
    current_year = current_year.getUTCFullYear()

    if(this.leapYear(current_year)) {
        var num_of_days = 366
    }
    else {
         var num_of_days = 365
    }


    // create year data object

    var cal = new c.Calendar(1); // get calendar object with weeks starting monday

    
    // iterate over months
    for (var m = 0; m < 12 ; m++ ) {
        var month = cal.monthDays(current_year, m); 
        
        // iterate over month to get day and type (weekday / workday)
        month.forEach(week => {
            week.forEach((value, index, array) => {
                // console.log(value)
                if(value != 0) {
                    this.setDay(value, index, m, current_year)
                    this.day_num++
                    // console.log(this.year_data)
                }
            })
        });
        
    }


    console.log("calendar created")
    }

   

    leapYear(year){

        /**
         *  function check if it is a leap year
         */

        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        }



    setDay(value, index, m, current_year) {



        // set calendar data
        if(index == 0) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)]) = {"day_name": "Monday"}
        }
        else if(index == 1) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)]) = {"day_name": "Tuesday"}
        }
        else if(index == 2) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)]) = {"day_name": "Wednesday"}
        }
        else if(index == 3) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)]) = {"day_name": "Thursday"}
        }
        else if(index == 4) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)]) = {"day_name": "Friday"}
        }
        else if(index == 5) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)]) = {"day_name": "Saturday"}
        }
        else if(index == 6) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)]) = {"day_name": "Sunday"}
        }
        
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["this.day_num"] = this.day_num;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["day"] = value;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["month"] = m;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["year"] = current_year;
        
        // weekend
    
        if(index == 5 || index == 6) {
            (this.year_data[String(current_year) + "-" + String(this.day_num)])["day_type"] = "weekend";
        }
        else {
            (this.year_data[String(current_year) + "-" + String(this.day_num)])["day_type"] = "working";
        }
        
        
        // set values
    
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["work_hours_bussy"] = 0;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["work_hours_free"] = 0;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["mid_hours_bussy"] = 0;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["mid_hours_free"] = 0;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["rest_hours_bussy"] = 0;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["rest_hours_free"] = 0;
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["total_hours"] = 0;
    
        // set tasks
    
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["tasks_list"] = [];
    
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_1"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_2"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_3"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_4"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_5"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_6"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_7"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_8"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_9"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_10"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_11"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_12"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_13"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_14"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_15"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_16"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_17"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_18"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_19"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_20"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_21"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_22"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_23"] = "";
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["hour_24"] = "";
    
        // points
        (this.year_data[String(current_year) + "-" + String(this.day_num)])["points"] = 0; //(task_time x task_excertion)
    
    
    }

    dateConversion(day, month, year) {

        /**
         *  convert date to calendar object key
         */

        var day_number = 0

        // first we calculate days for previous months

        // add january
        if(month >= 2) {
            day_number += 31
        }

        // add february
        if(month >= 3) {
            if(this.leapYear(year)) {
                day_number += 29
            }
            else {
                day_number += 28
            }
        }

        // add march
        if(month >= 4) {
            day_number += 31
        }

        // add april
        if(month >= 5) {
            day_number += 30
        }

        // add may
        if(month >= 6) {
            day_number += 31
        }

        // add june
        if(month >= 7) {
            day_number += 30
        }

        // add july
        if(month >= 8) {
            day_number += 31
        }

        // add august
        if(month >= 9) {
            day_number += 31
        }

        // add september
        if(month >= 10) {
            day_number += 30
        }

        // add oktober
        if(month >= 11) {
            day_number += 31
        }

        // add november
        if(month == 12) {
            day_number += 30
        }

        // we add day of month

        day_number += day

        // we return index and key name

        console.log("key name: " + String(year)+ "-" + String(day_number))
        return [day_number, String(year)+ "-" + String(day_number)]

    }

}

calen = new Calendar()
calen.dateConversion(8,5,2024)
