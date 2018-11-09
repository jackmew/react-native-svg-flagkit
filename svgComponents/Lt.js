import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgLt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LT_svg__b">
                <Stop stopColor="#118357" offset="0%" />
                <Stop stopColor="#0B6A45" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LT_svg__c">
                <Stop stopColor="#D8343D" offset="0%" />
                <Stop stopColor="#C02A32" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LT_svg__d">
                <Stop stopColor="#FEC34B" offset="0%" />
                <Stop stopColor="#FCB931" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#LT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#LT_svg__b)" d="M0 5h21v5H0z" />
            <Path fill="url(#LT_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#LT_svg__d)" d="M0 0h21v5H0z" />
        </G>
    </Svg>
)

export default SvgLt
