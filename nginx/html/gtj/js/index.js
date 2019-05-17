var commom = { // 封装一些公共函数
  getUrlParam: function (name) { // 获取url地址参数
    var regUrl = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(regUrl);  //匹配目标参数
    if (r!=null){
     return unescape(r[2]);
    }
    return null; //返回参数值
  }
}