import "../styles/globals.css";

import "../sass/index.scss";

// add bootstrap css
import "bootstrap/dist/css/bootstrap-grid.css";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/owl.carousel.min.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/font.awesome.css";
import "../public/assets/css/ionicons.min.css";
import "../public/assets/css/simple-line-icons.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/jquery-ui.min.css";
import "../public/assets/css/slinky.menu.css";
import "../public/assets/css/plugins.css";
import "../public/assets/css/style.css";
import CapilarState from "../contexts/capilar/capilarState";
import Loading from "../components/utils/Loading";
import LoadingScreen from "../components/LoadingScreen";

import { useContext, useEffect, useState } from "react";

import MenuState from "../contexts/menu/menuState";
import menuContext from "../contexts/menu/menuContext";
import { useRouter } from "next/router";
import { Toaster } from 'react-hot-toast';
// import '~@/swiper/swiper-bundle.css';

import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function ProtectedRoute({ children }) {
    const { tologged } = useContext(menuContext);
    if (tologged.isloading) {
      return <Loading></Loading>;
    } else {
      return children;
    }
  }

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== router.pathname ? setLoading(true) : setLoading(false);
  //   };
  //   const handleComplete = (url) => setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  // }, [router]);

  return (
    <MenuState>
      <CapilarState>
        <ProtectedRoute>
          {/* <LoadingScreen loading={loading} /> */}
          <TopProgressBar />
          <Component {...pageProps} />
          <Toaster position="bottom-right" reverseOrder={false} />
        </ProtectedRoute>
      </CapilarState>
    </MenuState>

    // <Component {...pageProps} />
  );
}

export default MyApp;
