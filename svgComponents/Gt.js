import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgGt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GT_svg__b">
                <Stop stopColor="#63AEE3" offset="0%" />
                <Stop stopColor="#4998D0" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GT_svg__b)" d="M10 0h11v15H10zM0 0h7v15H0z" />
            <Path fill="url(#GT_svg__a)" d="M7 0h7v15H7z" />
            <Path
                d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.499 1.499 0 0 1 9 7a.5.5 0 0 0-1 0zm3.846 2.107A2.498 2.498 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842z"
                fill="#628A40"
                fillRule="nonzero"
            />
            <Circle fill="#DCC26D" cx={10.5} cy={7} r={1} />
        </G>
    </Svg>
)

export default SvgGt
