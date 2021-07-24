var sessionDate = new Date("2021-07-10T17:00:00.000Z");
var currentDay = new Date();

function getDateInfo(dateObj) {
  return {
    date: dateObj.getDate(),
    month: dateObj.getMonth()+1,
    year: dateObj.getFullYear(),
  }

}

function firstDateIsBeforeSecondDate(firstDate, secondDate) {
  var { date: firstDay, month: firstMonth, year: firstYear } = firstDate;
  var { date: secondDay, month: secondMonth, year: secondYear } = firstDate;
  var yearHasNotPast = firstYear <= secondYear;
  var monthHasNotPast = firstMonth <= secondMonth;
  var dateHasNotPast = firstDate <= secondDate;

console.log({
  firstDate, secondDate,
  firstYear, secondYear,
  firstMonth, secondMonth,
  firstDay, secondDay,
})
  
  return yearHasNotPast && monthHasNotPast && dateHasNotPast;
}

var sessionDayInfo = getDateInfo(sessionDate);
var todayInfo = getDateInfo(currentDay);

// could be today which is not in the future
var sessionIsNotInThePast = firstDateIsBeforeSecondDate(todayInfo, sessionDayInfo);

console.log({sessionIsNotInThePast})
