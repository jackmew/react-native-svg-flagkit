import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBf = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BF_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BF_svg__b">
                <Stop stopColor="#00B051" offset="0%" />
                <Stop stopColor="#009F49" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BF_svg__c">
                <Stop stopColor="#FA494B" offset="0%" />
                <Stop stopColor="#F02B2D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BF_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BF_svg__b)" d="M0 8h21v7H0z" />
            <Path fill="url(#BF_svg__c)" d="M0 0h21v8H0z" />
            <Path
                fill="#FDD216"
                d="M10.5 9.17l-1.763 1.257.65-2.065-1.74-1.29 2.165-.019L10.5 5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
            />
        </G>
    </Svg>
)

export default SvgBf
