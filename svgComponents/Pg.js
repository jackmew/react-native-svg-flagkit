import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgPg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PG_svg__b">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PG_svg__c">
                <Stop stopColor="#E8283F" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PG_svg__d">
                <Stop stopColor="#FFD84E" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PG_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PG_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#PG_svg__c)" d="M0 0h21v15z" />
            <Path
                fill="url(#PG_svg__a)"
                d="M5 12.5l-.707.207L4.5 12l-.207-.707L5 11.5l.707-.207L5.5 12l.207.707zM5 6.5l-.707.207L4.5 6l-.207-.707L5 5.5l.707-.207L5.5 6l.207.707zM2.5 9l-.707.207L2 8.5l-.207-.707L2.5 8l.707-.207L3 8.5l.207.707zM7 8.5l-.707.207L6.5 8l-.207-.707L7 7.5l.707-.207L7.5 8l.207.707z"
            />
            <Path
                d="M14.146 6.95a.49.49 0 0 1-.217-.377V5.65c0-.136-.098-.213-.246-.164l-.568.19a.87.87 0 0 1-.492 0l-.57-.19c-.135-.045-.15-.14-.028-.212l1.334-.8a.322.322 0 0 0 .135-.377l-.19-.568c-.045-.136.016-.214.164-.164l.569.19a.332.332 0 0 0 .376-.136l.8-1.334c.072-.12.163-.119.212.03l.19.568a.87.87 0 0 1 0 .492l-.19.569c-.045.136.03.246.165.246h.921c.136 0 .304.095.377.216l.8 1.335c.072.12.014.24-.116.266l-1.276.255a.414.414 0 0 0-.295.295l-.255 1.276c-.027.136-.144.189-.266.116l-1.334-.8z"
                fill="url(#PG_svg__d)"
            />
        </G>
    </Svg>
)

export default SvgPg
