import Script from "next/script";

export default function ScriptsEx() {
  return (
    <>
  
<link href="https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&family=Varela&display=swap" rel="stylesheet"/>
    <Script src="/assets/js/vendor/jquery-3.4.1.min.js" strategy="beforeInteractive"></Script>
      <Script
        src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"
        strategy="afterInteractive"
      ></Script>

      <Script src="/assets/js/simplyCountdown.js"  strategy="afterInteractive"></Script>

      
      {/* <!--popper min js--> */}
      <Script src="/assets/js/popper.js" strategy="afterInteractive"></Script>
      {/* <!--bootstrap min js--> */}
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive"></Script>
      {/* <!--owl carousel min js--> */}
      {/* <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive"></Script> */}
      {/* <!--slick min js--> */}
      {/* <Script src="/assets/js/slick.min.js" strategy="afterInteractive"></Script> */}
      {/* <!--magnific popup min js--> */}
      {/* <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive"></Script> */}
      {/* <!--counterup min js--> */}
      {/* <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive"></Script> */}
      {/* <!--jquery countdown min js--> */}
      {/* <Script src="/assets/js/jquery.countdown.js" strategy="afterInteractive"></Script> */}
      {/* <!--jquery ui min js--> */}
      {/* <Script src="/assets/js/jquery.ui.js" strategy="afterInteractive"></Script> */}
      {/* <!--jquery elevatezoom min js--> */}
      {/* <Script src="/assets/js/jquery.elevatezoom.js" strategy="afterInteractive"></Script> */}
      {/* <!--isotope packaged min js--> */}
      {/* <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive"></Script> */}
      {/* <!--slinky menu js--> */}
      {/* <Script src="/assets/js/slinky.menu.js" strategy="afterInteractive"></Script> */}
      {/* <!-- Plugins JS --> */}
      {/* <Script src="/assets/js/plugins.js" strategy="afterInteractive"></Script> */}

      {/* <!-- Main JS --> */}
      {/* <Script src="/assets/js/main.js" strategy="afterInteractive"></Script> */}
      
    </>
  );
}
