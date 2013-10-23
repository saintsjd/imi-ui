$(function(){
    'use strict';

    var Product = Backbone.Model.extend({});
    var Territory = Backbone.Model.extend({});

    var Products = Backbone.Collection.extend({
      model: Product
    });
    var Territories = Backbone.Collection.extend({
      model: Territory
    });

    var products = new Products([
        { id:'1',name:'Abrasives', selected: false },
        { id:'2',name:'Brushes', selected: false },
        { id:'3',name:'Cutting Tools', selected: false },
        { id:'4',name:'Safety', selected: false }
    ]);

    var ProductCheckBox = Backbone.View.extend({
        tagName: 'div',
        className: 'checkbox',

        events: {
        'change input': 'select',
        },

        initialize: function() {
            this.render();
            this.listenTo(this.model, "change selected", this.render );
            $("#product-selector").append(this.$el);
        },

        render: function() {
            var checked = '';
            if( this.model.get('selected') ) {
                checked = ' checked ';
            }
            this.$el.html(
                '<label><input type="checkbox" value="' + this.model.get('id') + '"' + checked +'>' + this.model.get('name') + '</label>'
                );
        },

        select: function() {
            var checkBox = this.$el.find('input')[0];
            this.model.set({selected:$(checkBox).is(':checked')});
        }

    });

    var ProductLabel = Backbone.View.extend({
        tagName: 'h4',

        events: {
        'click span.glyphicon-remove': 'remove',
        },

        initialize: function() {
            this.listenTo(this.model, "change selected", this.render );
            this.$el.html(
                '<span class="label label-primary">' + this.model.get('name') + ' &nbsp;&nbsp;<span class="glyphicon glyphicon-remove"></span></span>'
                );
            $("#products-selected-labels").append(this.$el);
            this.render();
        },

        render: function() {
            //console.log(this.model.get('selected'));
            if( this.model.get('selected') ) {
                this.$el.fadeIn('slow');
            }else{
                console.log(this.$el);
                this.$el.fadeOut('slow');
            }
        },

        remove: function() {
            this.model.set({selected:false});
            this.$el.fadeOut("slow");
        }

    });


    products.forEach(function(m){
        new ProductCheckBox({model:m});
        new ProductLabel({model:m});
    });


    var ProductsSelectedDescription = Backbone.View.extend({
        initialize: function() {
            this.listenTo(this.collection, "change", this.render );
            this.render();
        },
        render: function() {
            var active = this.collection.where({selected: true});
            if( active.length == 0 ){
                this.$el.html("None Selected");
                $("#no-products-selected").fadeIn("slow");
            }else{
                var toPrint = [];
                _.forEach(active, function(i){
                    toPrint.push(i.get('name'));
                });
                this.$el.html(toPrint.join(', '));
                $("#no-products-selected").hide();
            }
        },
    });
    var productsSelectedDescription = new ProductsSelectedDescription({
        el: $("#products-selected-description"),
        collection: products
    });




    

    $('#support-link,#support-bar .close').click(function(){
        $('#support-bar').slideToggle();
    });

    $('.filter-btn').click(function(){

        var whichBtn = $(this).attr('id').split('-')[0];
        var alreadyActive = $(this).hasClass('active');

        $('.filter-btn').removeClass('active');
        $('.filter').slideUp(function(){
            console.log('up');
        });

        if( !alreadyActive ) {
            $('#'+whichBtn+'-filter').slideToggle();
            $(this).toggleClass('active');
        }

        return false;
    });

    $('.update-btn').click(function(){

        $('.filter-btn').removeClass('active');
        $('.filter').slideUp();
        return false;
    });


    $('.form-signin').submit(function(){
        window.location = 'myreports.html';
        return false;
    });


    $('#showme-product').click(function(){
        $('#product-filter-btn').fadeTo( 'slow', 0.10,function(){
            $('#product-filter-btn').fadeTo( 'slow', 1.0 );
        });
    });
    $('#showme-territory').click(function(){
        $('#territory-filter-btn').fadeTo( 'slow', 0.10,function(){
            $('#territory-filter-btn').fadeTo( 'slow', 1.0 );
        });
    });
    $('#showme-optional').click(function(){
        $('#optional-filter-btn').fadeTo( 'slow', 0.10,function(){
            $('#optional-filter-btn').fadeTo( 'slow', 1.0 );
        });
    });

    return '\'Allo \'Allo!';
});