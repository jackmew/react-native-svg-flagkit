import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgLc = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LC_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LC_svg__b">
                <Stop stopColor="#86D7FF" offset="0%" />
                <Stop stopColor="#6BCDFE" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LC_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LC_svg__d">
                <Stop stopColor="#FFDA57" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#LC_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#LC_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#LC_svg__a)" d="M10.5 2L15 13H6z" />
            <Path fill="url(#LC_svg__c)" d="M10.5 4l3.5 9H7z" />
            <Path fill="url(#LC_svg__d)" d="M10.5 7l4.5 6H6z" />
        </G>
    </Svg>
)

export default SvgLc
