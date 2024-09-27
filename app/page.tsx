import { Container } from "./container/container";


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
          <Container>Linear</Container>
        </main>
        {/* ==== Footer ==== */}
        <footer>
          <Container>Footer</Container>
        </footer>
      </div>
    </>
  );
}
