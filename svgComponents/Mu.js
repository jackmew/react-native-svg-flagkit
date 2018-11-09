import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgMu = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MU_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MU_svg__b">
                <Stop stopColor="#1DBB63" offset="0%" />
                <Stop stopColor="#17A455" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MU_svg__c">
                <Stop stopColor="#222B82" offset="0%" />
                <Stop stopColor="#1B236C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MU_svg__d">
                <Stop stopColor="#FFD741" offset="0%" />
                <Stop stopColor="#FFD430" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MU_svg__e">
                <Stop stopColor="#F4374A" offset="0%" />
                <Stop stopColor="#E92C3F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MU_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MU_svg__b)" d="M0 12h21v3H0z" />
            <Path fill="url(#MU_svg__c)" d="M0 4h21v4H0z" />
            <Path fill="url(#MU_svg__d)" d="M0 8h21v4H0z" />
            <Path fill="url(#MU_svg__e)" d="M0 0h21v4H0z" />
        </G>
    </Svg>
)

export default SvgMu
