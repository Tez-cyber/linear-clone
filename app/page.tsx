import { Container } from "./container/container";
import { Hero, HeroSubtitle, HeroTitle } from "./container/hero";


export default function Home() {
  return (
    <>
      <div>
        {/* ==== Header ==== */}
        <header>
          <Container>Header</Container>
        </header>
        {/* ==== Main ==== */}
        <main>
          <Container>
            <Hero>
              <HeroTitle>
                Linear is a better way <br /> to build products
              </HeroTitle>
              <HeroSubtitle>
                Meet the new standard for moder software development.
                <br />Streamline issues, sprints, and product roadmaps
              </HeroSubtitle>
            </Hero>
          </Container>
        </main>
        {/* ==== Footer ==== */}
        <footer>
          <Container>Footer</Container>
        </footer>
      </div>
    </>
  );
}
