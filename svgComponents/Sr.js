import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgSr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SR_svg__b">
                <Stop stopColor="#43924C" offset="0%" />
                <Stop stopColor="#3A7E42" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SR_svg__c">
                <Stop stopColor="#CD153A" offset="0%" />
                <Stop stopColor="#B31031" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SR_svg__d">
                <Stop stopColor="#F5D24B" offset="0%" />
                <Stop stopColor="#ECC736" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SR_svg__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
            <Path fill="url(#SR_svg__a)" d="M0 3h21v9H0z" />
            <Path fill="url(#SR_svg__c)" d="M0 5h21v5H0z" />
            <Path
                fill="url(#SR_svg__d)"
                d="M10.5 8.775l-1.47.998.495-1.706-1.403-1.09 1.776-.056.602-1.671.602 1.67 1.776.057-1.403 1.09.494 1.706z"
            />
        </G>
    </Svg>
)

export default SvgSr
