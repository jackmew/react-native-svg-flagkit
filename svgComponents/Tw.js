import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="93.767%"
                id="TW_svg__b"
            >
                <Stop stopColor="#FE3030" offset="0%" />
                <Stop stopColor="red" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TW_svg__c">
                <Stop stopColor="#0909B6" offset="0%" />
                <Stop stopColor="#000096" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TW_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TW_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#TW_svg__c)" d="M0 8h11V0H0z" />
            <Path
                fill="url(#TW_svg__a)"
                d="M5.5 5.25l-.957 1.06.073-1.426-1.426.073L4.25 4l-1.06-.957 1.426.073-.073-1.426.957 1.06.957-1.06-.073 1.426 1.426-.073L6.75 4l1.06.957-1.426-.073.073 1.426z"
            />
        </G>
    </Svg>
)

export default SvgTw
