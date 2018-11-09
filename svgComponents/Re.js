import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgRe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RE_svg__b">
                <Stop stopColor="#F44653" offset="0%" />
                <Stop stopColor="#EE2A39" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RE_svg__c">
                <Stop stopColor="#1035BB" offset="0%" />
                <Stop stopColor="#042396" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#RE_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#RE_svg__b)" d="M10 0h11v15H10z" />
            <Path fill="url(#RE_svg__c)" d="M0 0h7v15H0z" />
            <Path fill="url(#RE_svg__a)" d="M7 0h7v15H7z" />
        </G>
    </Svg>
)

export default SvgRe
