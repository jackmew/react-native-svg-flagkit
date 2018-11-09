import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgDk = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DK_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DK_svg__b">
                <Stop stopColor="#EF264D" offset="0%" />
                <Stop stopColor="#E1143C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#DK_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#DK_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#DK_svg__a)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
        </G>
    </Svg>
)

export default SvgDk
