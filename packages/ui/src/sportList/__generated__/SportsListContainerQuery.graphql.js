/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportFragment_sport$ref = any;
export type SportsListContainerQueryVariables = {||};
export type SportsListContainerQueryResponse = {|
  +hello: string,
  +sport: $ReadOnlyArray<{|
    +$fragmentRefs: SportFragment_sport$ref
  |}>,
|};
export type SportsListContainerQuery = {|
  variables: SportsListContainerQueryVariables,
  response: SportsListContainerQueryResponse,
|};
*/


/*
query SportsListContainerQuery {
  hello
  sport {
    ...SportFragment_sport
  }
}

fragment SportFragment_sport on Sport {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hello",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SportsListContainerQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Sport",
        "kind": "LinkedField",
        "name": "sport",
        "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SportsListContainerQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Sport",
        "kind": "LinkedField",
        "name": "sport",
        "plural": true,
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
    "cacheID": "2f5f54e49e1721a3ffd19d92a43a5347",
    "id": null,
    "metadata": {},
    "name": "SportsListContainerQuery",
    "operationKind": "query",
    "text": "query SportsListContainerQuery {\n  hello\n  sport {\n    ...SportFragment_sport\n  }\n}\n\nfragment SportFragment_sport on Sport {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db2c1479b35e7a29c78f94baa9d91df1';

module.exports = node;
