import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTk = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TK_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TK_svg__b">
                <Stop stopColor="#0637C5" offset="0%" />
                <Stop stopColor="#002CAA" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TK_svg__c">
                <Stop stopColor="#FDD33F" offset="0%" />
                <Stop stopColor="#FED02F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TK_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TK_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M4 12h15v1H3l1-1zm7.5-6c3-2 6.5-4 6.5-4s-1.643 3.073-1.5 4.5C16.69 8.407 19 11 19 11H5s3.5-3 6.5-5z"
                fill="url(#TK_svg__c)"
            />
            <Path
                fill="#FFF"
                d="M4 9l-.707.207L3.5 8.5l-.207-.707L4 8l.707-.207L4.5 8.5l.207.707zM5 2.5l-.707.207L4.5 2l-.207-.707L5 1.5l.707-.207L5.5 2l.207.707zM7 5.5l-.707.207L6.5 5l-.207-.707L7 4.5l.707-.207L7.5 5l.207.707zM2 5.5l-.707.207L1.5 5l-.207-.707L2 4.5l.707-.207L2.5 5l.207.707z"
            />
        </G>
    </Svg>
)

export default SvgTk
