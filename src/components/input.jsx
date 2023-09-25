// import React from "react";

// export const Input = ({ label, type, placeholder, value, onChange }) => (
//   <div className="form-group">
//     <label>{label}</label>
//     <input
//       type={type}
//       className="form-control"
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//     />
//   </div>
// );
import React from "react";

export const Input = ({ label, type, placeholder, value, onChange,className }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-sm">{label}</label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
