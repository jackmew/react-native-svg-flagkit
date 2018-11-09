import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgHr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HR_svg__b">
                <Stop stopColor="#FF202D" offset="0%" />
                <Stop stopColor="#FD0D1B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HR_svg__c">
                <Stop stopColor="#2027AC" offset="0%" />
                <Stop stopColor="#191F94" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HR_svg__d">
                <Stop stopColor="#FF212E" offset="0%" />
                <Stop stopColor="#FD0D1B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#HR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#HR_svg__b)" d="M0 0h21v5H0z" />
            <Path
                d="M8 4l.5-.5.5.5v1H8V4zm2 0l.5-.5.5.5v1h-1V4zm2 0l.5-.5.5.5v1h-1V4z"
                fill="#1895DB"
                opacity={0.5}
            />
            <Path
                d="M9 4l.5-.5.5.5v1H9V4zm2 0l.5-.5.5.5v1h-1V4z"
                fill="#191F94"
                opacity={0.5}
            />
            <Path fill="url(#HR_svg__c)" d="M0 10h21v5H0z" />
            <Path
                d="M0 10V5h21v5H0zm12 0h1l-.273.547c-.126.25-.454.453-.727.453v-1zm-2 0h1v1h-1v-1zm-2 0h1v1a.876.876 0 0 1-.727-.453L8 10z"
                fill="url(#HR_svg__a)"
            />
            <Path
                d="M10 5h1v1h-1V5zm2 0h.5l.5 1h-1V5zM8.5 5H9v1H8l.5-1zM9 6h1v1H9V6zm2 0h1v1h-1V6zm-1 1h1v1h-1V7zm2 0h1v1h-1V7zm-1 1h1v1h-1V8zM8 7h1v1H8V7zm1 1h1v1H9V8zM8 9h1v1H8V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-1 1h1v1h-1v-1zm-2 0h1v1H9v-1z"
                fill="url(#HR_svg__d)"
            />
        </G>
    </Svg>
)

export default SvgHr
