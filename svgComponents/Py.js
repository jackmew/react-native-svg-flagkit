import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgPy = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PY_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PY_svg__b">
                <Stop stopColor="#E33F39" offset="0%" />
                <Stop stopColor="#D32E28" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="PY_svg__c">
                <Stop stopColor="#124BBA" offset="0%" />
                <Stop stopColor="#073DA6" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#PY_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#PY_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#PY_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#PY_svg__a)" d="M0 5h21v5H0z" />
            <Path
                d="M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="#398153"
                fillRule="nonzero"
            />
            <Circle fill="#E5CF58" cx={10.5} cy={7.5} r={1} />
        </G>
    </Svg>
)

export default SvgPy
