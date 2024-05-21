const bostadsTypOptions = [
  { value: "Lägenheter", label: "Lägenheter" },
  { value: "Villor", label: "Villor" },
  { value: "Hus", label: "Hus" },
  { value: "Fritidshus", label: "Fritidshus" },
  { value: "Radhus,parhus,kedjehus", label: "Radhus,parhus,kedjehus" },
  { value: "Gårdar,Skogar", label: "Gårdar,Skogar" },
  { value: "Tomt/Mark", label: "Tomt/Mark" },
  { value: "Nyproduktion", label: "Nyproduktion" },
];

const upplåtelseformOption = [
  { value: "Hyresrätt", label: "Hyresrätt" },
  { value: "Bostadsrätt", label: "Bostadsrätt" },
  { value: "Äganderätt", label: "Äganderätt" },
  { value: "Tomträtt", label: "Tomträtt" },
];


//---------------------------- filter
const RoomformOption = [
  { value: 1, label: "1 rum" },
  { value: 2, label: "2 rum" },
  { value: 3, label: "3 rum" },
  { value: 4, label: "4 rum" },
];

const RoomareaformOption = [
  { value: "20", label: "20m²" },
  { value: "30", label: "30m²" },
  { value: "40", label: "40m²" },
  { value: "50", label: "50m²" },
  { value: "60", label: "60m²" },
];

const PrisformOption = [
  { value: 500000, label: "500000 kr" },
  { value: 1000000, label: "1000000 kr" },
  { value: 1500000, label: "1500000 kr" },
  { value: 2000000, label: "2000000 kr" },
  { value: 3000000, label: "3000000 kr" },
  { value: 5000000, label: "5000000 kr" },
];

const PlatsformOption = [
  { value: "Stockholm", label: "Stockholm" },
  { value: "Göteburg", label: "Göteburg" },
  { value: "Malmö", label: "Malmö" },
  { value: "Uppsala", label: "Uppsala" },
];
//---------------------------- filter


export { bostadsTypOptions, upplåtelseformOption, RoomformOption, RoomareaformOption, PrisformOption, PlatsformOption };
