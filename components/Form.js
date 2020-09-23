import Base from "./Base";
import FormField from "./FormField";
import FormButton from "./FormButton";
import FormErrorMessage from "./FormErrorMessage";
import FormSwitch from "./FormSwitch";

const Form = (props) => Base(props);

Form.Field = FormField;
Form.Button = FormButton;
Form.ErrorMessage = FormErrorMessage;
Form.Switch = FormSwitch;

export default Form;
