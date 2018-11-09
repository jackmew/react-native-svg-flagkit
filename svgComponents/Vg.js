import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Ellipse,
} from 'react-native-svg'

const SvgVg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VG_svg__b">
                <Stop stopColor="#07319C" offset="0%" />
                <Stop stopColor="#00247E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VG_svg__c">
                <Stop stopColor="#008339" offset="0%" />
                <Stop stopColor="#00612A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VG_svg__d">
                <Stop stopColor="#FFD033" offset="0%" />
                <Stop stopColor="#FEC403" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="VG_svg__e">
                <Stop stopColor="#DB1E36" offset="0%" />
                <Stop stopColor="#D51931" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#VG_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#VG_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M13 7.5V5c0-.553.444-1 1-1h3c.552 0 1 .441 1 1v2.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5z"
                fill="url(#VG_svg__c)"
            />
            <Path
                d="M14.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#VG_svg__d)"
            />
            <Ellipse fill="url(#VG_svg__a)" cx={15.5} cy={7} rx={1} ry={1.5} />
            <Path
                d="M12.5 10c0 .954 1.366 1.5 3 1.5s3-.546 3-1.5a.5.5 0 1 0-1 0c0 .01-.121.124-.418.243-.403.161-.97.257-1.582.257-.612 0-1.18-.096-1.582-.257-.297-.119-.418-.233-.418-.243a.5.5 0 1 0-1 0z"
                fill="url(#VG_svg__d)"
                fillRule="nonzero"
            />
            <Path
                d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
                fill="url(#VG_svg__a)"
                fillRule="nonzero"
            />
            <Path
                d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
                fill="url(#VG_svg__e)"
            />
            <Path
                d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
                fill="url(#VG_svg__a)"
            />
            <Path fill="url(#VG_svg__e)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        </G>
    </Svg>
)

export default SvgVg
