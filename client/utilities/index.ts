import {
  BagageType,
  dropdownItems,
  foodType,
  packagesCarouselDataType,
  packagesDataType,
  RecentFlightType,
  referralType,
  seatMealBagageNavItemsTypes,
} from "@/types";
const dropDownItemsForCountryCodes: dropdownItems[] = [
  { label: " (+1) United States", value: +1 },
  { label: "(+91) India ", value: +91 },
  { label: " (+44) United Kingdom", value: +44 },
  { label: "(+1) Canada ", value: +1 },
  { label: "(+61) Australia ", value: +61 },
];

const seatData = [
  {
    left: [
      {
        col1: "A",
        col2: "B",
        col3: "C",
      },
      {
        seat1: 1,
        seat2: 2,
        seat3: 3,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
    ],
  },
  { middle: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  {
    right: [
      {
        col1: "D",
        col2: "E",
        col3: "F",
      },
      {
        seat1: 1,
        seat2: 2,
        seat3: 3,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
      {
        seat4: 4,
        seat5: 5,
        seat6: 6,
      },
    ],
  },
];

const foodData: foodType[] = [
  {
    id: "1",
    foodImg:
      "https://sandhyahariharan.co.uk/wp-content/uploads/2022/07/paneer-butter-masala-2.jpg",
    foodname: "Paneer Butter",
    veg: true,
    price: 500,
    quantity: 0,
  },
  {
    id: "2",
    foodImg:
      "https://www.whiskaffair.com/wp-content/uploads/2020/06/Chicken-Tikka-2-3.jpg",
    foodname: "Chicken Tikka",
    veg: false,
    price: 600,
    quantity: 0,
  },
  {
    id: "3",
    foodImg:
      "https://www.indianveggiedelight.com/wp-content/uploads/2017/07/veg-pulao-karnataka-style-featured.jpg",
    foodname: "Veg Pulao",
    veg: true,
    price: 450,
    quantity: 0,
  },

  {
    id: "4",
    foodImg:
      "https://thecozycook.com/wp-content/uploads/2021/08/Spinach-Pasta-f3.jpg",
    foodname: "Spinach Pasta",
    veg: true,
    price: 550,
    quantity: 0,
  },
  {
    id: "5",
    foodImg:
      "https://yeyfood.com/wp-content/uploads/2024/08/WEB1indian_chicken_biryani._served_on_a_white_plate._s_77c8f1ca-f01e-4a4d-9f2c-61bce785c1d7_3-735x735.jpg",
    foodname: "Chicken Biryani",
    veg: false,
    price: 650,
    quantity: 0,
  },
  {
    id: "6",
    foodImg:
      "https://veenaazmanov.com/wp-content/uploads/2022/04/Garden-Salad-Recipe23.jpg",
    foodname: "Garden Fresh Salad",
    veg: true,
    price: 300,
    quantity: 0,
  },
];

const referralData: referralType[] = [
  { img: require("@/assets/images/scratchCard.png"), id: "12" },
  { img: require("@/assets/images/scratchCard.png"), id: "13" },
  { img: require("@/assets/images/scratchCard.png"), id: "14" },
];

const bagageData: BagageType[] = [
  { id: "1", img: "", kg: 3, price: 900 },
  { id: "2", img: "", kg: 5, price: 1000 },
  { id: "3", img: "", kg: 10, price: 1500 },
  { id: "4", img: "", kg: 15, price: 1800 },
  { id: "5", img: "", kg: 20, price: 2000 },
  { id: "6", img: "", kg: 20, price: 2000 },
  { id: "7", img: "", kg: 20, price: 2000 },
  { id: "8", img: "", kg: 20, price: 2000 },
];

const seatMealBagageNavItems: seatMealBagageNavItemsTypes[] = [
  {
    title: "Seat",
    icon: "seat-passenger",
    id: "22",
  },
  {
    title: "Meal",
    icon: "silverware-variant",
    id: "4",
  },
  {
    title: "Baggage",
    icon: "bag-suitcase-outline",
    id: "5",
  },
];

const packagesData: packagesDataType[] = [
  {
    title: "Dubai",
    price: 49000,
    desc: "3 nights & 4 days",
    bgImg:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Maldives",
    price: 75000,
    desc: "5 nights & 6 days",
    bgImg:
      "https://img.freepik.com/free-photo/blue-villa-beautiful-sea-hotel_1203-5316.jpg?t=st=1735563192~exp=1735566792~hmac=783cf437f437d0ea357bfc41893be7d04b3e19669f07656fd4dbbd1d40cf1cb6&w=2000",
  },
  {
    title: "Paris",
    price: 85000,
    desc: "4 nights & 5 days",
    bgImg:
      "https://img.freepik.com/free-photo/eiffel-tower-as-famous-city-landmark-paris_649448-4835.jpg?t=st=1735563320~exp=1735566920~hmac=bdd77b4244089684513ba6daf2c59edf5e67fdc84b9cb002564e62cf3ad9d88b&w=996",
  },
  {
    title: "Thailand",
    price: 45000,
    desc: "4 nights & 5 days",
    bgImg:
      "https://img.freepik.com/free-photo/wat-arun-temple-dawn-twilight-bangkok-thailand_554837-458.jpg?t=st=1735562362~exp=1735565962~hmac=fc1fc24fda10dba2c75372f6832da9a2e36c1359dc758f5588522a3616164ea2&w=996",
  },
];

const carouselPackagesData: packagesCarouselDataType[] = [
  {
    linkTo: "",
    offer: 49000,
    desc: "On flights to Saudi Arabia",
    bgImg:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
  },
  {
    linkTo: "",
    offer: 75000,
    desc: "On flights to Saudi Arabia",
    bgImg:
      "https://img.freepik.com/free-photo/blue-villa-beautiful-sea-hotel_1203-5316.jpg?t=st=1735563192~exp=1735566792~hmac=783cf437f437d0ea357bfc41893be7d04b3e19669f07656fd4dbbd1d40cf1cb6&w=2000",
  },
  {
    linkTo: "",
    offer: 85000,
    desc: "On flights to Saudi Arabia",
    bgImg:
      "https://img.freepik.com/free-photo/eiffel-tower-as-famous-city-landmark-paris_649448-4835.jpg?t=st=1735563320~exp=1735566920~hmac=bdd77b4244089684513ba6daf2c59edf5e67fdc84b9cb002564e62cf3ad9d88b&w=996",
  },
];

const offerData = [
  {
    code: "Db89",
    offer: 600,
    desc: "On flight to Dubai",
  },
  {
    code: "Thnd89",
    offer: 700,
    desc: "On flight to Thailand",
  },
  {
    code: "Swiss300",
    offer: 800,
    desc: "On flight to Switzerland",
  },
];

const recentFlightsData: RecentFlightType[] = [
  {
    flightImg: require("@/assets/images/indigo.png"),
    flightNumber: "64-Ste",
    from: "Mumbai",
    to: "Bengaluru",
    numberOfTraveller: 2,
    flightClass: "Economy",
    departDate: "Mon, Sep 25",
  },
  {
    flightImg: require("@/assets/images/indigo.png"),
    flightNumber: "64-Ste",
    from: "Mumbai",
    to: "Bengaluru",
    numberOfTraveller: 2,
    flightClass: "Economy",
    departDate: "Mon, Sep 25",
  },
  {
    flightImg: require("@/assets/images/indigo.png"),
    flightNumber: "64-Ste",
    from: "Mumbai",
    to: "Bengaluru",
    numberOfTraveller: 2,
    flightClass: "Economy",
    departDate: "Mon, Sep 25",
  },
];

export {
  dropDownItemsForCountryCodes,
  seatData,
  foodData,
  bagageData,
  seatMealBagageNavItems,
  packagesData,
  carouselPackagesData,
  offerData,
  referralData,
  recentFlightsData,
};
