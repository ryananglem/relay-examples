/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportFragmentRefetchable$ref: FragmentReference;
declare export opaque type SportFragmentRefetchable$fragmentType: SportFragmentRefetchable$ref;
export type SportFragmentRefetchable = {|
  +id: string,
  +name: string,
  +$refType: SportFragmentRefetchable$ref,
|};
export type SportFragmentRefetchable$data = SportFragmentRefetchable;
export type SportFragmentRefetchable$key = {
  +$data?: SportFragmentRefetchable$data,
  +$fragmentRefs: SportFragmentRefetchable$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SportFragmentRefetchable",
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
(node/*: any*/).hash = '3de9bcb9e0765f42564b2ab503c587ab';

module.exports = node;
