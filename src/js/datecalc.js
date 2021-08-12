// import { DateTime } from "./luxon-mini.js";
import { DateTime } from "./luxon.js";
// import { DateTime } from "https://moment.github.io/luxon/global/luxon.min.js";

export function diffDates(firstDate, secondDate) {
  firstDateObj = DateTime.fromISO(firstDate);
  secondDateObj = DateTime.fromISO(secondDate);

  if (firstDateObj < secondDateObj) {
    [secondDateObj, firstDateObj] = [firstDateObj, secondDateObj]
  };
  //   if (firstDate > secondDate)
  //     secondDate = [firstDate, firstDate = secondDate][0];

  //   return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
  // }

  return firstDateObj.diff(secondDateObj, ['years', 'months', 'days']).toObject();
}
export const diffToHtml = diff => `
  <span> 
      ${diff.years ? 'Лет: ' + diff.years : ''} 
      ${diff.months ? 'Месяцев: ' + diff.months : ''} 
      ${diff.days ? 'Дней: ' + diff.days : ''}
  </span>
`;