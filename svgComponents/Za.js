import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgZa = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZA_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZA_svg__b">
                <Stop stopColor="#06A86E" offset="0%" />
                <Stop stopColor="#007A4E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZA_svg__c">
                <Stop stopColor="#FFBF2E" offset="0%" />
                <Stop stopColor="#FFB612" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZA_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZA_svg__e">
                <Stop stopColor="#F44E46" offset="0%" />
                <Stop stopColor="#DF3931" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZA_svg__f">
                <Stop stopColor="#072CB4" offset="0%" />
                <Stop stopColor="#042396" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#ZA_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#ZA_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#ZA_svg__c)" d="M0 2l7 5.5L0 13z" />
            <Path fill="url(#ZA_svg__d)" d="M-1 2.25L5.75 7.5-1 12.75z" />
            <Path fill="#FFF" d="M9 6L2 0h19v6z" />
            <Path fill="url(#ZA_svg__e)" d="M9.25 5l-6-5H21v5z" />
            <Path fill="#FFF" d="M2 15h19V9H9z" />
            <Path fill="url(#ZA_svg__f)" d="M3.25 15H21v-5H9.25z" />
        </G>
    </Svg>
)

export default SvgZa
