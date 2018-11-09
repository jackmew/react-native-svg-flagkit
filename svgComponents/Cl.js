import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCl = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CL_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CL_svg__b">
                <Stop stopColor="#EA3B2E" offset="0%" />
                <Stop stopColor="#D52B1E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CL_svg__c">
                <Stop stopColor="#0B48C2" offset="0%" />
                <Stop stopColor="#0239A7" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CL_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CL_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#CL_svg__a)" d="M0 0h21v7H0z" />
            <Path fill="url(#CL_svg__c)" d="M0 0h7v7H0z" />
            <Path
                fill="url(#CL_svg__a)"
                d="M3.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
            />
        </G>
    </Svg>
)

export default SvgCl
