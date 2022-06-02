const date = new Date()
const printDate = function(){
    const todayDate = date.getDate()
    console.log("today date is: " +todayDate +"-6-2022")
}

const month = new Date()
const printMonth = function(){
    const todayMonth = month.getMonth()
    console.log("today month is:" +todayMonth)
}

const getBatchInfo = function(){
    console.log("Radon, week3, Day3, the topic being taught today is nodejs module system")
}


module.exports.printDate = printDate;

module.exports.printMonth = printMonth;

module.exports.getBatchInfo = getBatchInfo;