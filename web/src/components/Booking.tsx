import { Link } from "react-router-dom";

export default function Booking() {
  return (
    <div className="booking">
      <div className="booking__box">
        <h2 className="heading heading__secondary mb-2">
          <span>Mousienko</span>
          <span>pottery classes</span>
        </h2>
        <div className="booking__text-box container container--sm">
          <p className="text mb-2">
            Learn how to create your own ceramics at our cozy studio in the
            heart of Saint Petersburg. All our classes are small teams and are
            taught in both Russian and English.
          </p>
          <Link to="/contact" className="btn btn__primary">
            Book
          </Link>
        </div>
      </div>

      <div className="booking__img-box">
        <img
          src="/images/class-img.jpg"
          alt="book"
          className="booking__img booking__img--main"
        />
        <img
          src="/images/studio-1.jpg"
          alt="moulding"
          className="booking__img booking__img--sm"
        />
      </div>
      <Link to="/contact" className="btn btn__primary">
        Book
      </Link>
    </div>
  );
}
