import Vue from "vue/dist/vue.esm.js";

new Vue({
  el: "#app",

  data: {
    msg: "hello"
  },

  template: `
    <div>
      <h1>Hello World</h1>
      <p>我的天，李威真帅</p>
      <p>我的天，李威真的好帅</p>
    </div>
  `

  // render: h => {
  //   return h("div", null, "hello world");
  // }
});
