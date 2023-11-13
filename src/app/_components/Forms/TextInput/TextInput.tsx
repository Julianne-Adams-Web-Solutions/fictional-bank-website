"use client";

import { useField } from "formik";

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-input-container">
      <label htmlFor={props.id || props.name} className="text-input-label">
        {label}
      </label>
      <input {...field} {...props} className="text-input" />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
