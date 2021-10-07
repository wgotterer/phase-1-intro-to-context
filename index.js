
function createEmployeeRecord(array){
    return {firstName: array[0], familyName:array[1], 
    title:array[2], payPerHour:array[3], timeInEvents:[], timeOutEvents:[]}
    
}

function createEmployeeRecords(arrOfArrs){
    return  arrOfArrs.map(createEmployeeRecord)
    }

function createTimeInEvent(bpRecord, timeString){

   bpRecord.timeInEvents.push({type:"TimeIn", date:timeString.split(" ")[0], hour:timeString.split(" ")[1] })


   return bpRecord

///do i need to seperate to line 14 or can I return with push?
}




