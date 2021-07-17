/**
 * create an optimal schedule based on tasks 
 */

const fs = require('fs');

class taskScheduler{

    priorityList = {
        "priority_1": [],
        "priority_2": [],
        "priority_3": [],
        "priority_4": [],
        "priority_5": []
    }

    createTasksList() {
        
        // see all lists
        var list = fs.readdirSync('./lists')

        list.forEach(element => {
            let rawdata = fs.readFileSync('./lists/'+String(element));
            let element_list = JSON.parse(rawdata);
      
            
            this.priorityList["priority_" + String(element_list["priority"])].push(element_list)
            
            })
    
        // console.log(this.priorityList)

        // for(const element in this.priorityList) {
        //     console.log(this.priorityList[element])
        // }

        return this.priorityList
    }

    spreadTasks() {
        /**
         *  place tasks on calendar
         */

        for(const priority_group in this.priorityList) {
            console.log("\n" + priority_group)
            console.log("-------<<->>----------")
            
            if(this.priorityList[priority_group].length > 0) {

            this.priorityList[priority_group].forEach( list => {
                console.log(list)
            })

            }
            else{
                console.log("-> empty")
            }
        
    }
}
}

sch = new taskScheduler()

sch.createTasksList()

sch.spreadTasks()

// console.log(sch.priorityList)