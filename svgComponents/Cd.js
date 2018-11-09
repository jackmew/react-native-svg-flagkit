import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCd = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CD_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CD_svg__b">
                <Stop stopColor="#158AFF" offset="0%" />
                <Stop stopColor="#007FFF" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CD_svg__c">
                <Stop stopColor="#CE1120" offset="0%" />
                <Stop stopColor="#E11B2B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CD_svg__a)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#CD_svg__b)"
                d="M4.294 1.443h21v15h-21z"
                transform="translate(-4.29 -1.44)"
            />
            <Path
                fill="#FDD216"
                d="M24.273 3.906l-25.84 13.166-2.723-5.346L21.55-1.44z"
            />
            <Path
                fill="url(#CD_svg__c)"
                transform="rotate(153 12.585 7.839)"
                d="M.057 7.074h29v4h-29z"
            />
            <Path
                fill="#FDD216"
                d="M3.504 4.478l-1.47 1.047.542-1.721-1.45-1.074 1.805-.016.573-1.711.573 1.71 1.804.017-1.45 1.074.542 1.721z"
            />
        </G>
    </Svg>
)

export default SvgCd
