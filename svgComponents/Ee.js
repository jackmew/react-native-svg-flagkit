import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgEe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EE_svg__b">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EE_svg__c">
                <Stop stopColor="#5DA8F1" offset="0%" />
                <Stop stopColor="#4892DA" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#EE_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#EE_svg__b)" d="M0 5h21v5H0z" />
            <Path fill="url(#EE_svg__c)" d="M0 0h21v5H0z" />
            <Path fill="url(#EE_svg__a)" d="M0 10h21v5H0z" />
        </G>
    </Svg>
)

export default SvgEe
