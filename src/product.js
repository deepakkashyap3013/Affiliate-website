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

const care = "Baby Care";
const toy = "Toys";

const products = [
  {
    id: 1,
    name: "Mama Bear Diaper Pail Refills",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/91Hpid6QDwL._AC_SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71rmS2MBCXL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81tCe4PKjzL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/916J7a63YUL._AC_SL1500_.jpg",
    ],
    rating: 4.7,
    description:
      "Mama Bear Diaper Pail Refills are designed especially for the Diaper Genie and provide reliable protection from diaper odors. Each refill has 7 layers of film that work together to trap it all inside your diaper pail. Each batch of refills is tested for durability, quality, and strength so that we can ensure they’re highly effective. And fiercely protective.",
    link: "https://amzn.to/3cwBH8X",
  },
  {
    id: 2,
    name: "Universal Stroller Organizer with Insulated Cup Holder",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/714rOJ6oKIL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71VQbQrrVkL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/811BJIddotL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71WqvxnUq-L._SL1500_.jpg",
    ],
    rating: 4.6,
    description:
      "Momcozy is a fast-growing brand focusing on baby feeding and breastfeeding mom nursing. We innovate and offer high-quality mom&baby products in the global market to provide comfort and meet needs.Momcozy stroller organizer fit for most stroller bars and handles like Baby Jogger, Britax, BOB, Bugaboo, Maclaren, Thule, Peg Perego, Joovy, or Umbrella stroller, etc., which satisfy most mom’s needs.",
    link: "https://amzn.to/3v9WWUB",
  },
  {
    id: 3,
    name: "Inflatable Tummy Time Mat Premium Baby Water Play Mat",
    category: toy,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/71srAJoUvsL._AC_SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/819H42j0aJL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81W%2BBTrvAzL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81f2jfbH8xL._AC_SL1500_.jpg",
    ],
    rating: 4.4,
    description:
      "Are you looking for a fun, high quality and safe mat that will allow your child to participate in the most critical development years? Looking for a big water mat that will give your child a fun time while also strengthening some arm, back and neck muscles?Check this out, we have the perfect solution for you!Made from BPA-free materials. This water-based water mat is suitable for children that are 3 to 24 months old. It can also be used for the sensory stimulation and for improving motor skills and cognitive skills! Play with your baby and show them how the fish move from one place to another by squeezing the mat, or let the children play, share toys and learn valuable collaboration and coexistence skills!",
    link: "https://amzn.to/3geP6n2",
  },
  {
    id: 4,
    name: "Alpine Muffy Baby Ear Protection",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/71Bq25-gSLL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/610S-8RiYqL._SL1200_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71dsuzRLTbL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/714shC1MRjL._SL1500_.jpg",
    ],
    rating: 4.4,
    description:
      "The child's hearing is regularly exposed to loud noises, for example, at parties, parades, school events, festivals, fireworks and car races. It is therefore advisable to avoid noise or at least to wear hearing protection. Along with noise reduction, Alpine baby earmuffs also allow your child to sleep undisturbed while you are on the move.",
    link: "https://amzn.to/3xaQRc0",
  },
  {
    id: 5,
    name: "3 in 1 Diaper Bag Backpack Travel Bassinet",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/819FpiJoVhS._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/81SHRZFhnNS._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81hp4ffFsmS._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71LNI6WA7FS._SL1500_.jpg",
    ],
    rating: 4.6,
    description:
      "This multi-functional bag can be used as a diaper backpack, a changing table, a baby crib, or it can be connected to a stroller with a buckle on the shoulder strap. The neutral appearance and multi-pocket design makes it the best gift for new papa and new mama.",
    link: "https://amzn.to/3pBRnwS",
  },
  {
    id: 6,
    name: "Nursing Cover for Breastfeeding",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/81cdTR9gceL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71XogLN6QaL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81TYZ%2BYyMxL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81HJ05OGtIL._SL1500_.jpg",
    ],
    rating: 4.7,
    description:
      "It helps your baby sleep while also protecting them from wind and sunlight. Create a cosy, comfortable and safe environment for your precious little one with our extra large custom made stylish and unisex car seat cover.",
    link: "https://amzn.to/3x48slC",
  },
  {
    id: 7,
    name: "Bedside Sleeper",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/61wnwylNLVL._SL1200_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71cxudRXOWL._SL1200_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/714w0P4LveL._SL1200_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61QtGO0bpDL._SL1200_.jpg",
    ],
    rating: 4.7,
    description:
      "The RONBEI bedside bassinet was manufactured with soft skin-friendly fabric which exceed safety standards while promoting bedside parent-infant bonding, holds your little one safely within reach, right at your bedside.",
    link: "https://amzn.to/3w8UPSl",
  },
  {
    id: 8,
    name: "Hands Free Pumping Bra",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/61ZxbnWYpoL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71tlC1dczNL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71qwuCMD9jL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71Tlnr79ckL._SL1500_.jpg",
    ],
    rating: 4,
    description:
      "The breast-pumps holding bras suitable for Breastfeeding-Pumps like Medela, Lansinoh, Philips Avent, Bellema, Spectra, Evenflo and More, Ultimate Comfort and support. You can wear it all day long and allows you to go about your normal routine.Extra extender ensures adjustment for more moms.",
    link: "https://amzn.to/353Yipk",
  },
  {
    id: 9,
    name: "Universal Stroller Rain Cover and Mosquito Net",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/71KTotWvHRL._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71qGPMejSgL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71bzrJCiFjL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71vCKCRv0AL._SL1500_.jpg",
    ],
    rating: 4.6,
    description:
      "Hrzeem stroller rain cover effectively protects baby from rain, wind, snow, and dust. It is designed to fit most single strollers, kids pushchair, pocket travel buggy, jogging stroller, pram and so on. Very easy to install and remove to store. It just take one minute to install for parents-friendly use. Comes with a quality mosquito net to keep mosquitoes and bugs out and let fresh air in.",
    link: "https://amzn.to/2TXPZcx",
  },
  {
    id: 10,
    name: "Baby Playpen for Toddler",
    category: toy,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/71u%2Bj9WJF5L._SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/81b1ewDlr-L._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/811Kz3YYUeL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71JfNmSF6pL._SL1500_.jpg",
    ],
    rating: 4.7,
    description:
      "As new parents, there will always be some moments like this: when you and your child are alone at home, meanwhile, you need a few minutes to use the restroom, take a shower or answer the phone.But few minutes will be too much if the baby starts to move though.You need to free up your hands to do these things while making sure the baby stays in a safe zone with excellent visibility.That is exactly why you need TODALE baby playpen: create a safe zone for baby to explore and play.",
    link: "https://amzn.to/3pAZ32B",
  },
  {
    id: 11,
    name: "Potty Training Seat for Kids",
    category: care,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/41NxtYA2xsL.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/71EtADFr2RL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71%2BvV9REPaL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/614aAsNg0OL._SL1500_.jpg",
    ],
    rating: 4.6,
    description:
      "It is difficult for toddler to use adult toilet.But now,baby potty training is much eaiser with our potty training seat with two step ladders.What'more, this potty seat ladder is adjustable.You can adjust the height according to the actual situation of your toilet.The potty chair comes with the plastic screws which makes its easy to assemble and makes the ladder very sturdy.A deflect is included for boys and girls ,Cartoon makes them more interested in hand washing.Foldable design makes it convient to storage when you are not using it.It can save your space.",
    link: "https://amzn.to/354O8Vm",
  },
  {
    id: 12,
    name: "Activity Gym with Rotating Plush Musical Mobile",
    category: toy,
    featuredImg:
      "https://images-na.ssl-images-amazon.com/images/I/81J-XFCBUSL._AC_SL1500_.jpg",
    subImages: [
      "https://images-na.ssl-images-amazon.com/images/I/81HGW4PubcL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61CzTNvmZyL._AC_SL1024_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61zIxQ771HL._AC_SL1024_.jpg",
    ],
    rating: 4.7,
    description:
      "Your little bunny will be bouncing with joy as they develop their eye-hand-foot coordination with this fun-filled Guess How Much I Love You Activity Play Gym, featuring three ways to play: Tummy Time, Lay and Play and Sit and Play! Sure to stimulate the senses, this play gym offers endless opportunities to stimulate your child’s senses including: four dangling toys that crinkle, rattle, and squeak; a teether; loops on the mat and bars for adjustable play; ribbon tags and textured fabrics; a large flower mirror with super soft petals, and a musical mobile that plays “Twinkle, Twinkle Little Star.” Your little one is sure to be entertained all day long! Featuring an easy-to-clean surface and carrying case, this play gym is also easy to pack up for a great day out and about with baby!",
    link: "https://amzn.to/2Se5M6x",
  },
];

export default products;
