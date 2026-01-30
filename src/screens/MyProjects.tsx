import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Users from './Projects';
import Search from '../Search';
import Projects from './Projects';

const PROJECT_COUNT = 5;
const MyProjects = () => {
  return (
    <View style={styles.card}>
          <Text style={styles.projectTitle}>My Projects</Text>
            <Search/>
              
              <ScrollView  style={styles.scroll} showsVerticalScrollIndicator={false}>
                  {Array.from({ length: PROJECT_COUNT }).map((_, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                          <Projects/>           
                        </View>
                          ))}
                  </ScrollView>

              <TouchableOpacity style={[styles.messageBtn, styles.outlineBtn]} onPress={() => {}} >
                <Text style={styles.cardSubtitle}>Add Project</Text>
              </TouchableOpacity>
              </View>
  )
}

export default MyProjects

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
  
  projectTitle: {
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

  scroll: {
  maxHeight: 470,
  marginBottom: 10,
  },

})