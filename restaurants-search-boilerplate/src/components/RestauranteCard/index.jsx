import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantePhoto, Title, Address } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => (
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
      <Address>{restaurant.vicinity || restaurant.formated_address}</Address>
    </RestaurantInfo>
    <RestaurantePhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
      alt="Foto Restaurante"
    />
  </Restaurant>
);

export default RestaurantCard;
