import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgJp = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="JP_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="JP_svg__b">
                <Stop stopColor="#D81441" offset="0%" />
                <Stop stopColor="#BB0831" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#JP_svg__a)" d="M0 0h21v15H0z" />
            <Circle fill="url(#JP_svg__b)" cx={10.5} cy={7.5} r={4.5} />
        </G>
    </Svg>
)

export default SvgJp
