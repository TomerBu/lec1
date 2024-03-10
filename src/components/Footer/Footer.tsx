// import "./Footer.css";
import "./Footer.css";
import css from "./Footer.module.css";

//Named export
const Footer = () => {
  //Event handlers:
  const onFooterClicked = () => {
    alert("Footer Clicked");
  };

  return (
    <footer onClick={onFooterClicked} className={css.text}>
      Footer
    </footer>
  );
};

export default Footer;
