define([
    "backbone",
    "app",
    "text!templates/home.html",
    "models/DashboardModel"
], function(Backbone, app, helloPage, dashboardModel) {

    var HomeView = Backbone.View.extend({
        initialize: function() {
            app.dashboardModel = app.dashboardModel || new dashboardModel();
            _.bindAll(this);
        },
        el: "#maincontainer",
        template : _.template(helloPage),
        events: {
        },
        render: function() {
            var self= this;
            app.dashboardModel.getTemplateInfo({
                success: function(mod, res) {
                    app.dashboardModel.set('view_obj', res);
                    self.generateHtml();
                },
                error: function() {
                    console.log('Error..getTemplateInfo')
                }
            });

        },
        generateHtml : function(){
            var self =this;
           var  view_obj = app.dashboardModel.get('view_obj');
           var htm='', uniqueReportCode, styles;
           
           _.each(view_obj,function(view_item){
                uniqueReportCode = view_item.uniqueReportCode;
                styles = view_item.styles;
                
                htm += '<div class="chart_div" id="'+uniqueReportCode+'" ';
                   _.each(styles, function(view_attr){
                         htm += view_attr.attrName +'="'+view_attr.attrValue+'" ';
                   });
                htm +='></div>';
           });
            
            self.$el.html(self.template({username: app.sessionModel.get('username'),html_str:htm }));
            return self;
        }
    });
    return HomeView;
});