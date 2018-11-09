import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgEc = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EC_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EC_svg__b">
                <Stop stopColor="#0748AE" offset="0%" />
                <Stop stopColor="#003993" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EC_svg__c">
                <Stop stopColor="#DE2035" offset="0%" />
                <Stop stopColor="#CE1126" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EC_svg__d">
                <Stop stopColor="#FFD935" offset="0%" />
                <Stop stopColor="#FDD216" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EC_svg__e">
                <Stop stopColor="#FBDC44" offset="0%" />
                <Stop stopColor="#FFDC32" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#EC_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#EC_svg__b)" d="M0 7h21v4H0z" />
            <Path fill="url(#EC_svg__c)" d="M0 11h21v4H0z" />
            <Path fill="url(#EC_svg__d)" d="M0 0h21v7H0z" />
            <Path
                d="M9.3 6a2 2 0 1 0 2.4 0L11 8.1h-1L9.3 6z"
                fill="url(#EC_svg__e)"
            />
            <Path fill="#5FC0DC" d="M10.5 5.5L11 8h-1z" />
            <Path
                d="M9.677 3.823a.25.25 0 0 0-.256-.06l-1.5.5a.25.25 0 1 0 .158.474l1.353-.451.891.89a.25.25 0 0 0 .354 0l.89-.89 1.354.451a.25.25 0 1 0 .158-.474l-1.5-.5a.25.25 0 0 0-.256.06l-.823.823-.823-.823z"
                fill="#3F2821"
                fillRule="nonzero"
                opacity={0.66}
            />
        </G>
    </Svg>
)

export default SvgEc
