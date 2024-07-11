import { sanitize } from "dompurify";


export default function DetailSanite({title,content}) {
  return (
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <span className="details_title">{title}</span>
      </div>
      <div className="col-10 text-left mt-3">
        {/* text-left */}
        <div
          className="details_desc spaces-text "
          dangerouslySetInnerHTML={{
            __html: sanitize(content),
          }}
        ></div>
        
      </div>
    </div>
  );
}
