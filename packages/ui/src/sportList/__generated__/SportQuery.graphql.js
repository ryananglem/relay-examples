/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SportQueryVariables = {||};
export type SportQueryResponse = {|
  +hello: string,
  +sport: $ReadOnlyArray<{|
    +name: string
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
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SportQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SportQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bf77c7c116f28198437ad715ed45584b",
    "id": null,
    "metadata": {},
    "name": "SportQuery",
    "operationKind": "query",
    "text": "query SportQuery {\n  hello\n  sport {\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0841a319a5463ae47692c1ecf4723cd1';

module.exports = node;
