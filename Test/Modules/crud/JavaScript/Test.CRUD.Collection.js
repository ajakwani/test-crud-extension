define('Test.CRUD.Collection',[
    'SCCollection',
    'Test.CRUD.Model',
    'Utils'
], function (SCCollectionModule, TestCRUDModel, Utils) {
    'use strict';

    var SCCollection = SCCollectionModule.SCCollection;

    function TestCRUDCollection(models, options) {
        SCCollection.call(this, models, options);

        this.model = TestCRUDModel; //docs me new nahi hai
        this.url = function () {
            return Utils.getAbsoluteUrl(getExtensionAssetsPath("Modules/crud/SuiteScript2/CRUD.Service.ss"), true)
        }
    }

    TestCRUDCollection.prototype = Object.create(SCCollection.prototype);
    TestCRUDCollection.prototype.constructor = TestCRUDCollection;

    return TestCRUDCollection;
})