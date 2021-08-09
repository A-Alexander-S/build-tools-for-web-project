import './index.scss';
import "../../js/tabs.js"
import "../../js/timer.js"
// import "../../js/datecalc"
import { diffDates, diffToHtml } from "../../js/datecalc.js";
import { formatError } from "../../js/utils.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstDate = formData.get("firstDate");
  const secondDate = formData.get("secondDate");
  // let { firstDate, secondDate } = event.target.elements;
  // firstDate = firstDate.value;
  // secondDate = secondDate.value;

  if (firstDate && secondDate) {
    const diff = JSON.stringify(diffDates(firstDate, secondDate));
    dateCalcResult.innerHTML = diffToHtml(diff);
  }
  else {
    dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
  }
}



