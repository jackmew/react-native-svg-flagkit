import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgWs = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="WS_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="WS_svg__b">
                <Stop stopColor="#E31F37" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="WS_svg__c">
                <Stop stopColor="#083B9A" offset="0%" />
                <Stop stopColor="#042E7D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#WS_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#WS_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#WS_svg__c)" d="M0 8h11V0H0z" />
            <Path
                d="M5 7l-.707.207L4.5 6.5l-.207-.707L5 6l.707-.207L5.5 6.5l.207.707L5 7zm0-5l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707L5 2zM3 4.5l-.707.207L2.5 4l-.207-.707L3 3.5l.707-.207L3.5 4l.207.707L3 4.5zM7.5 4l-.707.207L7 3.5l-.207-.707L7.5 3l.707-.207L8 3.5l.207.707L7.5 4zM6.25 5.5a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5z"
                fill="url(#WS_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgWs
