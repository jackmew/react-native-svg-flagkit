import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCh = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CH_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="CH_svg__b">
                <Stop stopColor="red" offset="0%" />
                <Stop stopColor="#FF3131" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CH_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CH_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M9 9H6.256A.255.255 0 0 1 6 8.744V6.256C6 6.115 6.114 6 6.256 6H9V3.256C9 3.115 9.114 3 9.256 3h2.488c.141 0 .256.114.256.256V6h2.744c.141 0 .256.114.256.256v2.488a.255.255 0 0 1-.256.256H12v2.744a.255.255 0 0 1-.256.256H9.256A.255.255 0 0 1 9 11.744V9z"
                fill="url(#CH_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgCh
