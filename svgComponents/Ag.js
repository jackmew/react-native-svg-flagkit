import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Ellipse,
    Mask,
    Use,
} from 'react-native-svg'

const SvgAg = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AG_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AG_svg__b">
                <Stop stopColor="#E2243B" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AG_svg__d">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <Path id="AG_svg__c" d="M0 0h21L10.5 15z" />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AG_svg__e">
                <Stop stopColor="#FFCF3C" offset="0%" />
                <Stop stopColor="#FECB2F" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AG_svg__g">
                <Stop stopColor="#1984D8" offset="0%" />
                <Stop stopColor="#1175C4" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AG_svg__a)" d="M0 0h21v15H0z" />
            <Path
                d="M8.5 7a2 2 0 0 0 .998 1.731m2.078-.045c.556-.355.924-.978.924-1.686"
                opacity={0.75}
            />
            <Ellipse
                fillOpacity={0.5}
                fill="#FFF"
                cx={10.5}
                cy={6.5}
                rx={1}
                ry={1.5}
            />
            <Path fill="url(#AG_svg__b)" d="M0 0h21v15H0z" />
            <Mask id="AG_svg__f" fill="#fff">
                <Use xlinkHref="#AG_svg__c" />
            </Mask>
            <Use fill="url(#AG_svg__d)" xlinkHref="#AG_svg__c" />
            <Path
                fill="url(#AG_svg__e)"
                mask="url(#AG_svg__f)"
                d="M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z"
            />
            <Path
                fill="url(#AG_svg__g)"
                mask="url(#AG_svg__f)"
                d="M0 6h21v4H0z"
            />
            <Path
                fill="url(#AG_svg__a)"
                mask="url(#AG_svg__f)"
                d="M0 10h21v5H0z"
            />
        </G>
    </Svg>
)

export default SvgAg
