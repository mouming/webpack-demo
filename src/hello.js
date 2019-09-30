// ES module
import $ from "jquery";
import utils from "./utils/index";
import "./styles/hello.css";
import "./styles/world.sass";
import "./styles/dashazi.less";

console.log(utils); // {getQuery: function() {}}

function component() {
  var element = $("<div></div>");
  element.html("Hello webpack");
  return element[0];
}

document.body.appendChild(component());

let url = "http://www.baidu.com?name=zhangsan&age=18";
console.log(utils.getQuery(url));
