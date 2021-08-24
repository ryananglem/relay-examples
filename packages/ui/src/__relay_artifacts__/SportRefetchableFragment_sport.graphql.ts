/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SportRefetchableFragment_sport = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "SportRefetchableFragment_sport";
};
export type SportRefetchableFragment_sport$data = SportRefetchableFragment_sport;
export type SportRefetchableFragment_sport$key = {
    readonly " $data"?: SportRefetchableFragment_sport$data;
    readonly " $fragmentRefs": FragmentRefs<"SportRefetchableFragment_sport">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SportRefetchableFragment_sport",
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
(node as any).hash = '11f8f9c6361d0df1f938a08776bcb4c9';
export default node;
