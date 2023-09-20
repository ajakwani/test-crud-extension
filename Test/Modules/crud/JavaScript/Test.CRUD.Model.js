define('Test.CRUD.Model', [
    'SCModel',
    'Utils'
], function (
    SCModelModule,
    Utils
) {
    var SCModel = SCModelModule.SCModel;

    function TestCRUDModel(model, options){
        SCModel.call(this, model, options);

        this.urlRoot = function urlRoot () {
            return Utils.getAbsoluteUrl(getExtensionAssetsPath("Modules/crud/SuiteScript2/CRUD.Service.ss"), true)
        }
    }

    TestCRUDModel.prototype = Object.create(SCModel.prototype);
    TestCRUDModel.prototype.constructor = TestCRUDModel;

    return TestCRUDModel
})