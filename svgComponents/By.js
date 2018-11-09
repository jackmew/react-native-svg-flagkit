import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBy = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BY_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BY_svg__b">
                <Stop stopColor="#E54252" offset="0%" />
                <Stop stopColor="#C63442" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BY_svg__c">
                <Stop stopColor="#5CBE6B" offset="0%" />
                <Stop stopColor="#4EA55B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BY_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BY_svg__b)" d="M0 0h21v10H0z" />
            <Path fill="url(#BY_svg__c)" d="M0 10h21v5H0z" />
            <Path
                d="M3 12.75V15H0V0h3v2.25L2.5 3l.5.75v1.5L2.5 6l.5.75v1.5L2.5 9l.5.75v1.5l-.5.75.5.75z"
                fill="url(#BY_svg__a)"
            />
            <Path
                d="M-1.5 3l1-1.5L.5 3l-1 1.5-1-1.5zm0 3l1-1.5L.5 6l-1 1.5-1-1.5zm0 3l1-1.5L.5 9l-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zM.5 1.5l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5z"
                fill="url(#BY_svg__b)"
            />
        </G>
    </Svg>
)

export default SvgBy
