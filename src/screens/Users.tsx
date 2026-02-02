import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface User {
  id: number
  initials: string
  username: string
  teamName: string
}

interface UserProps {
  userData?: User | User[]
  teamName?: string
  limit?: number
}

const UserCard = ({ userData }: { userData: User }) => {
  const defaultUser: User = {
    id: 1,
    initials: 'JR',
    username: 'Username',
    teamName: 'Default Team',
  }

  const user = userData || defaultUser

  return (
    <View style={styles.userContainer}>
      <View style={styles.avatarBadge}>
        <Text style={styles.avatarText}>{user.initials}</Text>
      </View>
      <Text style={styles.userName} numberOfLines={1}>{user.username}</Text>
    </View>
  )
}

const Users = ({ userData, teamName, limit }: UserProps) => {
  const defaultTeamUsers: { [key: string]: User[] } = {
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

  const usersArray = (userData && Array.isArray(userData) && userData.length > 0)
    ? userData
    : (teamName && defaultTeamUsers[teamName])
      ? defaultTeamUsers[teamName]
      : [{ id: 1, initials: 'JR', username: 'Default User', teamName: 'Default Team' }]

  const displayedUsers = limit ? usersArray.slice(0, limit) : usersArray

  return (
    <View style={styles.usersContainer}>
      {displayedUsers.map((user, index) => (
        <UserCard key={index} userData={user} />
      ))}
    </View>
  )
}

export default Users

const styles = StyleSheet.create({
  avatarBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1f7aef',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },

  userName: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 8,
    textAlign: 'center',
  },

  userContainer: {
    alignItems: 'center',
    marginRight: 16,
    marginTop: 10,
  },

  usersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
})