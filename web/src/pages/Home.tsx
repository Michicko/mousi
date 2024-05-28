import AboutIntro from "../components/AboutIntro";
import Main from "../components/Layouts/Main";
import StudioIntro from "../components/StudioIntro";

export default function Home() {
  return (
    <>
      <Main>
        <section className="section container">
          <AboutIntro />
        </section>
        <section className="section container">
          <StudioIntro />
        </section>
      </Main>
    </>
  );
}
