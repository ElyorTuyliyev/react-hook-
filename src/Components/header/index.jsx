import { useCallback, useRef, useState } from "react";
import Container from "../../Container";
import Links from "./components";
import HeaderStyle from "./header.style";

const Header = () => {
  const [name, setName] = useState();
  const rendersCount = useRef(null);

  const handleChangeName = useCallback(() => {
    setName();
  }, [name]);

  const link = [
    {
      name: "HOME",
    },
    {
      name: "CONTACT",
    },
    {
      name: "ABOUT",
    },
    {
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
        <p ref={rendersCount}></p>
        <HeaderStyle>
          <ul className="header__link-wrapper">
            {link.map((item) => (
              <Links {...item} />
            ))}
          </ul>
        </HeaderStyle>
      </Container>
    </header>
  );
};

export default Header;
