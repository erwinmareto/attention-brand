import { PiButterflyBold, PiMaskHappyBold } from "react-icons/pi";
import {
  bblack,
  bblackFront,
  black1,
  black1Back,
  black2,
  black2Back,
  black2Front,
  bwhite,
  bwhiteFront,
  gray,
  grayBack,
  grayFront,
  pool,
  shirt1,
  shirt2,
  shirt3,
  shirt4,
  white,
  whiteBack,
  whiteFront,
} from "../assets/images";
import { GiLion } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa";

export const navLinks = [
  { href: "/#about-us", label: "About Us" },
  { href: "/#products", label: "Products" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#blogs", label: "Blogs" },
  { href: "/#contacts", label: "Contacts" },
];

export const productsList = [
  {
    id: 1,
    img: black1,
    name: "item 1",
    info: "Tahanan ayang kasus karena mendua.",
  },
  {
    id: 2,
    img: black2,
    name: "item 2",
    info: "Ada yang bergetar tapi bukan nyali.",
  },
  {
    id: 3,
    img: gray,
    name: "abu2",
    info: "Agar tidak tidak dimanfaatkan orang lain jadilah tidak bermanfaat.",
  },
  {
    id: 4,
    img: white,
    name: "Putih",
    info: "Bersatu kita teguh, berdua kita waduh tidak mungkin. ",
  },
  {
    id: 5,
    img: bwhite,
    name: "Putih",
    info: "Raba Dulu Dong",
  },
  {
    id: 6,
    img: bblack,
    name: "item 2",
    info: "Raba Dulu Dong",
  },
];

export const productDetails = [
  {
    id: 1,
    name: "item 1",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum.",
    images: [black1, black1Back],
  },
  {
    id: 2,
    name: "item 2",
    detail:
      "Putih putih putih putih sit amet consectetur adipisicing elit. Ipsa, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum.",
    images: [black2, black2Front, black2Back],
  },
  {
    id: 3,
    name: "abu2",
    detail:
      "abus abu abus abu abu dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum.",
    images: [gray, grayFront, grayBack],
  },
  {
    id: 4,
    name: "Putih",
    detail:
      "1111111111111111111111111111111bus abu abu dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum.",
    images: [white, whiteFront, whiteBack],
  },
  {
    id: 5,
    name: "Sunglasses",
    detail: "Sunglasses",
    images: [bwhite, bwhiteFront],
  },
  {
    id: 6,
    name: "Sunglasses",
    detail: "Sunglasses",
    images: [bblack, bblackFront],
  },
];

export const benefitsList = [
  {
    title: "Youthful Energy",
    text: "Our brand personality radiates excitement and an energetic vibe that resonates with the young and young-at-heart.",
    icon: PiButterflyBold,
  },
  {
    title: "Bold Designs",
    text: "Eye-catching, statement-making designs that help you confidently express your unique style.",
    icon: GiLion,
  },
  {
    title: "Self-Expression",
    text: "More than just clothes, our apparel is a canvas for showcasing your individuality and authentic self.",
    icon: PiMaskHappyBold,
    center: true,
  },
  {
    title: "Affordable Quality",
    text: "Enjoy premium quality without the premium price tag – our tees are a steal.",
    icon: FaMoneyBillTrendUp,
  },
  {
    title: "Confidence Boost",
    text: "Wear Attention! and instantly feel like the center of attention, exuding coolness and self-assurance.",
    icon: FaRegSun,
  },
];

export const showcaseImages = [pool, shirt1, shirt2, shirt3, shirt4];

export const sizes = ["S", "M", "L", "XL"];

export const blogs = [
  {
    href: "https://msha.ke/wear.attention",
    img: "https://images.msha.ke/ab71ea9e-57e7-44d8-998e-97017dd7ea8a?auto=format%2Ccompress&cs=tinysrgb&q=30&w=828",
    title: "Selamat Datang di Attention! : Brand Kaos Dengan Sentuhan Nyeleneh",
    content:
      "Halo para pecinta fashion yang selalu mencari tampilan yang berani dan penuh karakter! Kali ini, mari kita berkenalan dengan brand kaos yang mempertontonkan keunikan melalui desain tulisan yang nyeleneh: Attention!",
  },
  {
    href: "https://msha.ke/attention.collection",
    img: "https://looks.msha.ke/assets/item-image-2-5ec27379d5180ea5b3944dae002daaf2.jpg?auto=format%2Ccompress&cs=tinysrgb&q=30&w=828",
    title: "Tell the world what you're made of",
    content:
      "Apakah Anda bosan dengan kaos biasa-biasa saja yang tidak meninggalkan kesan? Jika iya, maka brand 'Attention' adalah jawabannya. Dengan desain yang tak biasa dan pesan-pesan yang berani, setiap kaos dari Attention bukan hanya sekadar pakaian, tapi juga merupakan medium untuk menyuarakan pendapat dan mengekspresikan kepribadian.",
  },
  {
    href: "https://msha.ke/wearattention",
    img: "https://looks.msha.ke/assets/look-16-about-a00e53051886db3f9391c31cea049e7d.jpg?auto=format%2Ccompress&cs=tinysrgb&q=30&w=828",
    title: "Membawa Perhatian dengan Kaos yang Unik dari Attention",
    content:
      "Pernahkah Anda memakai kaos yang mampu mencuri perhatian seketika? Bagi pecinta fashion yang selalu mencari gaya yang berbeda, brand 'Attention' bisa menjadi pilihan yang tepat. Dengan konsep unik dan nyeleneh, setiap kaos dari Attention tidak hanya sekadar pakaian, tapi juga merupakan ekspresi dari kepribadian dan gaya hidup yang berani.",
  },
];
