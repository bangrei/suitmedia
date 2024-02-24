import Board from "./components/Board";
import ScrollTopButton from "./components/ScrollTopButton";

export default function Home() {
  return (
    <div className="main-page">
      <Board />
      <ScrollTopButton />
    </div>
  );
}
