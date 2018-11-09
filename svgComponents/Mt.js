import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Use,
    Circle,
} from 'react-native-svg'

const SvgMt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MT_svg__b">
                <Stop stopColor="#DE233C" offset="0%" />
                <Stop stopColor="#CD1931" offset="100%" />
            </LinearGradient>
            <Path d="M4 3V2H3v1H2v1h1v1h1V4h1V3H4z" id="MT_svg__c" />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MT_svg__b)" d="M11 0h10v15H11z" />
            <Path fill="url(#MT_svg__a)" d="M0 0h11v15H0z" />
            <Use fill="#CCCCCD" xlinkHref="#MT_svg__c" />
            <Path
                strokeOpacity={0.66}
                stroke="#7B716A"
                strokeWidth={0.5}
                d="M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5v1z"
            />
            <Circle fill="#7B716A" cx={3.5} cy={3.5} r={1} />
        </G>
    </Svg>
)

export default SvgMt
