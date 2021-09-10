import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Skeleton from '../Skeleton';
import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantePhoto, Title, Address } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formated_address}</Address>
      </RestaurantInfo>
      <RestaurantePhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoaded(true)}
        alt="Foto Restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
