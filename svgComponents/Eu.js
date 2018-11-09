import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgEu = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EU_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EU_svg__b">
                <Stop stopColor="#043CAE" offset="0%" />
                <Stop stopColor="#00339A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="EU_svg__c">
                <Stop stopColor="#FFD429" offset="0%" />
                <Stop stopColor="#FC0" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#EU_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#EU_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M10.5 3l-.707.207L10 2.5l-.207-.707L10.5 2l.707-.207L11 2.5l.207.707L10.5 3zm0 10l-.707.207L10 12.5l-.207-.707.707.207.707-.207L11 12.5l.207.707L10.5 13zm5-5l-.707.207L15 7.5l-.207-.707L15.5 7l.707-.207L16 7.5l.207.707L15.5 8zm-10 0l-.707.207L5 7.5l-.207-.707L5.5 7l.707-.207L6 7.5l.207.707L5.5 8zm9.33-2.5l-.707.207L14.33 5l-.207-.707.707.207.707-.207L15.33 5l.207.707-.707-.207zm-8.66 5l-.707.207L5.67 10l-.207-.707.707.207.707-.207L6.67 10l.207.707-.707-.207zM13 3.67l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 3.67zm-5 8.66l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L8 12.33zm6.83-1.83l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-8.66-5l-.707.207L5.67 5l-.207-.707.707.207.707-.207L6.67 5l.207.707L6.17 5.5zM13 12.33l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 12.33zM8 3.67l-.707.207.207-.707-.207-.707L8 2.67l.707-.207-.207.707.207.707L8 3.67z"
                fill="url(#EU_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgEu
