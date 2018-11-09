import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGh = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GH_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GH_svg__b">
                <Stop stopColor="#E71F37" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GH_svg__c">
                <Stop stopColor="#118B56" offset="0%" />
                <Stop stopColor="#0B6B41" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GH_svg__d">
                <Stop stopColor="#FDD64C" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GH_svg__e">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GH_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GH_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#GH_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#GH_svg__d)" d="M0 5h21v5H0z" />
            <Path
                fill="url(#GH_svg__e)"
                d="M10.5 8.709L9.03 9.773l.558-1.727-1.466-1.069 1.814-.003.564-1.724.564 1.724 1.814.003-1.466 1.07.557 1.726z"
            />
        </G>
    </Svg>
)

export default SvgGh
