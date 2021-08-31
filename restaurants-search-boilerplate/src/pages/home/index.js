import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';
import { Card, RestaurantCard, Modal } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [modalOpened, setModalOpened] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />

          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          </TextField>

          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Nome Sei Lá" />
            <Card photo={restaurante} title="Nome Sei Lá" />
            <Card photo={restaurante} title="Nome Sei Lá" />
            <Card photo={restaurante} title="Nome Sei Lá" />
            <Card photo={restaurante} title="Nome Sei Lá" />
          </Carousel>
        </Search>

        <RestaurantCard />
      </Container>

      <Map />

      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
