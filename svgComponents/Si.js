import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSi = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SI_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SI_svg__b">
                <Stop stopColor="#0C47B7" offset="0%" />
                <Stop stopColor="#073DA4" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SI_svg__c">
                <Stop stopColor="#E53B35" offset="0%" />
                <Stop stopColor="#D32E28" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SI_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SI_svg__b)" d="M0 3h21v7H0z" />
            <Path fill="url(#SI_svg__c)" d="M0 10h21v5H0z" />
            <Path
                d="M0 5V0h21v5H6.933V4s-.705-.5-1.433-.5C4.772 3.5 4 4 4 4v1H0zm5.5 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                fill="url(#SI_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgSi
