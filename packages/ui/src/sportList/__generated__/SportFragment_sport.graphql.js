/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportFragment_sport$ref: FragmentReference;
declare export opaque type SportFragment_sport$fragmentType: SportFragment_sport$ref;
export type SportFragment_sport = {|
  +id: string,
  +name: string,
  +$refType: SportFragment_sport$ref,
|};
export type SportFragment_sport$data = SportFragment_sport;
export type SportFragment_sport$key = {
  +$data?: SportFragment_sport$data,
  +$fragmentRefs: SportFragment_sport$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SportFragment_sport",
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
  "type": "Sport",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7b31a264d5304f193d4a61299fb26906';

module.exports = node;
