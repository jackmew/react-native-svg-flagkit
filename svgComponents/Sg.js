import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SG_svg__b">
                <Stop stopColor="#E12237" offset="0%" />
                <Stop stopColor="#CE1126" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SG_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SG_svg__b)" d="M0 0h21v8H0z" />
            <Path
                fill="url(#SG_svg__a)"
                d="M0 8h21v7H0zM6.874 1.657a2.5 2.5 0 1 0 0 4.686 3 3 0 1 1 0-4.686zM5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
            />
        </G>
    </Svg>
)

export default SvgSg
