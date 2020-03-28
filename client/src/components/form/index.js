import React, { useState } from 'react';
import './form.css';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        ev => {
          const {name, value} = ev.target;
            setValues({
                ...values,
                [name]: value
            });
        }
    ];
};

export const Label = props => {
  return (
    <label {...props} />
  );
};

export const ValidHelpLabel = props => {
  return (
    <small className="form-text valid-feedback" {...props} />
  );
};

export const InvalidHelpLabel = props => {
  return (
    <small className="form-text invalid-feedback" {...props} />
  );
};

export const Input = props => {
  return (
    <div className="form-group">
      <input className="form-control input" {...props} />
    </div>
  );
};

export const Select = props => {
  return (
    <div className="form-group">
      <select className="form-control input" {...props}>
        <option></option>
        <option>{props.option1}</option>
        <option>{props.option2}</option>
      </select>
    </div>
  );
};

export const InputGroup = props => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder={props.placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" {...props} />
      <div className="input-group-append">
        <button onClick={props.onClick} className="btn btn-success" type="button" id="button-addon2" {...props}>Reset</button>
      </div>
    </div>
  );
};

export const FormBtn = props => {
  return (
    <button {...props} className="submit btn btn-dark btn-block">
      {props.children}
    </button>
  );
};