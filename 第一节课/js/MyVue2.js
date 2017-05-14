function Vue(options){
    var context = document.querySelector(options.el);
    var data = options.data;
    var html = context.innerHTML;
    var regex = /(\{\{\s*([\w]+)\s*\}\})/g;
    while(regex.exec(html)){
        html = html.replace(new RegExp(RegExp.$1,"g"),data[RegExp.$2])
    }
    regex = /(v\-bind:([\w]+)=\"([\w]+)\")/g;
    while(regex.exec(html)){
        html = html.replace(RegExp.$1,RegExp.$2+"='"+data[RegExp.$3]+"'")
        regex = /(v\-bind:([\w\-]+)=\"([\w]+)\")/g;
        // console.log(html);
    }
    // console.log(html);
    // console.log(regex.exec(html));
    // console.log(RegExp.$1);
    // console.log(RegExp.$2);
    // console.log(RegExp.$3);

    context.innerHTML = html;
}