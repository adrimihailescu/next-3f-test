'use client'
import React, { useEffect, useState } from 'react'
import ProjectItem from './projectsItem/project'

const Projects = () => {
  const [photos, setPhotos] = useState()

  const getPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
    const result = await response.json()
    setPhotos(result)
    // console.log(result)
  }

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <div>
      <h2>Photos</h2>
      <ul>{photos && photos.map((photo) => <ProjectItem key={photo.id} photo={photo}></ProjectItem>)}</ul>
    </div>
  )
}

export default Projects
