import Main from "../components/Layouts/Main";
import AboutIntro from "../components/AboutIntro";
import StudioIntro from "../components/StudioIntro";
import Booking from "../components/Booking";
import Socials from "../components/Socials";

export default function About() {
  return (
    <Main>
      <section className="section container">
        <AboutIntro showBtn={false} />
      </section>
      <section className="section container">
        <StudioIntro />
      </section>
      <section className="section container">
        <Booking />
      </section>
      <section className="section socials__section">
        <Socials />
      </section>
    </Main>
  );
}
