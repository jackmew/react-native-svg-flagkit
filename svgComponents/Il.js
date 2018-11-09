import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgIl = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IL_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IL_svg__b">
                <Stop stopColor="#0E46D4" offset="0%" />
                <Stop stopColor="#0538B9" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#IL_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#IL_svg__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
            <Path fill="url(#IL_svg__a)" d="M0 3h21v9H0z" />
            <Path
                d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z"
                stroke="#093EC5"
                strokeWidth={0.5}
            />
            <Path
                d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z"
                stroke="#093EC5"
                strokeWidth={0.5}
            />
        </G>
    </Svg>
)

export default SvgIl
