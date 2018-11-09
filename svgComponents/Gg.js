import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GG_svg__b">
                <Stop stopColor="#F33349" offset="0%" />
                <Stop stopColor="#E51D34" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GG_svg__c">
                <Stop stopColor="#FCE24C" offset="0%" />
                <Stop stopColor="#F9DC38" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GG_svg__a)" d="M0 0h21v15H0z" />
            <Path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#GG_svg__b)" />
            <Path
                d="M10 8v4l-.5 1h2l-.5-1V8h4l1 .5v-2L15 7h-4V3l.5-1h-2l.5 1v4H6l-1-.5v2L6 8h4z"
                fill="url(#GG_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgGg
