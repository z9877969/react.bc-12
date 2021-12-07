import PropTypes from "prop-types";
import s from "./GoBackHeader.module.scss";

export default function GoBackHeader({ title }) {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <button className={s.button}>GoBack</button>
        <h1 className={s.title}>{title}</h1>
      </div>
    </header>
  );
}

GoBackHeader.propTypes = {
  title: PropTypes.string,
};
