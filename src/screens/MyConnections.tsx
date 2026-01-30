import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Search from '../Search';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TEAM_COUNT = 4;
const MyConnections = () => {
   return (
      <View style={styles.card}>
            <Text style={styles.connectionTitle}>My Connections</Text>
            <View>
              <Search/>
            </View>
  
            <View style={styles.cardHeader}>
              <View style={styles.avatarBadge}>
                <Text style={styles.avatarText}>JR</Text>
              </View>
                  <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>Mike Doe</Text>
                  <Text style={styles.cardSubtitle}>Software Engineer</Text>
                  </View>
                  <View style={styles.rightSection}>
                    <MaterialIcons name="more-vert" size={24} color="#9aa6b9" />
                    <TouchableOpacity style={[styles.messageBtn, styles.outlineBtn]} onPress={() => {}} >
                      <Text style={styles.cardSubtitle}>Message</Text>
                    </TouchableOpacity>
                  </View>
              </View>
              <View>
                <TouchableOpacity style={[styles.messageBtn, styles.outlineBtn]} onPress={() => {}} >
                  <Text style={styles.cardSubtitle}>Add Project</Text>
                </TouchableOpacity>
              </View>
          </View>
    )
  }
  
  export default MyConnections
  
  const styles = StyleSheet.create({
  
    avatarBadge: {
      width: 44,
      height: 44,
      borderRadius: 100,
      backgroundColor: '#1f7aef',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    
    },
  
    avatarText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 18,
    },
    
    connectionTitle: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
      marginBottom: 12,
    },
  
       card: {
      backgroundColor: 'rgba(15,20,28,0.6)',
      borderRadius: 14,
      padding: 16,
      marginBottom: 16,
    },
  
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      backgroundColor:  'rgba(15,20,28,0.6)',
      padding: 10,
      borderRadius: 10,
  
    },
  
    
  
    cardTitle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '700',
    },
  
    cardSubtitle: {
      color: '#9aa6b9',
      fontSize: 12,
    },
  
    iconMore: {
      marginBottom: 10,
    },
  
    messageBtn: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 10,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center', 
      marginTop: 10,
    },
    
  projectBtn: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#1f7aef',
  },
  
  projectCreate: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  
        outlineBtn: {
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.08)',
    },
  
    rightSection: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  })