import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgBd = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BD_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BD_svg__b">
                <Stop stopColor="#128363" offset="0%" />
                <Stop stopColor="#0C6A4F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BD_svg__c">
                <Stop stopColor="#F23C53" offset="0%" />
                <Stop stopColor="#F22E46" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BD_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BD_svg__b)" d="M0 0h21v15H0z" />
            <Circle fill="url(#BD_svg__c)" cx={9.5} cy={7.5} r={4.5} />
        </G>
    </Svg>
)

export default SvgBd
