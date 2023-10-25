import { type FC } from "react";

type IntButton = {
  title: String,
  onClick: () => void;
}

const Button: FC<IntButton> = ({ title, onClick } : IntButton) => {
  return (
    <button
      className="btn px-4 py-2 bg-[#d90429] rounded font-medium text-xs text-white hover:shadow hover:bg-[#c1121f]"
      onClick={onClick}
    >
      { title }
    </button>
  )
}

export default Button