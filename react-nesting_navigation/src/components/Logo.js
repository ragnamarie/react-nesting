import { Image } from "./Image";
import logo from "../img/logo.jpg";

export function Logo() {
  return (
    <a>
      <Image src={logo} alt="logo" />
    </a>
  );
}
