import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgDo = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DO_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DO_svg__b">
                <Stop stopColor="#083D7A" offset="0%" />
                <Stop stopColor="#032F61" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DO_svg__c">
                <Stop stopColor="#DF1E35" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#DO_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#DO_svg__b)" d="M0 0h9v6H0zM12 9h9v6h-9z" />
            <Path fill="url(#DO_svg__c)" d="M0 9h9v6H0zM12 0h9v6h-9z" />
            <Path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#DO_svg__a)" />
            <Path
                d="M9.44 6.44a1.5 1.5 0 0 0 2.12 2.12 1.5 1.5 0 0 0 0-2.12"
                fillOpacity={0.2}
                fill="#C93127"
            />
            <Circle fill="#042F60" cx={10.5} cy={7.5} r={1} />
            <Path
                d="M11.56 8.56a1.5 1.5 0 0 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122zm0 0a1.5 1.5 0 0 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122z"
                fill="#0F6D1A"
                fillRule="nonzero"
            />
        </G>
    </Svg>
)

export default SvgDo
