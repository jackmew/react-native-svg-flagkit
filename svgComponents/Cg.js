import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CG_svg__b">
                <Stop stopColor="#F33630" offset="0%" />
                <Stop stopColor="#DC241E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CG_svg__c">
                <Stop stopColor="#009643" offset="0%" />
                <Stop stopColor="#09C15B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CG_svg__d">
                <Stop stopColor="#FCDF4A" offset="0%" />
                <Stop stopColor="#FCE154" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CG_svg__a)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#CG_svg__b)"
                d="M6.062 19.017l15-14h1v15h-16z"
                transform="translate(-1.06 -5.02)"
            />
            <Path
                fill="url(#CG_svg__c)"
                transform="rotate(180 8.532 10.007)"
                d="M1.062 19.017l15-14h1v15h-16z"
            />
            <Path
                fill="url(#CG_svg__d)"
                transform="rotate(134 12.406 9.432)"
                d="M-2.63 9.667h29v5h-29z"
            />
        </G>
    </Svg>
)

export default SvgCg
