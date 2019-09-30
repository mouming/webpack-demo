// 我们自己写的公共js方法文件

/**
 * 解析 URL 地址的参数
 * @param {String} url url地址
 */
const getQuery = url => {
  let url2 = url || window.location.href;
  let result = {};
  let str = url.split("?")[1];
  let arr = str.split("&");
  arr.forEach(item => {
    let key = item.split("=")[0];
    let value = item.split("=")[1];
    result[key] = value;
  });
  return result;
};

// module.exports = {}

// 默认暴露
export default {
  getQuery
};
