import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Users from './Users'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

interface Project {
  id: number
  name: string
  description: string
  teamName: string
  matchScore?: number
}

interface ProjectProps {
  projectData?: Project
}

const Projects = ({ projectData }: ProjectProps) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  const defaultTeamUsers: { [key: string]: any[] } = {
    'Frontend Team': [
      { id: 1, initials: 'JD', username: 'John Doe', teamName: 'Frontend Team' },
      { id: 2, initials: 'SM', username: 'Sarah Miller', teamName: 'Frontend Team' },
      { id: 3, initials: 'MJ', username: 'Mike Johnson', teamName: 'Frontend Team' },
    ],
    'Backend Team': [
      { id: 4, initials: 'AS', username: 'Alex Smith', teamName: 'Backend Team' },
      { id: 5, initials: 'EM', username: 'Emma Wilson', teamName: 'Backend Team' },
    ],
    'Design Team': [
      { id: 6, initials: 'JW', username: 'James White', teamName: 'Design Team' },
      { id: 7, initials: 'LB', username: 'Lisa Brown', teamName: 'Design Team' },
      { id: 8, initials: 'RP', username: 'Robert Parker', teamName: 'Design Team' },
    ],
    'DevOps Team': [
      { id: 9, initials: 'CR', username: 'Chris Ryan', teamName: 'DevOps Team' },
      { id: 10, initials: 'NK', username: 'Nina Kumar', teamName: 'DevOps Team' },
    ],
    'QA Team': [
      { id: 11, initials: 'DT', username: 'David Taylor', teamName: 'QA Team' },
      { id: 12, initials: 'SL', username: 'Sophie Lee', teamName: 'QA Team' },
      { id: 13, initials: 'MH', username: 'Mark Harris', teamName: 'QA Team' },
      { id: 14, initials: 'JM', username: 'Jessica Martin', teamName: 'QA Team' },
    ],
  }

  const defaultProject: Project = {
    id: 1,
    name: 'E-Commerce App',
    description: 'Build an e-commerce platform',
    teamName: 'Frontend Team',
    matchScore: 85,
  }

  const project = projectData || defaultProject
  
  const teamMemberCount = defaultTeamUsers[project.teamName]?.length || 0
  const hasMoreThanThree = teamMemberCount > 3

  const handleMenuPress = () => {
    Alert.alert('Project Options', `Options for ${project.name}`, [
      { text: 'Edit', onPress: () => console.log('Edit project') },
      { text: 'Delete', onPress: () => console.log('Delete project'), style: 'destructive' },
      { text: 'Cancel', style: 'cancel' },
    ])
  }

  useEffect(() => {
    fetchProjectUsers()
  }, [project.id])

  const fetchProjectUsers = async () => {
    try {
      const response = await fetch(`https://api.example.com/projects/${project.id}/users`)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(`Error fetching users for project ${project.id}:`, error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.projectCard}>
      <View style={styles.projectHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.projectName} numberOfLines={1}>{project.name}</Text>
        </View>
        <TouchableOpacity onPress={handleMenuPress}>
          <MaterialIcons name="more-vert" size={24} color="#9aa6b9" />
        </TouchableOpacity>
      </View>
      <Text style={styles.projectDescription} numberOfLines={2}>{project.description}</Text>

      {/* Match Score */}
      {project.matchScore && (
        <View style={styles.matchRow}>
          <Text style={styles.matchLabel}>Project Fit</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${project.matchScore}%` }]} />
          </View>
          <Text style={styles.matchScore}>{project.matchScore}% Match</Text>
        </View>
      )}

      {/* Users assigned to this project */}
      <View style={styles.usersSection}>
        <Text style={styles.usersLabel}>{project.teamName}</Text>
        {isExpanded ? (
          <>
            <View style={styles.usersContainer}>
              <Users teamName={project.teamName} userData={users.length > 0 ? users : undefined} />
            </View>
            {hasMoreThanThree && (
              <TouchableOpacity
                style={styles.expandBtn}
                onPress={() => setIsExpanded(false)}
              >
                <Text style={styles.expandBtnText}>Show Less</Text>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <>
            <View style={styles.usersContainerLimited}>
              <Users limit={3} teamName={project.teamName} userData={users.length > 0 ? users : undefined} />
            </View>
            {hasMoreThanThree && (
              <TouchableOpacity
                style={styles.expandBtn}
                onPress={() => setIsExpanded(true)}
              >
                <Text style={styles.expandBtnText}>Show All Members</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  )
}

export default Projects

const styles = StyleSheet.create({
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  projectCard: {
    backgroundColor: 'rgba(31, 122, 239, 0.1)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
  },

  projectName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  projectDescription: {
    color: '#9aa6b9',
    fontSize: 13,
    marginBottom: 12,
  },

  matchRow: {
    marginTop: 10,
    marginBottom: 12,
  },

  matchLabel: {
    color: '#9aa6b9',
    fontSize: 12,
    marginBottom: 6,
  },

  matchScore: {
    color: '#f6a623',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },

  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 6,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#f6a623',
    borderRadius: 6,
  },

  usersSection: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
  },

  usersLabel: {
    color: '#cfe3ff',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },

  usersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  usersContainerLimited: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 100,
    overflow: 'hidden',
  },

  expandBtn: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(31, 122, 239, 0.2)',
    alignItems: 'center',
  },

  expandBtnText: {
    color: '#1f7aef',
    fontSize: 12,
    fontWeight: '600',
  },
})
