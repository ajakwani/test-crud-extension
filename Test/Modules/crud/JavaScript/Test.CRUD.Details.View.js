define('Test.CRUD.Details.View' ,[
    'SCView',
    'test_CRUD_Details.tpl'
], function (
    SCViewModule,
    TestCRUDDetailsTemplate
) {
    'use strict';

    var SCView = SCViewModule.SCView;

    function TestCRUDDetailsView(options) {
        SCView.call(this, options);

        this.model = options.model;

        this.template = TestCRUDDetailsTemplate;
    }

    TestCRUDDetailsView.prototype = Object.create(SCView.prototype);
    TestCRUDDetailsView.prototype.constructor = TestCRUDDetailsView

    TestCRUDDetailsView.prototype.getContext = function () {
        return {
            model: this.model
        }
    }

    return TestCRUDDetailsView
})