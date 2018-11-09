import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgPh = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PH_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PH_svg__b">
                <Stop stopColor="#DD1C34" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PH_svg__c">
                <Stop stopColor="#0D4BC3" offset="0%" />
                <Stop stopColor="#073DA6" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PH_svg__d">
                <Stop stopColor="#FDD64D" offset="0%" />
                <Stop stopColor="#FCD036" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PH_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PH_svg__b)" d="M0 7h21v8H0z" />
            <Path fill="url(#PH_svg__c)" d="M0 0h21v7H0z" />
            <Path fill="url(#PH_svg__a)" d="M0 0l10 7.5L0 15z" />
            <Path
                d="M3.4 8.495L2.542 9.81l.325-1.535c-.052-.043-.1-.09-.143-.143l-1.535.325L2.505 7.6a1.012 1.012 0 0 1 0-.202L1.19 6.543l1.535.325c.043-.052.09-.1.143-.143L2.543 5.19 3.4 6.505a1.012 1.012 0 0 1 .202 0l.856-1.315-.325 1.535c.052.043.1.09.143.143l1.535-.325-1.315.856a1.012 1.012 0 0 1 0 .202l1.315.856-1.535-.325c-.043.052-.09.1-.143.143l.325 1.535L3.6 8.495a1.012 1.012 0 0 1-.202 0zM7.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-6-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#PH_svg__d)"
            />
        </G>
    </Svg>
)

export default SvgPh
