import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgMh = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MH_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MH_svg__b">
                <Stop stopColor="#064DAE" offset="0%" />
                <Stop stopColor="#003D91" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MH_svg__c">
                <Stop stopColor="#F18D36" offset="0%" />
                <Stop stopColor="#DB761E" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MH_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MH_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#MH_svg__c)" d="M21 0v4L0 15z" />
            <Path
                fill="url(#MH_svg__a)"
                d="M21 8V4L0 15zM4.839 4.372L4.5 2l-.339 2.372-.911-1.037.468 1.383-1.383-.468 1.037.911L1 5.5l2.372.339-1.037.911 1.383-.468-.468 1.383.911-1.037L4.5 9l.339-2.372.911 1.037-.468-1.383 1.383.468-1.037-.911L8 5.5l-2.372-.339 1.037-.911-1.383.468.468-1.383-.911 1.037z"
            />
        </G>
    </Svg>
)

export default SvgMh
