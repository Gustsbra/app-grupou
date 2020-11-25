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


const Dashboard = () => {

  return (
    <Container>

      <CaixaTextoChamada>
        <TextoChamada>
          Tela principal com Dashboard
        </TextoChamada>
      </CaixaTextoChamada>

    </Container>
  )
  }
  
export default Dashboard