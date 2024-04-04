import { Container } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.left}>
          <img src="img/logo.svg" alt="" />
        </div>
        <div className={classes.middle}>
          <div>Bidra</div>
          <div>Om nettstedet</div>
          <div>Kontakt oss</div>
        </div>
        <div className={classes.right}>
          <img src="img/github.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export { Header };
