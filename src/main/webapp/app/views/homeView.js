define(["text!templates/home.html", "backbone","app"],
		function(helloPage, Backbone,app){
	 var HomeView = Backbone.View.extend( {
		 initialize: function(){
		 },
		 el:"#maincontainer",
		 events          : {
	      
	         
	     },
	     render : function () {
	    	
	    	 
	    	 this.template = _.template( helloPage );
	     	 this.$el.html("");
	     	 this.$el.html(this.template());
	     	 

	     	 return this;
	     }
	 });
	 return HomeView;
});