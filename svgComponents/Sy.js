import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSy = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SY_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SY_svg__b">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SY_svg__c">
                <Stop stopColor="#E32139" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SY_svg__d">
                <Stop stopColor="#128A49" offset="0%" />
                <Stop stopColor="#0F7A40" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SY_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SY_svg__b)" d="M0 10h21v5H0z" />
            <Path fill="url(#SY_svg__c)" d="M0 0h21v5H0z" />
            <Path fill="url(#SY_svg__a)" d="M0 5h21v5H0z" />
            <Path
                fill="url(#SY_svg__d)"
                d="M7 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L7 5.5l.482 1.337 1.42.045-1.122.871.396 1.365zM14 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L14 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
            />
        </G>
    </Svg>
)

export default SvgSy
