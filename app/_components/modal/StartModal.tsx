import React from "react";


interface StartModalProps {
  isOpen: boolean;
  onStart: () => void;
}

const StartModal: React.FC<StartModalProps> = ({ isOpen, onStart }) => {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-beige-100">
      <h1 className="text-5xl font-bold mb-8">Connections</h1>
      <hr className="w-1/2 border-t-2 border-white-400 mb-8" />
      <p className="text-xl font-bold mb-6">(Lit Version)</p>
      <button
        className="px-8 py-4 bg-gray-500 text-white text-2xl font-semibold rounded-md hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartModal;