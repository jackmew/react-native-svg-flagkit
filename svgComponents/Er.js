import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgEr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg__b">
                <Stop stopColor="#29C53F" offset="0%" />
                <Stop stopColor="#21AC35" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg__c">
                <Stop stopColor="#579DED" offset="0%" />
                <Stop stopColor="#458BDB" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ER_svg__d">
                <Stop stopColor="#F42D56" offset="0%" />
                <Stop stopColor="#E9103D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#ER_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#ER_svg__b)" d="M0 0h21v7.5H0z" />
            <Path fill="url(#ER_svg__c)" d="M0 7.5h21v8H0z" />
            <Path fill="url(#ER_svg__d)" d="M0 15l21-7.5L0 0z" />
            <Path
                d="M6.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
                fill="#FFC63C"
                fillRule="nonzero"
            />
            <Circle fill="#FFC63C" cx={6} cy={6.5} r={1} />
            <Circle fill="#FFC63C" cx={7} cy={7} r={1} />
            <Circle fill="#FFC63C" cx={6.5} cy={6} r={1} />
            <Circle fill="#FFC63C" cx={6} cy={7.5} r={1} />
            <Circle fill="#FFC63C" cx={7} cy={8} r={1} />
            <Circle fill="#FFC63C" cx={6} cy={8.5} r={1} />
            <Circle fill="#FFC63C" cx={7} cy={9} r={1} />
        </G>
    </Svg>
)

export default SvgEr
