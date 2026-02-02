import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import TeamCard from './Card'

interface Team {
  initials: string
  name: string
  specialty: string
  technologies: string[]
  matchScore: number
}

const Dashboard = () => {
  const [teams, setTeams] = React.useState<Team[]>([])
  const [loading, setLoading] = React.useState(true)

  const defaultTeams: Team[] = [
    {
      initials: 'JD',
      name: 'MERN Stack Devs',
      specialty: 'Mobile Development',
      technologies: ['React', 'Node.js', 'MongoDB'],
      matchScore: 80,
    },
    {
      initials: 'WD',
      name: 'Web Designers',
      specialty: 'UI/UX Design',
      technologies: ['Figma', 'CSS', 'JavaScript'],
      matchScore: 75,
    },
    {
      initials: 'FE',
      name: 'Frontend Experts',
      specialty: 'React Development',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      matchScore: 88,
    },
    {
      initials: 'BE',
      name: 'Backend Engineers',
      specialty: 'API Development',
      technologies: ['Node.js', 'PostgreSQL', 'Docker'],
      matchScore: 82,
    },
  ]

  useEffect(() => {
    fetchTeams()
  }, [])

  const fetchTeams = async () => {
    try {
      const response = await fetch('https://api.example.com/teams')
      const data = await response.json()
      setTeams(data)
    } catch (error) {
      console.error('Error fetching teams data:', error)
    } finally {
      setLoading(false)
    }
  }

  const teamsToDisplay = teams.length > 0 ? teams : defaultTeams

  const handleBrowseTeams = () => {
    Alert.alert('Browse Teams', 'Explore more teams to collaborate with', [
      { text: 'Cancel', onPress: () => {} },
      { text: 'Explore', onPress: () => {} },
    ])
  }

  return (
    <SafeAreaView style={styles.overlay}>
      <StatusBar barStyle="dark-content" translucent />

      <View style={styles.card}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.sectionSubtitle}>Matching Teams for You</Text>

        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {teamsToDisplay.map((team, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <TeamCard teamData={team} />
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={[styles.messageBtn, styles.outlineBtn]} onPress={handleBrowseTeams}>
          <Text style={styles.cardSubtitle}>Browse Teams</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard

export const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
    flex: 1,
    backgroundColor: 'rgba(8,12,20,0.6)',
  },

  dashboardTitle: {
    color: '#fff',
    fontSize: 26,
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
    maxHeight: 470,
    marginBottom: 10,
  },
})