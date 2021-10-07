
function createEmployeeRecord(array){
    return {firstName: array[0], familyName:array[1], 
    title:array[2], payPerHour:array[3], timeInEvents:[], timeOutEvents:[]}
    
}

function createEmployeeRecords(arrOfArrs){
    return  arrOfArrs.map(createEmployeeRecord)
    }

function createTimeInEvent(bpRecord, timeString){

   bpRecord.timeInEvents.push({type:"TimeIn", date:timeString.split(" ")[0], 
   hour:parseInt(timeString.split(" ")[1])})


   return bpRecord

}

function createTimeOutEvent(bpRecord, timeString){
    bpRecord.timeOutEvents.push({type:"TimeOut", date:timeString.split(" ")[0], 
    hour:parseInt(timeString.split(" ")[1])})
 
 
    return bpRecord
}

function hoursWorkedOnDate(cRecord, date){

    cRecord.timeInEvents.date

}



