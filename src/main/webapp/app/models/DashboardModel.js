define(["backbone", "app"], function(Backbone, app) {

    var DashboardModel = Backbone.Model.extend({
        initialize: function() {
            _.bindAll(this);
        },
        defaults: {
            view_obj: null
        },
        getRequest: function(opts, callback, args) {
            var self = this;
            if (typeof (args) != 'undefined') {
                var url = args.url;
                var async = args.async;
            }

            $.ajax({
                url: url,
                async: async,
                contentType: 'application/json',
                dataType: 'json',
                type: 'GET',
                success: function(res) {
//                    console.log(res);
                    if (!res.error) {
                        if (callback && 'success' in callback)
                            callback.success('', res);
                    } else {
                        if (callback && 'error' in callback)
                            callback.error('', res);
                    }
                },
                error: function(mod, res) {
                    if (callback && 'error' in callback)
                        callback.error(res);
                }
            }).complete(function() {
                if (callback && 'complete' in callback)
                    callback.complete();
            });
        },
        getTemplateInfo: function(callback) {
            var url = app.API + '/myviews';
            this.getRequest({}, callback, {url: url, async: false, reqType: 'GET'});
        },
       getChartData: function(callback, opts) {
            var url = app.API + '/chartdata/'+opts.uniqueReportCode;
            this.getRequest({}, callback, {url: url, async: true, reqType: 'GET'});
        },
    });

    return DashboardModel;

});