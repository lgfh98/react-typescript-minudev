import { Sub } from "../types";
import useNewSubReducer from "../hooks/useNewSubForm";

type Props = {
  onNewSub: (newSub: Sub) => void;
};

const Form = ({ onNewSub }: Props) => {
  // const [formValues, setFormValues] =
  //   useState<FormState["formValues"]>(INITIAL_STATE);
  const [formValues, dispatch] = useNewSubReducer();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(formValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (
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
    // setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // const handleClear = () => {
  //   // setFormValues(INITIAL_STATE);
  //   dispatch({
  //     type: "clear",
  //   });
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={formValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
          required
        />
        <input
          value={formValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
          onChange={handleChange}
          required
        />
        <input
          value={formValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
          required
        />
        <textarea
          value={formValues.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
          required
        />
        <button
          onClick={() => {
            dispatch({ type: "clear" });
          }}
          type="button"
        >
          Limpiar formulario
        </button>
        <button type="submit">Guardar subscriptor</button>
      </form>
    </>
  );
};

export default Form;
