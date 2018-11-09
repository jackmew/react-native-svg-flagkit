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

const SvgBr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BR_svg__b">
                <Stop stopColor="#05AB41" offset="0%" />
                <Stop stopColor="#019C39" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BR_svg__d">
                <Stop stopColor="#053087" offset="0%" />
                <Stop stopColor="#012877" offset="100%" />
            </LinearGradient>
            <Circle id="BR_svg__c" cx={3.5} cy={3.5} r={3.5} />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BR_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BR_svg__b)" d="M0 0h21v15H0z" />
            <Path
                d="M2.422 7.773c-.233-.15-.228-.398 0-.546l7.656-4.954a.85.85 0 0 1 .844 0l7.656 4.954c.233.15.228.398 0 .546l-7.656 4.954a.85.85 0 0 1-.844 0L2.422 7.773z"
                fill="#FDD216"
            />
            <G transform="translate(7 4)">
                <Mask id="BR_svg__e" fill="#fff">
                    <Use xlinkHref="#BR_svg__c" />
                </Mask>
                <Use fill="url(#BR_svg__d)" xlinkHref="#BR_svg__c" />
                <Path
                    d="M-.1 2.974c.265-.215 1.463-.04 3.534.512 1.474.394 3.173 1.262 3.562 1.742l.314.388.778-.629-.315-.388c-.55-.68-2.421-1.636-4.081-2.079-2.586-.69-3.758-.86-4.422-.323l-.388.314.629.777.389-.314z"
                    fill="#FFF"
                    fillRule="nonzero"
                    mask="url(#BR_svg__e)"
                />
            </G>
        </G>
    </Svg>
)

export default SvgBr
