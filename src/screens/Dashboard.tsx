import { StyleSheet, Text, View,TouchableOpacity, StatusBar,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import TeamCard from './Card'

const TEAM_COUNT = 4;
const Dashboard = () => {
  return (
      <SafeAreaView style={styles.overlay}>
        <StatusBar barStyle="dark-content" translucent/>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Matching Teams for You</Text>
            <View style={styles.cardsContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {Array.from({ length: TEAM_COUNT }).map((_, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <TeamCard/>
            </View>
              ))}
            </ScrollView>
            </View>
          </View>
      </SafeAreaView>
  )
}

export default Dashboard

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    resizeMode: 'cover',
    opacity: 0.95,
  },

  overlay: {
    borderRadius: 14,
    flex: 1,
    backgroundColor: 'rgba(8,12,20,0.6)',
  },

  containerInner: {
    padding: 20,
    paddingTop: 36,
  },

  header: {
    marginBottom: 18,
  },

  title: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
  },

  chipsRow: {
    flexDirection: 'row',
    marginTop: 14,
    marginBottom: 18,
  },

  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.04)',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',

  },

  cardsContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    maxHeight: 600
  },

  chipActive: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },

  chipText: {
    color: '#c9d1dd',
    fontSize: 12,
  },

  chipTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
 
  sectionHeader: {
    marginTop: 6,
    marginBottom: 10,
  },

  sectionTitle: {
    color: '#cfe3ff',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
  },

  sectionHint: {
    color: '#8f9db0',
    fontSize: 12,
  },

  smallCard: {
    backgroundColor: 'rgba(15,20,28,0.5)',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
  },

  smallCardTitle: {
    color: '#fff',
    fontWeight: '700',
    marginBottom: 8,
  },

  
});
