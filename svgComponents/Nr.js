import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgNr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NR_svg__b">
                <Stop stopColor="#0744A7" offset="0%" />
                <Stop stopColor="#00307D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NR_svg__c">
                <Stop stopColor="#FCC747" offset="0%" />
                <Stop stopColor="#FEC539" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#NR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#NR_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#NR_svg__c)" d="M0 6h21v2H0z" />
            <Path
                fill="url(#NR_svg__a)"
                d="M5.5 12.25l-.773 1.128.038-1.367-1.288.458.834-1.083L3 11l1.311-.386-.834-1.083 1.288.458-.038-1.367L5.5 9.75l.773-1.128-.038 1.367 1.288-.458-.834 1.083L8 11l-1.311.386.834 1.083-1.288-.458.038 1.367z"
            />
        </G>
    </Svg>
)

export default SvgNr
