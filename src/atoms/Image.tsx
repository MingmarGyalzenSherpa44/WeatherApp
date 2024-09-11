import React from 'react'
import { IImage } from '../interfaces/IImage'

export default function Image({src,alt}:IImage) {
  return (
    <img src={src} alt={alt}></img>
  )
}
