import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgMy = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MY_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MY_svg__b">
                <Stop stopColor="#E1244A" offset="0%" />
                <Stop stopColor="#BE1134" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MY_svg__c">
                <Stop stopColor="#0C3F8E" offset="0%" />
                <Stop stopColor="#032A67" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MY_svg__d">
                <Stop stopColor="#FFD34F" offset="0%" />
                <Stop stopColor="#FFCB2F" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MY_svg__a)" d="M0 0h21v15H0z" />
            <Path
                d="M10 0h11v1H10V0zm0 2h11v1H10V2zm0 2h11v1H10V4zm0 2h11v1H10V6zM0 8h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
                fill="url(#MY_svg__b)"
            />
            <Path fill="url(#MY_svg__c)" d="M0 0h12v8H0z" />
            <Path
                d="M6.874 1.657a2.5 2.5 0 1 0 0 4.686 3 3 0 1 1 0-4.686zM8 4.82l-.868.982.227-1.29-1.309-.067 1.15-.627-.764-1.065 1.208.508L8 2l.356 1.261 1.208-.508-.765 1.065 1.15.627-1.308.066.227 1.29L8 4.82z"
                fill="url(#MY_svg__d)"
            />
        </G>
    </Svg>
)

export default SvgMy
