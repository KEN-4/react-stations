// @ts-check
import React, { useState, useEffect } from 'react';

export const DogListContainer = () => {

const [breeds, setBreeds] = useState([]);

useEffect(() => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {setBreeds(data.message);
    })
    .catch((error) => {
      console.error("犬種一覧の取得に失敗しました", error);
    });
  }, []); 
}

