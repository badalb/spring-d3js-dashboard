define(["text!templates/navigation.html", "backbone", "app", "SecurityUtil"],
        function(navigationPage, Backbone, app, securityUtil) {

            var NavigationView = Backbone.View.extend({
                initialize: function() {

                },
                el: "#sideNavigation",
                template: _.template(navigationPage),
                events: {
                },
                render: function() {
                    this.$el.html(this.template({}));
                    return this;
                }
            });
            return NavigationView;
        });