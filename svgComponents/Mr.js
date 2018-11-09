import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgMr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MR_svg__b">
                <Stop stopColor="#108B4D" offset="0%" />
                <Stop stopColor="#0A6135" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MR_svg__c">
                <Stop stopColor="#FFC941" offset="0%" />
                <Stop stopColor="#FFC42E" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MR_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M14.86 5.8a4.5 4.5 0 1 1-8.89 0 4.501 4.501 0 0 0 8.89 0zm-4.36.623l-1.236.881.456-1.448-1.22-.903 1.518-.014L10.5 3.5l.482 1.44 1.518.013-1.22.903.456 1.448-1.236-.88z"
                fill="url(#MR_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgMr
