import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CW_svg__b">
                <Stop stopColor="#0543A8" offset="0%" />
                <Stop stopColor="#00307D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CW_svg__c">
                <Stop stopColor="#FCC747" offset="0%" />
                <Stop stopColor="#FEC539" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CW_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CW_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#CW_svg__c)" d="M0 10h21v2H0z" />
            <Path
                fill="url(#CW_svg__a)"
                d="M6.5 6.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381zM3 3.575l-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036z"
            />
        </G>
    </Svg>
)

export default SvgCw
