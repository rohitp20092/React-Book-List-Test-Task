import React from "react";

const errorMessage = (error, warning) =>
  (error && <span style={{color:"red"}} className="field-error pl-1">{error}</span>) ||
  (warning && <span className="field-error pl-1">{warning}</span>);

export const renderInputField = ({
  input,
  label,
  placeholder,
  type,
  inputClass,
  meta: { touched, error, warning },
  isRequired,
  isDisabled,
}) => (
  <div className="form-group mb-3">
    <label className="custom-label">
      {label}
      {isRequired && <span style={{color:"red"}} className="require-red required-marker"> *</span>}
    </label>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={ 
        inputClass ||
        `form-control ${
          touched && errorMessage(error, warning) && "input-field-error"
        }`
      }
      disabled={isDisabled ? true : false}
    />
    {touched && errorMessage(error, warning)}
  </div>
);

export const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";
