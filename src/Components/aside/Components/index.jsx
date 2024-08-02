import { Link } from "react-router-dom";

const AsideLink = ({ name, to, style }) => {
  return (
    <Link style={style} to={to} className="aside__links">
      {name}
    </Link>
  );
};

export default AsideLink;
