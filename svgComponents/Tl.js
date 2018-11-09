import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTl = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TL_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TL_svg__b">
                <Stop stopColor="#FF323E" offset="0%" />
                <Stop stopColor="#FD0D1B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TL_svg__c">
                <Stop stopColor="#FFCC51" offset="0%" />
                <Stop stopColor="#FFC63C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TL_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TL_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TL_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#TL_svg__c)" d="M0 0l13 7.5L0 15z" />
            <Path fill="url(#TL_svg__d)" d="M0 0l9 7.5L0 15z" />
            <Path
                fill="url(#TL_svg__a)"
                transform="rotate(-30 3.92 7.187)"
                d="M3.92 8.262L2.62 9.19l.48-1.524-1.284-.951L3.413 6.7l.507-1.515.508 1.515 1.598.015-1.284.95.48 1.525z"
            />
        </G>
    </Svg>
)

export default SvgTl
