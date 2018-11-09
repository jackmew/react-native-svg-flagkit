import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgAs = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AS_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AS_svg__b">
                <Stop stopColor="#071585" offset="0%" />
                <Stop stopColor="#000B64" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AS_svg__c">
                <Stop stopColor="#D32636" offset="0%" />
                <Stop stopColor="#BA1827" offset="100%" />
            </LinearGradient>
            <LinearGradient
                x1="50%"
                y1="0%"
                x2="35.4%"
                y2="89.131%"
                id="AS_svg__d"
            >
                <Stop stopColor="#AB5423" offset="0%" />
                <Stop stopColor="#5A3719" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#AS_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#AS_svg__b)" d="M0 0h21v15H0z" />
            <Path
                fill="url(#AS_svg__c)"
                fillRule="nonzero"
                d="M22 15.5l-22-8 22-8z"
            />
            <Path
                fill="url(#AS_svg__a)"
                fillRule="nonzero"
                d="M21 .928L2.926 7.5 21 14.072z"
            />
            <Path
                d="M16 7.038c-.118-.118-.806.156-.806.156L14 6s-.062-.663.5-1c.425-.255 1.22-.16 1.999-.5C17.746 3.956 19 3 19 3l-.802 2.206s.919.473.802.794c-.034.093-.93.385-1 .5-.132.22.524.286.32.538C17.733 7.765 17 8.5 17 8.5L16 8s.15-.811 0-.962z"
                fill="url(#AS_svg__d)"
            />
            <Circle fill="#FFC322" cx={13.5} cy={7.5} r={1} />
            <Path
                d="M12.5 9h5a.5.5 0 1 0 0-1h-5a.5.5 0 1 0 0 1z"
                fill="#FFC322"
                fillRule="nonzero"
            />
            <Path
                d="M14.197 10.46l3.5-1.5a.5.5 0 0 0-.394-.92l-3.5 1.5a.5.5 0 0 0 .394.92z"
                fill="#FFC322"
                fillRule="nonzero"
            />
        </G>
    </Svg>
)

export default SvgAs
