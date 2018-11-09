import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Rect,
    Mask,
    Use,
} from 'react-native-svg'

const SvgGu = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__b">
                <Stop stopColor="#DE3149" offset="0%" />
                <Stop stopColor="#C2273D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__c">
                <Stop stopColor="#053B94" offset="0%" />
                <Stop stopColor="#002E7A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__d">
                <Stop stopColor="#DE3149" offset="0%" />
                <Stop stopColor="#C2273D" offset="100%" />
            </LinearGradient>
            <Path
                d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z"
                id="GU_svg__e"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__f">
                <Stop stopColor="#81C1F3" offset="0%" />
                <Stop stopColor="#6AB1E9" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__h">
                <Stop stopColor="#27A07E" offset="0%" />
                <Stop stopColor="#1F9171" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__i">
                <Stop stopColor="#1E8CE8" offset="0%" />
                <Stop stopColor="#107FDC" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__j">
                <Stop stopColor="#FFF048" offset="0%" />
                <Stop stopColor="#FFEF36" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GU_svg__k">
                <Stop stopColor="#8F5715" offset="0%" />
                <Stop stopColor="#7A480D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GU_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GU_svg__b)" d="M0 0h21v15H0z" />
            <Rect
                fill="url(#GU_svg__c)"
                x={1}
                y={1}
                width={19}
                height={13}
                rx={0.75}
            />
            <Path
                d="M10.5 12s3-2.015 3-4.5-3-4.5-3-4.5-3 2.015-3 4.5 3 4.5 3 4.5z"
                fill="url(#GU_svg__d)"
            />
            <G transform="translate(8 3)">
                <Mask id="GU_svg__g" fill="#fff">
                    <Use xlinkHref="#GU_svg__e" />
                </Mask>
                <Use fill="url(#GU_svg__a)" xlinkHref="#GU_svg__e" />
                <Path
                    fill="url(#GU_svg__f)"
                    mask="url(#GU_svg__g)"
                    d="M0 0h5v5H0z"
                />
                <Path
                    fill="url(#GU_svg__h)"
                    mask="url(#GU_svg__g)"
                    d="M2.5 4.1l-.882.614.311-1.029-.856-.649 1.074-.021L2.5 2l.353 1.015 1.074.021-.856.65.31 1.028z"
                />
                <Path
                    fill="url(#GU_svg__i)"
                    mask="url(#GU_svg__g)"
                    d="M0 5h5v4H0z"
                />
                <Path
                    d="M0 6s1.59 1.5 2 1.5c.488 0 .496-.723 1-1 .794-.436 2-.5 2-.5v3H0V6z"
                    fill="url(#GU_svg__j)"
                    mask="url(#GU_svg__g)"
                />
            </G>
            <Path
                d="M10.251 6.475a14.974 14.974 0 0 0-.067 1.084c-.01.467.01.812.079 1.02.087.261.284.506.557.742.208.18.415.316.557.397a.25.25 0 0 0 .246-.436 3.148 3.148 0 0 1-.477-.34c-.21-.182-.356-.363-.409-.521-.044-.134-.063-.442-.053-.85a13.917 13.917 0 0 1 .065-1.046.25.25 0 1 0-.498-.05z"
                fill="url(#GU_svg__k)"
                fillRule="nonzero"
            />
            <Path fill="#FFF" d="M9 7.5L10 9H9z" />
        </G>
    </Svg>
)

export default SvgGu
