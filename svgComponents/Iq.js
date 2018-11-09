import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgIq = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IQ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IQ_svg__b">
                <Stop stopColor="#DF1E35" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IQ_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#IQ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#IQ_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#IQ_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#IQ_svg__a)" d="M0 5h21v5H0z" />
            <Path
                d="M14 6.256c0-.141.092-.21.232-.14l.536.268a.444.444 0 0 1 .232.365V8.75a.247.247 0 0 1-.252.249h-.496A.254.254 0 0 1 14 8.744V6.256zM8 6.256c0-.141.092-.21.232-.14l.536.268A.444.444 0 0 1 9 6.749V8.75A.247.247 0 0 1 8.748 9h-.496A.254.254 0 0 1 8 8.744V6.256zM12 6.749c0-.138.092-.295.232-.365l.536-.268c.128-.064.232-.002.232.14v2.488a.25.25 0 0 1-.252.256h-.496A.248.248 0 0 1 12 8.751V6.75z"
                fill="#0F7A40"
            />
            <Path
                d="M10 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9h-2.248A.255.255 0 0 1 10 8.752V7.748zM6 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9H6.252A.255.255 0 0 1 6 8.752V7.748z"
                fill="#0F7A40"
            />
        </G>
    </Svg>
)

export default SvgIq
