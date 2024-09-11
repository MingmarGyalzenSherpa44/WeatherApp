import React from 'react'
import Text from '../atoms/Text'
import { IImageWrapper } from '../interfaces/IImageWrapper';
import ImageWrapper from '../atoms/ImageWrapper';
import Image from '../atoms/Image';


export default function SideBarItem({title,value,icon}) {
  return (
    <div className='sidebar-item'>
        <div className='sidebar-item__title'>
            <Text type='p' value={title}/>
        </div>

        <div className="sidebar-item__content">
            <div className="sidebar-item__content__value">
            <Text type='p' value={value}/>

            </div>
            <div className="sidebar-item__content__icon">
                    <ImageWrapper className=''>
                        <Image src={icon} alt='' />
                    </ImageWrapper>
            </div>
        </div>

    </div>
  )
}
