import React from 'react'
import Svg, { Defs, LinearGradient, Stop, Path, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgMd = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MD_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MD_svg__b">
                <Stop stopColor="#EB1C43" offset="0%" />
                <Stop stopColor="#CA1134" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MD_svg__c">
                <Stop stopColor="#115BCB" offset="0%" />
                <Stop stopColor="#094AAC" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MD_svg__f">
                <Stop stopColor="#FFD953" offset="0%" />
                <Stop stopColor="#FFD130" offset="100%" />
            </LinearGradient>
            <Path id="MD_svg__e" d="M7 0h7v15H7z" />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MD_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MD_svg__b)" d="M10 0h11v15H10z" />
            <Path fill="url(#MD_svg__c)" d="M0 0h7v15H0z" />
            <Use fill="#000" filter="url(#MD_svg__d)" xlinkHref="#MD_svg__e" />
            <Use fill="url(#MD_svg__f)" xlinkHref="#MD_svg__e" />
            <Path
                d="M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z"
                fill="#AF7F59"
            />
        </G>
    </Svg>
)

export default SvgMd
