import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fooden.com%2Fonline%2Fwp-content%2Fuploads%2Fproducts%2F031-000001-1_1.jpg&f=1&nofb=1",
    rating: 4
  },
  {
    id:2,
    name: "Samgyupsal",
    image: "http://cfile22.uf.tistory.com/image/264D923457865CCE10247B",
    rating: 5
  },
  {
    id:3,
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2016%2F06%2F05%2F58cca046622aefd99be3f1ae239dfdc81.jpg&f=1&nofb=1",
    rating: 3
  },
  {
    id:4,
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.foodconnection.bg%2Ffiles%2Fpictures%2F2017-01%2F1820%2Foriginal.jpg&f=1&nofb=1",
    rating: 3
  },
  {
    id:5,
    name: "Galbi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wadiz.kr%2Fft%2Fimages%2Fgreen001%2F2019%2F0115%2F20190115210937576_35.jpg%2Fwadiz%2Fformat%2Fjpg%2Fquality%2F80%2Foptimize&f=1&nofb=1",
    rating: 4
  },
  {
    id:6,
    name: "Mandu",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile207.uf.daum.net%2Fimage%2F1571673B4FB3CDC80EF919&f=1&nofb=1",
    rating: 5
  }
];

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
