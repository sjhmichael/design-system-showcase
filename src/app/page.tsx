import Navbar from "./components/Navbar";
import StarGrid from "./components/StarGrid";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <StarGrid />
      <Main />
      <Reviews />
      <Footer />
    </div>
  );
}
