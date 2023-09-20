<header class="test-CRUD-list-header">
    <h2 class="test-CRUD-list-title">{{translate 'Tech Team Members'}}</h2>
    <a href="test/add" class="test-CRUD-list-button-new">{{translate 'Add New'}}</a>
</header>

<div class="test-CRUD-list-table">
    <table>
        <thead>
            <tr>
                <th>{{translate 'Internal ID'}}</th>
                <th>{{translate 'Name'}}</th>
                <th>{{translate 'Role'}}</th>
                <th>{{translate 'Phone'}}</th>
                <th>{{translate 'Stack'}}</th>
                <th>{{translate 'Age'}}</th>
                <th>{{translate 'Gender'}}</th>
            </tr>
        </thead>
        <tbody data-view="Test.CRUD.Collection.View"></tbody>
    </table>
</div>