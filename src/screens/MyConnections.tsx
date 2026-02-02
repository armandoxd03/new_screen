import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Search from '../Search'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Message from './Message'

interface Connection {
  id: number
  initials: string
  name: string
  specialty: string
}

const MyConnections = () => {
  const [connections, setConnections] = useState<Connection[]>([])
  const [loading, setLoading] = useState(true)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null)

  const defaultConnections: Connection[] = [
    { id: 1, initials: 'JD', name: 'John Doe', specialty: 'Frontend Development' },
    { id: 2, initials: 'SM', name: 'Sarah Miller', specialty: 'UI/UX Design' },
    { id: 3, initials: 'MJ', name: 'Mike Johnson', specialty: 'React Developer' },
    { id: 4, initials: 'AS', name: 'Alex Smith', specialty: 'Backend Developer' },
    { id: 5, initials: 'EM', name: 'Emma Wilson', specialty: 'Full Stack Engineer' },
    { id: 6, initials: 'JW', name: 'James White', specialty: 'UX Designer' },
    { id: 7, initials: 'LB', name: 'Lisa Brown', specialty: 'DevOps Engineer' },
    { id: 8, initials: 'RP', name: 'Robert Parker', specialty: 'QA Engineer' },
  ]

  useEffect(() => {
    fetchConnections()
  }, [])

  const fetchConnections = async () => {
    try {
      // Fetch all users from projects
      const response = await fetch('https://api.example.com/users/connections')
      const data = await response.json()
      setConnections(data)
    } catch (error) {
      console.error('Error fetching connections:', error)
    } finally {
      setLoading(false)
    }
  }

  const connectionsToDisplay = connections.length > 0 ? connections : defaultConnections

  const handleMessagePress = (connection: Connection) => {
    setSelectedConnection(connection)
    setShowMessageModal(true)
  }

  const handleSendMessage = (messageData: any) => {
    console.log(`Message to ${selectedConnection?.name}:`, messageData.content)
    Alert.alert('Message Sent', `Your message to ${selectedConnection?.name} has been sent!`, [
      { text: 'OK', onPress: () => {
        setShowMessageModal(false)
        setSelectedConnection(null)
      }}
    ])
  }

  return (
    <View style={styles.card}>
      <Text style={styles.connectionTitle}>My Connections</Text>
      <View>
        <Search />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {connectionsToDisplay.map((connection) => (
          <View key={connection.id} style={{ marginBottom: 10 }}>
            <View style={styles.cardHeader}>
              <View style={styles.avatarBadge}>
                <Text style={styles.avatarText}>{connection.initials}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{connection.name}</Text>
                <Text style={styles.cardSubtitle}>{connection.specialty}</Text>
              </View>
              <View style={styles.rightSection}>
                <MaterialIcons name="more-vert" size={24} color="#9aa6b9" />
                <TouchableOpacity style={[styles.messageBtn, styles.outlineBtn]} onPress={() => handleMessagePress(connection)}>
                  <Text style={styles.cardSubtitle}>Message</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View>
        <TouchableOpacity style={[styles.messageBtn, styles.outlineBtn]} onPress={() => {}}>
          <Text style={styles.cardSubtitle}>Add Connection</Text>
        </TouchableOpacity>
      </View>

      {showMessageModal && selectedConnection && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Message {selectedConnection.name}</Text>
            <Message 
              onSendMessage={handleSendMessage}
              onCancel={() => {
                setShowMessageModal(false)
                setSelectedConnection(null)
              }}
            />
          </View>
        </View>
      )}
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
    backgroundColor: 'rgba(5, 42, 91, 0.3)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: 'rgba(15,20,28,0.6)',
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

  scroll: {
    maxHeight: 470,
    marginBottom: 10,
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },

  modalContent: {
    backgroundColor: 'rgba(25, 98, 193, 0.1)',
    borderRadius: 14,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  closeModalBtn: {
    backgroundColor: '#6b7a90',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  closeModalBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
})