import React from 'react';

function Food({ name, picture }) {
  return <div>
  <h2>I like {name}</h2>
  <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fooden.com%2Fonline%2Fwp-content%2Fuploads%2Fproducts%2F031-000001-1_1.jpg&f=1&nofb=1"
  },
  {
    name: "Samgyupsal",
    image: "http://cfile22.uf.tistory.com/image/264D923457865CCE10247B"
  },
  {
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2016%2F06%2F05%2F58cca046622aefd99be3f1ae239dfdc81.jpg&f=1&nofb=1"
  },
  {
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.foodconnection.bg%2Ffiles%2Fpictures%2F2017-01%2F1820%2Foriginal.jpg&f=1&nofb=1"
  },
  {
    name: "Galbi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wadiz.kr%2Fft%2Fimages%2Fgreen001%2F2019%2F0115%2F20190115210937576_35.jpg%2Fwadiz%2Fformat%2Fjpg%2Fquality%2F80%2Foptimize&f=1&nofb=1"
  },
  {
    name: "Mandu",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile207.uf.daum.net%2Fimage%2F1571673B4FB3CDC80EF919&f=1&nofb=1"
  },
]

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
