import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgPl = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PL_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PL_svg__b">
                <Stop stopColor="#EB2A50" offset="0%" />
                <Stop stopColor="#DA1B40" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PL_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PL_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#PL_svg__a)" d="M0 0h21v7H0z" />
        </G>
    </Svg>
)

export default SvgPl
