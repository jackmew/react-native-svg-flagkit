import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBa = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BA_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BA_svg__b">
                <Stop stopColor="#0B36B2" offset="0%" />
                <Stop stopColor="#042993" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BA_svg__c">
                <Stop stopColor="#FFD045" offset="0%" />
                <Stop stopColor="#FECA2F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BA_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BA_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#BA_svg__c)" d="M17 15V0H6.5z" />
            <Path
                fill="url(#BA_svg__a)"
                d="M13 14l-.707.207.207-.707-.207-.707L13 13l.707-.207-.207.707.207.707zM11 11l-.707.207.207-.707-.207-.707L11 10l.707-.207-.207.707.207.707zM9 8l-.707.207L8.5 7.5l-.207-.707L9 7l.707-.207L9.5 7.5l.207.707zM7 5l-.707.207L6.5 4.5l-.207-.707L7 4l.707-.207L7.5 4.5l.207.707zM5 2l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707z"
            />
        </G>
    </Svg>
)

export default SvgBa
