import { Container } from "./container/container";
import { Hero } from "./container/hero";


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
            <Hero
              title="Linear is a better way to build products"
              subtitle={`Meet the new standard for moder software development.
                         Streamline issues, sprints, and product roadmaps
                `}
            />
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
