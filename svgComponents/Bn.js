import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BN_svg__b">
                <Stop stopColor="#F7E250" offset="0%" />
                <Stop stopColor="#F7DF38" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BN_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BN_svg__b)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#BN_svg__a)"
                transform="rotate(20 11.013 6.09)"
                d="M-3.487 4.59h29v3h-29z"
            />
            <Path
                fill="url(#BN_svg__c)"
                transform="rotate(20 9.987 8.91)"
                d="M-4.513 7.41h29v3h-29z"
            />
        </G>
    </Svg>
)

export default SvgBn
