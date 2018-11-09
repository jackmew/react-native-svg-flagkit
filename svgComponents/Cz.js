import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCz = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CZ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CZ_svg__b">
                <Stop stopColor="#E8252A" offset="0%" />
                <Stop stopColor="#D7151A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CZ_svg__c">
                <Stop stopColor="#17579E" offset="0%" />
                <Stop stopColor="#10457F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CZ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CZ_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#CZ_svg__a)" d="M0 0h21v7H0z" />
            <Path fill="url(#CZ_svg__c)" d="M0 0l10 7.5L0 15z" />
        </G>
    </Svg>
)

export default SvgCz
