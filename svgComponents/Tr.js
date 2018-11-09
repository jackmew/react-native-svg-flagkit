import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TR_svg__b">
                <Stop stopColor="#E92434" offset="0%" />
                <Stop stopColor="#E11324" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TR_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M13.052 4.737A3.907 3.907 0 0 0 10.75 4C8.679 4 7 5.567 7 7.5S8.679 11 10.75 11c.868 0 1.667-.275 2.302-.737a4.5 4.5 0 1 1 0-5.526zm1.214 3.34l-.919 1.113.063-1.442-1.343-.53 1.39-.386.09-1.441.796 1.204 1.398-.361-.898 1.13.775 1.217-1.352-.505z"
                fill="url(#TR_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgTr
