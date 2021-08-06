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
        readonly " $fragmentRefs": FragmentRefs<"SportFragment_sport">;
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
    ...SportFragment_sport
  }
}

fragment SportFragment_sport on Sport {
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
    "cacheID": "3feb8b7a36cd6a159094b69017530d18",
    "id": null,
    "metadata": {},
    "name": "IndividualSportQuery",
    "operationKind": "query",
    "text": "query IndividualSportQuery(\n  $id: String!\n) {\n  sportByID(id: $id) {\n    ...SportFragment_sport\n  }\n}\n\nfragment SportFragment_sport on Sport {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = '42544f570c2286a0e69b0282dd984c72';
export default node;
