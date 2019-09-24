import React, { useState } from 'react';
import './App.css';
import "antd/dist/antd.css";

import Helicopter from './Helicopter/helicopters';

function App() {
  const [helicopters] = useState([
    {
      'name': 'Focke-Wulf Fw 61',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      'name': 'Sikorsky R-4',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      'name': 'Bell 47',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
    {
      'name': 'Focke-Wulf Fw 61',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      'name': 'Sikorsky R-4',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      'name': 'Bell 47',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
    {
      'name': 'Focke-Wulf Fw 61',
      'date': 1936,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x553/gallery-1488384411-screen-shot-2017-03-01-at-110225-am.png?resize=980:*'
    },
    {
      'name': 'Sikorsky R-4',
      'date': 1942,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/1280x753/gallery-1488385872-screen-shot-2017-03-01-at-113048-am.png?resize=980:*'
    },
    {
      'name': 'Bell 47',
      'date': 1945,
      'src': 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/09/980x522/gallery-1488388001-bell-47-credit-keystonegetty.png?resize=980:*'
    },
  ])
  return (
    <div className="App">
      <>
        <Helicopter helicopters={helicopters} />
      </>
    </div>
  );
}

export default App;
