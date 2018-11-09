import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgAx = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AX_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AX_svg__b">
                <Stop stopColor="#157CBB" offset="0%" />
                <Stop stopColor="#0E6CA5" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AX_svg__c">
                <Stop stopColor="#FFD34D" offset="0%" />
                <Stop stopColor="#FECB2F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AX_svg__d">
                <Stop stopColor="#EB363A" offset="0%" />
                <Stop stopColor="#D52B2F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AX_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AX_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#AX_svg__c)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
            <Path fill="url(#AX_svg__d)" d="M0 8h7v7h1V8h13V7H8V0H7v7H0z" />
        </G>
    </Svg>
)

export default SvgAx
