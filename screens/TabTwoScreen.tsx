import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Pedido} from '../models/pedido';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const orderList  : Array<Pedido> = [
  {
    cafe : 'americano',
    azucar_tipo:'normal',
    azucar_cant: 2,
    leche:'light',
    dia: 22,
    mes : 2,
    anio: 2021,
    hora:'14:30'
    },
    {
      cafe : 'express',
      azucar_tipo:'splendar',
      azucar_cant: 1,
      leche:'entera', 
      dia: 21,
      mes : 3,
      anio: 2021,
      hora:'15:30'
      }
]


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de pedidos</Text>
      {
      orderList.map((order) => (
      <View style={styles.item}>
         <Text> {order.cafe}</Text>
         <Text> {order.azucar_tipo}</Text>
         <Text> {order.leche}</Text>
         <Text> {order.dia}</Text>
         <Text> {order.mes}</Text>
         <Text> {order.anio}</Text>
         <Text> {order.hora}</Text>
      </View>
      ))
      }
    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    marginVertical: 30,
    height: '200px',
    width: '100%',
  },
});
