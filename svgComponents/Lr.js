import React from 'react'
import Svg, { Defs, LinearGradient, Stop, Path, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgLr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LR_svg__b">
                <Stop stopColor="#E1244A" offset="0%" />
                <Stop stopColor="#BE1134" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LR_svg__c">
                <Stop stopColor="#0C3F8E" offset="0%" />
                <Stop stopColor="#032A67" offset="100%" />
            </LinearGradient>
            <Path
                id="LR_svg__e"
                d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
            />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#LR_svg__a)" d="M0 0h21v15H0z" />
            <Path
                d="M10 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2z"
                fill="url(#LR_svg__b)"
            />
            <Path fill="url(#LR_svg__c)" d="M0 0h10v10H0z" />
            <Use fill="#000" filter="url(#LR_svg__d)" xlinkHref="#LR_svg__e" />
            <Use fill="url(#LR_svg__a)" xlinkHref="#LR_svg__e" />
        </G>
    </Svg>
)

export default SvgLr
