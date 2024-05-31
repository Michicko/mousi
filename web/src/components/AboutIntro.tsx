import { Link } from "react-router-dom";

interface AboutIntroProps {
  showBtn: boolean;
}

export default function AboutIntro({ showBtn }: AboutIntroProps) {
  return (
    <div className="about-intro">
      <div className="about-intro__left-box">
        <h2 className="heading heading__secondary mb-2">
          <span>A combination</span>
          <span>Of beauty and and functionality</span>
        </h2>
        <div className="about-intro__box-left-inner container container--sm">
          <p className="text">
            I make all my of work in my studio in Saint Petersburg.
          </p>
          <p className="text mb-2">
            Each piece is unique and signed. Timeless quality and a perfect
            balance between beauty and function in contemporary design, that is
            what i am looking for.
          </p>
          <div className="img-box">
            <img
              src="/images/about-img1.jpg"
              alt="cool set"
              className="about-intro__img"
            />
            <img
              src="/images/about-img2.PNG"
              alt="clean vase"
              className="about-intro__img"
            />
          </div>
        </div>
      </div>
      <div className="about-intro__right-box">
        <img
          src="/images/about-img3-2.jpg"
          alt="mousienko working"
          className="about-intro__img mb-4"
        />
        <p className="text mb-4">
          I am very happy with an unexpected freckle on my plate. It is about
          craftmanship and knowing what to do together with the unexpected
          beauty that can emerge during the entire process of mixing, twisting,
          forming and glazing. It is always exciting when i open my kiln after
          firing!
        </p>
        {showBtn && (
          <Link to="/about" className="btn btn__primary">
            Read more
          </Link>
        )}
      </div>
    </div>
  );
}
