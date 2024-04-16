import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Card from './componentes/card';
import Header from './componentes/header';
import tarefas from './data';

export default function App() {
  return (
    <View style={estilo.container}>

      <Header />

      <View style={{ width: '100%' }}>
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              porcentagem={item.porcentagem}
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={item.imagem}
            />
          )}
        />
      </View>


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
