// @ts-check
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const changeImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then((data) => {setDogUrl(data.message);
      })
      .catch((error) => {
        console.error("画像の取得に失敗しました", error);
      });
    };

  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl = { dogUrl } />
      <button onClick={changeImage}>更新</button>
    </div>
  );
};