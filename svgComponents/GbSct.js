import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGbSct = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="GB-SCT_svg__a"
            >
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="GB-SCT_svg__b"
            >
                <Stop stopColor="#1479D0" offset="0%" />
                <Stop stopColor="#0A68BA" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GB-SCT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GB-SCT_svg__b)" d="M0-.003h21v15H0z" />
            <Path
                d="M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"
                fill="url(#GB-SCT_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgGbSct
