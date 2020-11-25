import React, { useState, useContext, useEffect } from 'react';
import { Text } from 'react-native';

import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  ContainerEmail,
  TextoEmail,
  ContainerButtons,
  Button,
  ButtonText,
  Input,
  ContainerMessages,
  Message

} from './styles';

import firebase from 'firebase';
import 'firebase/firestore';

const Chat3 = ({navigation}) => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { user } = useContext(UsuarioContext);


  const ListenUpdateMessages = (snap) => {

    const data = snap.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    // console.log(data)
    setMessages(data)
  }


  useEffect(() => {
    const listener = firebase.firestore()
      .collection('chat3').orderBy("timestamp","asc").onSnapshot(ListenUpdateMessages)

    return () => listener()
  }, [])



  const handleAddMessages = () => {
    if (newMessage == "") {
      console.warn('Preencha o campo')
      return
    }

    try {
      firebase.firestore().collection('chat3').add({
        texto: newMessage,
        lida: false,
        usuario: user.email,
        timestamp: new Date().getTime()
      })
      setNewMessage("");
    } catch (err) {
      console.warn("erro de comunicação, tente mais tarde");
    }
  }

  return (
    <Container>
      <ContainerEmail>
        <TextoEmail>
          {user.email}
        </TextoEmail>
      </ContainerEmail>

      <ContainerMessages>
        {messages.map(message => (
          <Message key={message.id}>{message.texto}</Message>
        ))}
      </ContainerMessages>

      <ContainerButtons>
        <Input
          placeholder="Digite sua mensagem"
          onChangeText={text => setNewMessage(text)}
          value={newMessage}
        />

        <Button invert={true}
          onPress={() => { handleAddMessages() }}
        >
          <ButtonText invert={true}>Enviar</ButtonText>
        </Button>
      </ContainerButtons>

    </Container>
  )
}

export default Chat3