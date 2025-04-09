import React from 'react';

interface ShowProps {
  options: number[];
  onFetch: (count: number) => void;
}

const Show: React.FC<ShowProps> = ({ options, onFetch }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onFetch(option)}>
          {option} 
        </button>
      ))}
    </div>
  );
};

export default Show;