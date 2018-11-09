import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgPt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PT_svg__b">
                <Stop stopColor="#FF2936" offset="0%" />
                <Stop stopColor="#FD0D1B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PT_svg__c">
                <Stop stopColor="#128415" offset="0%" />
                <Stop stopColor="#0A650C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PT_svg__d">
                <Stop stopColor="#FAF94F" offset="0%" />
                <Stop stopColor="#F8F736" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PT_svg__e">
                <Stop stopColor="#1D50B5" offset="0%" />
                <Stop stopColor="#15439D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PT_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#PT_svg__c)" d="M0 0h8v15H0z" />
            <Path
                d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                fill="url(#PT_svg__d)"
                fillRule="nonzero"
            />
            <Path
                d="M7 6.256A.25.25 0 0 1 7.245 6h1.51A.25.25 0 0 1 9 6.256V8A.997.997 0 0 1 8 9c-.552 0-1-.443-1-.999V6.256z"
                fill="url(#PT_svg__a)"
            />
            <Path
                d="M8 8c.276 0 .5-.724.5-1a.5.5 0 0 0-1 0c0 .276.224 1 .5 1z"
                fill="url(#PT_svg__e)"
            />
        </G>
    </Svg>
)

export default SvgPt
