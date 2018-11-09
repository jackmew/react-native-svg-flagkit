import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBh = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BH_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BH_svg__b">
                <Stop stopColor="#E7243B" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BH_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BH_svg__b)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#BH_svg__a)"
                d="M0 15h7.5L6 14l1.5-1L6 12l1.5-1L6 10l1.5-1L6 8l1.5-1L6 6l1.5-1L6 4l1.5-1L6 2l1.5-1L6 0H0z"
            />
        </G>
    </Svg>
)

export default SvgBh
