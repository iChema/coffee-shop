import React, {useState} from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DATA = [
  {
    id: "1",
    title: "Café americano",
  },
  {
    id: "2",
    title: "Café capuchino",
  },
  {
    id: "3",
    title: "Chocolate caliente",
  },
  {
    id: "4",
    title: "Frappé",
  },
  {
    id: "5",
    title: "Té",
  },
  {
    id: "6",
    title: "Cerveza",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function EditScreenInfo({ path }: { path: string }) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#B7A4A1" : "#CFBCB9";
    const color = item.id === selectedId ? 'white' : 'black';

    const itemSelected = (item) => {
      setSelectedId(item.id);
      console.log(`Agregar ${item.title}`)
    }

    return (
      <Item
        item={item}
        onPress={() => itemSelected(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
