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

const SvgKe = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KE_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KE_svg__b">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KE_svg__c">
                <Stop stopColor="#018301" offset="0%" />
                <Stop stopColor="#006700" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KE_svg__d">
                <Stop stopColor="#DC0808" offset="0%" />
                <Stop stopColor="#BC0000" offset="100%" />
            </LinearGradient>
            <Path
                d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z"
                id="KE_svg__e"
            />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KE_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#KE_svg__b)" d="M0 0h21v4H0z" />
            <Path fill="url(#KE_svg__c)" d="M0 11h21v4H0z" />
            <Path fill="url(#KE_svg__a)" d="M0 4h21v7H0z" />
            <Path fill="url(#KE_svg__d)" d="M0 5h21v5H0z" />
            <G transform="translate(8 2)">
                <Mask id="KE_svg__f" fill="#fff">
                    <Use xlinkHref="#KE_svg__e" />
                </Mask>
                <Use fill="#BC0000" xlinkHref="#KE_svg__e" />
                <Ellipse
                    fill="url(#KE_svg__b)"
                    mask="url(#KE_svg__f)"
                    cx={-1.5}
                    cy={5.5}
                    rx={2.5}
                    ry={5.5}
                />
                <Ellipse
                    fill="url(#KE_svg__b)"
                    mask="url(#KE_svg__f)"
                    cx={6.5}
                    cy={5.5}
                    rx={2.5}
                    ry={5.5}
                />
                <Path
                    d="M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7zm0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2zm0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2z"
                    fill="url(#KE_svg__a)"
                    mask="url(#KE_svg__f)"
                />
            </G>
        </G>
    </Svg>
)

export default SvgKe
