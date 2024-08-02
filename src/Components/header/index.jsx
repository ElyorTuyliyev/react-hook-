import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../../Container";
import Links from "./components";
import HeaderStyle from "./header.style";

const Header = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Xondamir");
  const rendersCount = useRef(null);

  const handleChangeName = useCallback(() => {
    setName();
  }, [name]);

  const link = [
    {
      name: "HOME",
      name: "CONTACT",
      name: "ABOUT",
      name: "FOOTER",
    },
  ];

  return (
    <header
      className="header"
      style={{ backgroundColor: "black", borderBottom: "1px solid #4d4d4d" }}
    >
      <Container>
        <h1 onClick={handleChangeName} style={{ color: "white" }}>
          {name}
        </h1>
        <p ref={rendersCount}>1</p>
        <HeaderStyle>
          <ul className="header__link-wrapper">
            {link.map((item) => (
              <Links {...item} count={handleChangeName} />
            ))}
          </ul>
        </HeaderStyle>
      </Container>
    </header>
  );
};

export default Header;
