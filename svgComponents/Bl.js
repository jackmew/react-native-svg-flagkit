import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Mask,
    Use,
    Circle,
} from 'react-native-svg'

const SvgBl = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BL_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BL_svg__c">
                <Stop stopColor="#216CD3" offset="0%" />
                <Stop stopColor="#1557B2" offset="100%" />
            </LinearGradient>
            <Path
                d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
                id="BL_svg__b"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BL_svg__d">
                <Stop stopColor="#F7E14B" offset="0%" />
                <Stop stopColor="#F7DF3E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BL_svg__f">
                <Stop stopColor="#E12539" offset="0%" />
                <Stop stopColor="#CA192C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BL_svg__a)" d="M0 0h21v15H0z" />
            <G transform="translate(6.5 5)">
                <Mask id="BL_svg__e" fill="#fff">
                    <Use xlinkHref="#BL_svg__b" />
                </Mask>
                <Use fill="url(#BL_svg__c)" xlinkHref="#BL_svg__b" />
                <Path
                    d="M2 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM4 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1.5-.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                    fill="url(#BL_svg__d)"
                    mask="url(#BL_svg__e)"
                />
                <Path
                    fill="url(#BL_svg__f)"
                    mask="url(#BL_svg__e)"
                    d="M.5 3h7v2h-7z"
                />
                <Circle
                    fill="#FFF"
                    mask="url(#BL_svg__e)"
                    cx={4}
                    cy={4}
                    r={1}
                />
            </G>
            <Path
                d="M6.5 3.5s2-.5 4-.5 4 .5 4 .5l-.5 2S12.25 5 10.5 5 7 5.5 7 5.5l-.5-2z"
                fill="url(#BL_svg__d)"
            />
            <Path
                d="M10.5 4.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="#5E5216"
            />
        </G>
    </Svg>
)

export default SvgBl
