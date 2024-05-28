import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface LinkProps{
    name: string;
    link: string;
}

interface NavLinksProps{
  pathname: string;
  links: Array<LinkProps>;
  isMobile: boolean;
  cb?:MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLinks({ pathname, links, isMobile, cb }: NavLinksProps) {

  const getClassList = (item: LinkProps, pathname: string, isMobile: boolean): string => {

    let navLink= 'nav__link';

    if(pathname === '/'){
      navLink += " nav__link--light";

      if(isMobile){
        navLink = "nav__link nav__link--light nav__link--mobile"
      }

    } else{
      navLink += " nav__link--dark"

      if(isMobile){
        navLink = "nav__link nav__link--light nav__link--mobile"
      }
    }    

    return `${pathname == item.link ? `${navLink} nav__link--active` : navLink}`
  };

  return (
    <div className={`nav__links ${isMobile ? "nav__links--mobile" : ""}`}>
      {links.map((item, i) => {
        return (
          <Link
            key={i}
            to={item.link}
            className={getClassList(item, pathname, isMobile)}
            onClick={cb}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
