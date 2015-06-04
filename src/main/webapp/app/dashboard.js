$(document).ready(function(){
    
	$.ajax({
        url: '/dashboardattr',
        contentType: 'application/json',
        dataType:'json',
        type: 'GET',
        async: false,
        success: function(res){
        	//alert(res.dashboardName);
        	document.title = res.dashboardName;
        	$("#header h1").text(res.dashboardName);
        },
        error: function(res){
        	alert(res);
        }
    });
	
	//alert("hii");
});