import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Ellipse,
    G,
    Path,
    Mask,
    Use,
    Circle,
} from 'react-native-svg'

const SvgSz = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SZ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SZ_svg__b">
                <Stop stopColor="#486BCA" offset="0%" />
                <Stop stopColor="#3E5FBA" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SZ_svg__c">
                <Stop stopColor="#FFDF20" offset="0%" />
                <Stop stopColor="#FFDA00" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SZ_svg__d">
                <Stop stopColor="#CF1615" offset="0%" />
                <Stop stopColor="#B20D0C" offset="100%" />
            </LinearGradient>
            <Ellipse id="SZ_svg__e" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SZ_svg__f">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#SZ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#SZ_svg__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
            <Path fill="url(#SZ_svg__c)" d="M0 3h21v9H0z" />
            <Path fill="url(#SZ_svg__d)" d="M0 4h21v7H0z" />
            <G transform="translate(6 5)">
                <Mask id="SZ_svg__g" fill="#fff">
                    <Use xlinkHref="#SZ_svg__e" />
                </Mask>
                <Use fill="url(#SZ_svg__a)" xlinkHref="#SZ_svg__e" />
                <Path
                    fill="url(#SZ_svg__f)"
                    mask="url(#SZ_svg__g)"
                    transform="matrix(-1 0 0 1 5 0)"
                    d="M0 0h5v5H1z"
                />
                <Circle
                    fill="#1A1A1A"
                    mask="url(#SZ_svg__g)"
                    cx={5.5}
                    cy={2.5}
                    r={1}
                />
                <Circle
                    fill="#F6F6F6"
                    mask="url(#SZ_svg__g)"
                    cx={3.5}
                    cy={2.5}
                    r={1}
                />
            </G>
        </G>
    </Svg>
)

export default SvgSz
