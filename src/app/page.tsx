import Image from "next/image";
import Navbar from "./components/Navbar";
import StarGrid from "./components/StarGrid";
import Main from "./components/Main";

export default function Home() {
  return (
    <div>
      <Navbar />
      <StarGrid />
      <Main />
    </div>
  );
}
