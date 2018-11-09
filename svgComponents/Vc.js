import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgVc = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VC_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VC_svg__b">
                <Stop stopColor="#08C47A" offset="0%" />
                <Stop stopColor="#009F60" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VC_svg__c">
                <Stop stopColor="#0C87E1" offset="0%" />
                <Stop stopColor="#0073C7" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VC_svg__d">
                <Stop stopColor="#FFD147" offset="0%" />
                <Stop stopColor="#FECA2F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VC_svg__e">
                <Stop stopColor="#00C778" offset="0%" />
                <Stop stopColor="#009F60" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#VC_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#VC_svg__b)" d="M10 0h11v15H10z" />
            <Path fill="url(#VC_svg__c)" d="M0 0h7v15H0z" />
            <Path fill="url(#VC_svg__d)" d="M6 0h9v15H6z" />
            <Path
                d="M11 6l1.5-3L14 6l-1.5 3L11 6zM7 6l1.5-3L10 6 8.5 9 7 6zm2 4l1.5-3 1.5 3-1.5 3L9 10z"
                fill="url(#VC_svg__e)"
            />
        </G>
    </Svg>
)

export default SvgVc
