import React from 'react'
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Circle,
} from 'react-native-svg'

const SvgBz = props => (
    <Svg viewBox="0 0 21 15" width={21} height={15} {...props}>
        <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BZ_svg__a">
                <Stop stopColor="#FFF" offset="0%" />
                <Stop stopColor="#F0F0F0" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BZ_svg__b">
                <Stop stopColor="#094995" offset="0%" />
                <Stop stopColor="#074185" offset="100%" />
            </LinearGradient>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BZ_svg__c">
                <Stop stopColor="#D5182F" offset="0%" />
                <Stop stopColor="#CC162C" offset="100%" />
            </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
            <Path fill="url(#BZ_svg__a)" d="M0 0h21v15H0z" />
            <Path fill="url(#BZ_svg__b)" d="M0 2h21v11H0z" />
            <Path fill="url(#BZ_svg__c)" d="M0 0h21v2H0zM0 13h21v2H0z" />
            <Circle fill="url(#BZ_svg__a)" cx={10.5} cy={7.5} r={4.5} />
            <Path
                d="M10.5 11a.5.5 0 1 1 0-1c.284 0 .56-.047.822-.138a.5.5 0 1 1 .329.944A3.495 3.495 0 0 1 10.5 11zm2.651-1.215a3.5 3.5 0 0 0 .605-.998.5.5 0 0 0-.93-.368 2.5 2.5 0 0 1-.432.713.5.5 0 0 0 .757.653zm.817-2.759a3.48 3.48 0 0 0-.348-1.114.5.5 0 0 0-.891.454c.126.248.21.516.248.794a.5.5 0 1 0 .991-.134zm-1.611-2.493a3.482 3.482 0 0 0-1.08-.446.5.5 0 0 0-.22.975c.273.062.532.17.769.318a.5.5 0 1 0 .53-.847zm-2.8-.405a3.487 3.487 0 0 0-1.055.498.5.5 0 1 0 .571.82c.23-.159.484-.28.753-.354a.5.5 0 0 0-.268-.964zM7.35 5.973a3.48 3.48 0 0 0-.327 1.121.5.5 0 1 0 .994.115 2.48 2.48 0 0 1 .232-.8.5.5 0 1 0-.9-.436zm-.06 2.925c.157.359.373.689.638.976a.5.5 0 1 0 .735-.678 2.503 2.503 0 0 1-.456-.698.5.5 0 1 0-.917.4zm2.146 1.937a.5.5 0 1 1 .304-.953c.229.073.469.113.714.118a.5.5 0 0 1-.018 1 3.495 3.495 0 0 1-1-.165z"
                fill="#118014"
                fillRule="nonzero"
            />
        </G>
    </Svg>
)

export default SvgBz
