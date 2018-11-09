import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgOm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="OM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="OM_svg__b">
                <Stop stopColor="#138E16" offset="0%" />
                <Stop stopColor="#0F7F12" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="OM_svg__c">
                <Stop stopColor="#ED2B35" offset="0%" />
                <Stop stopColor="#D91B25" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#OM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#OM_svg__b)" d="M0 10h21v5H0z" />
            <Path fill="url(#OM_svg__c)" d="M0 15h7v-5h14V5H7V0H0z" />
            <Path
                fill="url(#OM_svg__a)"
                d="M3.5 3.534l-.868 1.268.45-1.47-1.532.113 1.43-.564-1.044-1.128 1.332.766L3.5 1l.232 1.519 1.332-.766L4.02 2.881l1.43.564-1.533-.112.45 1.469zM7 0h14v5H7z"
            />
        </G>
    </Svg>
)

export default SvgOm
