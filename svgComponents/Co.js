import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCo = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CO_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CO_svg__b">
                <Stop stopColor="#0748AE" offset="0%" />
                <Stop stopColor="#003993" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CO_svg__c">
                <Stop stopColor="#DE2035" offset="0%" />
                <Stop stopColor="#CE1126" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CO_svg__d">
                <Stop stopColor="#FFD935" offset="0%" />
                <Stop stopColor="#FDD216" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CO_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CO_svg__b)" d="M0 7h21v4H0z" />
            <Path fill="url(#CO_svg__c)" d="M0 11h21v4H0z" />
            <Path fill="url(#CO_svg__d)" d="M0 0h21v7H0z" />
        </G>
    </Svg>
)

export default SvgCo
