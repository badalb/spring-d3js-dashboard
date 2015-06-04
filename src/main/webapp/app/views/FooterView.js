define(["text!templates/footer.html", "backbone"], function(footerPage, Backbone) {

    var FooterView = Backbone.View.extend({
        initialize: function() {

        },
        el: "#footercontainter",
        render: function(msg) {
            this.template = _.template(footerPage);
            this.$el.html("");
            this.$el.html(this.template());
            return this;
        }
    });
    return FooterView;
});