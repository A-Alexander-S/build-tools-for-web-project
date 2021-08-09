let tabsBtn = document.getElementsByClassName("tabs__nav-btn");
let tabsItems = document.getElementsByClassName("tubs__item");

Array.from(tabsBtn).forEach(onTabClick);

export function onTabClick(item) {
  item.addEventListener("click", () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {

      Array.from(tabsBtn).forEach((item) => {
        item.classList.remove("active")
      });

      Array.from(tabsItems).forEach((item) => {
        item.classList.remove("active")
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  })
};

document.querySelector(".tabs__nav-btn").click();