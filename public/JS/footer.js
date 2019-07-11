// 控制页脚的a的空标签可以跳转到页面顶部
function parentGoTop(){
  parent.scrollTo(0,0);
  }
  
  function addClick(){
  var aList=document.getElementsByTagName("a");
  for(var i=0;i<aList.length;i++){
    aList[i].onclick=function(){parentGoTop();}
    }
  }
  window.onload=function(){addClick();}