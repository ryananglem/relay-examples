/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SportFragmentRefetchable = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "SportFragmentRefetchable";
};
export type SportFragmentRefetchable$data = SportFragmentRefetchable;
export type SportFragmentRefetchable$key = {
    readonly " $data"?: SportFragmentRefetchable$data;
    readonly " $fragmentRefs": FragmentRefs<"SportFragmentRefetchable">;
};



const node: ReaderFragment = {
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
(node as any).hash = '3de9bcb9e0765f42564b2ab503c587ab';
export default node;
