define('Test.CRUD.Form.View', [
    'Backbone',
    'SCFormView',
    'Utils',
    'test_CRUD_Form.tpl'
], function (
    Backbone,
    SCFormViewModule,
    Utils,
    TestCRUDFormTemplate
) {
    'use strict';

    var SCFormView = SCFormViewModule.SCFormView;

    function TestCRUDFormView (options) {
        SCFormView.call(this, options.model);

        this.formModel.on('sync', function () {
            Backbone.history.navigate('test', {trigger: true});
        });

        this.template = TestCRUDFormTemplate;
    }

    TestCRUDFormView.prototype = Object.create(SCFormView.prototype);
    TestCRUDFormView.prototype.constructor = TestCRUDFormView;

    TestCRUDFormView.prototype.getEvents = function () {
        return {
            'submit form': 'saveForm'
        }
    }

    TestCRUDFormView.prototype.saveForm = function (e) {
        e.preventDefault();

        var promise = SCFormView.prototype.saveForm.call(this, e);

        return promise
    }

    TestCRUDFormView.prototype.getFormValues = function (form) {
        var formValues = form.serializeObject();

        return {
            memberName: formValues.memberName,
            memberRole: formValues.memberRole,
            phone: formValues.phone,
            stack: formValues.stack,
            age: formValues.age,
            gender: formValues.gender
        }
    }

    TestCRUDFormView.prototype.getContext = function () {
        return {
            model: this.formModel,
        }
    }

    return TestCRUDFormView
})