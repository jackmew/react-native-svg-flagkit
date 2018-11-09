import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TG_svg__b">
                <Stop stopColor="#FFD44D" offset="0%" />
                <Stop stopColor="#FFCD2F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TG_svg__c">
                <Stop stopColor="#159A74" offset="0%" />
                <Stop stopColor="#0C6A4F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TG_svg__d">
                <Stop stopColor="#ED1F45" offset="0%" />
                <Stop stopColor="#D01739" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TG_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TG_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M9 0h12v3H9V0zm0 6h12v3H9V6zm-9 6h21v3H0v-3z"
                fill="url(#TG_svg__c)"
            />
            <Path fill="url(#TG_svg__d)" d="M0 0h9v9H0z" />
            <Path
                fill="url(#TG_svg__a)"
                d="M4.5 5.67L2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
            />
        </G>
    </Svg>
)

export default SvgTg
