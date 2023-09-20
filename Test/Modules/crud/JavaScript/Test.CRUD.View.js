define('Test.CRUD.View', [
    'PageType.Base.View',
    'Test.CRUD.Collection',
    'Test.CRUD.Collection.View',
    'test_CRUD.tpl'
], function (
    PageTypeBaseView,
    TestCRUDCollection,
    TestCRUDCollectionView,
    TestCRUDTemplate
) {
    'use strict';

    return PageTypeBaseView.PageTypeBaseView.extend({
        template: TestCRUDTemplate,

        initialize: function initialize(){
            this.collection = new TestCRUDCollection()
        },

        beforeShowContent: function beforeShowContent () {
            this.childViews = {
                'Test.CRUD.Collection.View': function () {
                    return new TestCRUDCollectionView({
                        collection: this.collection
                    })
                }
            }

            return this.collection.fetch()
        }
    })
});

        // getContext: function getContext(){
        //     return {
        //         memberName: this.model.get('memberName'),
        //         memberRole: this.model.get('memberRole'),
        //         phone: this.model.get('phone'),
        //         stack: this.model.get('stack'),
        //         age: this.model.get('age'),
        //         gender: this.model.get('gender')
        //     }
        // }