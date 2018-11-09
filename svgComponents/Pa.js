import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgPa = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PA_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PA_svg__b">
                <Stop stopColor="#E52448" offset="0%" />
                <Stop stopColor="#D01739" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PA_svg__c">
                <Stop stopColor="#1367AE" offset="0%" />
                <Stop stopColor="#0A5492" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PA_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PA_svg__b)" d="M0 0h21v7H0z" />
            <Path fill="url(#PA_svg__c)" d="M0 7h21v8H0z" />
            <Path d="M0 7V0h10v7H0zm10 8V7h11v8H10z" fill="url(#PA_svg__a)" />
            <Path
                fill="url(#PA_svg__c)"
                d="M5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
            />
            <Path
                fill="url(#PA_svg__b)"
                d="M15.5 11.82l-1.176.798.396-1.365-1.122-.871 1.42-.045L15.5 9l.482 1.337 1.42.045-1.122.871.396 1.365z"
            />
        </G>
    </Svg>
)

export default SvgPa
