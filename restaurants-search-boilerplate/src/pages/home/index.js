import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field/dist/index';

import logo from '../../assets/logo.svg';

import { Container, Search } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo do Restaurante" />

        <TextField
          label="pesquisar"
          outlined
          // onTrailingIconSelect={() => this.setState({ value: '' })}
          // trailingIcon={<MaterialIcon role="button" icon="delete" />}
        >
          <Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
