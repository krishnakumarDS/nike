import {
  Customerreviews,
  Hero,
  Popularproduct,
  Superquality,
  Footer,
  Services,
  Specialoffer,
  Nav,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Popularproduct />
    </section>
    <section className="padding">
      <Superquality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding ">
      <Specialoffer />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
