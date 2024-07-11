import Image from "next/image";

export default function ImageDetail({ url }) {
  return (
    <div className="row justify-content-center">
      <div className={`col-12 col-md-12  image-container`}>
        {url ? (
          <Image
            src={url}
            width={400}
            height={350}
            //  layout="responsive"
            className={`imaged`}
          ></Image>
        ) : null}
      </div>
    </div>
  );
}
