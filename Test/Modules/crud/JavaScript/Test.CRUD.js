define('Test.CRUD', [
    'Test.CRUD.View', 'Test.CRUD.Edit.View'
], function (testCrudView, TestCRUDEditView) {
    'use strict';

    return {
        mountToApp: function (container) {
            var PageType = container.getComponent('PageType');

            PageType.registerPageType({
                name: 'TestPageType',
                routes: ['test'],
                view: testCrudView,
                defaultTemplate: {
                    name: 'test_CRUD.tpl',
                    displayName: 'CRUD Default Template'
                }
            });

            PageType.registerPageType({
                name: 'TestPageTypeTwo',
                routes: ['test/add', 'test:id'],
                view: TestCRUDEditView,
                defaultTemplate: {
                    name: 'test_CRUD_Edit.tpl',
                    displayName: 'Tech Team Edit'
                }
            });
        }
    }
});