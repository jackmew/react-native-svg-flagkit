import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgSx = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SX_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SX_svg__b">
                <Stop stopColor="#0740AA" offset="0%" />
                <Stop stopColor="#012F85" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SX_svg__c">
                <Stop stopColor="#F02C33" offset="0%" />
                <Stop stopColor="#D82027" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SX_svg__d">
                <Stop stopColor="#E72C33" offset="0%" />
                <Stop stopColor="#D82027" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SX_svg__e">
                <Stop stopColor="#78C1F0" offset="0%" />
                <Stop stopColor="#67B1E0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SX_svg__f">
                <Stop stopColor="#F7E14B" offset="0%" />
                <Stop stopColor="#F7DF3E" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SX_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SX_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#SX_svg__c)" d="M0 0h21v7H0z" />
            <Path fill="url(#SX_svg__a)" d="M0 0l10 7.5L0 15z" />
            <Path
                d="M1.5 7V5.506A.997.997 0 0 1 2.495 4.5h2.01c.55 0 .995.457.995 1.006V7c0 .845-.384 1.447-1.003 1.798a2.304 2.304 0 0 1-1.03.3 2.312 2.312 0 0 1-.964-.3C1.884 8.447 1.5 7.845 1.5 7z"
                fill="url(#SX_svg__d)"
                fillRule="nonzero"
            />
            <Path
                d="M2 7V5.506c0-.28.216-.506.495-.506h2.01c.273 0 .495.232.495.506V7c0 1.5-1.5 1.6-1.5 1.6S2 8.5 2 7z"
                fill="url(#SX_svg__e)"
            />
            <Path fill="#FFF" d="M3 6.5l.5-.5.5.5v1H3z" />
            <Path
                d="M1.001 9.368A3.389 3.389 0 0 0 3.5 10.5c.948 0 1.915-.448 2.521-1.162a.5.5 0 0 0-.762-.647A2.395 2.395 0 0 1 3.5 9.5a2.39 2.39 0 0 1-1.743-.787.5.5 0 1 0-.756.655z"
                fill="#F9D835"
                fillRule="nonzero"
            />
            <Circle fill="url(#SX_svg__f)" cx={3.5} cy={4.5} r={1} />
        </G>
    </Svg>
)

export default SvgSx
