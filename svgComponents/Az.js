import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgAz = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AZ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AZ_svg__b">
                <Stop stopColor="#24AAD5" offset="0%" />
                <Stop stopColor="#1899C2" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AZ_svg__c">
                <Stop stopColor="#ED1845" offset="0%" />
                <Stop stopColor="#DE0C39" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AZ_svg__d">
                <Stop stopColor="#21BF75" offset="0%" />
                <Stop stopColor="#19AD68" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AZ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AZ_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#AZ_svg__c)" d="M0 5h21v5H0z" />
            <Path fill="url(#AZ_svg__d)" d="M0 10h21v5H0z" />
            <Path
                d="M11.334 6.253a1.25 1.25 0 1 0 0 2.495 1.5 1.5 0 1 1 0-2.495zM11.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#AZ_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgAz
