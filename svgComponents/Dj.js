import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgDj = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg__b">
                <Stop stopColor="#1DC837" offset="0%" />
                <Stop stopColor="#13AD2B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg__c">
                <Stop stopColor="#82C5F5" offset="0%" />
                <Stop stopColor="#6AB3E8" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DJ_svg__d">
                <Stop stopColor="#E21C21" offset="0%" />
                <Stop stopColor="#D7151A" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#DJ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#DJ_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#DJ_svg__c)" d="M0 0h21v7H0z" />
            <Path fill="url(#DJ_svg__a)" d="M0 0l10 7.5L0 15z" />
            <Path
                fill="url(#DJ_svg__d)"
                d="M3.5 8.475L2.03 9.523 2.574 7.8l-1.45-1.074 1.804-.016L3.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
            />
        </G>
    </Svg>
)

export default SvgDj
