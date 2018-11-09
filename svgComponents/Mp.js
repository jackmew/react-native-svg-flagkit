import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgMp = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MP_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MP_svg__b">
                <Stop stopColor="#1E8BD6" offset="0%" />
                <Stop stopColor="#1074BA" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MP_svg__c">
                <Stop stopColor="#A9A7A9" offset="0%" />
                <Stop stopColor="#8C8A8C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MP_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MP_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M10.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                fill="url(#MP_svg__a)"
                fillRule="nonzero"
            />
            <Path
                d="M8.938 5.997C8.972 5.447 9.443 5 9.999 5h1.002c.552 0 1.027.453 1.061.997l.376 6.006a.927.927 0 0 1-.947.997H9.509a.935.935 0 0 1-.947-.997l.376-6.006z"
                fill="url(#MP_svg__c)"
            />
            <Path
                fill="url(#MP_svg__a)"
                d="M10.5 9.515l-2.057 1.467.759-2.41-2.03-1.504 2.526-.022.802-2.396.802 2.396 2.527.022-2.03 1.504.758 2.41z"
            />
        </G>
    </Svg>
)

export default SvgMp
