import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

/* {...props.input} ensures that all the key value pairs in
this input object which we receive on props input are added as
props to input. For eg. if the input we receive via the label
htmlFor={props.input.id} has (type="text"), then this the spread
operator {...props.input} will make sure that (type="text") is being added.
*/
