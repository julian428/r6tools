import { forwardRef } from "react";

export default forwardRef(function StandardInput(
  { label, ...props }: any,
  ref
) {
  return (
    <div className="relative">
      <input
        type="text"
        id={label || "input"}
        {...props}
        autoComplete="off"
        ref={ref}
        className="border-b-2 outline-none py-1 peer focus:border-10 focus:border-b-2 transition-colors disabled:bg-transparent"
      />
      <label
        htmlFor={label || "input"}
        className="absolute text-gray-600 left-0 top-1 peer-focus:text-10 capitalize cursor-text peer-focus:text-xs peer-focus:-top-4 peer-disabled:-top-4 peer-disabled:text-xs transition-all"
      >
        {label || "input"}
      </label>
    </div>
  );
});
