/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportList_sport$ref: FragmentReference;
declare export opaque type SportList_sport$fragmentType: SportList_sport$ref;
export type SportList_sport = $ReadOnlyArray<{|
  +name: string,
  +$refType: SportList_sport$ref,
|}>;
export type SportList_sport$data = SportList_sport;
export type SportList_sport$key = $ReadOnlyArray<{
  +$data?: SportList_sport$data,
  +$fragmentRefs: SportList_sport$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "SportList_sport",
  "selections": [
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
(node/*: any*/).hash = 'aa09b20c136148b517fb61a10acdfac8';

module.exports = node;
