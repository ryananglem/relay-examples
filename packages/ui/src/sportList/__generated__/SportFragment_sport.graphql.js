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
export type SportFragment_sport = $ReadOnlyArray<{|
  +id: string,
  +name: string,
  +$refType: SportFragment_sport$ref,
|}>;
export type SportFragment_sport$data = SportFragment_sport;
export type SportFragment_sport$key = $ReadOnlyArray<{
  +$data?: SportFragment_sport$data,
  +$fragmentRefs: SportFragment_sport$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
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
(node/*: any*/).hash = '1bcd096f2f93a55fe8d456b6382b53f6';

module.exports = node;
