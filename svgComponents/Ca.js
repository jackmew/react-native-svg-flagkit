import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCa = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CA_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CA_svg__b">
                <Stop stopColor="#FF3131" offset="0%" />
                <Stop stopColor="red" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CA_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CA_svg__b)" d="M10 0h11v15H10zM0 0h7v15H0z" />
            <Path fill="url(#CA_svg__a)" d="M6 0h9v15H6z" />
            <Path
                d="M11.674 7.326l.652-.652a.251.251 0 0 1 .355.007L13 7l1-.5-.5 1 .32.32a.247.247 0 0 1 .008.352L12.5 9.5H11l-.25 1.5h-.5L10 9.5H8.5L7.172 8.172a.253.253 0 0 1 .009-.353L7.5 7.5l-.5-1L8 7l.32-.32a.249.249 0 0 1 .354-.006l.652.652c.096.096.152.063.124-.075L9 5l1 .5.5-1.5.5 1.5 1-.5-.45 2.251c-.029.142.028.171.124.075z"
                fill="url(#CA_svg__b)"
            />
        </G>
    </Svg>
)

export default SvgCa
