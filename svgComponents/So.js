import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSo = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SO_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SO_svg__b">
                <Stop stopColor="#5D9FE9" offset="0%" />
                <Stop stopColor="#458BDB" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SO_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SO_svg__b)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#SO_svg__a)"
                d="M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z"
            />
        </G>
    </Svg>
)

export default SvgSo
