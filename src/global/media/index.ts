import { css, CSSProp } from "styled-components";
type ScreenSizeType = "PC" | "SMARTPHONE" | "TABLET";

export const ScreenSizes: { [index in ScreenSizeType]: number } = {
    PC: 992,
    TABLET: 768,
    SMARTPHONE: 480,
};

export const media: {
    [index in ScreenSizeType]: (
        literals: TemplateStringsArray,
        ...placeholders: CSSProp[]
    ) => CSSProp;
} = Object.keys(ScreenSizes).reduce((acc, label) => {
    acc[label as ScreenSizeType] = (
        literals: TemplateStringsArray,
        ...placeholders: CSSProp[]
    ) => css`
        @media (max-width: ${ScreenSizes[label as ScreenSizeType]}px) {
            ${css(literals, ...placeholders)};
        }
    `;

    return acc;
}, {} as { [index in ScreenSizeType]: (literals: TemplateStringsArray, ...placeholders: CSSProp[]) => CSSProp });