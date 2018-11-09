import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgVe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VE_svg__b">
                <Stop stopColor="#063191" offset="0%" />
                <Stop stopColor="#03287C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VE_svg__c">
                <Stop stopColor="#E2213B" offset="0%" />
                <Stop stopColor="#CD1931" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VE_svg__d">
                <Stop stopColor="#FFD044" offset="0%" />
                <Stop stopColor="#FFCB2F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#VE_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#VE_svg__b)" d="M0 5h21v5H0z" />
            <Path fill="url(#VE_svg__c)" d="M0 10h21v5H0z" />
            <Path
                d="M10.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 .5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM7.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#VE_svg__a)"
            />
            <Path fill="url(#VE_svg__d)" d="M0 0h21v5H0z" />
        </G>
    </Svg>
)

export default SvgVe
