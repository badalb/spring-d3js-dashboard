$(document).ready(function(){
    
	$.ajax({
        url: '/myviews',
        contentType: 'application/json',
        dataType:'json',
        type: 'GET',
        async: false,
        success: function(res){
        	//alert(res);	
        	for(var i =0; i< res.length; i++){
        		
        		var view = res[i]; 
        		var htmlAttr ='';
        		var id;
        		var cssStyle;
        		
        		for(attr in view){
        			
        			if(attr==='uniqueReportCode'){
        				id=view.uniqueReportCode;
        			}
        			
        			if(attr==='styles'){
        				for(viewAttr in view[attr]){
        					var attrName;
        					var attrValue;
        					if(view[attr][viewAttr].attrName){
        						attrName = view[attr][viewAttr].attrName;
                			}
                			
                			if(view[attr][viewAttr].attrValue){
                				attrValue = view[attr][viewAttr].attrValue;
                			}
                		}
        				htmlAttr =htmlAttr +" " + attrName + "=" + '"'+attrValue +'"';
        				cssStyle = attrValue;
        			}
        			if(htmlAttr!=""){
        				console.log(htmlAttr);
        			}
        			
        			// alert(htmlAttr);
        		}
        		
        		//create div
        		jQuery('<div/>', {
        		    id: id,
        		    style:cssStyle
        		}).appendTo('#section');
        	}
        	
        },
        error: function(res){
        	alert(res);
        }
    });
	
	
	
});