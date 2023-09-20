define('Test.CRUD.Collection.View',[
    'SCCollectionView',
    'Test.CRUD.Details.View',
    'test_CRUD_collection.tpl',
    'jQuery'
], function (
    SCCollectionViewModule,
    TestCRUDDetailsView,
    TestCRUDCollectionTemplate,
    jQuery
) {
    'use strict';

    var SCCollectionView = SCCollectionViewModule.SCCollectionView;

    function TestCRUDCollectionView(options) {
        SCCollectionView.call(this, options.collection);

        this.collection = options.collection;

        this.template = TestCRUDCollectionTemplate
    }

    TestCRUDCollectionView.prototype = Object.create(SCCollectionView.prototype);
    TestCRUDCollectionView.prototype.constructor = TestCRUDCollectionView;

    TestCRUDCollectionView.prototype.getCellViewsPerRow = function() {
        return 1
    }

    TestCRUDCollectionView.prototype.getCellViewInstance = function (model) {
        return new TestCRUDDetailsView({
            model: model
        })
    }

    TestCRUDCollectionView.prototype.getContext = function () {
        return {}
    }

    return TestCRUDCollectionView
})