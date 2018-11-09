import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SN_svg__b">
                <Stop stopColor="#F13642" offset="0%" />
                <Stop stopColor="#E1202C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SN_svg__c">
                <Stop stopColor="#17A052" offset="0%" />
                <Stop stopColor="#108442" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SN_svg__d">
                <Stop stopColor="#FFF166" offset="0%" />
                <Stop stopColor="#FDEE54" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SN_svg__b)" d="M10 0h11v15H10z" />
            <Path fill="url(#SN_svg__c)" d="M0 0h7v15H0z" />
            <Path fill="url(#SN_svg__d)" d="M7 0h7v15H7z" />
            <Path
                fill="url(#SN_svg__c)"
                d="M10.5 8.525l-1.47.998.495-1.706-1.403-1.09 1.776-.056L10.5 5l.602 1.67 1.776.057-1.403 1.09.494 1.706z"
            />
        </G>
    </Svg>
)

export default SvgSn
