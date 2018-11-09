import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Circle,
    G,
    Path,
    Mask,
    Use,
} from 'react-native-svg'

const SvgPf = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PF_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PF_svg__b">
                <Stop stopColor="#E02639" offset="0%" />
                <Stop stopColor="#CA1A2C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PF_svg__c">
                <Stop stopColor="#DC2235" offset="0%" />
                <Stop stopColor="#CA1A2C" offset="100%" />
            </LinearGradient>
            <Circle id="PF_svg__d" cx={2.5} cy={2.5} r={2.5} />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PF_svg__e">
                <Stop stopColor="#FFA135" offset="0%" />
                <Stop stopColor="#FD9C2D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PF_svg__g">
                <Stop stopColor="#DF2034" offset="0%" />
                <Stop stopColor="#CA1A2C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PF_svg__h">
                <Stop stopColor="#0B4BAD" offset="0%" />
                <Stop stopColor="#08429A" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PF_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PF_svg__b)" d="M0 0h21v4H0z" />
            <Path fill="url(#PF_svg__c)" d="M0 11h21v4H0z" />
            <Path fill="url(#PF_svg__a)" d="M0 4h21v7H0z" />
            <G transform="translate(8 5)">
                <Mask id="PF_svg__f" fill="#fff">
                    <Use xlinkHref="#PF_svg__d" />
                </Mask>
                <Path
                    fill="url(#PF_svg__e)"
                    mask="url(#PF_svg__f)"
                    d="M0 0h5v2.5H0z"
                />
                <Path
                    fill="#FFF"
                    mask="url(#PF_svg__f)"
                    d="M1 1.5h3l-.5 1h-2z"
                />
                <Path
                    d="M2 0h1v1.495A.508.508 0 0 1 2.5 2a.495.495 0 0 1-.5-.505V0zM1 1s.75 1.5 1.5 1.5S4 1 4 1v1c0 .552-.443 1-.999 1H1.999A.997.997 0 0 1 1 2V1z"
                    fill="url(#PF_svg__g)"
                    mask="url(#PF_svg__f)"
                />
                <Path
                    fill="url(#PF_svg__h)"
                    mask="url(#PF_svg__f)"
                    d="M0 3h5v2H0z"
                />
                <Path fill="#FFF" mask="url(#PF_svg__f)" d="M0 3.5h5V4H0z" />
            </G>
        </G>
    </Svg>
)

export default SvgPf
