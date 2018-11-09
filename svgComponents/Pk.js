import React from 'react'
import Svg, { Defs, LinearGradient, Stop, Path, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgPk = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PK_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PK_svg__b">
                <Stop stopColor="#0A632F" offset="0%" />
                <Stop stopColor="#05411E" offset="100%" />
            </LinearGradient>
            <Path
                d="M15.978 10.878a4.182 4.182 0 0 1-2.65.95c-2.383 0-4.314-2.015-4.314-4.5 0-2.486 1.931-4.5 4.314-4.5.999 0 1.919.354 2.65.95a4.165 4.165 0 0 0-1.043-.132c-2.165 0-3.92 1.648-3.92 3.682 0 2.033 1.755 3.681 3.92 3.681.361 0 .711-.045 1.043-.131zm.036-2.77l-1.175.838.434-1.377-1.16-.86 1.443-.013.458-1.368.459 1.368 1.443.013-1.16.86.434 1.377-1.176-.838z"
                id="PK_svg__d"
            />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PK_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PK_svg__b)" d="M0-.002h21v15H0z" />
            <Path fill="url(#PK_svg__a)" d="M0-.002h6v15H0z" />
            <G transform="rotate(-45 13.465 7.328)">
                <Use
                    fill="#000"
                    filter="url(#PK_svg__c)"
                    xlinkHref="#PK_svg__d"
                />
                <Use fill="url(#PK_svg__a)" xlinkHref="#PK_svg__d" />
            </G>
        </G>
    </Svg>
)

export default SvgPk
