/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SportHighlightQueryVariables = {
    id: string;
};
export type SportHighlightQueryResponse = {
    readonly hello: string;
    readonly sportByID: {
        readonly " $fragmentRefs": FragmentRefs<"SportRefetchableFragment_sport">;
    } | null;
};
export type SportHighlightQuery = {
    readonly response: SportHighlightQueryResponse;
    readonly variables: SportHighlightQueryVariables;
};



/*
query SportHighlightQuery(
  $id: String!
) {
  hello
  sportByID(id: $id) {
    ...SportRefetchableFragment_sport
    id
  }
}

fragment SportRefetchableFragment_sport on Sport {
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
    "name": "SportHighlightQuery",
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
            "name": "SportRefetchableFragment_sport"
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
    "name": "SportHighlightQuery",
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
    "cacheID": "129ba5371f6c044c195abbe356c695d2",
    "id": null,
    "metadata": {},
    "name": "SportHighlightQuery",
    "operationKind": "query",
    "text": "query SportHighlightQuery(\n  $id: String!\n) {\n  hello\n  sportByID(id: $id) {\n    ...SportRefetchableFragment_sport\n    id\n  }\n}\n\nfragment SportRefetchableFragment_sport on Sport {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = '56a5cb0d2a06788e4c452f058383c203';
export default node;
