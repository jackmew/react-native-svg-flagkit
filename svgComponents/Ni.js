import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgNi = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NI_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NI_svg__b">
                <Stop stopColor="#1A78D6" offset="0%" />
                <Stop stopColor="#106AC4" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#NI_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#NI_svg__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
            <Path fill="url(#NI_svg__a)" d="M0 5h21v5H0z" />
            <Path
                d="M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="#DBCD92"
                fillRule="nonzero"
            />
            <Path fill="#9CDDEE" d="M10.5 6.5l1 2h-2z" />
        </G>
    </Svg>
)

export default SvgNi
