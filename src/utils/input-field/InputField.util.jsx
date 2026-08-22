/**
 * @file InputField.util.jsx
 * @module Components/InputField
 * @description Accessible input field with dynamic floating labels, focus outlines, and password toggles.
 */

import React, { useState, useId } from "react";

const InputField = ({
  icon,
  value = "",
  onChange,
  placeholder = " ",
  style,
  inputStyle,
  secureTextEntry,
  editable = true,
  dropdownOptions,
  selectedValue,
  onValueChange,
  bgColor,
  textColor,
  width,
  label,
  type = "text",
  required = false,
  multiline = false,
  rows = 3,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputId = useId();

  const isPassword = secureTextEntry || type === "password";
  const actualType = isPassword ? (showPassword ? "text" : "password") : type;

  const isFloating = isFocused || Boolean(value) || Boolean(selectedValue);

  const baseInputStyles = `
    w-full px-4 py-3.5 rounded-xl border border-slate-200 
    text-sm font-medium text-slate-800 bg-slate-50/60 outline-none 
    transition-all duration-200 ease-in-out
    focus:bg-white focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10
    disabled:cursor-not-allowed disabled:opacity-60
  `;

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ ...style, width: width || "100%" }}
    >
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3.5 text-slate-400 text-lg pointer-events-none z-10">
            {icon}
          </span>
        )}

        {dropdownOptions ? (
          <select
            id={inputId}
            value={selectedValue}
            onChange={onValueChange}
            required={required}
            disabled={!editable}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`${baseInputStyles} appearance-none cursor-pointer`}
            style={{
              backgroundColor: bgColor,
              color: textColor,
              paddingLeft: icon ? "2.75rem" : "1rem",
              paddingRight: "2.5rem",
              ...inputStyle,
            }}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {dropdownOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : multiline ? (
          <textarea
            id={inputId}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            readOnly={!editable}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`${baseInputStyles} resize-y min-h-[100px]`}
            style={{
              backgroundColor: bgColor,
              color: textColor,
              paddingLeft: icon ? "2.75rem" : "1rem",
              ...inputStyle,
            }}
          />
        ) : (
          <input
            id={inputId}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={actualType}
            required={required}
            readOnly={!editable}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={baseInputStyles}
            style={{
              backgroundColor: bgColor,
              color: textColor,
              paddingLeft: icon ? "2.75rem" : "1rem",
              paddingRight: isPassword ? "2.75rem" : "1rem",
              ...inputStyle,
            }}
          />
        )}

        {/* Dynamic Floating Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={`absolute transition-all duration-200 pointer-events-none z-10 rounded-md px-1 font-semibold ${
              icon ? "left-9" : "left-3.5"
            } ${
              isFloating
                ? "-top-2.5 !left-3 text-xs text-teal-700 bg-white shadow-2xs"
                : "top-3.5 text-sm text-slate-400"
            }`}
          >
            {label}
          </label>
        )}

        {/* Toggle Password Visibility */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none p-1.5 rounded-lg transition-colors z-20"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
