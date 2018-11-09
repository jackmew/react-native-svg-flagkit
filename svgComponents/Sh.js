import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Mask,
    Use,
    Ellipse,
} from 'react-native-svg'

const SvgSh = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SH_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SH_svg__b">
                <Stop stopColor="#07319C" offset="0%" />
                <Stop stopColor="#00247E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SH_svg__d">
                <Stop stopColor="#A7D2FF" offset="0%" />
                <Stop stopColor="#91C6FD" offset="100%" />
            </LinearGradient>
            <Path
                d="M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 5.5 2.5 6 2.5 6S0 5.5 0 3.5z"
                id="SH_svg__c"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SH_svg__e">
                <Stop stopColor="#EE7B2D" offset="0%" />
                <Stop stopColor="#CC621A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SH_svg__g">
                <Stop stopColor="#FFFC4B" offset="0%" />
                <Stop stopColor="#FFFC38" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SH_svg__h">
                <Stop stopColor="#DB1E36" offset="0%" />
                <Stop stopColor="#D51931" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SH_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SH_svg__b)" d="M0 0h21v15H0z" />
            <G transform="translate(13 6)">
                <Mask id="SH_svg__f" fill="#fff">
                    <Use xlinkHref="#SH_svg__c" />
                </Mask>
                <Use fill="url(#SH_svg__d)" xlinkHref="#SH_svg__c" />
                <Path
                    d="M.5 6.5c.828 0 1-1.395 1-2.5s-.172-1.5-1-1.5C-.328 2.5-1 2.895-1 4S-.328 6.5.5 6.5z"
                    fill="url(#SH_svg__e)"
                    mask="url(#SH_svg__f)"
                />
                <Ellipse
                    fill="#A75113"
                    mask="url(#SH_svg__f)"
                    cx={2.5}
                    cy={4.5}
                    rx={1.5}
                    ry={1}
                />
                <Ellipse
                    fill="#FFF"
                    mask="url(#SH_svg__f)"
                    cx={2.5}
                    cy={3.5}
                    rx={1}
                    ry={1}
                />
                <Path
                    fill="url(#SH_svg__g)"
                    mask="url(#SH_svg__f)"
                    d="M0 0h5v2H0z"
                />
            </G>
            <Path
                d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
                fill="url(#SH_svg__a)"
                fillRule="nonzero"
            />
            <Path
                d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
                fill="url(#SH_svg__h)"
            />
            <Path
                d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
                fill="url(#SH_svg__a)"
            />
            <Path fill="url(#SH_svg__h)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        </G>
    </Svg>
)

export default SvgSh
