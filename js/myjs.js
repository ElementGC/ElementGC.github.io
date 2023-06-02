position = window.location.pathname
//修改个人介绍页的页面背景
if( position == '/about/self-introduction/' ){
var p = document.getElementById("page")
p.setAttribute("style","background:  rgb(250, 250, 250)")
}
// 修改最底部的转载声明的背景色为白色
 var copyR = document.getElementsByClassName('post-copyright')
 //因为上面这个获得的是ELements，返回值是一个数组，所以得用[]来表示第一个元素
copyR[0].setAttribute("style","background:  rgb(250, 250, 250)")
