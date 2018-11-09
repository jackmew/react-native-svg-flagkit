import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgEt = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ET_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ET_svg__b">
                <Stop stopColor="#20AA46" offset="0%" />
                <Stop stopColor="#168835" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ET_svg__c">
                <Stop stopColor="#E92F3B" offset="0%" />
                <Stop stopColor="#D81824" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ET_svg__d">
                <Stop stopColor="#FADF50" offset="0%" />
                <Stop stopColor="#FCDC34" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ET_svg__e">
                <Stop stopColor="#205CCA" offset="0%" />
                <Stop stopColor="#154BAD" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ET_svg__f">
                <Stop stopColor="#FFDB3D" offset="0%" />
                <Stop stopColor="#FDD420" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#ET_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#ET_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#ET_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#ET_svg__d)" d="M0 5h21v5H0z" />
            <Circle fill="url(#ET_svg__e)" cx={10.5} cy={7.5} r={3.5} />
            <Path
                d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722L10.5 8.475zm0-.614l.544.388-.2-.637.536-.398-.668-.006-.212-.634-.212.634-.668.006.537.398-.201.637.544-.388z"
                fill="url(#ET_svg__f)"
                fillRule="nonzero"
            />
        </G>
    </Svg>
)

export default SvgEt
