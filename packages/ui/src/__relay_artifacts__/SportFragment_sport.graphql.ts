/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SportFragment_sport = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "SportFragment_sport";
};
export type SportFragment_sport$data = SportFragment_sport;
export type SportFragment_sport$key = {
    readonly " $data"?: SportFragment_sport$data;
    readonly " $fragmentRefs": FragmentRefs<"SportFragment_sport">;
};



const node: ReaderFragment = {
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
(node as any).hash = '7b31a264d5304f193d4a61299fb26906';
export default node;
