import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

// eslint-disable-next-line react/prop-types
const ScreenHeaderBtn = ({iconUrl,dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image source={iconUrl} resizeMode={"cover"} style={styles.btnImg(dimension)}/>
        </TouchableOpacity>
        )
}

export default ScreenHeaderBtn
