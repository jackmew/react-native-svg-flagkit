import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgXk = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="XK_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="XK_svg__b">
                <Stop stopColor="#2F5FBF" offset="0%" />
                <Stop stopColor="#244EA3" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="XK_svg__c">
                <Stop stopColor="#E9C072" offset="0%" />
                <Stop stopColor="#CFA557" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#XK_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#XK_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M9 3.5l-.707.207L8.5 3l-.207-.707L9 2.5l.707-.207L9.5 3l.207.707L9 3.5zm3 0l-.707.207L11.5 3l-.207-.707L12 2.5l.707-.207L12.5 3l.207.707L12 3.5zm3 1l-.707.207L14.5 4l-.207-.707L15 3.5l.707-.207L15.5 4l.207.707L15 4.5zm2 2l-.707.207L16.5 6l-.207-.707L17 5.5l.707-.207L17.5 6l.207.707L17 6.5zm-13 0l-.707.207L3.5 6l-.207-.707L4 5.5l.707-.207L4.5 6l.207.707L4 6.5zm2-2l-.707.207L5.5 4l-.207-.707L6 3.5l.707-.207L6.5 4l.207.707L6 4.5z"
                fill="url(#XK_svg__a)"
            />
            <Path
                fill="url(#XK_svg__c)"
                d="M9 10l-1-.5-1-2h1l1-1 .5-1 1-.5.5.5 1 .5v.5l.5.5L14 8l-.5 1.5L12 11l-.5-1-1.5 1v1l-.5-.5z"
            />
        </G>
    </Svg>
)

export default SvgXk
