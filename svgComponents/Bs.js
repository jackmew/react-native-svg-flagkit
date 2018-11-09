import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBs = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BS_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BS_svg__b">
                <Stop stopColor="#22B7D5" offset="0%" />
                <Stop stopColor="#1CACC8" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BS_svg__c">
                <Stop stopColor="#FCE569" offset="0%" />
                <Stop stopColor="#FADF52" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BS_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BS_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BS_svg__b)" d="M0 10h21v5H0zM0 0h21v5H0z" />
            <Path fill="url(#BS_svg__c)" d="M0 5h21v5H0z" />
            <Path fill="url(#BS_svg__d)" d="M0 0l10 7.5L0 15z" />
        </G>
    </Svg>
)

export default SvgBs
