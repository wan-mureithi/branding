import { MoveUpRight } from 'lucide-react';

export function GradientArrowButton() {
    return (
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(123.74deg, #FFBD00 0%, #7937FF 88.9%)",
        }}
      >
        <span className="text-black"><MoveUpRight /></span>
      </button>
    )
  }