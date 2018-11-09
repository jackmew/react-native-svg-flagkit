import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgCc = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CC_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CC_svg__b">
                <Stop stopColor="#229716" offset="0%" />
                <Stop stopColor="#1C7E12" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="CC_svg__c">
                <Stop stopColor="#FFE244" offset="0%" />
                <Stop stopColor="#FFDF32" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#CC_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#CC_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2c.208 0-.16 1.054 0 1 .265-.09 1-1.328 1-1.5 0-.276-.448-.5-1-.5s-1 .224-1 .5.448.5 1 .5zM16 13l-.707.207.207-.707-.207-.707L16 12l.707-.207-.207.707.207.707zM16 3.5l-.707.207L15.5 3l-.207-.707L16 2.5l.707-.207L16.5 3l.207.707zM19 6.5l-.707.207L18.5 6l-.207-.707L19 5.5l.707-.207L19.5 6l.207.707zM14 7.5l-.707.207L13.5 7l-.207-.707L14 6.5l.707-.207L14.5 7l.207.707zM17.5 8.75l-.354.104.104-.354-.104-.354.354.104.354-.104-.104.354.104.354zM12.061 5.547a2.5 2.5 0 1 0 0 3.905 2.083 2.083 0 1 1 0-3.905z"
                fill="url(#CC_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgCc
