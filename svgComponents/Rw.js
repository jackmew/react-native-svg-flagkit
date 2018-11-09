import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgRw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RW_svg__b">
                <Stop stopColor="#2D754D" offset="0%" />
                <Stop stopColor="#235F3E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RW_svg__c">
                <Stop stopColor="#25B1EB" offset="0%" />
                <Stop stopColor="#1AA3DC" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RW_svg__d">
                <Stop stopColor="#FAD546" offset="0%" />
                <Stop stopColor="#FAD12F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RW_svg__e">
                <Stop stopColor="#EDC738" offset="0%" />
                <Stop stopColor="#E5BE2A" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#RW_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#RW_svg__b)" d="M0 11h21v4H0z" />
            <Path fill="url(#RW_svg__c)" d="M0 0h21v7H0z" />
            <Path fill="url(#RW_svg__d)" d="M0 7h21v4H0z" />
            <Path
                fill="url(#RW_svg__e)"
                d="M16 4.5l-.765.848.058-1.14-1.14.057L15 3.5l-.848-.765 1.14.058-.057-1.14L16 2.5l.765-.848-.058 1.14 1.14-.057L17 3.5l.848.765-1.14-.058.057 1.14z"
            />
        </G>
    </Svg>
)

export default SvgRw
