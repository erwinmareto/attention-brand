import { PiButterflyBold, PiMaskHappyBold } from "react-icons/pi";
import {
  item1,
  item2,
  mainShirt,
  pool,
  shirt1,
  shirt2,
  shirt3,
  shirt4,
} from "../assets/images";
import { GiLion } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const productsList = [
  {
    img: mainShirt,
    name: "Shirt 1",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  { img: item1, name: "Shirt 2", info: "Lorem ipsum dolor sit amet. " },
  {
    img: item2,
    name: "Shirt 3",
    info: "Lorem ipsum dolor sit amet,sit amet ",
  },
  {
    img: mainShirt,
    name: "Shirt 4",
    info: "Lorem ipsum dolort, tur adipisicing elit. ",
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
