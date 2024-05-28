import ButtonLink from "../ButtonLink";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const { pathname: path, search } = location;
  const pathname = path + search;

  return (
    <header className={`header ${pathname === "/" ? "home" : ""}`}>
      <Nav pathname={pathname} />
      {pathname === "/" && (
        <div className="landing container">
          <div className="landing__box">
            <div className="landing__img-box">
              <h1 className="primary-heading landing__heading">
                <span>Handcrafted</span>
                <span>with</span>
                <span>love</span>
              </h1>
              <img
                src="/images/header-img-2.jpg"
                alt="mousienko moulding"
                className="landing__img"
              />
            </div>
            <ButtonLink to="/shop" className="btn btn__neutral">
              Catalog
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
