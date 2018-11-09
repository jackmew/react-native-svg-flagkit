import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGbEng = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="GB-ENG_svg__a"
            >
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="GB-ENG_svg__b"
            >
                <Stop stopColor="#E82739" offset="0%" />
                <Stop stopColor="#CA1A2B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GB-ENG_svg__a)" d="M0 0h21v15H0z" />
            <Path
                d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z"
                fill="url(#GB-ENG_svg__b)"
            />
        </G>
    </Svg>
)

export default SvgGbEng
