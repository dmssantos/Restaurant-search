import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantePhoto, Title, Address } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>

      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />

      <Address>Rua Rio de Janeiro, 120</Address>
    </RestaurantInfo>
    <RestaurantePhoto src={restaurante} alt="Foto Restaurante" />
  </Restaurant>
);

export default RestaurantCard;
