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
    name: "MamyPoko Pants Extra Absorb Diaper",
    category: "Baby care",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/713%2BAP0I8SL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/611kFPUBu1L._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71LhhJ3HFwL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61wLa4pbSDL._SL1000_.jpg",
    ],
    rating: 4.4,
    description:
      "MamyPoko pants extra absorb with crisscross absorbent sheet which absorbs 7 glasses of urine and spreads it equally, so there's no fear of heaviness. Its stretchable thigh support prevents gaps between diaper and baby's thigh, hence prevents leakage.",
    link: "https://www.amazon.in/MamyPoko-Pants-Absorb-Diaper-Medium/dp/B08S9JC8FF/ref=zg_bs_baby_1?_encoding=UTF8&psc=1&refRID=VSG8YJ1BS03CFJD8P06K",
  },
  {
    id: 2,
    name: "Soft Cleansing Baby Wipes",
    category: "Baby care",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/619r6Tl2iML._SL1393_.jpg",
    subImages: [],
    rating: 4.4,
    description:
      "Baby Wipes are extra thick and extra moist for your baby's gentle skin. Enriched with the goodness of Aloe Vera, Jojoba Oil and Vitamin E, to ensure that your baby's skin remains soft and moisturized, while the gentle fragrance of the wipes keeps your baby fresh and happy all day long without causing any irritation.",
    link: "https://www.amazon.in/Littles-Soft-Cleansing-Baby-Wipes/dp/B084S5JSZ1/ref=zg_bs_baby_5?_encoding=UTF8&refRID=VSG8YJ1BS03CFJD8P06K&th=1",
  },
  {
    id: 3,
    name: "Baby Powder & Himalaya Gentle Baby Bath",
    category: "Baby care",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/51g3LUuRRFL._SL1001_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/61qHFEQe0nL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71J3Dvr1FeL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71PrXGdqLTL._SL1500_.jpg",
    ],
    rating: 4.5,
    description:
      "Himalaya's Gentle Baby Wash with its unique No Tears formula is infused with the goodness of Chickpea, Fenugreek and Green Gram which cleanses your newborn's skin, gently.Enriched with natural ingredients, the Himalaya Herbals baby powder is highly efficacious in combating baby's dry skin problems.",
    link: "https://www.amazon.in/Himalaya-Baby-Powder-Gentle-400ml/dp/B08218NKPN/ref=zg_bs_baby_25?_encoding=UTF8&psc=1&refRID=VSG8YJ1BS03CFJD8P06K",
  },
  {
    id: 4,
    name: "Ear Buds",
    category: "Baby care",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/81GKVdyfhNL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/91TXiFhYAGL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61B%2B1JEhK-L._SL1000_.jpg",
    ],
    rating: 4.5,
    description:
      "Johnson's Buds are made with pure and soft cotton, sterilized and clinically tested. We love babies and we understand a baby’s hygiene is something that no parent wants to compromise with. The cotton used for Johnson's cotton buds is pure and soft in nature and the finished products are sterilized and clinically tested before packaging. The buds are very thin in texture. Hence, you can even use them to clean the delicate areas of your baby’s body, such as the gaps between fingers and toes and nostrils. These buds for babies can also be used to apply lotions or medicines in sensitive areas. Moms trust Johnson's - always mild, gentle and effective.",
    link: "https://www.amazon.in/Johnsons-21501813-Buds-150-Swabs/dp/B006LWP8GC/ref=zg_bs_1953111031_25?_encoding=UTF8&psc=1&refRID=S8HYF1MNKQQHM0CMW58R",
  },
  {
    id: 5,
    name: "Animal Shape Bath Toys Non Toxic",
    category: "Toys",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/717NIfJi17S._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71IaQqdJ5VL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71sIW59Wj2L._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81f4zbKco-L._SL1500_.jpg",
    ],
    rating: 4.4,
    description:
      "The set includes both rattles and bath toys. This is the perfect set that will accompany your kids in their bath time and also in their play time.All the toys in the set are made of good quality material and have no sharp edges, so you don’t need to worry about your kids getting hurt while playing with this set. All the toys are perfectly sized for little hand to hold and play by themselves.",
    link: "https://www.amazon.in/WISHKEY-Rattles-Teethers-Animal-Infants/dp/B07X5L5C1R/ref=zg_bs_1953106031_2?_encoding=UTF8&refRID=QHGQD7FP5VEJ3PHXVBJ5&th=1",
  },
  {
    id: 6,
    name: "Push and Shake Wobbling Bell",
    category: "Toys",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/415v57jc84L.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/61AZ3No4ERL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41VOiTpxhML.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61NCD5eesoL.jpg",
    ],
    rating: 4.2,
    description:
      "It has subdued colors, with a naive facial expressions, just like a cute baby. Nodding doll is a good partner in the growth of the baby.Now buy the doll,you will get a lovelt gift-a cute little doll with long ears.",
    link: "https://www.amazon.in/Toyshine-Wobbling-Sounds-Tumbler-Multicolour/dp/B073WVT662/ref=zg_bs_1953106031_22?_encoding=UTF8&refRID=QHGQD7FP5VEJ3PHXVBJ5&th=1",
  },
  {
    id: 7,
    name: "Wooden Hammer Ball Knock Ball",
    category: "Toys",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/71UaziJUYDL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/81SlBDMFKiL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71qlh%2BoKvCL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71VNTPE0ZTL._SL1500_.jpg",
    ],
    rating: 3.7,
    description:
      "IChildren will love pounding the ball and watching it roll down and around, from top to bottom – again and again, with the Wooden Hammer Ball Game.This game is an exciting and interesting game, great for helping toddlers develop a solid sense of hand-eye co-ordination: Firstly, by hitting the balls through the holes with the wooden hammer, then by following the ball with their eyes as it travels on its journey to the bottom. Young children will be taken in by the Pound N Roll game’s regularly shaped platforms painted in vibrant primary colours, and parents will appreciate the game’s timeless wooden charm.",
    link: "https://www.amazon.in/Trinkets-More%C2%AE-Pounding-Dexterity-Educational/dp/B07GXN2WTT/ref=zg_bs_1953106031_23?_encoding=UTF8&refRID=QHGQD7FP5VEJ3PHXVBJ5&th=1",
  },
  {
    id: 8,
    name: "Giraffe Animal Soft Toy",
    category: "Toys",
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/41IVHZu2PcL.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/41yOYQ5nmuL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41AzpSsKzwL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/512AXLogheL.jpg",
    ],
    rating: 4.4,
    description:
      "Scooba soft toy is manufactured using excellent poly-staple and conjugate filling fibre, giving it a soft and cuddly feeling, making it extremely huggable.The Scooba soft toy is adorable, cute, and extremely huggable. This collectable cuddly toy can be used to create a little zoo of Scooba soft toys, making it a great gift idea.With intricate detailing, this soft toy can be used as a learning device and an imaginative tool to help spark your child’s creativity. You can play together and make playtime fun, exciting, and adventurous.",
    link: "https://www.amazon.in/SCOOBA-Kids-Favourite-Giraffe-Height/dp/B085TBV2Y7/ref=zg_bs_1953106031_31?_encoding=UTF8&psc=1&refRID=QHGQD7FP5VEJ3PHXVBJ5",
  },
];

export default products;
