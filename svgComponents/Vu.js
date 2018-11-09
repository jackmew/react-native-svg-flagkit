import React from 'react'
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg'

const SvgVu = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VU_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VU_svg__b">
                <Stop stopColor="#27AB53" offset="0%" />
                <Stop stopColor="#219447" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VU_svg__c">
                <Stop stopColor="#EC2547" offset="0%" />
                <Stop stopColor="#CE1A39" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VU_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VU_svg__e">
                <Stop stopColor="#FFD449" offset="0%" />
                <Stop stopColor="#FDCD34" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#VU_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#VU_svg__b)" d="M.2 9h21v6H.2z" />
            <Path fill="url(#VU_svg__c)" d="M.2 0h21v6H.2z" />
            <Path d="M8.2 6h13v3h-13l-8 6V0l8 6z" fill="url(#VU_svg__d)" />
            <Path
                d="M6.867 7.5L-.6 1.9l-.4-.3.6-.8.4.3L7.867 7H21.2v1H7.7l.3-.1-8 6-.4.3-.6-.8.4-.3 7.467-5.6z"
                fill="url(#VU_svg__e)"
                fillRule="nonzero"
            />
            <Path
                d="M2.7 9a1.5 1.5 0 1 1 1.5-1.5c0 .727-.813 2.363-1.5 2.5-.096.02.101-1 0-1zm0-.75c.276.25.5-.474.5-.75a.5.5 0 0 0-1 0c0 .276.224 1 .5.75z"
                fill="url(#VU_svg__e)"
            />
        </G>
    </Svg>
)

export default SvgVu
