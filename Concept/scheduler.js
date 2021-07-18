/**
 * create an optimal schedule based on tasks 
 */

const fs = require('fs');

class TaskScheduler{

    task_lists_values = [] // object with all lists of tasks
    task_lists_names = [] // list of names of lists :) 

    readTasksLists() {

        /**
         *  this function reads all the tasks from folder "lists" and converts them to object of lists and list of names
         */
        
        // see all lists files
        this.task_lists_names = fs.readdirSync('./lists')
        console.log(this.task_lists_names)

        this.task_lists_names.forEach(element => {
            let rawdata = fs.readFileSync('./lists/'+String(element));
            let element_list = JSON.parse(rawdata);
         
            this.task_lists_values.push(element_list)
            
            })
    

        return this.task_lists_values
    }



   
}

sch = new taskScheduler()

sch.readTasksLists()



console.log(sch.task_lists_values)