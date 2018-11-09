import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgKh = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KH_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KH_svg__b">
                <Stop stopColor="#0F3EB6" offset="0%" />
                <Stop stopColor="#09339F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KH_svg__c">
                <Stop stopColor="#ED1A3C" offset="0%" />
                <Stop stopColor="#DE0B2D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KH_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#KH_svg__b)" d="M0 0h21v4H0zM0 11h21v4H0z" />
            <Path fill="url(#KH_svg__c)" d="M0 4h21v7H0z" />
            <Path
                d="M7.5 8h1v2h-2l1-2zM9 8h3v2H9V8zm3.5 0h1l1 2h-2V8zm0-1.492A.51.51 0 0 1 13 6a.5.5 0 0 1 .5.508V7.5h-1v-.992zM9 6.545h1v-.547c0-.275.232-.498.5-.498.276 0 .5.222.5.498v.547h1V7.5H9v-.955zm-1.5-.037A.51.51 0 0 1 8 6a.5.5 0 0 1 .5.508V7.5h-1v-.992z"
                fill="url(#KH_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgKh
