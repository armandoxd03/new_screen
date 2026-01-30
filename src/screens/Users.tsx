import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
const Users = () => {
const User_Count = Math.floor(Math.random() *  3) + 1;
const users = Array.from({ length: User_Count }).map((_, index) => (
  <View key={index} style={styles.userContainer}>
            <View style={styles.avatarBadge}>
                <Text style={styles.avatarText}>JR</Text>
            </View>
            <Text style={styles.userName}>Username</Text>
  </View>
));

  return (
    <View style={styles.usersContainer}>{users}</View>
  )
}

export default Users

const styles = StyleSheet.create({

avatarBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1f7aef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  
  },

  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

userName: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 8,
    justifyContent: 'center',
  },

    userContainer: {
    alignItems: 'center',
    marginRight: 16,
    marginTop: 10,
  },


  usersContainer: {
     flexDirection: 'row'},

})