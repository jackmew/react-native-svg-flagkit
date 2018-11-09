import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgFm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FM_svg__b">
                <Stop stopColor="#95CEF5" offset="0%" />
                <Stop stopColor="#78B3DC" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#FM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#FM_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M10.5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365L10.5 4.32zm0 8l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 9.5l.482 1.337 1.42.045-1.122.871.396 1.365-1.176-.798zm4-4l-1.176.798.396-1.365-1.122-.871 1.42-.045L14.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L14.5 8.32zm-8 0l-1.176.798.396-1.365-1.122-.871 1.42-.045L6.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L6.5 8.32z"
                fill="url(#FM_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgFm
