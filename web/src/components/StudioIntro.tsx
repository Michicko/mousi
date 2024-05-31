import { Link } from "react-router-dom";

export default function StudioIntro() {
  return (
    <div className="studio-intro">
      <h2 className="heading heading__secondary mb-2">
        <span>Buying my</span>
        <span>Unique pottery</span>
      </h2>
      <img
        src="/images/catalog-section1.jpg"
        alt="studio"
        className="img studio-intro__img"
      />
      <div className="studio-intro__img-box">
        <img
          src="/images/img-show1.jpg"
          alt="studio"
          className="img studio-intro__img"
        />
        <img
          src="/images/img-show2.jpg"
          alt="studio"
          className="img studio-intro__img"
        />
        <img
          src="/images/img-show3.jpg"
          alt="studio"
          className="img studio-intro__img"
        />
        <img
          src="/images/img-show4.jpg"
          alt="studio"
          className="img studio-intro__img"
        />
      </div>
      <div className="studio-intro__text-box">
        <p className="text mb-4">
          I believe that my collection should be available for every home. Shop
          your fsvourite stoneware online by adding each item to your online
          shopping basket.
        </p>
        <Link to="/shop?category=all&sort=date" className="btn btn__primary">
          catalog
        </Link>
      </div>
    </div>
  );
}
