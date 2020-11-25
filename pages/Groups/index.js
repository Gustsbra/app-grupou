import React, { useState, useContext, useReducer } from 'react';

import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  ContainerButtons,
  Button,
  ButtonText
} from './styles';



const Groups = () => {

  const { signOut } = useContext(UsuarioContext)

  return (
    <Container>
      <ContainerButtons>
        <Button invert={true}
          onPress={() => { signOut() }}
        >
          <ButtonText invert={true}>Chat do Grupo 1</ButtonText>
        </Button>
        
        <Button invert={true}
          onPress={() => { signOut() }}
        >
          <ButtonText invert={true}>Chat do Grupo 2</ButtonText>
        </Button>
        
        <Button invert={true}
          onPress={() => { signOut() }}
        >
          <ButtonText invert={true}>Chat do Grupo 3</ButtonText>
        </Button>
      </ContainerButtons>

    </Container>
  )
}

export default Groups