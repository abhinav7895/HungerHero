import ReactDOM from "react-dom/client";
import { Header, Body, Error, RestaurantsMenu, About } from "./Components";
import FAQs from "./Components/FAQs/FAQs";
import CartContextProvider from "./context/CartContext";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.css";

import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";


const Contact = lazy(() => import("./Components/Contact/Contact"));
const Cart = lazy(() => import("./Components/Cart/Cart"));

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Provider store={store}>
          <Header />
          <Outlet />
        </Provider>
      </CartContextProvider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "faqs",
        element: (
          <Suspense>
            <FAQs />
          </Suspense>
        ),
      },
      {
        path: ":id",
        element: <RestaurantsMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
