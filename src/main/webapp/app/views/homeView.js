define([
    "backbone",
    "app",
    "text!templates/home.html",
    "models/DashboardModel",
    "custom-lib/d3/barchart",
    "custom-lib/d3/piechart",
    "d3"
], function(Backbone, app, helloPage, dashboardModel, barchart, piechart) {

    var HomeView = Backbone.View.extend({
        initialize: function() {
            app.dashboardModel = app.dashboardModel || new dashboardModel();
            _.bindAll(this);
        },
        el: "#maincontainer",
        template : _.template(helloPage),
        events: {
            'click #test_btn' : 'getChartData'
        },
        render: function() {
            var self= this;
            app.dashboardModel.getTemplateInfo({
                success: function(mod, res) {
                    app.dashboardModel.set('view_obj', res);
                    self.generateHtml();
                },
                error: function() {
                    console.log('Error..getTemplateInfo');
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
            self.getChartData();
            return self;
        },
        getChartData: function() {
            var self = this;
            var view_obj = app.dashboardModel.get('view_obj');
var uniqueReportCode;
            _.each(view_obj, function(view_item) {
             uniqueReportCode = view_item.uniqueReportCode;
                app.dashboardModel.getChartData({
                    success: function(mod, res) {
                        app.dashboardModel.uniqueReportCode =  res;
                        self.drawCharts(view_item,res);
                    },
                    error: function() {
                        console.log('Error..getChartData');
                    }
                }, {uniqueReportCode: view_item.uniqueReportCode});
            });

        },
        drawCharts: function(view_item, chartData) {
            var graph_type = view_item.viewType;
            switch (graph_type) {
                case 'BAR':
                          barchart.drawBar(chartData);
                    break;
                    
                case 'PIE':
                         piechart.drawPie(chartData);
                    break;
            }
        },
        temp : function(){
            
        }
       
    });
    return HomeView;
});