import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { RootStackParamList } from '../types';

import header from './../assets/images/header.png'; 

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Image source={header} style={{ width: 300, height: 130 }} resizeMode="contain" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Root')} style={styles.button}>
          <Text style={styles.linkText}>Nuevo pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.linkText}>Mis pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.linkText}>Sucursales</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D5D5',
    justifyContent:"space-around",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection:"column",
    justifyContent:"space-between",
    flex:0.5,
    width:300,
  },
  linkText: {
    fontSize: 25,
    color: '#E08B53',
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    borderRadius: 60,
    padding: 20,
    backgroundColor: "#fff"
  }
});
