// @ts-check
import React from 'react';

export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  return (
    <label>
      Breeds List
      <select value={selectedBreed} onChange={(e) => onBreedChange(e.target.value)}>
        {breeds.map(breed => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
    </label>
  );
};

export default BreedsSelect;
