import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTf = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TF_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TF_svg__b">
                <Stop stopColor="#073AB6" offset="0%" />
                <Stop stopColor="#002B93" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TF_svg__c">
                <Stop stopColor="#F44653" offset="0%" />
                <Stop stopColor="#EE2A39" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TF_svg__d">
                <Stop stopColor="#1035BB" offset="0%" />
                <Stop stopColor="#042396" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TF_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TF_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M0 0h9.5v7.25c0 .138-.107.25-.254.25H0V0z"
                fill="url(#TF_svg__a)"
            />
            <Path fill="url(#TF_svg__c)" d="M6 0h3v7H6z" />
            <Path fill="url(#TF_svg__d)" d="M0 0h3v7H0z" />
            <Path fill="url(#TF_svg__a)" d="M3 0h3v7H3z" />
            <Path
                d="M13 6h5l-.5 1H16v.5h1l-.5 1H16V10h-1V7h-1.5L13 6zm4 2.5l1 1.5h-2l1-1.5zm-3 0l1 1.5h-2l1-1.5zm1.5 3l-1-1.5h2l-1 1.5zm3-3.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="#FFF"
            />
        </G>
    </Svg>
)

export default SvgTf
