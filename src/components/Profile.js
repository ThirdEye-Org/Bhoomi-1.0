import React from 'react'
import ProfileCard from './profileCard'
import ProfileHero from './profileHero'

function Profile() {
  return (
      <div className=' container mx-auto flex flex-row space-x-12 pt-4'>
      <ProfileCard />
      <ProfileHero/>
    </div>
  )
}

export default Profile