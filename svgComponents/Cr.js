import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CR_svg__b">
                <Stop stopColor="#06358F" offset="0%" />
                <Stop stopColor="#042E7D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CR_svg__c">
                <Stop stopColor="#E61F37" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CR_svg__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
            <Path fill="url(#CR_svg__a)" d="M0 3h21v9H0z" />
            <Path fill="url(#CR_svg__c)" d="M0 5h21v5H0z" />
        </G>
    </Svg>
)

export default SvgCr
