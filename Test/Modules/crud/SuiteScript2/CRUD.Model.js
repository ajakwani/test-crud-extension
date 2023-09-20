/**
 * @NApiVersion 2.x
 * @NModuleScope TargetAccount
 */

define(['N/record',  'N/search'], function (record, search) {
    "use strict";
  
    var MainModel = {
      get: function(request){

        var filters = []

        if(request.parameters.internalid){
          filters.push({
            name: 'internalid',
            operator: search.Operator.IS,
            values: request.parameters.internalid
          })
        }

        var mySearch = search.create({
            type: 'customrecord4',
            columns: ['internalid', 'custrecord1', 'custrecord2', 'custrecord3', 'custrecord4', 'custrecord5', 'custrecord6'],
            filters: filters
        })
        var searchResult = mySearch.run().getRange({start: 0, end: 1000})

        var mappedResults = searchResult.map(function(result) {
          return {
            internalid: result.getValue('internalid'),
            memberName: result.getValue('custrecord1'),
            memberRole: result.getValue('custrecord2'),
            phone: result.getValue('custrecord3'),
            stack: result.getValue('custrecord4'),
            age: result.getValue('custrecord5'),
            gender: result.getValue('custrecord6')
          }
        });
        return mappedResults.length == 1 ? mappedResults[0] : mappedResults
      },

      post: function(request){
        var body = JSON.parse(request.body);

        var newTechTeamMember = record.create({
          type: 'customrecord4'
        });

        newTechTeamMember.setValue({
          fieldId: 'custrecord1',
          value: body.memberName
        });

        newTechTeamMember.setValue({
          fieldId: 'custrecord2',
          value: body.memberRole
        });
        
        newTechTeamMember.setValue({
          fieldId: 'custrecord3',
          value: body.phone
        });

        newTechTeamMember.setValue({
          fieldId: 'custrecord4',
          value: body.stack
        });

        newTechTeamMember.setValue({
          fieldId: 'custrecord5',
          value: body.age
        });

        newTechTeamMember.setValue({
          fieldId: 'custrecord6',
          value: body.gender
        })

        return newTechTeamMember.save()
      }
    }
  
    return MainModel
  });  