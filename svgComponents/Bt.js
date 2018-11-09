import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BT_svg__b">
                <Stop stopColor="#FF5F38" offset="0%" />
                <Stop stopColor="#FD5026" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BT_svg__c">
                <Stop stopColor="#FFD951" offset="0%" />
                <Stop stopColor="#FFD43B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BT_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#BT_svg__c)" d="M0 15L21 0H0z" />
        </G>
    </Svg>
)

export default SvgBt
