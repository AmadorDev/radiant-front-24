import Link from 'next/link';
import { useRouter } from 'next/router';

import blogPosts from '../data.json';

function Home() {
  const { locale, locales, asPath } = useRouter();
  console.log(locale)
  console.log(locales)
  console.log(asPath)
console.log(blogPosts)
  
  return (
    <div >
      <main >
        <div >
          {locales.map((l, i) => {
            return (
              <span key={i} className="mx-5">
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </span>
            );
          })}
        </div>
        <div>
          <h1>My Multi-Language Blog</h1>
          <div>
            {blogPosts?.posts
              .filter(p => p.locale === locale)
              .map((itm, i) => (
                 <span key={i}>{itm.title}</span>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;