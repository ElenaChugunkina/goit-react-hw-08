

import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const idName = useId();
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <input
        placeholder="Find contacts"
        className={css.input}
        id={idName}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
}

