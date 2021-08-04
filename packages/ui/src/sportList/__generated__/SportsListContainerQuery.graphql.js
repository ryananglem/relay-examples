/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportList_sport$ref = any;
export type SportsListContainerQueryVariables = {||};
export type SportsListContainerQueryResponse = {|
  +hello: string,
  +sport: $ReadOnlyArray<{|
    +$fragmentRefs: SportList_sport$ref
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
    ...SportList_sport
  }
}

fragment SportList_sport on Sport {
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
            "name": "SportList_sport"
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
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6f4a219bb85abdbd7257561cea62a488",
    "id": null,
    "metadata": {},
    "name": "SportsListContainerQuery",
    "operationKind": "query",
    "text": "query SportsListContainerQuery {\n  hello\n  sport {\n    ...SportList_sport\n  }\n}\n\nfragment SportList_sport on Sport {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3dbb962a51abb5a0a7390c653f12a8e8';

module.exports = node;
