import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgBi = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BI_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BI_svg__b">
                <Stop stopColor="#E4233B" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BI_svg__c">
                <Stop stopColor="#34CD4E" offset="0%" />
                <Stop stopColor="#2AB441" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BI_svg__d">
                <Stop stopColor="#DF2239" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BI_svg__a)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#BI_svg__b)"
                d="M2.08 1.437h21v15h-21z"
                transform="translate(-2.08 -1.44)"
            />
            <Path
                fill="url(#BI_svg__c)"
                d="M2 1.437l9 7.5-9 7.5z"
                transform="translate(-2.08 -1.44)"
            />
            <Path
                fill="url(#BI_svg__c)"
                transform="matrix(-1 0 0 1 35.08 -1.44)"
                d="M14.08 1.437l9 7.5-9 7.5z"
            />
            <Path
                d="M10.359 6.233L1.119 0 0 1.658 9.24 7.89a3.499 3.499 0 0 0 0 2.094L0 16.217l1.118 1.658 9.24-6.233a3.486 3.486 0 0 0 2.222.795c.844 0 1.617-.298 2.222-.795l9.24 6.233 1.118-1.658-9.24-6.233a3.499 3.499 0 0 0 0-2.094l9.24-6.232L24.042 0l-9.24 6.233a3.486 3.486 0 0 0-2.222-.796c-.843 0-1.617.299-2.221.796z"
                fill="url(#BI_svg__a)"
                transform="translate(-2.08 -1.44)"
            />
            <Path
                d="M12.58 7.937l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-1.5 2.5l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm3 0l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207z"
                fill="url(#BI_svg__d)"
                transform="translate(-2.08 -1.44)"
            />
        </G>
    </Svg>
)

export default SvgBi
