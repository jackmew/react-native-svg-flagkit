import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBj = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BJ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BJ_svg__b">
                <Stop stopColor="#F12641" offset="0%" />
                <Stop stopColor="#E71834" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BJ_svg__c">
                <Stop stopColor="#FFD648" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BJ_svg__d">
                <Stop stopColor="#17A668" offset="0%" />
                <Stop stopColor="#118653" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BJ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BJ_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#BJ_svg__c)" d="M0 0h21v7H0z" />
            <Path fill="url(#BJ_svg__d)" d="M0 0h8v15H0z" />
        </G>
    </Svg>
)

export default SvgBj
