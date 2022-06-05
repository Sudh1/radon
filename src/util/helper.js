const printDate = function (){
let currentDate = new Date ()
console.log(currentDate)

}

const printMonth = function (){

let currentdate = new Date ()
let currentMonth = currentdate.getMonth() +1
console.log('The current month is '+currentMonth)
}

const getBatchInfo = function(){


}


module.exports.printDate = printDate

module.exports.printMonth = printMonth


module.exports.getBatchInfo = getBatchInfo

 