/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IndividualSportQueryVariables = {
    id: string;
};
export type IndividualSportQueryResponse = {
    readonly sportByID: {
        readonly " $fragmentRefs": FragmentRefs<"SportFragmentRefetchable">;
    } | null;
};
export type IndividualSportQuery = {
    readonly response: IndividualSportQueryResponse;
    readonly variables: IndividualSportQueryVariables;
};



/*
query IndividualSportQuery(
  $id: String!
) {
  sportByID(id: $id) {
    ...SportFragmentRefetchable
  }
}

fragment SportFragmentRefetchable on Sport {
  id
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
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
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sport",
        "kind": "LinkedField",
        "name": "sportByID",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SportFragmentRefetchable"
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
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    "cacheID": "540846f1e091c997772663f2631aa7b1",
    "id": null,
    "metadata": {},
    "name": "IndividualSportQuery",
    "operationKind": "query",
    "text": "query IndividualSportQuery(\n  $id: String!\n) {\n  sportByID(id: $id) {\n    ...SportFragmentRefetchable\n  }\n}\n\nfragment SportFragmentRefetchable on Sport {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = '7748120eb8e564c0a1918a47ca594f00';
export default node;
