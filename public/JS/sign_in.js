"use strict";
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
    var login=document.getElementById("login");
    var uname=document.getElementsByName("uname")[0];
    var upwd=document.getElementsByName("upwd")[0];
    var v_code=document.getElementsByName("v_code")[0];
    login.onclick=function(){
        $.ajax({
            url:"http://127.0.0.1:8080/login/login",
            type:"get",
            data:{
                uname:uname.value,
                upwd:upwd.value,
                v_code:v_code.value,
            },
            datatype:"json",
            success:function(res){
                if(res.code==1){
                    location.href="http://127.0.0.1:5500/index.html";
                }else{
                    alert(res.msg);
                }
            }
        })
    }
})