import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: any;
  dataTestIdPrefix: string;
  classes: string;
  classActive: string;
}

const CustomLink = (props: CustomLinkProps) => {
  const {
    to = "/",
    children = null,
    dataTestIdPrefix = "test-id",
    classes = "nav-link",
    classActive = "active",
  } = props;
  let resolved: any = useResolvedPath(to);
  let match: any = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link data-testid={`${dataTestIdPrefix}-${to.replace('/','')}`} className={`${classes} ${match ? classActive : ""}`} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;