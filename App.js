import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Card from './componentes/card';
import Header from './componentes/header';

export default function App() {
  return (
    <View style={estilo.container}>

      <Header />

      <Card
        porcentagem='25%'
        titulo='Viajar'
        imagem='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg'
        descricao='Sinistro'
      />
      <Card
        porcentagem='100%'
        titulo='olha a terra'
        imagem='https://st.focusedcollection.com/13422768/i/650/focused_160565312-stock-photo-satellite-view-of-earth.jpg'
        descricao='oi terra'
      />
      <Card
        porcentagem='15%'
        titulo='exercicio'
        imagem='https://static.vecteezy.com/ti/fotos-gratis/t1/22653879-fantasia-ilha-com-cachoeiras-3d-ilustracao-elementos-do-isto-imagem-mobiliado-de-nasa-generativo-ai-gratis-foto.jpg'
        descricao='ola'

      />
      <Card
        porcentagem='45%'
        titulo='leitura'
        imagem='https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg'
        descricao='oi'

      />

      <Card
        porcentagem='68%'
        titulo='ler livros'
        imagem='https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg'
        descricao='leitura'

      />

      <Card
        porcentagem='48%'
        titulo='CODIGOS'
        imagem='https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg'
        descricao='informaticos'

      />
      <Card
        porcentagem='48%'
        titulo='CODIGOS'
        imagem='https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg'
        descricao='informaticos'

      />

    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});
