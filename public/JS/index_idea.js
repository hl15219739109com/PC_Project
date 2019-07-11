var btns=document.querySelectorAll(".banner_btn_bg>.banner_btn>ul>.btn1");
for(var btn of btns){
  btn.onmouseover=function(){
    var btn=this;
    var btns_details=btn.children[2];
    btns_details.style.cssText="height:280px;position:absolute;bottom:40px;transition:height .3s linear;";
  }
  btn.onmouseout=function(){
    var btn=this;
    var btns_details=btn.children[2];
    btns_details.style.cssText="height:0px;position:absolute;bottom:40px;transition:height .3s linear;";
  }
}

var user_a=document.querySelectorAll(".topbar_bg .topbar_nav .topbar_right>a")[1];
var user_hidden=document.querySelectorAll(".topbar_bg .topbar_nav .topbar_right .topbar_user_hidden")[0];
user_a.onmouseenter=function(){
  user_hidden.style.cssText="width:180px;height:200px;";
}
user_hidden.onmouseleave=function(){
  user_hidden.style.cssText="height:0px;transition:height .5s linear";
}