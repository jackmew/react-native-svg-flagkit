import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgAd = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AD_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AD_svg__b">
                <Stop stopColor="#1537D1" offset="0%" />
                <Stop stopColor="#0522A5" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AD_svg__c">
                <Stop stopColor="#EA3058" offset="0%" />
                <Stop stopColor="#CE173E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AD_svg__d">
                <Stop stopColor="#FFCF3C" offset="0%" />
                <Stop stopColor="#FECB2F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AD_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AD_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#AD_svg__c)" d="M10 0h11v15H10z" />
            <Path fill="url(#AD_svg__d)" d="M7 0h7v15H7z" />
            <Path fill="#FFEDB1" d="M9.5 6.5h1V7h-1z" />
            <Path
                d="M9.665 7.96c.025.295.292.54.587.54h.496a.607.607 0 0 0 .587-.54l.122-1.46H9.543l.122 1.46zm-.624-1.465A.446.446 0 0 1 9.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496c-.553 0-1.039-.443-1.085-.999L9.04 6.495z"
                fill="#D32E28"
                fillRule="nonzero"
            />
            <Path fill="#D32E28" d="M9.5 7h2v.5h-2z" />
        </G>
    </Svg>
)

export default SvgAd
