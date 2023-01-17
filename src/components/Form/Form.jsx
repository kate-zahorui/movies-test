import { GenreSelect, NameSelect, RatingSelect } from "../";
import s from "./Form.module.css";

const Form = () => {
  return (
    <form className={s.form}>
      <NameSelect />
      <GenreSelect />
      <RatingSelect />
    </form>
  );
};

export default Form;
