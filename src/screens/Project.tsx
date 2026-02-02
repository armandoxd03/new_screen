import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'

interface ProjectForm {
  name: string
  description: string
  teamName: string
}

interface ProjectProps {
  onCreateProject?: (project: ProjectForm) => void
}

const Project = ({ onCreateProject }: ProjectProps) => {
  const teams = ['Frontend Team', 'Backend Team', 'Design Team', 'DevOps Team', 'QA Team']

  const [formData, setFormData] = useState<ProjectForm>({
    name: '',
    description: '',
    teamName: '',
  })

  const handleInputChange = (field: keyof ProjectForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCreateProject = () => {
    if (formData.name.trim() === '' || formData.description.trim() === '' || formData.teamName === '') {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }
    if (onCreateProject) {
      onCreateProject(formData)
    }
    console.log('Project Created:', formData)
    setFormData({ name: '', description: '', teamName: '' })
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Project Name</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
            placeholder="Enter project name"
            placeholderTextColor="#6b7a90"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Project Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.description}
            onChangeText={(text) => handleInputChange('description', text)}
            placeholder="Enter project description"
            placeholderTextColor="#6b7a90"
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Select Team</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={formData.teamName}
              onValueChange={(value) => handleInputChange('teamName', value)}
              style={styles.picker}
            >
              <Picker.Item label="Choose a team..." value="" />
              {teams.map((team) => (
                <Picker.Item key={team} label={team} value={team} />
              ))}
            </Picker>
          </View>
        </View>
        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.btn, styles.cancelBtn]}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.createBtn]} onPress={handleCreateProject}>
            <Text style={styles.createBtnText}>Create Project</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Project

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(31, 122, 239, 0.1)',
    borderRadius: 14,
    padding: 20,
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    color: '#cfe3ff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 14,
  },

  textArea: {
    paddingVertical: 12,
    textAlignVertical: 'top',
  },

  pickerContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },

  picker: {
    color: '#fff',
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },

  btn: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelBtn: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  cancelBtnText: {
    color: '#cfe3ff',
    fontSize: 14,
    fontWeight: '700',
  },

  createBtn: {
    backgroundColor: '#1f7aef',
  },

  createBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
})