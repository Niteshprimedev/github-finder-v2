import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function HomePage() {
  return (
    <div>
      {/* To-Do: Search Result Component */}
      <UserSearch></UserSearch>
      <UserResults></UserResults>
    </div>
  )
}

export default HomePage
