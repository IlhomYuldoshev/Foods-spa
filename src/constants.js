import {about, discount, heart, notification, restaurant, security} from "./assets/settingNavbar";
import {ReactComponent as CardSvg} from "./assets/images/icons/Card.svg";
import {ReactComponent as CheckIcon} from "./assets/images/icons/checkmark-circle.svg";
import {ReactComponent as PaypalSvg} from "./assets/images/icons/Paypal.svg";
import {ReactComponent as WalletSvg} from "./assets/images/icons/Wallet.svg";
import {dashboard, home, logout, message, setting} from "./assets/sidebarImages";

export const sidebarItems = [
  {
    SvgImg: home,
    path: "/"
  },
  {
    SvgImg: discount,
    path: "/discount"
  },
  {
    SvgImg: dashboard,
    path: "/dashboard"
  },
  {
    SvgImg: message,
    path: "/message"
  },
  {
    SvgImg: notification,
    path: "/notification"
  },
  {
    SvgImg: setting,
    path: "/setting"
  },
  {
    SvgImg: logout,
    path: "/logout"
  },
]

export const foodItems = [
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-1.png?alt=media&token=7e56fcfb-07fb-4e54-8629-2e09257be337",
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    available: 20,
    type: 3,
    orderType: ["Dine in", "To go", "Delivery"]
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-2.png?alt=media&token=e39e6cfc-d85f-4d5d-8178-01f0faf3577c",
    name: "Salted Pasta with mushroom sauce",
    price: 2.69,
    available: 11,
    type: 4,
    orderType: ["To go", "Delivery"]
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-3.png?alt=media&token=1eaa7110-d1d2-451e-ab02-39e2e0db8787",
    name: "Beef dumpling in hot and sour soup",
    price: 2.99,
    available: 16,
    type: 3,
    orderType: ["Dine in", "Delivery"]
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-4.png?alt=media&token=cff29525-b661-4c8e-bf1c-634ecc1446f0",
    name: "Healthy noodle with spinach leaf",
    price: 3.29,
    available: 22,
    type: 5,
    orderType: ["Dine in", "Delivery"]
  },
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-5.png?alt=media&token=bfeabb51-d070-4cf3-9a3c-7b5e8df85450",
    name: "Hot spicy fried rice with omelet",
    price: 3.49,
    available: 13,
    type: 2,
    orderType: ["Dine in", "To go"]
  },
  {
    id: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-6.png?alt=media&token=f1327c5c-d7cf-4fe6-b6cf-5f645a27567a",
    name: "Spicy instant noodle with special omelette",
    price: 3.59,
    available: 17,
    type: 1,
    orderType: ["To go", "Delivery"]
  },
  {
    id: 7,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-7.png?alt=media&token=cb0c0639-be5c-4b47-a56d-59b27622ce0e",
    name: "Healthy noodle with spinach leaf",
    price: 3.29,
    available: 22,
    type: 0,
    orderType: ["Dine in", "To go"]
  },
  {
    id: 8,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-8.png?alt=media&token=3a238798-e903-4ed5-ade5-f46d1b5627ec",
    name: "Hot spicy fried rice with omelet",
    price: 3.49,
    available: 13,
    type: 4,
    orderType: ["Dine in", "To go", "Delivery"]
  },
  {
    id: 9,
    img: "https://firebasestorage.googleapis.com/v0/b/foods-app-fa153.appspot.com/o/food-9.png?alt=media&token=1e1ec606-ab4c-4d0a-ae74-d50477063f76",
    name: "Spicy instant noodle with special omelette",
    price: 3.59,
    available: 17,
    type: 0,
    orderType: ["Dine in", "To go"]
  }
]

export const itemsSetting = [
  {
    ImgSvg: heart,
    title: "Appereance",
    text: "Dark and Light mode, Font size"
  },
  {
    ImgSvg: restaurant,
    title: "Your Restaurant",
    text: "Dark and Light mode, Font size"
  },
  {
    ImgSvg: discount,
    title: "Products Management",
    text: "Manage your product, pricing, etc",
    active: true
  },
  {
    ImgSvg: notification,
    title: "Notifications",
    text: "Customize your notifications"
  },
  {
    ImgSvg: security,
    title: "Security",
    text: "Configure Password, PIN, etc"
  },
  {
    ImgSvg: about,
    title: "About Us",
    text: "Find out more about Posly"
  }
]

export const radioList = [
  {
    ImgSvg: CardSvg,
    ImgCheck: CheckIcon,
    text: "Credit Card",
    id: "radio-card"
  },
  {
    ImgSvg: PaypalSvg,
    ImgCheck: CheckIcon,
    text: "Paypal",
    id: "radio-paypal"
  },
  {
    ImgSvg: WalletSvg,
    ImgCheck: CheckIcon,
    text: "Cash",
    id: "radio-cash"
  }
]


export const navbarItems = ["Hot Dishes", "Cold Dishes", "Soup", "Grill", "Appetizer", "Dessert"]
