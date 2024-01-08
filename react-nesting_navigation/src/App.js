import "./styles.css";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
import { Avatar } from "./components/Avatar";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <Logo />
        </Link>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar></Avatar>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
