import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgKw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KW_svg__b">
                <Stop stopColor="#D72238" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KW_svg__c">
                <Stop stopColor="#169A53" offset="0%" />
                <Stop stopColor="#0F7A40" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KW_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KW_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#KW_svg__b)" d="M0 10h21v5H0z" />
            <Path fill="url(#KW_svg__c)" d="M0 0h21v5H0z" />
            <Path fill="url(#KW_svg__a)" d="M0 5h21v5H0z" />
            <Path fill="url(#KW_svg__d)" d="M0 0l7 5v5l-7 5z" />
        </G>
    </Svg>
)

export default SvgKw
