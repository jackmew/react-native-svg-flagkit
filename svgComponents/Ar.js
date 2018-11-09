import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgAr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AR_svg__b">
                <Stop stopColor="#88BBE8" offset="0%" />
                <Stop stopColor="#76ADDD" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AR_svg__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
            <Path fill="url(#AR_svg__a)" d="M0 5h21v5H0z" />
            <Path
                d="M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="#DB7A2C"
                fillRule="nonzero"
            />
            <Circle fill="#F4B32E" cx={10.5} cy={7.5} r={1.5} />
        </G>
    </Svg>
)

export default SvgAr
