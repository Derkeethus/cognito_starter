import React from "react";

function FormErrors(props) {
  if (
    props.formerrors &&
    (props.formerrors.blankfield || props.formerrors.matchedpassword)
  ) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">
          {props.formerrors.matchedpassword
            ? "Password value does not match confirm password value"
            : ""}
        </div>
      </div>
    );
  } else if (props.formerrors && props.formerrors.cognito) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">
          {props.formerrors.cognito.message}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;
