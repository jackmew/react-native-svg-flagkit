import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GM_svg__b">
                <Stop stopColor="#DF2237" offset="0%" />
                <Stop stopColor="#CE1126" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GM_svg__c">
                <Stop stopColor="#4B9334" offset="0%" />
                <Stop stopColor="#3B7828" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GM_svg__d">
                <Stop stopColor="#1526A7" offset="0%" />
                <Stop stopColor="#0C1B8D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GM_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#GM_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#GM_svg__a)" d="M0 5h21v5H0z" />
            <Path fill="url(#GM_svg__d)" d="M0 6h21v3H0z" />
        </G>
    </Svg>
)

export default SvgGm
