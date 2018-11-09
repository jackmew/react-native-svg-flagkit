import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgGi = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GI_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GI_svg__b">
                <Stop stopColor="#E71924" offset="0%" />
                <Stop stopColor="#D6101B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GI_svg__c">
                <Stop stopColor="#EA1824" offset="0%" />
                <Stop stopColor="#D6101B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GI_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GI_svg__e">
                <Stop stopColor="#ECCE3E" offset="0%" />
                <Stop stopColor="#D9BC2D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GI_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GI_svg__a)" d="M0 0h21v10H0z" />
            <Path fill="url(#GI_svg__b)" d="M0 10h21v5H0z" />
            <Path
                d="M9 6H8V4.49A.495.495 0 0 0 7.495 4h-.99A.49.49 0 0 0 6 4.49V8L5 9h11l-1-1V4.49a.495.495 0 0 0-.505-.49h-.99a.49.49 0 0 0-.505.49V6h-1V3.49a.49.49 0 0 0-.495-.49h-2.01A.49.49 0 0 0 9 3.49V6z"
                fill="url(#GI_svg__c)"
            />
            <Path
                d="M7 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm3.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM14 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#GI_svg__d)"
            />
            <Path
                d="M10 9.943V12H9v1h2V9.943c.583-.137 1-.508 1-.943 0-.552-.672-1-1.5-1S9 8.448 9 9c0 .435.417.806 1 .943z"
                fill="url(#GI_svg__e)"
            />
        </G>
    </Svg>
)

export default SvgGi
