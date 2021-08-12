import { DateTime } from "./luxon.min.js";

export function diffDates(firstDate, secondDate) {
  let firstDateObj = DateTime.fromISO(firstDate);
  let secondDateObj = DateTime.fromISO(secondDate);

  if (firstDateObj < secondDateObj) {
    [secondDateObj, firstDateObj] = [firstDateObj, secondDateObj]
  };

  return firstDateObj.diff(secondDateObj, ['years', 'months', 'days']).toObject();
}
export const diffToHtml = diff => `
  <span> 
      ${diff.years ? 'Лет: ' + diff.years : ''} 
      ${diff.months ? 'Месяцев: ' + diff.months : ''} 
      ${diff.days ? 'Дней: ' + diff.days : ''}
  </span>
`;

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstDate = formData.get("firstDate");
  const secondDate = formData.get("secondDate");

  if (firstDate && secondDate) {
    const diff = JSON.stringify(diffDates(firstDate, secondDate));
    dateCalcResult.innerHTML = diffToHtml(diff);
  }
  else {
    dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
  }
}