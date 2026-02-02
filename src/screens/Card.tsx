import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

interface TeamData {
  initials: string
  name: string
  specialty: string
  technologies: string[]
  matchScore: number
}

interface TeamCardProps {
  teamData: TeamData
}

export default function TeamCard({ teamData }: TeamCardProps) {
  const team = teamData

  const handleRequestTeam = () => {
    Alert.alert(
      'Request Sent',
      `Your request to ${team.name} has been sent successfully!`,
      [
        {
          text: 'OK',
          onPress: () => console.log('Request sent for ' + team.name),
          style: 'default',
        },
      ]
    )
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarBadge}>
          <Text style={styles.avatarText}>{team.initials}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>{team.name}</Text>
          <Text style={styles.cardSubtitle}>{team.specialty}</Text>
        </View>
      </View>

      {/* Tech */}
      <View style={styles.techRow}>
        {team.technologies.map((tech, index) => (
          <View key={index} style={styles.techPill}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>

      {/* Match Score */}
      <View style={styles.matchRow}>
        <Text style={styles.matchLabel}>Match Score</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${team.matchScore}%` }]} />
        </View>
      </View>

      {/* Actions */}
      <View style={styles.cardActions}>
        <TouchableOpacity 
          style={[styles.actionBtn, styles.solidBtn]}
          onPress={handleRequestTeam}
        >
          <Text style={styles.actionText}>
            Request Team
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionBtn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  actionText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

  avatarBadge: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#1f7aef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  card: {
    backgroundColor: 'rgba(31, 122, 239, 0.1)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  cardSubtitle: {
    color: '#9aa6b9',
    fontSize: 13,
  },

  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },

  techPill: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 8,
    marginTop: 8,
  },

  techText: {
    color: '#cbd6e2',
    fontSize: 11,
  },

  cardActions: {
    flexDirection: 'row',
    marginTop: 14,
  },

  matchRow: {
    marginTop: 10,
  },

  matchLabel: {
    color: '#9aa6b9',
    fontSize: 12,
    marginBottom: 6,
  },

  solidBtn: {
    backgroundColor: '#1f7aef',
  },

  outlineBtn: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  outlineText: {
    color: '#cfe3ff',
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
})