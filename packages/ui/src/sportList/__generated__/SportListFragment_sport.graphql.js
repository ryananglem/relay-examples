/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportListFragment_sport$ref: FragmentReference;
declare export opaque type SportListFragment_sport$fragmentType: SportListFragment_sport$ref;
export type SportListFragment_sport = $ReadOnlyArray<{|
  +id: string,
  +name: string,
  +$refType: SportListFragment_sport$ref,
|}>;
export type SportListFragment_sport$data = SportListFragment_sport;
export type SportListFragment_sport$key = $ReadOnlyArray<{
  +$data?: SportListFragment_sport$data,
  +$fragmentRefs: SportListFragment_sport$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "SportListFragment_sport",
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
(node/*: any*/).hash = 'c7dcbf32a62b14ec0fee111658da3d9b';

module.exports = node;
