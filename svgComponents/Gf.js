import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGf = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GF_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GF_svg__b">
                <Stop stopColor="#2DA446" offset="0%" />
                <Stop stopColor="#218736" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GF_svg__c">
                <Stop stopColor="#FFE24A" offset="0%" />
                <Stop stopColor="#FCDC34" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GF_svg__d">
                <Stop stopColor="#E7242C" offset="0%" />
                <Stop stopColor="#D61C24" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GF_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GF_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#GF_svg__c)" d="M0 0l21 15H0z" />
            <Path
                fill="url(#GF_svg__d)"
                d="M10.5 9.073l-1.837 1.33.697-2.158L7.528 6.91l2.268-.004.704-2.155.704 2.155 2.268.004-1.832 1.336.697 2.158z"
            />
        </G>
    </Svg>
)

export default SvgGf
