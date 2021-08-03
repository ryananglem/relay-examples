/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SportQueryVariables = {||};
export type SportQueryResponse = {|
  +hello: string
|};
export type SportQuery = {|
  variables: SportQueryVariables,
  response: SportQueryResponse,
|};
*/


/*
query SportQuery {
  hello
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
    "cacheID": "8d5c30f3ccb741165f0b84113191774d",
    "id": null,
    "metadata": {},
    "name": "SportQuery",
    "operationKind": "query",
    "text": "query SportQuery {\n  hello\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '212e8049ec56d59a4b9e8c753b84624f';

module.exports = node;
