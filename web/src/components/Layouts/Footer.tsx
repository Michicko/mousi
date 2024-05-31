import { Link } from "react-router-dom";
import { footerLinks } from "../../data";

interface innerLinkProps{
  name: string
  link: string
}

interface objectLinkProps {
  name: string
  links: innerLinkProps[]
}

export default function Footer() {

  const scrollToTop = (): void => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer container">
      <div className="footer__box">
        <h5 className="footer__title">Interested in a Musienko Ceramic?</h5>
        <a href="mailto:musienko.ceramics@gmail.com" className="footer__mail">
          musienko.ceramics@gmail.com
        </a>
      </div>
      <div className="footer__box footer__box--grid">
        {footerLinks.map((el: objectLinkProps) => {
          return (
            <div className="footer__inner-box" key={el.name}>
              <h5 className="footer__title">{el.name}</h5>
              <>
                {el.name === "social media"
                  ? el.links.map((item: innerLinkProps, i) => {
                      return (
                        <a
                          href={item.link}
                          className="footer__link"
                          target="_blank"
                          key={(i * 2) + 1}
                        >
                          {item.name}
                        </a>
                      );
                    })
                  : el.links.map((item: innerLinkProps, i) => {
                      return (
                        <Link to={item.link} className="footer__link"   key={(i * 3) + 1}>
                          {item.name}
                        </Link>
                      );
                    })}
              </>
            </div>
          );
        })}
      </div>
      <button className="footer__btn" type="button" onClick={scrollToTop}>
        Back to Top
      </button>
      <div className="footer__box footer__box--flex">
        <p className="footer__copy">&copy; {new Date().getUTCFullYear()} Copyrights.</p>
        <div className="footer__inner-box footer__inner-box--flex">
          <p className="footer__text">
            Designed by <a href="https://www.behance.net/yunusova2328" className="footer__link footer__link--sm">Eliza Yunusova</a>
          </p>
          <p className="footer__text">
            Created by{" "}
            <a href="https://github.com/Michicko" className="footer__link footer__link--sm">
              Michky
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
