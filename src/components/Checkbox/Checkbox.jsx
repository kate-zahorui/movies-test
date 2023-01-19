import { FiCheck } from "react-icons/fi";
import s from "./Checkbox.module.css";

const Checkbox = ({ isSelected }) => {
  return <div className={s.checkbox}>{isSelected && <FiCheck />}</div>;
};

export default Checkbox;
