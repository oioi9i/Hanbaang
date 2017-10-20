/**
 * ajax 예제 
 */

//요청값:객체, 리턴값 : boolean 
function login(){
  $("#login").on("submit",function(){//"확인"버튼을 눌렀을 때...
  var d=$(this).serialize();//폼 요소에 전송할 데이터를 재가공합니다.
  $.ajax({
   url:"./server/login.jsp", //URL
   type:"post", //데이터 전송 방식
   data:d,
   success:function(result){
	  if(1==result){
		  alert("관리자");
		  location.href="./index_doc.html";
		  return true;
	  }else if(2==result){
		  alert("스태프");
		  location.href="./index_staff.html";
		  return true;
	  }
   }
});
 location.href="#";
 return false;//action 페이지로 전환되는 것을 차단합니다.
});
}

//요청값 : 개별값 , 리턴값 : 객체 (JSON) 
function select_recep(){
	var s_date = document.getElementById('s_date').value;
	var d_date = document.getElementById('d_date').value;
	alert("날짜 값을 기반으로 검색 수행"+s_date+"~"+d_date);
    $.ajax({
      url:"/Hanbang/server/select_recep.jsp?s_date="+s_date+"&d_date="+d_date,
      type:"get",
      dataType:"json",
      success:function(result){
//      	if($(result.rank.length>0)){
//
//         $.each(result.results,function(i,d){ 
//        	 
//		   $("tbody").append("<tr><td><a href='comUpdateView.php?companyCode="+d['companyCode']+"&companyName="+d['companyName']+"&managerName="+d['managerName']+"&companyTel="+d['companyTel']+"&companyEmail="+d['companyEmail']+"&companyPost="+d['companyPost']+"&companyAddre="+d['companyAddre']+"'>"+d["companyCode"]+"</a></td><td>"+d["companyName"]+"</td><td>"+d["managerName"]+"</td><td>"+d["companyTel"]+"</td><td>"+d["companyEmail"]+
//		   "</td><td>"+d["companyPost"]+"</td><td>"+d["companyAddre"]+"</td></tr>");
//         });
//      	}
      },
      error : function( jqXHR, textStatus, errorThrown ) {
    	  alert( textStatus );
    	  alert( errorThrown );
    	  }
   }); 
//	location.href="/Hanbang/server/select_recep.jsp?s_date="+s_date+"&d_date="+d_date
//	return true;
}