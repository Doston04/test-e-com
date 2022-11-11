import OrderProvider from "../contexts/OrderContext";
import UserProvider from "../contexts/UserContext";
import ZakazProvider from "../contexts/ZakazContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <OrderProvider>
        <ZakazProvider>
          <Component {...pageProps} />
        </ZakazProvider>
      </OrderProvider>
    </UserProvider>
  );
}

export default MyApp;
