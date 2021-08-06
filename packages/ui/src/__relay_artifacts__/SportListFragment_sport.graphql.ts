/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SportListFragment_sport = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly " $refType": "SportListFragment_sport";
}>;
export type SportListFragment_sport$data = SportListFragment_sport;
export type SportListFragment_sport$key = ReadonlyArray<{
    readonly " $data"?: SportListFragment_sport$data;
    readonly " $fragmentRefs": FragmentRefs<"SportListFragment_sport">;
}>;



const node: ReaderFragment = {
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
(node as any).hash = 'c7dcbf32a62b14ec0fee111658da3d9b';
export default node;
