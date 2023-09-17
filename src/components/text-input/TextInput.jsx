import React from "react";

const TextInput = (props) => {
  const {
    topLeftLabel,
    topRightLabel,
    bottomLeftLabel,
    bottomRightLabel,
    inputType,
    inputPlaceHolder,
    inputReStyle,
    inputValue,
    setInputValue,
    onFocus,
    onBlur,
  } = props;

  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          {topLeftLabel?.length > 0 && topLeftLabel !== "" ? (
            <span className="label-text">{topLeftLabel}</span>
          ) : null}
          {topRightLabel?.length > 0 && topRightLabel !== "" ? (
            <span className="label-text-alt">{topRightLabel}</span>
          ) : null}
        </label>
        <input
          type={inputType ?? 'text'}  // ?? check null or undefined
          placeholder={inputPlaceHolder ?? 'Please enter your text'}
          className={`input input-bordered w-full max-w-xs`, inputReStyle}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Nhận event (e) khi người dùng gõ bàn phím và set giá trị cho state = e.target.value
          onFocus={onFocus}
        onBlur={onBlur}
        />
        <label className="label">
          {bottomLeftLabel?.length > 0 && bottomLeftLabel !== "" ? (
            <span className="label-text">{bottomLeftLabel}</span>
          ) : null}
          {bottomRightLabel?.length > 0 && bottomRightLabel !== "" ? (
            <span className="label-text-alt">{bottomRightLabel}</span>
          ) : null}
        </label>
      </div>
    </div>
  );
};

export default TextInput;
