import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CM_svg__b">
                <Stop stopColor="#FFDC44" offset="0%" />
                <Stop stopColor="#FDD216" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CM_svg__c">
                <Stop stopColor="#059170" offset="0%" />
                <Stop stopColor="#007B5E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CM_svg__d">
                <Stop stopColor="#E21A30" offset="0%" />
                <Stop stopColor="#CE1126" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CM_svg__e">
                <Stop stopColor="#FFDC42" offset="0%" />
                <Stop stopColor="#FDD217" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CM_svg__b)" d="M10 0h11v15H10z" />
            <Path fill="url(#CM_svg__c)" d="M0 0h7v15H0z" />
            <Path fill="url(#CM_svg__d)" d="M7 0h7v15H7z" />
            <Path fill="url(#CM_svg__b)" d="M14 0h7v15h-7z" />
            <Path
                fill="url(#CM_svg__e)"
                d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
            />
        </G>
    </Svg>
)

export default SvgCm
