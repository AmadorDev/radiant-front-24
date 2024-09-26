export function ItemCardProduct({ item, HandleDetail }) {
  return (
    <div className="w-[280px] mb-5">
      <div className="item__card_product relative prod-bg-opacity">
        <img
          src={item.image_url}
          alt=""
          style={{ borderRadius: 13 }}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex justify-between mt-3">
        <div className="w-full">
          <div className="product-title font-semibold" dangerouslySetInnerHTML={{ __html: item.name}}></div>
          {/* <div className="product-sub w-full" dangerouslySetInnerHTML={{ __html:item.description.slice(0, 50)}}>
          </div> */}
        </div>
        <div className="w-20">
          <img
            onClick={() => HandleDetail(item)}
            src="/images/v2/right.png"
            width={40}
            alt=""
            className="cursor-pointer object-contain"
          />
        </div>
      </div>
    </div>
  );
}

