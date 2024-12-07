import React, { useState } from 'react';

function ToggleText() {
  
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Toggle Text
      </button>

     
      {isVisible && (
        <p className="mt-4 text-gray-700 text-lg">
          This is the text that can be toggled. Click the button to hide or show it.
        </p>
      )}
    </div>
  );
}

export default ToggleText;
