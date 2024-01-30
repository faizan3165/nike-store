import React from "react";

const Button = ({
  label,
  iconUrl,
  bgColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full  ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor}`
          : "bg-coral-red border-coral-red text-white"
      } ${fullWidth && "w-full"}`}
    >
      {label}

      {iconUrl && (
        <img src={iconUrl} alt={label} className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
