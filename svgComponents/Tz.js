import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgTz = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TZ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TZ_svg__b">
                <Stop stopColor="#33CC4D" offset="0%" />
                <Stop stopColor="#2AB441" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TZ_svg__c">
                <Stop stopColor="#2DAFE4" offset="0%" />
                <Stop stopColor="#1BA4DC" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TZ_svg__d">
                <Stop stopColor="#FFD84F" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TZ_svg__e">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TZ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TZ_svg__b)" d="M.001 10.004l21-10h-21z" />
            <Path fill="url(#TZ_svg__c)" d="M.001 15.004h21v-10z" />
            <Path
                fill="url(#TZ_svg__d)"
                d="M2.313 17.004L22.63 4.309l-3.94-6.305-20.317 12.695z"
            />
            <Path
                fill="url(#TZ_svg__e)"
                d="M-.47 17.308L24.123 1.94l-2.65-4.24L-3.12 13.068z"
            />
        </G>
    </Svg>
)

export default SvgTz
