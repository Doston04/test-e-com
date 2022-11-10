import OrderProvider from "../contexts/OrderContext";
import UserProvider from "../contexts/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <OrderProvider>
        <Component {...pageProps} />
      </OrderProvider>
    </UserProvider>
  );
}

export default MyApp;
