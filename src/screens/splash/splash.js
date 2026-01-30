import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/unnamed.jpg')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <Text style={styles.title}>Splash Screen</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {

    resizeMode: 'contain',
    opacity: 0.95,
    width: undefined,
    height: undefined,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // dim the background image
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
})