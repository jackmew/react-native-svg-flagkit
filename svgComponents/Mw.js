import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgMw = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MW_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MW_svg__b">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MW_svg__c">
                <Stop stopColor="#E42038" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MW_svg__d">
                <Stop stopColor="#47B849" offset="0%" />
                <Stop stopColor="#399E3B" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#MW_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#MW_svg__b)" d="M0 0h21v5H0z" />
            <Circle fill="url(#MW_svg__c)" cx={10.5} cy={5.5} r={3.5} />
            <Path fill="url(#MW_svg__c)" d="M0 5h21v5H0z" />
            <Path fill="url(#MW_svg__d)" d="M0 10h21v5H0z" />
        </G>
    </Svg>
)

export default SvgMw
