import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgKm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KM_svg__b">
                <Stop stopColor="#FFCB49" offset="0%" />
                <Stop stopColor="#FFC638" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KM_svg__c">
                <Stop stopColor="#DC1D34" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KM_svg__d">
                <Stop stopColor="#4985D4" offset="0%" />
                <Stop stopColor="#3D77C2" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KM_svg__e">
                <Stop stopColor="#4BA343" offset="0%" />
                <Stop stopColor="#408D39" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#KM_svg__b)" d="M0 0h21v4H0z" />
            <Path fill="url(#KM_svg__c)" d="M0 7h21v4H0z" />
            <Path fill="url(#KM_svg__d)" d="M0 11h21v4H0z" />
            <Path fill="url(#KM_svg__a)" d="M0 4h21v3H0z" />
            <Path fill="url(#KM_svg__e)" d="M0 15l10-7.5L0 0z" />
            <Path
                d="M4.75 4.595a3 3 0 1 0 0 5.811 3.001 3.001 0 0 1 0-5.811zM5.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#KM_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgKm
