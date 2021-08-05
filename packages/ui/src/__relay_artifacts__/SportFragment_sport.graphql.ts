/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SportFragment_sport = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly " $refType": "SportFragment_sport";
}>;
export type SportFragment_sport$data = SportFragment_sport;
export type SportFragment_sport$key = ReadonlyArray<{
    readonly " $data"?: SportFragment_sport$data;
    readonly " $fragmentRefs": FragmentRefs<"SportFragment_sport">;
}>;



const node: ReaderFragment = {
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
(node as any).hash = '1bcd096f2f93a55fe8d456b6382b53f6';
export default node;
