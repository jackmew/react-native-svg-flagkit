import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GR_svg__b">
                <Stop stopColor="#1C6DC1" offset="0%" />
                <Stop stopColor="#1660AD" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GR_svg__a)" d="M0 0h21v15H0z" />
            <Path
                d="M0 0h4v4H0V0zm6 0h4v4H6V0zm4 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2zm6-6h4v4H6V6zM0 6h4v4H0V6z"
                fill="url(#GR_svg__b)"
            />
        </G>
    </Svg>
)

export default SvgGr
