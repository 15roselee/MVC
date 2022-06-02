import "./app2.css";

import $ from "jquery";
const $tapBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
console.log($tapBar);
$tapBar.on("click", "li", (e) => {
    const $li = $(e.currentTarget);
    $li.addClass('selected').siblings().removeClass('selected')
  console.log(e.currentTarget);
  
  const index = $li.index();
  console.log(index);
  $tabContent
    .children()
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
});
$tapBar.children().eq(0).trigger('click')
