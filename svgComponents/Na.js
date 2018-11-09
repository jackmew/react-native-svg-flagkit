import React from 'react'
import Svg, { Defs, LinearGradient, Stop, Path, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgNa = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NA_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NA_svg__d">
                <Stop stopColor="#0C4799" offset="0%" />
                <Stop stopColor="#05387E" offset="100%" />
            </LinearGradient>
            <Path id="NA_svg__c" d="M3.121 12.304l21-10h-21z" />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NA_svg__g">
                <Stop stopColor="#FFD243" offset="0%" />
                <Stop stopColor="#FFCD2F" offset="100%" />
            </LinearGradient>
            <Path
                id="NA_svg__f"
                d="M6.621 6.804l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NA_svg__j">
                <Stop stopColor="#1BAC55" offset="0%" />
                <Stop stopColor="#149447" offset="100%" />
            </LinearGradient>
            <Path id="NA_svg__i" d="M3.121 17.304h21v-10z" />
            <Path
                id="NA_svg__l"
                d="M5.433 19.304L25.75 6.609 21.81.304 1.493 12.999z"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NA_svg__m">
                <Stop stopColor="#E52347" offset="0%" />
                <Stop stopColor="#D01739" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#NA_svg__a)" d="M0 0h21v15H0z" />
            <G transform="translate(-3.12 -2.3)">
                <Use
                    fill="#000"
                    filter="url(#NA_svg__b)"
                    xlinkHref="#NA_svg__c"
                />
                <Use fill="url(#NA_svg__d)" xlinkHref="#NA_svg__c" />
            </G>
            <G transform="translate(-3.12 -2.3)">
                <Use
                    fill="#000"
                    filter="url(#NA_svg__e)"
                    xlinkHref="#NA_svg__f"
                />
                <Use fill="url(#NA_svg__g)" xlinkHref="#NA_svg__f" />
            </G>
            <G transform="translate(-3.12 -2.3)">
                <Use
                    fill="#000"
                    filter="url(#NA_svg__h)"
                    xlinkHref="#NA_svg__i"
                />
                <Use fill="url(#NA_svg__j)" xlinkHref="#NA_svg__i" />
            </G>
            <G transform="translate(-3.12 -2.3)">
                <Use
                    fill="#000"
                    filter="url(#NA_svg__k)"
                    xlinkHref="#NA_svg__l"
                />
                <Use fill="url(#NA_svg__a)" xlinkHref="#NA_svg__l" />
            </G>
            <Path
                fill="url(#NA_svg__m)"
                d="M2.65 19.608L27.243 4.24 24.593 0 0 15.368z"
                transform="translate(-3.12 -2.3)"
            />
        </G>
    </Svg>
)

export default SvgNa
