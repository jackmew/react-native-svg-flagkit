import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgNc = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NC_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NC_svg__b">
                <Stop stopColor="#094CC7" offset="0%" />
                <Stop stopColor="#003CAB" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NC_svg__c">
                <Stop stopColor="#2AAD55" offset="0%" />
                <Stop stopColor="#219447" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NC_svg__d">
                <Stop stopColor="#F65D55" offset="0%" />
                <Stop stopColor="#E9443C" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NC_svg__e">
                <Stop stopColor="#FAE749" offset="0%" />
                <Stop stopColor="#FBE533" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="NC_svg__f">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#NC_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#NC_svg__b)" d="M0 0h21v5H0z" />
            <Path fill="url(#NC_svg__c)" d="M0 10h21v5H0z" />
            <Path fill="url(#NC_svg__d)" d="M0 5h21v5H0z" />
            <Circle fill="url(#NC_svg__e)" cx={10.5} cy={7.5} r={3.5} />
            <Path
                d="M10.092 6.211a.5.5 0 1 0 .514-.2c.048-.024.096-.05.144-.078.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086zM10.5 10.5c-.828 0-1-.724-1-1s.172-.5 1-.5c.828 0 1 .224 1 .5s-.172 1-1 1zm0-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
                fill="url(#NC_svg__f)"
            />
        </G>
    </Svg>
)

export default SvgNc
