import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgRu = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RU_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RU_svg__b">
                <Stop stopColor="#0C47B7" offset="0%" />
                <Stop stopColor="#073DA4" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RU_svg__c">
                <Stop stopColor="#E53B35" offset="0%" />
                <Stop stopColor="#D32E28" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#RU_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#RU_svg__b)" d="M0 5h21v5H0z" />
            <Path fill="url(#RU_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#RU_svg__a)" d="M0 0h21v5H0z" />
        </G>
    </Svg>
)

export default SvgRu
