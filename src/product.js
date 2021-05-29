/*
{
    id : number ,
    name: string,
    category: string,
    featuredImg: string,
    subImages:[],
    rating: number,
    description:string,
    link:string
}
*/

// products of kitchen-items to collected

const products = [
  {
    id: 1,
    name: "Stainless Steel Wall Hanging Shelves",
    category: "fashion",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/51ThdCJK8gL._SX425_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/5161wZkO6NL._SX425_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/618CnDsH68L._SL1001_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81jkSg6wCQL._SL1500_.jpg",
    ],
    rating: 4.2,
    description:
      "Wall Adhesive Shower Caddy can be used in the kitchen, living room, bathroom, study, balcony, etc. It can be placed in seasoning box/bottle, chopsticks bucket, beverage, etc., storage cup, kitchen paper, cling film, shampoo, facial cleanser, mouthwash cup, etc. Suitable for storage at the corner of your bathroom, kitchen, rooms as a convenient collection organizer. ",
    link: "https://www.amazon.in/K-K-VillA-Stainless-Hanging-Shelves/dp/B08TRFH33L/ref=sr_1_12?dchild=1&keywords=Stainless+Steel+Wall+Hanging+Shelves&qid=1621866259&sr=8-12",
  },
  {
    id: 2,
    name: "Stainless Steel Strainer",
    category: "kitchen",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/51u%2BeiyIwYL.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/51LhYN951bL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/21K-COs6mIL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/519oFCoI5CL.jpg",
    ],
    rating: 4.2,
    description:
      "Skywalk stainless steel sink strainer kitchen drain basin basket filter stopper sink drainer. Fine sink strainer set, stops rubbish from blocking your drains.",
    link: "https://www.amazon.in/Kitchen-Strainer-Stainless-Stopper-Drainer/dp/B08R9NZHR5/ref=sr_1_3_sspa?dchild=1&keywords=Stainless+Steel+Strainer&qid=1621866313&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV1oyVlJNWVZVTklLJmVuY3J5cHRlZElkPUEwNzcxODQxTktYV0FZUE9ENTRSJmVuY3J5cHRlZEFkSWQ9QTA4MzQyNjgxTjBYVU9FSEEwU1YyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
  },
  {
    id: 3,
    name: "360 Degree Rotating Water-Saving Sprinkler",
    category: "kitchen",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/41B9FncS-AL.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/61kFFP4HVfL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51yP703s2GL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61CGFNBamBL._SL1200_.jpg",
    ],
    rating: 3.7,
    description:
      "Simxen kitchen water shower tap faucet tap aerator, Faucet splash-proof filter three gear adjustable tap water-saving device head nozzle for kitchen and bathroom.",
    link: "https://www.amazon.in/CABLE-GALLERY-Water-Saving-Adjustable-Splash-Proof/dp/B08JZ4T8MY/ref=sr_1_2_sspa?dchild=1&keywords=360+Degree+Rotating+Water-Saving+Sprinkler&qid=1621866358&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMTZDTFhINEhQMDdPJmVuY3J5cHRlZElkPUEwMjcxMTU5MVhHUVhZTkxVWkRQNiZlbmNyeXB0ZWRBZElkPUEwNzcyNTg3MVBGOVFTTlpBR0U2ViZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
  },
  {
    id: 4,
    name: "evolving Spice Rack set (16 pieces)",
    category: "kitchen",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/81u0Uo4nQdL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71%2BLJeg1dJL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61hKuPvtrbL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/819rMB1w5BL._SL1500_.jpg",
    ],
    rating: 4,
    description:
      "A hassle-free storage solution by organizing your spice collection in one place! The beautifully designed revolving rack makes it easier for you to access your spices, herbs, powdered sugar and sprinkles. This spice rack set is a handy addition to your kitchen cabinet, drawer and pantry.",
    link: "https://www.amazon.in/Amazon-Brand-Solimo-Revolving-pieces/dp/B07PBBRWFG/ref=sr_1_3?dchild=1&keywords=evolving+Spice+Rack+set+%2816+pieces%29&qid=1621866400&sr=8-3",
  },
  {
    id: 5,
    name: "Kitchen Silicon Oil Basting Brush",
    category: "kitchen",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/51pUbksTn0L.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71IaQqdJ5VL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41zYzsc%2BGQL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51PAsQeGcKL._SL1016_.jpg",
    ],
    rating: 3.7,
    description:
      "This oil basting brush is made of food grade silicone material and comes along with a hard plastic handle to firmly hold the brush. The package contains one oil brush of 7 inches.",
    link: "https://www.amazon.in/Silicon-Oil-Basting-Brush-Free/dp/B07N3X4MFD/ref=sr_1_4?dchild=1&keywords=Kitchen+Silicon+Oil+Basting+Brush&qid=1621866427&sr=8-4",
  },
  {
    id: 6,
    name: "Kitchen Knifes 6 Piece",
    category: "kitchen",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/51BgScyg2qL._SL1000_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/61R3JV25v2L._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71B%2BlwhMjlL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71YDr4cE8aL._SL1000_.jpg",
    ],
    rating: 4.1,
    description:
      "The right set of kitchen knives can make a huge difference and save valuable cooking time. Properly sharpened knives make food prep faster and easier, giving you clean and precise cuts no matter what you’re chopping, slicing or dicing. Stylish and practical, the Shears set includes all the knives you would need. Whether you are a professional chef or a home maker, this knife set can work wonders for your kitchen. The set includes a pack of 4 - knives, 1- Scissor and a wooden block to house them.",
    link: "https://www.amazon.in/Pigeon-Shears-Kitchen-Knifes-Set/dp/B088HBW6KV/ref=sr_1_5?dchild=1&keywords=kitchen&qid=1621917848&sr=8-5",
  },
  {
    id: 7,
    name: "Microfibre Cleaning Cloth",
    category: "kitchen",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/714ibbKp9wL._SL1296_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/61uN-5D68QL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51wXu0xAHBL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81SvZmIUZwL._SL1500_.jpg",
    ],
    rating: 4.4,
    description:
      "It is soft quality microfiber cloths for home, kitchen, cars, furniture. This cloth is made of polyester and poly amide (nylon).Soft quality microfiber cloths for home, kitchen, cars, furniture. This cloth is made of polyester and poly amide (nylon).",
    link: "https://www.amazon.in/SOBBY-Microfibre-Cleaning-Cloth-Multicolor/dp/B07489945R/ref=sr_1_19?dchild=1&keywords=kitchen&qid=1622267867&sr=8-19",
  },
  {
    id: 8,
    name: "Chopping Board with Tray",
    category: "kitchen",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/61NDr0prjVS._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71ga0pIuoAS._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61gdubSmEbS._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61mXWlKGqPS._SL1500_.jpg",
    ],
    rating: 4.5,
    description:
      "his Product can be used as a vegetable/fruit/meat/poultry/fish cleaning basket, chopping/cutting board ideal for cutting, slicing and chopping, a foldable tub for household needs such as washing dishes and also for icing beverages or camp site cleanup.",
    link: "https://www.amazon.in/Chopping-Plastic-Multipurpose-Vegetable-Kitchen/dp/B0953DPNWT/ref=sr_1_29?dchild=1&keywords=kitchen&qid=1622267867&sr=8-29",
  },
];

export default products;
