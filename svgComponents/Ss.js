import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSs = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SS_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SS_svg__b">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SS_svg__c">
                <Stop stopColor="#E22A32" offset="0%" />
                <Stop stopColor="#D61C24" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SS_svg__d">
                <Stop stopColor="#2CA244" offset="0%" />
                <Stop stopColor="#218736" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SS_svg__e">
                <Stop stopColor="#185AC6" offset="0%" />
                <Stop stopColor="#104CAD" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SS_svg__f">
                <Stop stopColor="#FDE14A" offset="0%" />
                <Stop stopColor="#FCDC34" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SS_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SS_svg__b)" d="M0 0h21v4H0z" />
            <Path fill="url(#SS_svg__c)" d="M0 5h21v5H0z" />
            <Path fill="url(#SS_svg__a)" d="M0 4h21v1H0z" />
            <Path fill="url(#SS_svg__d)" d="M0 11h21v4H0z" />
            <Path fill="url(#SS_svg__a)" d="M0 10h21v1H0z" />
            <Path fill="url(#SS_svg__e)" d="M0 0l10 7.5L0 15z" />
            <Path
                fill="url(#SS_svg__f)"
                d="M3.836 7.987l-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"
            />
        </G>
    </Svg>
)

export default SvgSs
