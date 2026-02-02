import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, SafeAreaView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import Projects from './Projects'
import Project from './Project'
import Search from '../Search'

interface ProjectData {
  id: number
  name: string
  description: string
  teamName: string
  matchScore?: number
}

const MyProjects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const defaultProjects: ProjectData[] = [
    {
      id: 1,
      name: 'E-Commerce App',
      description: 'Build an e-commerce platform',
      teamName: 'Frontend Team',
      matchScore: 85,
    },
    {
      id: 2,
      name: 'Mobile Dashboard',
      description: 'Create a real-time analytics dashboard',
      teamName: 'Backend Team',
      matchScore: 78,
    },
    {
      id: 3,
      name: 'API Integration',
      description: 'Integrate third-party payment gateway',
      teamName: 'Design Team',
      matchScore: 82,
    },
    {
      id: 4,
      name: 'UI/UX Redesign',
      description: 'Modernize the user interface',
      teamName: 'DevOps Team',
      matchScore: 88,
    },
    {
      id: 5,
      name: 'Performance Optimization',
      description: 'Improve app loading speed and efficiency',
      teamName: 'QA Team',
      matchScore: 75,
    },
  ]

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.example.com/projects')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const projectsToDisplay = projects.length > 0 ? projects : defaultProjects

  const handleAddProject = (newProject: { name: string; description: string; teamName: string }) => {
    const project: ProjectData = {
      id: projectsToDisplay.length + 1,
      name: newProject.name,
      description: newProject.description,
      teamName: newProject.teamName,
      matchScore: Math.floor(Math.random() * 20) + 75,
    }
    setProjects([...projects, project])
    setShowModal(false)
  }

  return (
    <SafeAreaView style={styles.overlay}>
      <StatusBar barStyle="dark-content" translucent />

      <View style={styles.card}>
        <Text style={styles.projectTitle}>My Projects</Text>
        <Text style={styles.sectionSubtitle}>Your Active Projects</Text>
        <Search />

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {projectsToDisplay.map((project, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Projects projectData={project} />
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={[styles.messageBtn, styles.outlineBtn]}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.cardSubtitle}>Add Project</Text>
        </TouchableOpacity>

        <Modal visible={showModal} animationType="slide" transparent>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
              <Project onCreateProject={handleAddProject} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

export default MyProjects

export const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
    flex: 1,
    backgroundColor: 'rgba(8,12,20,0.6)',
    overflow: 'hidden',
  },

  projectTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
  },

  sectionSubtitle: {
    color: '#9aa6b9',
    fontSize: 14,
    marginBottom: 12,
  },

  card: {
    backgroundColor: 'rgba(31, 122, 239, 0.1)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },

  cardSubtitle: {
    color: '#9aa6b9',
    fontSize: 12,
  },

  messageBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  outlineBtn: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  scroll: {
    maxHeight: 400,
    marginBottom: 10,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    backgroundColor: 'rgba(8,12,20,0.95)',
    borderRadius: 14,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },

  closeBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  closeBtnText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
})