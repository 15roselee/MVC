console.log("3");
import $ from "jquery"
import "./app3.css"
const $square=$('#app3 .square')
$square.on("click",()=>{
    $square.toggleClass('active')
})  