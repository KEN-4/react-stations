// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
        <p> 犬の画像を表示するサイトです</p>
        <img src={dogUrl} alt='犬の画像'></img>
      </header>
    </div>
  )
}
