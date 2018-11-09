import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TN_svg__b">
                <Stop stopColor="#E92434" offset="0%" />
                <Stop stopColor="#E11324" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TN_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M11.858 4.273a3.5 3.5 0 1 0 0 6.453 3.25 3.25 0 0 1 0-6.453zM10.5 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm1.766-3.622l1.352.505-.775-1.218.898-1.13-1.398.361-.797-1.204-.088 1.441-1.391.386 1.343.53-.063 1.442.919-1.113z"
                fill="url(#TN_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgTn
