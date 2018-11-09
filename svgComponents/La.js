import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgLa = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LA_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LA_svg__b">
                <Stop stopColor="#073A88" offset="0%" />
                <Stop stopColor="#032A67" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="LA_svg__c">
                <Stop stopColor="#E2273E" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#LA_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#LA_svg__b)" d="M0 4h21v7H0z" />
            <Path fill="url(#LA_svg__c)" d="M0 0h21v4H0zM0 11h21v4H0z" />
            <Circle fill="url(#LA_svg__a)" cx={10.5} cy={7.5} r={2.5} />
        </G>
    </Svg>
)

export default SvgLa
