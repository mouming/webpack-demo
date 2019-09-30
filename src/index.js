import Vue from "vue/dist/vue.esm.js";
import App from "./App.vue"; // 引入的内容是组件的选项对象

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

      <App></App>
    </div>
  `,

  components: {
    App
  }

  // render: h => {
  //   return h("div", null, "hello world");
  // }
});
