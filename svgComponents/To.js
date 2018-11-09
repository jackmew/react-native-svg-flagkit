import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTo = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TO_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TO_svg__b">
                <Stop stopColor="#E20F1B" offset="0%" />
                <Stop stopColor="#C00711" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TO_svg__c">
                <Stop stopColor="#DF101B" offset="0%" />
                <Stop stopColor="#C00711" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TO_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TO_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#TO_svg__a)" d="M0 0h12v8H0z" />
            <Path
                d="M7 3V1.258C7 1.104 6.89 1 6.755 1h-1.51A.25.25 0 0 0 5 1.258V3H3.258C3.104 3 3 3.11 3 3.245v1.51A.25.25 0 0 0 3.258 5H5v1.742c0 .154.11.258.245.258h1.51A.25.25 0 0 0 7 6.742V5h1.742C8.896 5 9 4.89 9 4.755v-1.51A.25.25 0 0 0 8.742 3H7z"
                fill="url(#TO_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgTo
