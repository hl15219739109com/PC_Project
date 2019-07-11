window.onscroll=function(){
  var Topbar=document.documentElement.scrollTop;
  if(Topbar>=1050){
    bottom_top_hidden.style.cssText="position:fixed;top:0px;transition:top 0.3s linear;";
  }else{
    bottom_top_hidden.style.cssText="position:fixed;top:-60px;transition:top 0.3s linear;";
  }
}

window.onload=function(){
  var btn_number=document.getElementById("btn_number");
  var btn_clicks=btn_number.querySelectorAll("button>a");
  for(var btn_click of btn_clicks){
    btn_click.onclick=function(){
      var btn_click=this;
      if(btn_click.innerHTML=="+"){
        btn_number.children[1].value++;
      }else if(btn_click.innerHTML=="-" && btn_number.children[1].value>1){
        btn_number.children[1].value--;
      }
      var timer=setInterval(function(){
        var price=document.getElementsByClassName("price")[0].innerHTML.slice(0,-1);
        var sum_price=document.getElementsByClassName("sum_price")[0];
        var priceAll=price*btn_number.children[1].value;
        sum_price.innerHTML=priceAll.toFixed(2)+"元";
      },10);
    } 
  }
}