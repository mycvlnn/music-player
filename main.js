const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$(".tab-item");
const tabPanes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

function setLineStyle(left, width) {
  line.style.left = left + "px";
  line.style.width = width + "px";
}

setLineStyle(tabActive.offsetLeft, tabActive.offsetWidth);

tabItems.forEach((tabItem, index) => {
  const pane = tabPanes[index];

  tabItem.onclick = function (e) {
    const tabPaneActive = $(".tab-pane.active");
    const tabActiveUpdate = $(".tab-item.active");
    tabActiveUpdate.classList.remove("active");
    tabPaneActive.classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
    setLineStyle(this.offsetLeft, this.offsetWidth);
  };
});
