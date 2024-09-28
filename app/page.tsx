import { Container } from "./components/container";
import { Hero, HeroSubtitle, HeroTitle } from "./components/hero";


export default function Home() {
  return (
    <>
      <div>
        {/* ==== Header ==== */}
        <header>
          <Container>Header</Container>
        </header>
        {/* ==== Main ==== */}
        <main className="relative">
          <Container>
            <Hero>
              <HeroTitle>
                Linear is a better way <br /> to build products
              </HeroTitle>
              <HeroSubtitle>
                Meet the new standard for moder software development.
                <br />Streamline issues, sprints, and product roadmaps
              </HeroSubtitle>
              <img
                src="/hero.webp" 
                alt="HeroImage" 
              />
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
