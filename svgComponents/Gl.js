import React from 'react'
import Svg, { Defs, LinearGradient, Stop, Path, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgGl = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GL_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <Path id="GL_svg__c" d="M0 0h21v8H0z" />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GL_svg__d">
                <Stop stopColor="#E82245" offset="0%" />
                <Stop stopColor="#CC1838" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GL_svg__a)" d="M0 0h21v15H0z" />
            <Use fill="#000" filter="url(#GL_svg__b)" xlinkHref="#GL_svg__c" />
            <Use fill="url(#GL_svg__a)" xlinkHref="#GL_svg__c" />
            <Path d="M3 8H0v7h21V8H11a4 4 0 1 0-8 0z" fill="url(#GL_svg__d)" />
            <Path d="M3 8a4 4 0 1 0 8 0H3z" fill="url(#GL_svg__a)" />
        </G>
    </Svg>
)

export default SvgGl
