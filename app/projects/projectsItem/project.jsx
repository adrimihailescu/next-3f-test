import React from 'react'

const ProjectItem = ({ photo }) => {
  return (
    <li style={{ border: '1px solid red', marginBottom: '5px' }}>
      <h3>{photo.title}</h3>
      <img src={photo.thumbnailUrl} />
    </li>
  )
}

export default ProjectItem
