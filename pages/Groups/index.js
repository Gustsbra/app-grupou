import React, { useState, useContext } from 'react';
import { Text, Image, ActivityIndicator } from 'react-native';

import {
  Container,
  Texto,
  CaixaLogin,
  Botao,
  BotaoTexto,
  ContainerBotoes,
  Input,
  InputTexto,
  ContainerButtons,
  Button,
  ButtonText,
  ForgotPassword,
  Logo,
  CaixaTextoChamada,
  TextoChamada,
  TextoGrupou

} from './styles';


const Groups = () => {

  return (
    <Container>

      <CaixaTextoChamada>
        <TextoChamada>
          Tela principal com os Grupos que pertenço
        </TextoChamada>
      </CaixaTextoChamada>

    </Container>
  )
  }
  
export default Groups