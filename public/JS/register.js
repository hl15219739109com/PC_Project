function random(){
  var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
  var brr=[];
  for(var i=0;i<4;i++){
      var count=Math.floor(Math.random()*arr.length);
      brr[i]=arr[count];
  }
  random_number.innerHTML=brr.join("");
  return brr;
}
$(function(){
  // "use strict";
  var uname=document.getElementsByName("uname")[0];
  var input=document.querySelectorAll(".usermessages>[data-sure]");
  function success(reg,successText,failText){
    var inputs=this;
    var span=inputs.nextElementSibling;
    if(reg.test(inputs.value)){
      span.innerHTML=successText;
      span.className="success";
    }else{
      span.innerHTML=failText;
      span.className="fail";
      return;
    }
  }
  for(var i=0;i<input.length;i++){
    input[0].onblur=function(){
      var input=this;
      var reg=/^\d{11}$/g;
      var successText="验证通过";
      var failText="注册号为11位的手机号码";
      success.call(this,reg,successText,failText);
      $.ajax({
        url:"http://127.0.0.1:8080/register/isreg",
        type:"get",
        data:{uname:uname.value},
        datatype:"json",
        success:function(res){
          if(res.code==1){
            // alert(res.msg);
            var span=input.nextElementSibling;
            span.innerHTML=res.msg;
            return;
          }
        }
      })
    }
    input[1].onblur=function(){
      var input=this;
      var reg=/^\w{6,8}$/;
      var successText="输入的密码符合要求";
      var failText="请设置密码为6到8位的数字或字母";
      success.call(this,reg,successText,failText);
    }
    input[2].onblur=function(){
      var input=this;
      var surePwd=input.previousElementSibling.previousElementSibling.value;
      var span=input.nextElementSibling;
      if(input.value==surePwd&&(input.value!=""||surePwd!="")){
        span.innerHTML="两次输入的密码一致";
        span.className="success";
      }else if(input.value==""||sureupwd==""){
        span.innerHTML="两次密码都不能为空";
        span.className="fail";  
      }else{
        span.innerHTML="两次密码不一致，请重新输入";
        span.className="fail";  
      }
    }
    input[3].onblur=function(){
      var input=this;
      var span=input.nextElementSibling;
      var sureM=document.getElementById("random_number");
      if(input.value.toLowerCase()==sureM.innerHTML.toLowerCase()){
        span.innerHTML="验证码正确";
        span.className="success";
      }else{
        span.innerHTML="请输入验证码(不区分大小写)或验证码输入不正确";
        span.className="fail";
      }
    }
  }

  var upwd=document.getElementsByName("upwd")[0];
  var reg=document.getElementsByClassName("login")[0];
  var sureupwd=document.getElementsByName("sureupwd")[0];
  var v_code=document.getElementsByName("v_code")[0];
  var Isagree=document.getElementsByName("agree")[0];
  reg.onclick=function(){
    if(Isagree.checked){
      if(uname.value==""){
        alert("注册手机号为空");
        return;
      }
      if(upwd.value==""){
        alert("设置密码为空");
        return;
      }
      if(sureupwd.value==""){
        alert("确认密码为空");
        return;
      }
      if(v_code.value==""){
        alert("验证码为空");
        return;
      }
      $.ajax({
        url:"http://127.0.0.1:8080/register/reg",
        type:"post",
        data:{
              uname:uname.value,
              upwd:upwd.value,
            },
        datatype:"json",
        success:function(result){
          if(result.code==1){
            alert("注册成功");
            location.href="http://127.0.0.1:5500/index.html";
          }else{
            alert(result.msg);
          }      
        }
      });
    }else{
      alert("请同意会员注册协议，再进行注册");
    }
    
  }

});