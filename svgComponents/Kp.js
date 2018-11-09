import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgKp = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KP_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KP_svg__b">
                <Stop stopColor="#1461B6" offset="0%" />
                <Stop stopColor="#0B52A1" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KP_svg__c">
                <Stop stopColor="#F53846" offset="0%" />
                <Stop stopColor="#EB2130" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KP_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#KP_svg__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
            <Path fill="url(#KP_svg__a)" d="M0 3h21v9H0z" />
            <Path fill="url(#KP_svg__c)" d="M0 4h21v7H0z" />
            <Path
                d="M7.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1.497l1.47 1.02-.516-1.713 1.424-1.083-1.788-.039L7.5 5l-.59 1.688-1.788.04L6.546 7.81 6.03 9.523 7.5 8.503z"
                fill="url(#KP_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgKp
