import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgMz = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MZ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MZ_svg__b">
                <Stop stopColor="#FFE547" offset="0%" />
                <Stop stopColor="#FCE032" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MZ_svg__c">
                <Stop stopColor="#118C81" offset="0%" />
                <Stop stopColor="#0D7168" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MZ_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MZ_svg__e">
                <Stop stopColor="#EF2147" offset="0%" />
                <Stop stopColor="#D01739" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MZ_svg__f">
                <Stop stopColor="#FDE444" offset="0%" />
                <Stop stopColor="#FCE032" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MZ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MZ_svg__b)" d="M0 11h21v4H0z" />
            <Path fill="url(#MZ_svg__c)" d="M0 0h21v4H0z" />
            <Path fill="url(#MZ_svg__a)" d="M0 4h21v7H0z" />
            <Path fill="url(#MZ_svg__d)" d="M0 5h21v5H0z" />
            <Path fill="url(#MZ_svg__e)" d="M0 0l10 7.5L0 15z" />
            <Path
                fill="url(#MZ_svg__f)"
                d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
            />
        </G>
    </Svg>
)

export default SvgMz
