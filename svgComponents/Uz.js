import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgUz = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="UZ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="UZ_svg__b">
                <Stop stopColor="#04AAC8" offset="0%" />
                <Stop stopColor="#009AB6" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="UZ_svg__c">
                <Stop stopColor="#23C840" offset="0%" />
                <Stop stopColor="#1EB639" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#UZ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#UZ_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#UZ_svg__c)" d="M0 10h21v5H0z" />
            <Path
                fill="url(#UZ_svg__a)"
                d="M0 5h21v5H0zM4.334 1.253a1.5 1.5 0 1 0 0 2.495 1.25 1.25 0 1 1 0-2.495zM5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
            />
        </G>
    </Svg>
)

export default SvgUz
