import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgNe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NE_svg__b">
                <Stop stopColor="#F0642F" offset="0%" />
                <Stop stopColor="#DF531D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NE_svg__c">
                <Stop stopColor="#2DCC45" offset="0%" />
                <Stop stopColor="#1FAF35" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NE_svg__d">
                <Stop stopColor="#E85C27" offset="0%" />
                <Stop stopColor="#DF531D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#NE_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#NE_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#NE_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#NE_svg__a)" d="M0 5h21v5H0z" />
            <Circle fill="url(#NE_svg__d)" cx={10.5} cy={7.5} r={2} />
        </G>
    </Svg>
)

export default SvgNe
