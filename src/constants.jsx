export const IMG_CDN = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const SWIGGY_API_URL =
'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8912141&lng=81.0648758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';


export const RESTAURANT_API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8912141&lng=81.0648758&restaurantId=`;

export const RESTAURANT_API_URL_LAST =  "&catalog_qa=undefined&submitAction=ENTER"

export const swiggyFaqs = [
    {
      question: "How do I place an order on Hunger Hero ?",
      answer: (
        <>
          1. Download the Hunger Hero website.
          <br />
          2. Browse restaurants and choose your desired items.
          <br />
          3. Add them to your cart and proceed to checkout.
          <br />
          4. Enter your delivery address and choose a payment method.
          <br />
          5. Place your order and track its progress in real-time.
        </>
      ),
    },
    {
      question: "What are the delivery charges on Hunger Hero ?",
      answer:
        "Delivery charges on Hunger Hero  vary depending on the restaurant, distance, and order value. You can see the estimated delivery charge before placing your order.",
    },
    {
      question: "What are the payment options available on Hunger Hero ?",
      answer:
        "Hunger Hero  accepts various payment methods, including cash on delivery, credit/debit cards, UPI, and online wallets.",
    },
    {
      question: "How can I track my order on Hunger Hero ?",
      answer:
        "You can track your order in real-time through the Hunger Hero website. You will receive notifications about the order's progress.",
    },
  ];