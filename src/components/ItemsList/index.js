import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function ItemList({ data, onDelete }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View key={data.id} style={styles.viewItem}>
              <Text>{item.text}</Text>

              <TouchableOpacity
                testID={`btnDelete${data.id}`}
                style={styles.button}
                onPress={() => onDelete(item.id)}>
                <Text style={styles.textButton}>X</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
  },
  viewItem: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginBottom: 12,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#FF0000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
  },
});
