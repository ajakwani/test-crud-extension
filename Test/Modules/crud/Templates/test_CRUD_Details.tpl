<tr>
    <td>{{model.internalid}}</td>
    <td>{{model.memberName}}</td>
    <td>{{model.memberRole}}</td>
    <td>{{model.phone}}</td>
    <td>{{model.stack}}</td>
    <td>{{model.age}}</td>
    <td>{{model.gender}}</td>
    <td>
        <a href="/test/{{model.internalid}}" class="test-CRUD-table-edit-link">{{translate 'Edit'}}</a>
        <button class="test-CRUD-table-delete-button" data-action="delete" data-id="{{model.internalid}}">{{translate 'Delete'}}</button>
    </td>
</tr>