import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgHn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HN_svg__b">
                <Stop stopColor="#0884E6" offset="0%" />
                <Stop stopColor="#0074D0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HN_svg__c">
                <Stop stopColor="#0E88E9" offset="0%" />
                <Stop stopColor="#0074D0" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#HN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#HN_svg__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
            <Path fill="url(#HN_svg__a)" d="M0 5h21v5H0z" />
            <Path
                fill="url(#HN_svg__c)"
                d="M10.5 8l-.707.207L10 7.5l-.207-.707L10.5 7l.707-.207L11 7.5l.207.707zM14.5 7l-.707.207L14 6.5l-.207-.707L14.5 6l.707-.207L15 6.5l.207.707zM14.5 9l-.707.207L14 8.5l-.207-.707L14.5 8l.707-.207L15 8.5l.207.707zM6.5 9l-.707.207L6 8.5l-.207-.707L6.5 8l.707-.207L7 8.5l.207.707zM6.5 7l-.707.207L6 6.5l-.207-.707L6.5 6l.707-.207L7 6.5l.207.707z"
            />
        </G>
    </Svg>
)

export default SvgHn
