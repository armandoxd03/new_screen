import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Users from './Users'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Projects = () => {
  
  return (
    <View style={styles.usersContainer}>
        <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Project Alpha</Text>
        <MaterialIcons name="more-vert" size={24} color="#9aa6b9" />
      </View>
        <Text style={styles.cardSubtitle}>React Native Development Team</Text>
      
      <View style={styles.userRow}>
      <Users/>
      </View>
    </View>
  )
}

export default Projects

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
  },

    userContainer: {
    alignItems: 'center',
    marginRight: 16,
    marginTop: 10,
  },

    cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },

  cardSubtitle: {
    color: '#9aa6b9',
    fontSize: 12,
  },

  usersContainer: {
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(15,20,28,0.6)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,                        
  },

  userRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  
},
cardHeader: {
  flexDirection: 'row',          
  justifyContent: 'space-between', 
  alignItems: 'center',           
  marginBottom: 6,
},


})