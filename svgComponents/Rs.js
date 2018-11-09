import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    G,
    Mask,
    Use,
    Ellipse,
} from 'react-native-svg'

const SvgRs = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RS_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RS_svg__b">
                <Stop stopColor="#17508F" offset="0%" />
                <Stop stopColor="#114175" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="RS_svg__c">
                <Stop stopColor="#E1444D" offset="0%" />
                <Stop stopColor="#C53840" offset="100%" />
            </LinearGradient>
            <Path
                d="M.5 2.5C.5 1.826.874.485.874.485A.672.672 0 0 1 1.495 0h2.01c.273 0 .552.214.621.481 0 0 .374 1.33.374 2.019 0 .645-.376 2.02-.376 2.02-.069.265-.269.654-.457.852 0 0-.417.628-1.167.628s-1.167-.628-1.167-.628a2.428 2.428 0 0 1-.46-.86S.5 3.162.5 2.5z"
                id="RS_svg__d"
            />
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#RS_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#RS_svg__b)" d="M0 5h21v5H0z" />
            <Path fill="url(#RS_svg__c)" d="M0 0h21v5H0z" />
            <Path fill="url(#RS_svg__a)" d="M0 10h21v5H0z" />
            <G transform="translate(4 5)">
                <Mask id="RS_svg__e" fill="#fff">
                    <Use xlinkHref="#RS_svg__d" />
                </Mask>
                <Use fill="url(#RS_svg__a)" xlinkHref="#RS_svg__d" />
                <Path
                    fill="#C43840"
                    fillRule="nonzero"
                    mask="url(#RS_svg__e)"
                    d="M4.422-.203L-.203 5.578l.781.625L5.203.422z"
                />
                <Path
                    fill="#C43840"
                    fillRule="nonzero"
                    mask="url(#RS_svg__e)"
                    d="M-.203.422l4.625 5.78.78-.624L.579-.202z"
                />
            </G>
            <Ellipse fill="#FFF" cx={6.5} cy={7.5} rx={1} ry={1.5} />
            <Path
                d="M5 4l-.5-1 1 .5 1-.5 1 .5 1-.5L8 4v.5c0 .276-.216.5-.495.5h-2.01A.503.503 0 0 1 5 4.5V4z"
                fill="#D1A43A"
            />
        </G>
    </Svg>
)

export default SvgRs
