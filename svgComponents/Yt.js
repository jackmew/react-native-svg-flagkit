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
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgYt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="YT_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <Path
                d="M0 .491A.49.49 0 0 1 .498 0h4.004A.5.5 0 0 1 5 .491v5.018a.535.535 0 0 1-.5.522S3 6 2.5 6.94C2 6 .5 6.03.5 6.03a.54.54 0 0 1-.5-.522V.491z"
                id="YT_svg__b"
            />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="YT_svg__f">
                <Stop stopColor="#1B2CA9" offset="0%" />
                <Stop stopColor="#132294" offset="100%" />
            </LinearGradient>
            <Path id="YT_svg__e" d="M0 0h5v3H0z" />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="YT_svg__i">
                <Stop stopColor="#E6402C" offset="0%" />
                <Stop stopColor="#D1321F" offset="100%" />
            </LinearGradient>
            <Path id="YT_svg__h" d="M0 3h5v4H0z" />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="YT_svg__j">
                <Stop stopColor="#D0D0D0" offset="0%" />
                <Stop stopColor="#C4C4C4" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="YT_svg__k">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="YT_svg__l">
                <Stop stopColor="#F7E04B" offset="0%" />
                <Stop stopColor="#EAD135" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#YT_svg__a)" d="M0 0h21v15H0z" />
            <G transform="translate(8 4)">
                <Mask id="YT_svg__c" fill="#fff">
                    <Use xlinkHref="#YT_svg__b" href="#YT_svg__b" />
                </Mask>
                <Use fill="#D8D8D8" xlinkHref="#YT_svg__b" href="#YT_svg__b" />
                <Path
                    stroke="#979797"
                    d="M4.5.5V.491.5zm0 0h.002H4.5zm-4 0v5.009s.02.022-.01.022H.5c.342-.004.793.048 1.25.213.285.102.538.24.75.418.212-.178.465-.316.75-.418.444-.16.882-.214 1.22-.213.02-.005.03-.017.03-.022V.5s0 0 0 0h-4z"
                />
                <G mask="url(#YT_svg__c)">
                    <Use
                        fill="#000"
                        filter="url(#YT_svg__d)"
                        href="#YT_svg__e"
                        xlinkHref="#YT_svg__e"
                    />
                    <Use fill="url(#YT_svg__f)" xlinkHref="#YT_svg__e" href="#YT_svg__e" />
                </G>
                <G mask="url(#YT_svg__c)">
                    <Use
                        fill="#000"
                        filter="url(#YT_svg__g)"
                        href="#YT_svg__h"
                        xlinkHref="#YT_svg__h"
                    />
                    <Use fill="url(#YT_svg__i)" xlinkHref="#YT_svg__h" href="#YT_svg__h" />
                </G>
            </G>
            <G transform="translate(14 3)">
                <Path
                    d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
                    fill="url(#YT_svg__j)"
                />
                <Circle
                    fillOpacity={0.3}
                    fill="url(#YT_svg__k)"
                    cx={1.75}
                    cy={1.75}
                    r={1}
                />
            </G>
            <G transform="matrix(-1 0 0 1 7 3)">
                <Path
                    d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
                    fill="url(#YT_svg__j)"
                />
                <Circle
                    fillOpacity={0.3}
                    fill="url(#YT_svg__k)"
                    cx={1.75}
                    cy={1.75}
                    r={1}
                />
            </G>
            <Path
                d="M9.634 5a1 1 0 1 0 1.732 0 1 1 0 0 1-1.732 0z"
                fill="url(#YT_svg__a)"
            />
            <Path
                d="M9.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#YT_svg__l)"
            />
        </G>
    </Svg>
)

export default SvgYt
