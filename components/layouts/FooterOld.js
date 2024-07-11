import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import translations from "../../staticTranslations.json";
export default function FooterOld() {
  const { locale } = useRouter();
  const translate = translations?.menu_footer;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  return (
    <>
      {/*footer area start*/}
      <footer className="footer_widgets">
        <div className="footer_top">
          <div className="container">
            <div className="row justify-content-between ">
              <div className="col">
                <div className="row">
                  <div className="col-12">
                    <Image
                      src="/images/logo.png"
                      width={209}
                      height={48}
                    ></Image>
                  </div>
                </div>
                <p className="footer-contact mt-5">{txtTranslate?.contact}</p>
                <p className="footer-email mt-3">
                  {txtTranslate?.email_title} : <br />
                  {txtTranslate?.email}
                </p>
                <div>
                  <a>
                    <Image
                      src="/images/inst.png"
                      width={30}
                      height={30}
                    ></Image>
                  </a>
                  <a className="ml-3">
                    <Image src="/images/fb.png" width={30} height={30}></Image>
                  </a>

                  <a className="ml-3">
                    <Image src="/images/yt.png" width={40} height={30}></Image>
                  </a>
                </div>
              </div>
              <div className="col text-center ">
                <p className="footer-contact mt-5">{txtTranslate?.find_us}</p>
                <Image
                  src="/images/map.png"
                  width={329}
                  height={172}
                  className="mt-3"
                ></Image>
              </div>
              <div className="col ">
                <p className="footer-contact mt-5 text-right">
                  {txtTranslate?.services}
                </p>
                <p className="text-right footer-qts cursor-pointer">
                  <Link href="/frequent-questions">
                    {txtTranslate?.questions}
                  </Link>

                  <br></br>

                  <Link href="usage-policies">{txtTranslate?.policy}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*footer area end*/}
    </>
  );
}
