import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgIn = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IN_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IN_svg__b">
                <Stop stopColor="#FFA44A" offset="0%" />
                <Stop stopColor="#FF9934" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="IN_svg__c">
                <Stop stopColor="#1A9F0B" offset="0%" />
                <Stop stopColor="#138806" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#IN_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#IN_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#IN_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#IN_svg__a)" d="M0 5h21v5H0z" />
            <Circle
                fillOpacity={0.15}
                fill="#181A93"
                cx={10.5}
                cy={7.5}
                r={1.5}
            />
            <Path
                d="M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                fill="#181A93"
                fillRule="nonzero"
            />
            <Circle fill="#181A93" cx={10.5} cy={7.5} r={1} />
        </G>
    </Svg>
)

export default SvgIn
