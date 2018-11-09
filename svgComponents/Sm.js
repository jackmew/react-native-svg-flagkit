import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Ellipse,
} from 'react-native-svg'

const SvgSm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SM_svg__b">
                <Stop stopColor="#7CCCF5" offset="0%" />
                <Stop stopColor="#62B7E3" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SM_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#SM_svg__a)" d="M0 0h21v7H0z" />
            <Path
                d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.499 1.499 0 0 1 9 7a.5.5 0 0 0-1 0zm3.846 2.107A2.498 2.498 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842z"
                fill="#445F42"
                fillRule="nonzero"
            />
            <Ellipse fill="#D89F3D" cx={10.5} cy={6.5} rx={1} ry={1.5} />
        </G>
    </Svg>
)

export default SvgSm
