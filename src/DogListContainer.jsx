// @ts-check
import React, { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
const [breeds, setBreeds] = useState([]);
const [selectedBreed, setSelectedBreed] = useState('');
const [breedImages, setBreedImages] = useState([]);

useEffect(() => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {setBreeds(Object.keys(data.message));
    })
    .catch((error) => {
      console.error("犬種一覧の取得に失敗しました", error);
    });
  }, []); 

  const handleBreedChange = (breed) => {
    setSelectedBreed(breed);
  };

  const handleShowImages = () => {
    if (selectedBreed) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
        .then((res) => res.json())
        .then((data) => setBreedImages(data.message))
        .catch((error) => console.error("犬種の画像リスト取得に失敗しました", error));
    }
  };

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={handleBreedChange} />
      <button onClick={handleShowImages}>表示</button>
      <div>
        {breedImages.map((image, index) => (
          <img key={index} src={image} alt={selectedBreed} />
        ))}
      </div>
    </div>
  );
}

export default DogListContainer;
