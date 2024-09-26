import { useRouter } from "next/router";
import Link from "next/link";

export default function CateCustom({ translation }) {
  const { locale } = useRouter();
  const trans = translation.filter((item) => item.locale == locale)[0];
  return (
    <div className="bg-gray">
      <div className="divider-custom"></div>
      <div className="container mx-auto ">
        <div className="w-full mx-auto flex justify-center  flex-wrap">
          {trans?.items.map((item, index) => (
            <Link href={`/products/categories/${index + 1}`} key={index}>
              <div className="categories__item_card cursor-pointer mb-2 mr-3" >
                <img src={item.url} alt={item.name} />
                <div className="h-20">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="divider-custom"></div>
    </div>
  );
}
