import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSc = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SC_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SC_svg__b">
                <Stop stopColor="#1DBE4F" offset="0%" />
                <Stop stopColor="#159B3F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SC_svg__c">
                <Stop stopColor="#0858B4" offset="0%" />
                <Stop stopColor="#013F87" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SC_svg__d">
                <Stop stopColor="#ED3535" offset="0%" />
                <Stop stopColor="#D62828" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SC_svg__e">
                <Stop stopColor="#08964F" offset="0%" />
                <Stop stopColor="#017B3E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SC_svg__f">
                <Stop stopColor="#FFDD67" offset="0%" />
                <Stop stopColor="#FDD856" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SC_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SC_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#SC_svg__c)" d="M0 0h7L0 15z" />
            <Path fill="url(#SC_svg__d)" d="M14 0h7v5L0 15z" />
            <Path fill="url(#SC_svg__e)" d="M21 15v-5L0 15z" />
            <Path fill="url(#SC_svg__f)" d="M7 0h7L0 15z" />
            <Path fill="url(#SC_svg__a)" d="M21 10V5L0 15z" />
        </G>
    </Svg>
)

export default SvgSc
