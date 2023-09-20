define('Test.CRUD.Edit.View',[
    'PageType.Base.View',
    'Test.CRUD.Form.View',
    'Test.CRUD.Model',
    'test_CRUD_Edit.tpl',
    'jQuery'
], function(PageTypeBaseView, TestCRUDFormView, TestCRUDModel, TestCRUDEditTemplate, jQuery) {
    'use strict';

    return PageTypeBaseView.PageTypeBaseView.extend({
        template: TestCRUDEditTemplate,

        initialize: function initialize () {
            this.model = new TestCRUDModel();
        },

        beforeShowContent: function beforeShowContent() {
            this.childViews = {
                'Test.CRUD.Form.View': function () {
                    return new TestCRUDFormView({
                        model: this.model
                    })
                }
            }

            if(!!Number(this.options.routerArguments[0])) {
                return this.model.fetch({
                    data: {internalid: this.options.routerArguments[0]}
                })
            }
            else{
                return jQuery.Deferred().resolve()
            }
        }
    })

});