import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = () => {
    const total = parseFloat(precio) * cantidad;
    const productoNuevo = { producto, precio: parseFloat(precio), cantidad, total };
    setCarrito([...carrito, productoNuevo]);
    limpiarCampos();
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = [...carrito];
    nuevosProductos.splice(index, 1);
    setCarrito(nuevosProductos);
  };

  const limpiarCampos = () => {
    setProducto('');
    setPrecio('');
    setCantidad(1);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productoItem}>
      <Text>{item.producto}</Text>
      <Text>Precio: ${item.precio.toFixed(2)}</Text>
      <Text>Cantidad: {item.cantidad}</Text>
      <Text>Total: ${item.total.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => eliminarProducto(index)}>
        <Text style={styles.eliminarBtn}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienda de Todito</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Producto"
          value={producto}
          onChangeText={setProducto}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          keyboardType="numeric"
          value={precio}
          onChangeText={setPrecio}
        />
        <View style={styles.contador}>
          <Button title="-" onPress={() => setCantidad(Math.max(cantidad - 1, 1))} />
          <Text style={styles.cantidad}>{cantidad}</Text>
          <Button title="+" onPress={() => setCantidad(cantidad + 1)} />
        </View>
        <TouchableOpacity style={styles.agregarBtn} onPress={agregarProducto}>
          <Text style={styles.agregarBtnText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={carrito}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.total}>Total: ${carrito.reduce((total, item) => total + item.total, 0).toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {

    marginBottom: 20,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#00420e',
    marginBottom: 10,
    borderRadius:10
  },
  contador: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    marginBottom: 10,
  },
  cantidad: {
    marginHorizontal: 10,
  },
  productoItem: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  eliminarBtn: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,

  },
  total: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 18,
  },
  agregarBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  agregarBtnText: {
    color: 'white',
    fontSize: 25,
  },
});

export default App;
