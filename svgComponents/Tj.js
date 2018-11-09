import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTj = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TJ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TJ_svg__b">
                <Stop stopColor="#D9101C" offset="0%" />
                <Stop stopColor="#CA0814" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TJ_svg__c">
                <Stop stopColor="#0F7811" offset="0%" />
                <Stop stopColor="#0A650C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TJ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TJ_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#TJ_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#TJ_svg__a)" d="M0 5h21v5H0z" />
            <Path
                d="M10.066 8A3.266 3.266 0 0 1 10 7.5a.5.5 0 1 1 1 0c0 .09-.024.283-.066.5h.57c.274 0 .496.232.496.5 0 .276-.216.5-.495.5h-2.01A.503.503 0 0 1 9 8.5c0-.276.216-.5.495-.5h.571zM9.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="#FAD14E"
            />
        </G>
    </Svg>
)

export default SvgTj
