import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'

interface MessageData {
  id: number
  senderInitials: string
  senderName: string
  content: string
}

interface MessageProps{
  messageData?: MessageData | MessageData[]
  senderName?: string
  limit?: number
  onSendMessage?: (data: MessageData) => void
  onCancel?: () => void
}


const Message = ({ onSendMessage, onCancel }: MessageProps) => {
  const [messageData, setMessageData] = React.useState<MessageData>({
    id: 0,
    senderInitials: '',
    senderName: '',
    content: ''
  });

  const [showModal, setShowModal] = React.useState(false);

  const handleInputChange = (field: string, value: string) => {
    setMessageData({ ...messageData, [field]: value });
  };
  

  const handleMessagePress = () => {
    if (messageData.content.trim() === '') {
      Alert.alert('Error', 'Please enter a message');
      return;
    }
    if (onSendMessage) {
      onSendMessage(messageData);
    }
    console.log('Message Sent:', messageData);
    setShowModal(false);
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalOverlay}>
        <Text style={styles.title}>Message</Text>
        <TextInput
          style={styles.modalContainer}
          value={messageData.content}
          onChangeText={(text) => handleInputChange('content', text)}
          placeholder="Type your message here..."
          placeholderTextColor="#6b7a90"
          multiline
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={onCancel}
        >
          <Text style={styles.closeBtnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={handleMessagePress}
        >
          <Text style={styles.sendBtnText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  modalOverlay: {
    backgroundColor: 'rgba(8,12,20,0.95)',
    borderRadius: 14,
    padding: 20,
    width: '100%',
    marginBottom: 15,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
    minHeight: 80,
    maxHeight: 150,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },

  closeBtn: {
    backgroundColor: '#6b7a90',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },

  closeBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  sendBtn: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },

  sendBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
})