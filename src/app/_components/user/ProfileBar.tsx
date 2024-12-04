'use client'
import React from 'react'
interface ProfileProps {
  userName ?: string;
  profileUrl ?: string;
}
const ProfileBar = ({userName, profileUrl} : ProfileProps) => {
  return (
    <div> <img className='rounded-lg' src= {profileUrl} alt="" width={40} height={40 }/></div>
  )
}

export default ProfileBar