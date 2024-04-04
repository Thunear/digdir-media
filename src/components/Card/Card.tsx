import { HTMLAttributes } from "react";
import classes from "./Card.module.css";
import cn from "classnames";

type CardProps = {
  title: string;
  type: string;
  img: string;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ title, type, img, ...rest }: CardProps) => {
  return (
    <div className={classes.card} {...rest}>
      <div className={classes.imgContainer}>
        <img src={img} alt="Alt" className={classes.img} />
      </div>
      <div className={classes.tags}>
        <div
          className={cn(
            classes.tag,
            { [classes.tagBlue]: type === "icon" },
            { [classes.tagYellow]: type === "illustration" }
          )}
        >
          {type === "icon" ? "Ikon" : ""}
          {type === "illustration" ? "Illustrasjon" : ""}
          {type === "logo" ? "Logo" : ""}
        </div>
      </div>
      <h2 className={classes.title}>{title}</h2>
    </div>
  );
};

export { Card };
