import {flagSvgs} from './flagSvgs';

export const getFlagObjectByCode = (code) => {
    return flagSvgs.find(flagSvg => flagSvg.code === code)
}

export const getFlagSvgComponentByCode = (code) => {
    return getFlagObjectByCode(code).component
}

export const getFlagByDollarCode = (dollarCode) => {
    let code = dollarCode.slice(0, 2)
    if (dollarCode === 'ANG') {
        code = 'NL'
    }
    const flagObject = getFlagObjectByCode(code)
    if (flagObject) {
        const flag = flagObject.component ? flagObject.component : flagObject.img
        return flag
    }
    return null
}