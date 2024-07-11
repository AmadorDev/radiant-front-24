export default function TitleAndSubtitle({
  title,
  subtitle,
  description = "",
  className='col-md-10',
}) {
  return (
    <div className="container ">
      <div className="row justify-content-center ">
        <div className={className + " "+ "col-12  text-center"}>
          <span className="t_title_idx">{title}</span> <br></br>
          <span className="t_subtitle_idx">{subtitle}</span>
        </div>
      </div>

      {description !=''?<div className="row justify-content-center mt-4">
        <div className="col-12 col-md-8 text-center">
          <span className="t_desc_idx">{description}</span>
        </div>
      </div>:null}
    </div>
  );
}
