import { useLocation } from "react-router-dom";
import Container from "../../Container";
import AsideStyle from "./Aside.style";
import AsideLink from "./Components";

const Aside = () => {
  const link = [
    {
      name: "HOME",
      value: "home",
      to: "/home",
    },
    {
      name: "ABOUT",
      value: "about",
      to: "/about",
    },
    {
      name: "FOOTER",
      value: "footer",
      to: "/footer",
    },
    {
      name: "CONTACT",
      value: "contact",
      to: "/contact",
    },
    {
      name: "ASIDE",
      value: "aside",
      to: "/aside",
    },
    {
      name: "MAIN",
      value: "main",
      to: "/main",
    },
  ];

  const location = useLocation();

  return (
    <AsideStyle>
      <aside className="aside">
        <Container>
          <ul className="aside__link-wrapper">
            {link.map((item) => (
              <AsideLink
                key={item.value}
                {...item}
                style={{
                  ...(location.pathname === item.to
                    ? { color: "#27a6d8" }
                    : {}),
                  ...{ textDecoration: "none" },
                }}
              />
            ))}
          </ul>
        </Container>
      </aside>
    </AsideStyle>
  );
};

export default Aside;
