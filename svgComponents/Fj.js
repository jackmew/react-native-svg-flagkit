import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Mask,
    Use,
} from 'react-native-svg'

const SvgFj = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FJ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FJ_svg__b">
                <Stop stopColor="#79CFF6" offset="0%" />
                <Stop stopColor="#68BFE6" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FJ_svg__c">
                <Stop stopColor="#042C90" offset="0%" />
                <Stop stopColor="#00247E" offset="100%" />
            </LinearGradient>
            <Path
                d="M0 3.5V0h5v3.5C5 6 2.5 7 2.5 7S0 6 0 3.5z"
                id="FJ_svg__d"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FJ_svg__f">
                <Stop stopColor="#EB1D43" offset="0%" />
                <Stop stopColor="#D21034" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FJ_svg__g">
                <Stop stopColor="#DB1E36" offset="0%" />
                <Stop stopColor="#D51931" offset="100%" />
            </LinearGradient>
            <Path
                d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
                id="FJ_svg__h"
            />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#FJ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#FJ_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#FJ_svg__c)" d="M0 0h9v7H0z" />
            <G transform="translate(13 4)">
                <Mask id="FJ_svg__e" fill="#fff">
                    <Use xlinkHref="#FJ_svg__d" />
                </Mask>
                <Use fill="url(#FJ_svg__a)" xlinkHref="#FJ_svg__d" />
                <Path
                    d="M1 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm3 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                    fill="#2A915C"
                    mask="url(#FJ_svg__e)"
                />
                <Path
                    fill="url(#FJ_svg__f)"
                    mask="url(#FJ_svg__e)"
                    d="M0 0h5v1H3v2h2v1H3v3H2V4H0V3h2V1H0z"
                />
            </G>
            <Use fill="url(#FJ_svg__g)" xlinkHref="#FJ_svg__h" />
            <Path
                stroke="#FFF"
                strokeWidth={0.5}
                d="M3.25 3.115L-.676-.25H.5l.145.047L4.08 2.25h.848L9.25-.451V.25c0 .222-.128.47-.313.602L5.75 3.13v.756l3.225 2.764c.282.242.138.601-.225.601-.193 0-.442-.08-.604-.195L4.92 4.75h-.848L-.25 7.451v-1.08l3.5-2.5v-.756z"
            />
            <Path
                d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
                fill="url(#FJ_svg__a)"
            />
            <Path fill="url(#FJ_svg__g)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        </G>
    </Svg>
)

export default SvgFj
