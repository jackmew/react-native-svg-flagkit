import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGy = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GY_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GY_svg__b">
                <Stop stopColor="#08C55F" offset="0%" />
                <Stop stopColor="#009F49" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GY_svg__c">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GY_svg__d">
                <Stop stopColor="#FFD831" offset="0%" />
                <Stop stopColor="#FDD117" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GY_svg__e">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GY_svg__f">
                <Stop stopColor="#E92034" offset="0%" />
                <Stop stopColor="#CE1225" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GY_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GY_svg__b)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#GY_svg__c)"
                fillRule="nonzero"
                d="M-1 15V0h1l21 7v1L0 15z"
            />
            <Path
                fill="url(#GY_svg__d)"
                fillRule="nonzero"
                d="M0 1.054v12.892L19.338 7.5z"
            />
            <Path
                fill="url(#GY_svg__e)"
                fillRule="nonzero"
                d="M-1 15V0h1l11.5 7.5L0 15z"
            />
            <Path
                fill="url(#GY_svg__f)"
                fillRule="nonzero"
                d="M0 13.806L9.67 7.5 0 1.194z"
            />
        </G>
    </Svg>
)

export default SvgGy
