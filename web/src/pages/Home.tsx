import AboutIntro from "../components/AboutIntro";
import Booking from "../components/Booking";
import Main from "../components/Layouts/Main";
import Socials from "../components/Socials";
import StudioIntro from "../components/StudioIntro";
import Subscription from "../components/Subscription";
import VideoBg from "../components/VideoBg";

export default function Home() {
  return (
    <>
      <Main>
        <section className="section container">
          <AboutIntro showBtn={true} />
        </section>
        <section className="section container">
          <StudioIntro />
        </section>
        <section>
          <VideoBg />
        </section>
        <section className="section container">
          <Booking />
        </section>
        <section className="section socials__section">
          <Socials />
        </section>
        <section className="section container">
          <Subscription />
        </section>
      </Main>
    </>
  );
}
