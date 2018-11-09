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

const SvgNp = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NP_svg__b">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <Path
                d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
                id="NP_svg__a"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NP_svg__d">
                <Stop stopColor="#EE1B44" offset="0%" />
                <Stop stopColor="#DD153C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NP_svg__f">
                <Stop stopColor="#0543A8" offset="0%" />
                <Stop stopColor="#003893" offset="100%" />
            </LinearGradient>
            <Path
                d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
                id="NP_svg__e"
            />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Mask id="NP_svg__c" fill="#fff">
                <Use xlinkHref="#NP_svg__a" />
            </Mask>
            <Use fill="url(#NP_svg__b)" xlinkHref="#NP_svg__a" />
            <G mask="url(#NP_svg__c)">
                <Use fill="url(#NP_svg__d)" xlinkHref="#NP_svg__e" />
                <Path
                    stroke="url(#NP_svg__f)"
                    d="M.5.5v14h12.17l-8-7h7.679L2.136.691A1.483 1.483 0 0 0 1.496.5H.5z"
                />
            </G>
            <Path
                d="M5.138 5.85a3.52 3.52 0 0 0 .789-.318 2 2 0 0 1-3.857 0c.236.132.502.24.791.32L3.25 5.5l-.636-.574.856.044-.044-.856L4 4.75l.574-.636-.044.856.856-.044-.636.574.388.35zM4 12l-.765.848.058-1.14-1.14.057L3 11l-.848-.765 1.14.058-.057-1.14L4 10l.765-.848-.058 1.14 1.14-.057L5 11l.848.765-1.14-.058.057 1.14L4 12z"
                fill="url(#NP_svg__b)"
                mask="url(#NP_svg__c)"
            />
        </G>
    </Svg>
)

export default SvgNp
