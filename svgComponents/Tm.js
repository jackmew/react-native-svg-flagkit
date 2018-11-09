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

const SvgTm = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TM_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TM_svg__b">
                <Stop stopColor="#30C375" offset="0%" />
                <Stop stopColor="#28AE67" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="TM_svg__c">
                <Stop stopColor="#DE414F" offset="0%" />
                <Stop stopColor="#CA3745" offset="100%" />
            </LinearGradient>
            <Ellipse id="TM_svg__d" cx={1.5} cy={1} rx={1.5} ry={1} />
            <Ellipse id="TM_svg__f" cx={1.5} cy={1} rx={1.5} ry={1} />
            <Ellipse id="TM_svg__h" cx={1.5} cy={1} rx={1.5} ry={1} />
            <Ellipse id="TM_svg__j" cx={1.5} cy={0.5} rx={1.5} ry={1} />
            <Ellipse id="TM_svg__k" cx={1.5} cy={1} rx={1.5} ry={1} />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#TM_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#TM_svg__b)" d="M0 0h21v15H0z" />
            <Path fill="url(#TM_svg__c)" d="M3 0h3v15H3z" />
            <G transform="translate(3 1)">
                <Mask id="TM_svg__e" fill="#fff">
                    <Use xlinkHref="#TM_svg__d" />
                </Mask>
                <Use fill="#FFF" xlinkHref="#TM_svg__d" />
                <Circle
                    fill="#DD404F"
                    mask="url(#TM_svg__e)"
                    cx={1.5}
                    cy={1}
                    r={1}
                />
                <Path
                    fill="#FBAF29"
                    mask="url(#TM_svg__e)"
                    d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
                />
            </G>
            <G transform="translate(3 12)">
                <Mask id="TM_svg__g" fill="#fff">
                    <Use xlinkHref="#TM_svg__f" />
                </Mask>
                <Use fill="#FFF" xlinkHref="#TM_svg__f" />
                <Circle
                    fill="#DD404F"
                    mask="url(#TM_svg__g)"
                    cx={1.5}
                    cy={1}
                    r={1}
                />
                <Path
                    fill="#FBAF29"
                    mask="url(#TM_svg__g)"
                    d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
                />
            </G>
            <G transform="translate(3 7)">
                <Mask id="TM_svg__i" fill="#fff">
                    <Use xlinkHref="#TM_svg__h" />
                </Mask>
                <Use fill="#28AE67" xlinkHref="#TM_svg__h" />
                <Ellipse
                    fill="#DD404F"
                    mask="url(#TM_svg__i)"
                    cx={1.5}
                    cy={1}
                    rx={1}
                    ry={1}
                />
            </G>
            <Use
                fill="#28AE67"
                xlinkHref="#TM_svg__j"
                transform="translate(3 10)"
            />
            <G transform="translate(3 4)">
                <Mask id="TM_svg__l" fill="#fff">
                    <Use xlinkHref="#TM_svg__k" />
                </Mask>
                <Use fill="#FBAF29" xlinkHref="#TM_svg__k" />
                <Circle
                    fill="#DD404F"
                    mask="url(#TM_svg__l)"
                    cx={1.5}
                    cy={1}
                    r={1}
                />
                <Path
                    fill="#28AE67"
                    mask="url(#TM_svg__l)"
                    d="M0 0h1v2H0zM2 0h1v2H2z"
                />
            </G>
            <Path
                d="M11.117 3.179a.5.5 0 1 0 .766.642.5.5 0 0 0-.766-.642zM9.821 5.117a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766zm-1-1a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766zm2-2a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766zm-.5 1.5a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766z"
                fill="url(#TM_svg__a)"
            />
            <Path
                d="M13.107 7.088a3.05 3.05 0 0 1-4.626-.366 3.05 3.05 0 0 0 4.26-4.26 3.05 3.05 0 0 1 .366 4.626z"
                fill="url(#TM_svg__a)"
            />
        </G>
    </Svg>
)

export default SvgTm
