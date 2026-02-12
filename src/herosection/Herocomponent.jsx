import { FaArrowRightLong } from "react-icons/fa6";
import "./herosection.css";

const Herocomponent = ({ hero_className, data, className }) => {
  // console.log(data.heading);
  return (
    <div className={hero_className}>
      {data.video_url ? (
        <video autoPlay muted loop playsInline>
          <source src={data.video_url} type="video/mp4" />
        </video>
      ) : (
        <img src={data.image_url} alt={data.heading} />
      )}

      <div className={className}>
        <h2>{data.heading}</h2>
        <p>{data.content}</p>
        <a href="">
          <div>{data.btn_name}</div>
          <FaArrowRightLong className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Herocomponent;
