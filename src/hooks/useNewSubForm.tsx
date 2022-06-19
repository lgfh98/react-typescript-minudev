import { useReducer } from "react";
import { Sub } from "../types";

type FormState = {
  formValues: Sub;
};

type FormReducerAction =
  | {
      type: "change_value";
      payload: { inputName: string; inputValue: string };
    }
  | { type: "clear" };

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

const formReducer = (
  state: FormState["formValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "clear":
      return INITIAL_STATE;
  }
};

const useNewSubReducer = () => {
  const [formValues, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const clearForm = () => dispatch({ type: "clear" });
  const changeValueEvent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };
  return { formValues, clearForm, changeValueEvent };
};

export default useNewSubReducer;
