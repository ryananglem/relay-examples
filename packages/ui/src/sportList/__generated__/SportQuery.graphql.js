/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportFragment_sport$ref = any;
export type SportQueryVariables = {||};
export type SportQueryResponse = {|
  +hello: string,
  +sport: $ReadOnlyArray<{|
    +$fragmentRefs: SportFragment_sport$ref
  |}>,
|};
export type SportQuery = {|
  variables: SportQueryVariables,
  response: SportQueryResponse,
|};
*/


/*
query SportQuery {
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
    "name": "SportQuery",
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
    "name": "SportQuery",
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
    "cacheID": "f0eb0f02f0fec2ad6ef01d08123ad33b",
    "id": null,
    "metadata": {},
    "name": "SportQuery",
    "operationKind": "query",
    "text": "query SportQuery {\n  hello\n  sport {\n    ...SportFragment_sport\n  }\n}\n\nfragment SportFragment_sport on Sport {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecc9dba3a97b5c9e6e6b714632b04c8e';

module.exports = node;
