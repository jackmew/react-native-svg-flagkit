import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CN_svg__b">
                <Stop stopColor="#F1361D" offset="0%" />
                <Stop stopColor="#DF2910" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="37.059%"
                y1="1.704%"
                x2="62.941%"
                y2="98.296%"
                id="CN_svg__c"
            >
                <Stop stopColor="#FFDC42" offset="0%" />
                <Stop stopColor="#FDD217" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CN_svg__d">
                <Stop stopColor="#FFDC42" offset="0%" />
                <Stop stopColor="#FDD217" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CN_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M10.13 4.483l-.63.383.017-.737-.383-.629.737.017.629-.383-.017.737.383.629-.737-.017zM8.28 2.449l-.726-.123.497-.545.123-.727.545.497.727.123-.497.545-.123.727-.545-.497zm.366 6.53l-.615.404-.01-.737-.404-.615.737-.01.615-.404.01.737.404.615-.737.01zm1.267-1.987l-.732.082.327-.66-.082-.733.66.327.733-.082-.327.66.082.733-.66-.327z"
                fill="url(#CN_svg__c)"
            />
            <Path
                fill="url(#CN_svg__d)"
                d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
            />
        </G>
    </Svg>
)

export default SvgCn
