import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgZw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZW_svg__b">
                <Stop stopColor="#369D0C" offset="0%" />
                <Stop stopColor="#319209" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZW_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZW_svg__d">
                <Stop stopColor="#FFD40E" offset="0%" />
                <Stop stopColor="#FFD201" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ZW_svg__e">
                <Stop stopColor="#F12F1F" offset="0%" />
                <Stop stopColor="#DE2010" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#ZW_svg__a)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#ZW_svg__b)"
                d="M0 0h21v2H0zM0 13h21v2H0zM0 4h21v2H0zM0 9h21v2H0z"
            />
            <Path fill="url(#ZW_svg__c)" d="M0 6h21v3H0z" />
            <Path fill="url(#ZW_svg__d)" d="M0 2h21v2H0zM0 11h21v2H0z" />
            <Path
                fill="url(#ZW_svg__c)"
                fillRule="nonzero"
                d="M-1 15V0h1l10 7.5L0 15z"
            />
            <Path
                fill="url(#ZW_svg__a)"
                fillRule="nonzero"
                d="M0 13.75L8.333 7.5 0 1.25z"
            />
            <Path
                fill="url(#ZW_svg__e)"
                d="M3 8.475L1.53 9.523 2.074 7.8.623 6.727l1.804-.016L3 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
            />
        </G>
    </Svg>
)

export default SvgZw
