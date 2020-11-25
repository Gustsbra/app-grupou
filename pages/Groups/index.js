import React, {} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UsuarioContext } from '../../contexts/user';

import Chat1 from '../Chat1'
import Chat2 from '../Chat2'
import Chat3 from '../Chat3'

import {
  Container,
  ContainerButtons,
  Button,
  ButtonText
} from './styles';

const Stack = createStackNavigator();

const Groups = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Meus Grupos" component={allGroups} />
      <Stack.Screen name="Grupo1" component={Chat1} />
      <Stack.Screen name="Grupo2" component={Chat2} />
      <Stack.Screen name="Grupo3" component={Chat3} />
    </Stack.Navigator>
  )
}

function allGroups ({navigation}){
  return (
    <Container>
      <ContainerButtons>
        <Button invert={true}
          onPress={() =>  navigation.push("Grupo1")}
        >
          <ButtonText invert={true}>Chat do Grupo 1</ButtonText>
        </Button>
        
        <Button invert={true}
          onPress={() =>  navigation.push("Grupo2")}
        >
          <ButtonText invert={true}>Chat do Grupo 2</ButtonText>
        </Button>
        
        <Button invert={true}
          onPress={() =>  navigation.push("Grupo3")}
        >
          <ButtonText invert={true}>Chat do Grupo 3</ButtonText>
        </Button>
      </ContainerButtons>

    </Container>
  )
}

export default Groups