import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GW_svg__b">
                <Stop stopColor="#1AB558" offset="0%" />
                <Stop stopColor="#169E4D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GW_svg__c">
                <Stop stopColor="#FFD952" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GW_svg__d">
                <Stop stopColor="#E72B42" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GW_svg__e">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GW_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GW_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#GW_svg__c)" d="M0 0h21v7H0z" />
            <Path fill="url(#GW_svg__d)" d="M0 0h8v15H0z" />
            <Path
                fill="url(#GW_svg__e)"
                d="M4 8.459L2.53 9.523l.558-1.727-1.466-1.069 1.814-.003L4 5l.564 1.724 1.814.003-1.466 1.07.557 1.726z"
            />
        </G>
    </Svg>
)

export default SvgGw
