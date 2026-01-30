import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={{ color: '#000000' }}
        placeholder="Search"
                  />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 3,
        gap: 8,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#ffffff',
        marginBottom: 16,
      },

})