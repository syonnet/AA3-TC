import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Ejercicio4() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }
  
  return (
    <View style={[styles.container, isDarkMode ? styles.darkMode : null]}>
      <Text style={[styles.text, isDarkMode ? styles.textDarkMode : null]}>
        Modo de color {isDarkMode ? "oscuro" : "claro"}
      </Text>
      <Button title="Cambiar" onPress={() => toggleTheme()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 16
  },
  textDarkMode: {
    color: 'white'
  },
  darkMode: {
    backgroundColor: 'black'
  }
});
