import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GE_svg__b">
                <Stop stopColor="#FF2B37" offset="0%" />
                <Stop stopColor="#FD0D1B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GE_svg__a)" d="M0 0h21v15H0z" />
            <Path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#GE_svg__b)" />
            <Path
                d="M16.2 2.7L16 1.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zM4.2 2.7L4 1.5h1l-.2 1.2L6 2.5v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1l1.2.2zM4.2 11.7L4 10.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1l1.2.2zM16.2 11.7l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"
                fill="#FD0D1B"
            />
        </G>
    </Svg>
)

export default SvgGe
