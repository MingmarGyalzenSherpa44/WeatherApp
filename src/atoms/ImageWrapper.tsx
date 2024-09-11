import { IImageWrapper } from '../interfaces/IImageWrapper'

export default function ImageWrapper({className,children}:IImageWrapper) {
  return (
    <div className={className}>{children}
    </div>
  )
}
