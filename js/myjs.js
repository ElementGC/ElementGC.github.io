position = window.location.pathname
//修改个人介绍页的页面背景
if( position == '/about/self-introduction/' ){
var p = document.getElementById("page")
p.setAttribute("style","background:  rgb(250, 250, 250)")
}