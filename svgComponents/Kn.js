import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgKn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KN_svg__b">
                <Stop stopColor="#1EC160" offset="0%" />
                <Stop stopColor="#169E4D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KN_svg__c">
                <Stop stopColor="#DF2A40" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="16.742%"
                x2="50%"
                y2="82.422%"
                id="KN_svg__d"
            >
                <Stop stopColor="#FFD956" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KN_svg__e">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#KN_svg__b)" d="M.001 10l21-10h-21z" />
            <Path fill="url(#KN_svg__c)" d="M.001 15h21V5z" />
            <Path
                fill="url(#KN_svg__d)"
                d="M.59 19L25.182 3.632 20.413-4-4.18 11.368z"
            />
            <Path
                fill="url(#KN_svg__e)"
                d="M-.47 17.304L24.122 1.936l-2.65-4.24L-3.12 13.064z"
            />
            <Path
                fill="url(#KN_svg__a)"
                d="M15.233 5.848l-.709 1.123-.46-1.246-1.287-.327 1.043-.823-.087-1.325 1.105.738 1.234-.492-.36 1.278.848 1.022zM7.233 10.698l-.709 1.123-.46-1.246-1.287-.327 1.043-.823L5.733 8.1l1.105.738 1.234-.492-.36 1.278.848 1.022z"
            />
        </G>
    </Svg>
)

export default SvgKn
