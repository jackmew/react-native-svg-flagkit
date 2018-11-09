import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgLgbt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="LGBT_svg__a"
            >
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="LGBT_svg__b"
            >
                <Stop stopColor="#F71E24" offset="0%" />
                <Stop stopColor="#FB141B" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="LGBT_svg__c"
            >
                <Stop stopColor="#FB6C2C" offset="0%" />
                <Stop stopColor="#FC6420" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="LGBT_svg__d"
            >
                <Stop stopColor="#FDFC42" offset="0%" />
                <Stop stopColor="#FFFD38" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="LGBT_svg__e"
            >
                <Stop stopColor="#238F35" offset="0%" />
                <Stop stopColor="#1C7E2C" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="LGBT_svg__f"
            >
                <Stop stopColor="#0F62FA" offset="0%" />
                <Stop stopColor="#0059FC" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#LGBT_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#LGBT_svg__b)" d="M0 0h21v3H0z" />
            <Path fill="url(#LGBT_svg__c)" d="M0 3h21v3H0z" />
            <Path fill="url(#LGBT_svg__d)" d="M0 6h21v3H0z" />
            <Path fill="url(#LGBT_svg__e)" d="M0 9h21v3H0z" />
            <Path fill="url(#LGBT_svg__f)" d="M0 12h21v3H0z" />
        </G>
    </Svg>
)

export default SvgLgbt
