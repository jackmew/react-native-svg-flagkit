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

const SvgKr = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KR_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KR_svg__c">
                <Stop stopColor="#E01B41" offset="0%" />
                <Stop stopColor="#C51335" offset="100%" />
            </LinearGradient>
            <Circle id="KR_svg__b" cx={3.5} cy={3.5} r={3.5} />
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KR_svg__d">
                <Stop stopColor="#0E4B9C" offset="0%" />
                <Stop stopColor="#053677" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="KR_svg__f">
                <Stop stopColor="#262626" offset="0%" />
                <Stop stopColor="#0D0D0D" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#KR_svg__a)" d="M0 0h21v15H0z" />
            <G transform="translate(7 4)">
                <Mask id="KR_svg__e" fill="#fff">
                    <Use xlinkHref="#KR_svg__b" />
                </Mask>
                <Use fill="url(#KR_svg__c)" xlinkHref="#KR_svg__b" />
                <Path
                    d="M0 4c1 .937 2.5 1.5 3.5 0s3-1.5 3.5 0 0 3 0 3H0s-1-3.937 0-3z"
                    fill="url(#KR_svg__d)"
                    mask="url(#KR_svg__e)"
                />
            </G>
            <Path
                d="M14.208 3.922a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095l-1.244-2.156zm1.3-.75a.25.25 0 0 1 .09-.347l.429-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095l-1.244-2.156zm-12.125 7a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095l-1.244-2.156zm1.299-.75a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095L4.682 9.422zm10.77-.5a.25.25 0 0 1 .347-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 0 1-.346.095l-.43-.248a.254.254 0 0 1-.09-.347l1.244-2.156zm1.3.75a.25.25 0 0 1 .346-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 0 1-.346.095l-.43-.248a.254.254 0 0 1-.09-.347l1.244-2.156zm-12.125-7a.25.25 0 0 1 .346-.095l.43.248c.12.07.16.225.09.347L4.249 5.328a.25.25 0 0 1-.347.095l-.429-.248a.254.254 0 0 1-.09-.347l1.244-2.156zm1.299.75a.25.25 0 0 1 .346-.095l.43.248c.12.07.16.225.09.347L5.548 6.078a.25.25 0 0 1-.347.095l-.429-.248a.254.254 0 0 1-.09-.347l1.244-2.156z"
                fill="url(#KR_svg__f)"
                opacity={0.75}
            />
        </G>
    </Svg>
)

export default SvgKr
