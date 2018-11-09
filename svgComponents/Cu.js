import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCu = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CU_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CU_svg__b">
                <Stop stopColor="#0B389F" offset="0%" />
                <Stop stopColor="#052E8D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CU_svg__c">
                <Stop stopColor="#E12A43" offset="0%" />
                <Stop stopColor="#CD1931" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CU_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CU_svg__b)" d="M0 0h21v3H0zM0 6h21v3H0z" />
            <Path fill="url(#CU_svg__a)" d="M0 3h21v3H0z" />
            <Path fill="url(#CU_svg__b)" d="M0 12h21v3H0z" />
            <Path fill="url(#CU_svg__a)" d="M0 9h21v3H0z" />
            <Path fill="url(#CU_svg__c)" d="M0 0l10 7.5L0 15z" />
            <Path
                fill="url(#CU_svg__a)"
                d="M3.5 8.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L3.5 5.5l.45 1.38 1.452.002-1.173.855.447 1.381z"
            />
        </G>
    </Svg>
)

export default SvgCu
