import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCf = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg__b">
                <Stop stopColor="#083D96" offset="0%" />
                <Stop stopColor="#053380" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg__c">
                <Stop stopColor="#37AE39" offset="0%" />
                <Stop stopColor="#2E9630" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg__d">
                <Stop stopColor="#FFD13F" offset="0%" />
                <Stop stopColor="#FFCD2F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg__e">
                <Stop stopColor="#E42346" offset="0%" />
                <Stop stopColor="#D01739" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CF_svg__f">
                <Stop stopColor="#FFD03B" offset="0%" />
                <Stop stopColor="#FFCD2F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CF_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CF_svg__b)" d="M0 0h21v4H0z" />
            <Path fill="url(#CF_svg__c)" d="M0 7h21v4H0z" />
            <Path fill="url(#CF_svg__d)" d="M0 11h21v4H0z" />
            <Path fill="url(#CF_svg__a)" d="M0 4h21v3H0z" />
            <Path fill="url(#CF_svg__e)" d="M8 0h5v15H8z" />
            <Path
                fill="url(#CF_svg__f)"
                d="M3.5 2.585l-.882.629.326-1.033-.87-.645 1.082-.01L3.5.5l.344 1.027 1.083.01-.87.644.325 1.033z"
            />
        </G>
    </Svg>
)

export default SvgCf
