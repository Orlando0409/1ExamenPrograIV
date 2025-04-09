import React from 'react';

type ShowTypes = {
  options: number[];
  onFetch: (count: number) => void;
}

const Show = ({ options, onFetch }: ShowTypes) => {
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