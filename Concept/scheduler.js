/**
 * create an optimal schedule based on tasks 
 */

const fs = require('fs');

class TaskScheduler{

    task_lists_values = {} // object with all lists of tasks
    task_lists_names = [] // list of names of lists :) 

    readTasksListsFiles() {

        /**
         *  this function reads all the tasks from folder "lists" and converts them to object of lists and list of names
         */
        
        // see all lists files
        this.task_lists_names = fs.readdirSync('./lists')
        console.log(this.task_lists_names)

        this.task_lists_names.forEach(element => {
            let rawdata = fs.readFileSync('./lists/'+String(element));
            let element_list = JSON.parse(rawdata);
         
            this.task_lists_values[element] = element_list;
            
            })
    

        return this.task_lists_values
    }

    scheduleLists () {
        /**
         *  schedule lists of tasks
         */

        // repeat until list is empty
        while(this.task_lists_values.length > 0) {
            // check if all conditions for list are solved
            this.task_lists_names.forEach(name => {
             
                if(true) {
                    list = this.task_lists_values[name]
                    console.log(list)
                }
                else {
                    // move list to waitinglist and try with next in line
                }
            })
           
        }
    }

    
   
}

sch = new TaskScheduler()

sch.readTasksListsFiles()




sch.scheduleLists()