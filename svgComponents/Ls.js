import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgLs = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LS_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LS_svg__b">
                <Stop stopColor="#0C33B8" offset="0%" />
                <Stop stopColor="#05279D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LS_svg__c">
                <Stop stopColor="#1DB158" offset="0%" />
                <Stop stopColor="#149447" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LS_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#LS_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#LS_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#LS_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#LS_svg__a)" d="M0 5h21v5H0z" />
            <Path
                d="M10 7.5l.342-1.025c.087-.263.228-.266.316 0L11 7.5l.861 1.291c.077.116.057.279-.055.356 0 0-.306.353-1.306.353s-1.306-.353-1.306-.353a.27.27 0 0 1-.055-.356L10 7.5z"
                fill="url(#LS_svg__d)"
            />
            <Path
                d="M10.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 0c.276 0 .5-.724.5-1a.5.5 0 1 0-1 0c0 .276.224 1 .5 1z"
                fill="#242424"
                fillRule="nonzero"
            />
        </G>
    </Svg>
)

export default SvgLs
