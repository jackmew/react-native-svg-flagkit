import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgMn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MN_svg__b">
                <Stop stopColor="#146BBC" offset="0%" />
                <Stop stopColor="#0B5396" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MN_svg__c">
                <Stop stopColor="#E43642" offset="0%" />
                <Stop stopColor="#C32A34" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MN_svg__d">
                <Stop stopColor="#F8D246" offset="0%" />
                <Stop stopColor="#F9CE2F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MN_svg__b)" d="M7 0h7v15H7z" />
            <Path fill="url(#MN_svg__c)" d="M0 0h7v15H0zM14 0h7v15h-7z" />
            <Path
                d="M4 9h1v3H4V9zM2 9h1v3H2V9zm1 2h1l-.5 1-.5-1zm0-2h1l-.5 1L3 9zm0-1l.5-.5.5.5H3zm.5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#MN_svg__d)"
            />
        </G>
    </Svg>
)

export default SvgMn
