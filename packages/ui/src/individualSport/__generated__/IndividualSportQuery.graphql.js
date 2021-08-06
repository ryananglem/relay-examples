/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportFragment_sport$ref = any;
export type IndividualSportQueryVariables = {|
  id: string
|};
export type IndividualSportQueryResponse = {|
  +hello: string,
  +sportByID: ?{|
    +$fragmentRefs: SportFragment_sport$ref
  |},
|};
export type IndividualSportQuery = {|
  variables: IndividualSportQueryVariables,
  response: IndividualSportQueryResponse,
|};
*/


/*
query IndividualSportQuery(
  $id: String!
) {
  hello
  sportByID(id: $id) {
    ...SportFragment_sport
  }
}

fragment SportFragment_sport on Sport {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hello",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IndividualSportQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Sport",
        "kind": "LinkedField",
        "name": "sportByID",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SportFragment_sport"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IndividualSportQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Sport",
        "kind": "LinkedField",
        "name": "sportByID",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fc8532f3d263717ca256d74d5877f8ca",
    "id": null,
    "metadata": {},
    "name": "IndividualSportQuery",
    "operationKind": "query",
    "text": "query IndividualSportQuery(\n  $id: String!\n) {\n  hello\n  sportByID(id: $id) {\n    ...SportFragment_sport\n  }\n}\n\nfragment SportFragment_sport on Sport {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '25f5871a8c866a5e0421d5ba0aede561';

module.exports = node;
