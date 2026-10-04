import { img } from "./lib/img";

const plateGyuto = img("plate-gyuto.jpg");
const plateSantoku = img("plate-santoku.jpg");
const platePetty = img("plate-petty.jpg");
const plateNakiri = img("plate-nakiri.jpg");
const plateSujihiki = img("plate-sujihiki.jpg");
const plateHonesuki = img("plate-honesuki.jpg");

export type Knife = {
  no: string;
  name: string;
  jp: string;
  reading: string;
  length: string;
  steel: string;
  finish: string;
  hardness: string;
  price: string;
  img: string;
  note: string;
};

export const knives: Knife[] = [
  {
    no: "01",
    name: "Gyuto",
    jp: "牛刀",
    reading: "gyūtō",
    length: "210 mm",
    steel: "Shirogami #2",
    finish: "Kasumi",
    hardness: "63 HRC",
    price: "86,000",
    img: plateGyuto,
    note: "The house pattern. Convex bevel and a distal taper to a tip you can read a page through.",
  },
  {
    no: "02",
    name: "Santoku",
    jp: "三徳",
    reading: "santoku",
    length: "180 mm",
    steel: "Aogami Super",
    finish: "Kurouchi",
    hardness: "64 HRC",
    price: "74,000",
    img: plateSantoku,
    note: "Forge scale left on the flats. Forgiving at the heel for daily board work.",
  },
  {
    no: "03",
    name: "Petty",
    jp: "ペティ",
    reading: "peti",
    length: "135 mm",
    steel: "Shirogami #1",
    finish: "Migaki",
    hardness: "63 HRC",
    price: "52,000",
    img: platePetty,
    note: "Shallot and citrus. The one that never quite makes it back into the drawer.",
  },
  {
    no: "04",
    name: "Nakiri",
    jp: "菜切",
    reading: "nakiri",
    length: "165 mm",
    steel: "Ginsan",
    finish: "Nashiji",
    hardness: "61 HRC",
    price: "68,000",
    img: plateNakiri,
    note: "Stainless core, for those who will not dry the blade the moment they set it down.",
  },
  {
    no: "05",
    name: "Sujihiki",
    jp: "筋引",
    reading: "sujihiki",
    length: "270 mm",
    steel: "VG-10",
    finish: "Mirror migaki",
    hardness: "62 HRC",
    price: "112,000",
    img: plateSujihiki,
    note: "A single draw through loin and fish, polished until the highlight runs unbroken.",
  },
  {
    no: "06",
    name: "Honesuki",
    jp: "骨スキ",
    reading: "honesuki",
    length: "150 mm",
    steel: "SK-4",
    finish: "Kurouchi",
    hardness: "62 HRC",
    price: "58,000",
    img: plateHonesuki,
    note: "The butcher's triangle. Stiff at the spine, unbothered by joint and cartilage.",
  },
];

export const steps = [
  {
    n: "01",
    jp: "鍛錬",
    romaji: "Tanren",
    title: "Drawing the bar",
    body: "Two steels are forge-welded — hard core, soft jacket — then drawn out under a single hammer. Three thousand blows to a bar of three hundred millimetres.",
  },
  {
    n: "02",
    jp: "焼入れ",
    romaji: "Yaki-ire",
    title: "The quench",
    body: "Heated until the magnet lets go at 780 °C, then dropped into water. Three bars in ten crack on the way down and go back to the scrap tin.",
  },
  {
    n: "03",
    jp: "刃付け",
    romaji: "Ha-tsuke",
    title: "Setting the bevel",
    body: "Coarse stone through to #6000 by feel. The convex is judged by the sound the blade leaves the stone with, never by a jig.",
  },
  {
    n: "04",
    jp: "柄付け",
    romaji: "Ejitsuke",
    title: "Seating the handle",
    body: "Magnolia, burnt in and wedged wet so it shrinks onto the tang. Buffalo horn ferrule, sanded to the palm, never lacquered.",
  },
  {
    n: "05",
    jp: "検品",
    romaji: "Kenshin",
    title: "Inspection",
    body: "Geometry checked against a straight edge, edge drawn through end-grain, stamped with the maker's seal, wrapped in washi and boxed.",
  },
];
