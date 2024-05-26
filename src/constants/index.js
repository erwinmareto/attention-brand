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
