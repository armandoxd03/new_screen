import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TeamCard() {
  return (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.avatarBadge}>
                <Text style={styles.avatarText}>JD</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>MERN Stack Devs</Text>
                <Text style={styles.cardSubtitle}>Mobile Development</Text>
              </View>
            </View>

            {/* Tech */}
            <View style={styles.techRow}>
              <View style={styles.techPill}>
                <Text style={styles.techText}>React</Text>
              </View>

              <View style={styles.techPill}>
                <Text style={styles.techText}>Node.js</Text>
              </View>

              <View style={styles.techPill}>
                <Text style={styles.techText}>MongoDB</Text>
              </View>
            </View>

            {/* Match Score (moved into MERN card) */}
            <View style={styles.matchRow}>
              <Text style={styles.matchLabel}>Match Score</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '80%' }]} />
              </View>
            </View>

            {/* Actions */}
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={[styles.actionBtn, styles.outlineBtn]}
              >
                <Text style={[styles.actionText, styles.outlineText]}>
                  Request Team
                </Text>
              </TouchableOpacity>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({

  actionBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  actionText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
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
    backgroundColor: 'rgba(15,20,28,0.6)',
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
    fontSize: 18,
    fontWeight: '700',
  },

  cardSubtitle: {
    color: '#9aa6b9',
    fontSize: 12,
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

