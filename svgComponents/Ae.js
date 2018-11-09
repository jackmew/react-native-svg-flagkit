import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgAe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AE_svg__b">
                <Stop stopColor="#12833B" offset="0%" />
                <Stop stopColor="#0D7332" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AE_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AE_svg__d">
                <Stop stopColor="#FF323E" offset="0%" />
                <Stop stopColor="#FD0D1B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AE_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AE_svg__b)" d="M6 0h15v5H6z" />
            <Path fill="url(#AE_svg__c)" d="M6 10h15v5H6z" />
            <Path fill="url(#AE_svg__a)" d="M6 5h15v5H6z" />
            <Path fill="url(#AE_svg__d)" d="M0 0h6v15H0z" />
        </G>
    </Svg>
)

export default SvgAe
