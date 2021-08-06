/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportListFragment_sport$ref = any;
export type SportQueryVariables = {||};
export type SportQueryResponse = {|
  +hello: string,
  +sport: $ReadOnlyArray<{|
    +$fragmentRefs: SportListFragment_sport$ref
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
    ...SportListFragment_sport
  }
}

fragment SportListFragment_sport on Sport {
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
            "name": "SportListFragment_sport"
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
    "cacheID": "455e116865098a8710744ea46e9d2521",
    "id": null,
    "metadata": {},
    "name": "SportQuery",
    "operationKind": "query",
    "text": "query SportQuery {\n  hello\n  sport {\n    ...SportListFragment_sport\n  }\n}\n\nfragment SportListFragment_sport on Sport {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0323461358ba381a07083b45d1073e89';

module.exports = node;
