import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TT_svg__b">
                <Stop stopColor="#ED233C" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TT_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TT_svg__b)" d="M-.004.005h21v15h-21z" />
            <Path
                fill="url(#TT_svg__a)"
                transform="matrix(-1 0 0 1 21.5 0)"
                d="M23-1l-7.144-3.06-15.1 17.995L-1.5 16l7.653 3.07L20.977 1.403z"
            />
            <Path
                fill="url(#TT_svg__c)"
                transform="matrix(-1 0 0 1 20.991 0)"
                d="M3.09 20.22L21.731-1.997l-3.83-3.214L-.74 17.005l3.83 3.214z"
            />
        </G>
    </Svg>
)

export default SvgTt
