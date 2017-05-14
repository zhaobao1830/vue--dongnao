function Vue(options) {
    var context=document.querySelector(options.el); //通过id找到上下文
    var data = options.data;
    var html = context.innerHTML;
    var regex = /(\{\{\s*([\w]+)\s*\}\})/g;
    while (regex.exec(html)){
        console.log("ttt")
        html = html.replace(new RegExp(RegExp.$1,"g"),data[RegExp.$2])
    }

    context.innerHTML = html;
}