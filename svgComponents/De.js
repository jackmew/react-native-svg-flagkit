import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgDe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DE_svg__b">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DE_svg__c">
                <Stop stopColor="#F01515" offset="0%" />
                <Stop stopColor="#DE0000" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DE_svg__d">
                <Stop stopColor="#FFD521" offset="0%" />
                <Stop stopColor="#FFCF00" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#DE_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#DE_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#DE_svg__c)" d="M0 5h21v5H0z" />
            <Path fill="url(#DE_svg__d)" d="M0 10h21v5H0z" />
        </G>
    </Svg>
)

export default SvgDe
