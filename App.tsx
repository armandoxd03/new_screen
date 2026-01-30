import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import MyProjects from './src/screens/MyProjects';
import MyConnections from './src/screens/MyConnections';
import Dashboard from './src/screens/Dashboard';

function App() {

  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'MyProjects':
        return <MyProjects />;
      case 'MyConnections':
        return <MyConnections />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ImageBackground
      source={require('./assets/unnamed.jpg')}
      style={styles.background}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <StatusBar barStyle="dark-content" translucent />

        <ScrollView
          contentContainerStyle={styles.containerInner}
          showsHorizontalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Manage & Scout</Text>
          </View>

          {/* Chips */}
          <View style={styles.chipsRow}>
            <TouchableOpacity onPress={() => setCurrentScreen('Dashboard')} style={[ styles.chip,  currentScreen === 'Dashboard' && styles.chipActive]}>
              <Text style={styles.chipText}>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCurrentScreen('MyProjects')} style={[ styles.chip,  currentScreen === 'MyProjects' && styles.chipActive]}>
              <Text style={styles.chipText}>My Projects</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCurrentScreen('MyConnections')} style={[ styles.chip, currentScreen === 'MyConnections' && styles.chipActive]}>
              <Text style={styles.chipText}>My Connections</Text>
            </TouchableOpacity>
          </View>

          
          {renderScreen()}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

/* ================= STYLES ================= */
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
    marginBottom: 8,
  },

  sectionTitle: {
    color: '#cfe3ff',
    fontWeight: '700',
    fontSize: 16,
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

export default App;
