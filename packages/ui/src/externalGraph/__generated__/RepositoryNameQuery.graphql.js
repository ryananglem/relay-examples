/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RepositoryNameQueryVariables = {||};
export type RepositoryNameQueryResponse = {|
  +repository: ?{|
    +name: string,
    +owner: {|
      +url: any
    |},
  |}
|};
export type RepositoryNameQuery = {|
  variables: RepositoryNameQueryVariables,
  response: RepositoryNameQueryResponse,
|};
*/


/*
query RepositoryNameQuery {
  repository(owner: "gutro", name: "leo-sports-client") {
    name
    owner {
      __typename
      url
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "leo-sports-client"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "gutro"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"leo-sports-client\",owner:\"gutro\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "repository(name:\"leo-sports-client\",owner:\"gutro\")"
      }
    ]
  },
  "params": {
    "cacheID": "72d0ef2393d6dfd7590e1974dee4bcd6",
    "id": null,
    "metadata": {},
    "name": "RepositoryNameQuery",
    "operationKind": "query",
    "text": "query RepositoryNameQuery {\n  repository(owner: \"gutro\", name: \"leo-sports-client\") {\n    name\n    owner {\n      __typename\n      url\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c991141a0c46937ed29aab85b2c22c0e';

module.exports = node;
