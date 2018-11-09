import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgAw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AW_svg__b">
                <Stop stopColor="#5098EA" offset="0%" />
                <Stop stopColor="#458BDB" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AW_svg__c">
                <Stop stopColor="#E82045" offset="0%" />
                <Stop stopColor="#D01739" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AW_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AW_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M1.803 4.96a.5.5 0 0 1 0-.92l1.566-.67.671-1.567a.5.5 0 0 1 .92 0l.67 1.566 1.567.671a.5.5 0 0 1 0 .92l-1.566.67-.671 1.567a.5.5 0 0 1-.92 0l-.67-1.566-1.567-.671z"
                fill="url(#AW_svg__a)"
                fillRule="nonzero"
            />
            <Path
                fill="url(#AW_svg__c)"
                d="M3.75 5.25L2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z"
            />
            <Path fill="#F9D536" d="M0 11h21v1H0zM0 9h21v1H0z" />
        </G>
    </Svg>
)

export default SvgAw
