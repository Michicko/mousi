import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { links } from "../../data";

interface NavProps {
  pathname: string;
}

export default function Nav({ pathname }: NavProps) {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };

  const closeSidebar = () => {
    setIsSidebarOpened(false);
  };

  useEffect(() => {
    function resetNav() {
      if (window.innerWidth >= 768) {
        if (!isSidebarOpened) return;
        console.log(isSidebarOpened);
        closeSidebar();
      }
    }

    window.addEventListener("resize", resetNav);

    return () => {
      window.removeEventListener("resize", resetNav);
    };
  }, [isSidebarOpened]);

  useEffect(() => {
    if (isSidebarOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSidebarOpened]);

  const getNavButtonClassList = (
    pathname: string
  ): string => {
    let defaultClass = "nav__menu-btn";

    if (isSidebarOpened) {
      defaultClass += " nav__menu-btn--isOpened";
    }

    if (pathname == "/") {
      defaultClass += " nav__menu-btn--light";
    } else {
      defaultClass += " nav__menu-btn--dark";
    }

    return defaultClass;
  };

  return (
    <nav className="nav container">
      <button
        className={getNavButtonClassList(pathname)}
        onClick={toggleSidebar}
        role="button"
        tabIndex={0}
      >
        <div className="line"></div>
      </button>
      <Link
        to={"/"}
        className={`nav__logo ${
          pathname == "/" ? "nav__logo--light" : "nav__logo--dark"
        }`}
      >
        MUSIENKO
      </Link>
      <NavLinks pathname={pathname} links={links} isMobile={false} />
      <button
        className={
          pathname == "/"
            ? "nav__cart-btn nav__cart-btn--light"
            : "nav__cart-btn nav__cart-btn--dark"
        }
      >
        <p className="nav__cart-btn-text">Cart</p>
        <svg
          className="nav__cart-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.74181 20.5545C4.94143 22 7.17414 22 11.6395 22H12.3607C16.8261 22 19.0589 22 20.2585 20.5545M3.74181 20.5545C2.54219 19.1091 2.95365 16.9146 3.77657 12.5257C4.36179 9.40452 4.65441 7.84393 5.7653 6.92196M3.74181 20.5545C3.74181 20.5545 3.74181 20.5545 3.74181 20.5545ZM20.2585 20.5545C21.4581 19.1091 21.0466 16.9146 20.2237 12.5257C19.6385 9.40452 19.3459 7.84393 18.235 6.92196M20.2585 20.5545C20.2585 20.5545 20.2585 20.5545 20.2585 20.5545ZM18.235 6.92196C17.1241 6 15.5363 6 12.3607 6H11.6395C8.46398 6 6.8762 6 5.7653 6.92196M18.235 6.92196C18.235 6.92196 18.235 6.92196 18.235 6.92196ZM5.7653 6.92196C5.7653 6.92196 5.7653 6.92196 5.7653 6.92196Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
            stroke="#1C274C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <p className="total">5</p>
      </button>
      <div
        className={`nav__mobile ${
          isSidebarOpened ? "nav__mobile--isOpened" : ""
        }`}
      >
        <NavLinks
          pathname={pathname}
          links={links}
          isMobile={true}
          cb={closeSidebar}
        />
      </div>
    </nav>
  );
}
