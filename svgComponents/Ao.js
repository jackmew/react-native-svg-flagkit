import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgAo = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg__b">
                <Stop stopColor="#FF323E" offset="0%" />
                <Stop stopColor="#FD0D1B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg__c">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg__d">
                <Stop stopColor="#DD2137" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AO_svg__e">
                <Stop stopColor="#F8D84B" offset="0%" />
                <Stop stopColor="#F9D536" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AO_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AO_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#AO_svg__c)" d="M0 8h21v7H0z" />
            <Path fill="url(#AO_svg__d)" d="M0 0h21v8H0z" />
            <Path
                d="M10.63 8.855l-1.407-.939a.5.5 0 0 1 .554-.832l1.536 1.024a2 2 0 0 0-1.253-2.863.5.5 0 1 1 .259-.966 3 3 0 0 1 1.83 4.386l.628.419a.5.5 0 0 1-.554.832l-.713-.475c-.727.631-1.744.901-2.744.633a.5.5 0 0 1 .259-.966c.57.153 1.147.044 1.606-.253zM9.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#AO_svg__e)"
                fillRule="nonzero"
            />
        </G>
    </Svg>
)

export default SvgAo
