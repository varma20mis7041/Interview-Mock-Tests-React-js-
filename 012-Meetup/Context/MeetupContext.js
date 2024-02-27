import React from 'react'

const MeetupContext = React.createContext({
  isRegistered: false,
  updateRegistrationStatus: () => {},
  name: '',
  topicDisplayText: '',
  updateName: () => {},
  updateTopic: () => {},
})

export default MeetupContext
