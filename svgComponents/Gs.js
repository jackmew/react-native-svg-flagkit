import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Ellipse,
    Path,
    G,
    Mask,
    Use,
    Circle,
} from 'react-native-svg'

const SvgGs = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__b">
                <Stop stopColor="#07319C" offset="0%" />
                <Stop stopColor="#00247E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__c">
                <Stop stopColor="#DB1E36" offset="0%" />
                <Stop stopColor="#D51931" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__e">
                <Stop stopColor="#1E1E1E" offset="0%" />
                <Stop offset="100%" />
            </LinearGradient>
            <Ellipse id="GS_svg__d" cx={0.5} cy={1.5} rx={1} ry={1.5} />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__h">
                <Stop stopColor="#A2ADB0" offset="0%" />
                <Stop stopColor="#8B9497" offset="100%" />
            </LinearGradient>
            <Ellipse id="GS_svg__g" cx={0.5} cy={1.5} rx={1} ry={1.5} />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__i">
                <Stop stopColor="#4F4F4F" offset="0%" />
                <Stop stopColor="#2B2B2B" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__k">
                <Stop stopColor="#FEC241" offset="0%" />
                <Stop stopColor="#FEBB2C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__l">
                <Stop stopColor="#A84B14" offset="0%" />
                <Stop stopColor="#913F0E" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__m">
                <Stop stopColor="#CFB063" offset="0%" />
                <Stop stopColor="#BEA157" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__n">
                <Stop stopColor="#2D42FF" offset="0%" />
                <Stop stopColor="#0B24FC" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="0%" y1="0%" x2="100%" y2="50%" id="GS_svg__o">
                <Stop stopColor="#E3DC3D" offset="0%" />
                <Stop stopColor="#CFC82A" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__p">
                <Stop stopColor="#7F7D7D" offset="0%" />
                <Stop stopColor="#656263" offset="100%" />
            </LinearGradient>
            <Path
                d="M.007.506A.489.489 0 0 1 .495 0h2.01c.273 0 .498.23.502.506L3.03 2.25a.52.52 0 0 1-.207.388l-1.095.722a.414.414 0 0 1-.417 0L.24 2.639a.526.526 0 0 1-.21-.388L.007.506z"
                id="GS_svg__q"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__s">
                <Stop stopColor="#0F8012" offset="0%" />
                <Stop stopColor="#0B6A0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GS_svg__t">
                <Stop stopColor="#FFCF44" offset="0%" />
                <Stop stopColor="#FCC72E" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#GS_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#GS_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
                fill="url(#GS_svg__a)"
                fillRule="nonzero"
            />
            <Path
                d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
                fill="url(#GS_svg__c)"
            />
            <Path
                d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
                fill="url(#GS_svg__a)"
            />
            <Path fill="url(#GS_svg__c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
            <G transform="translate(18 8)">
                <Mask id="GS_svg__f" fill="#fff">
                    <Use xlinkHref="#GS_svg__d" />
                </Mask>
                <Use fill="url(#GS_svg__e)" xlinkHref="#GS_svg__d" />
                <Ellipse
                    fill="url(#GS_svg__a)"
                    mask="url(#GS_svg__f)"
                    cy={2}
                    rx={1}
                    ry={1.5}
                />
            </G>
            <G transform="translate(14 8)">
                <Mask id="GS_svg__j" fill="#fff">
                    <Use xlinkHref="#GS_svg__g" />
                </Mask>
                <Use fill="url(#GS_svg__h)" xlinkHref="#GS_svg__g" />
                <Ellipse
                    fill="url(#GS_svg__i)"
                    mask="url(#GS_svg__j)"
                    cx={1}
                    cy={2}
                    rx={1}
                    ry={1.5}
                />
            </G>
            <Path
                d="M16.5 12.5c.828.5 1.5.276 1.5 0s-.672-.5-1.5-.5-1.5.224-1.5.5.672.5 1.5 0z"
                fill="url(#GS_svg__k)"
            />
            <Circle fill="url(#GS_svg__a)" cx={18.5} cy={5.5} r={1} />
            <Circle fill="url(#GS_svg__l)" cx={16.5} cy={4.5} r={1} />
            <Ellipse fill="url(#GS_svg__m)" cx={16.5} cy={3.75} rx={1} ry={1} />
            <Circle fill="url(#GS_svg__a)" cx={16.5} cy={11.5} r={1} />
            <Circle fill="url(#GS_svg__a)" cx={14.5} cy={5.5} r={1} />
            <Circle fill="url(#GS_svg__n)" cx={15} cy={6.5} r={1} />
            <Circle fill="url(#GS_svg__n)" cx={18} cy={6.5} r={1} />
            <Ellipse fill="url(#GS_svg__o)" cx={19} cy={8} rx={1} ry={1} />
            <Path
                d="M16 7.5l-.5.5h2l-.5-.5.5-1.5s-.448-1-1-1-1 1-1 1l.5 1.5z"
                fill="url(#GS_svg__p)"
            />
            <Path
                d="M16.5 6.5s.5-.112.5-.38c0-.008-.5-.12-.5-.12s-.5.112-.5.12c0 .268.5.38.5.38z"
                fill="#5D0543"
            />
            <G transform="translate(15 8)">
                <Mask id="GS_svg__r" fill="#fff">
                    <Use xlinkHref="#GS_svg__q" />
                </Mask>
                <Use fill="url(#GS_svg__a)" xlinkHref="#GS_svg__q" />
                <Circle
                    fill="#225DA4"
                    mask="url(#GS_svg__r)"
                    cx={2.5}
                    cy={2.5}
                    r={1}
                />
                <Circle
                    fill="#225DA4"
                    mask="url(#GS_svg__r)"
                    cx={0.5}
                    cy={1.5}
                    r={1}
                />
                <Path
                    fill="url(#GS_svg__s)"
                    mask="url(#GS_svg__r)"
                    d="M0 0h3L1.5 3z"
                />
                <Ellipse
                    fill="url(#GS_svg__t)"
                    mask="url(#GS_svg__r)"
                    cx={1.5}
                    cy={1.5}
                    rx={1}
                    ry={1}
                />
            </G>
        </G>
    </Svg>
)

export default SvgGs
