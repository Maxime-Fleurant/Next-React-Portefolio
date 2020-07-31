import { css, SerializedStyles } from '@emotion/core';
import {
  helveticaMedium,
  textLineHeight,
  font48,
  helveticaThin,
  fontRegular,
  pointSize8,
  helveticaLight,
  font20,
  helveticaRegular,
  font32,
  pointSize56,
} from '../../../globalStyle';
import { ITheme } from '../../Layout/Theme';

export const title = (theme: ITheme): SerializedStyles =>
  css(
    { display: 'flex', alignItems: 'center' },
    helveticaMedium,
    textLineHeight,
    font48,
    theme.text.textColor900
  );

export const titleDesc = (theme: ITheme): SerializedStyles =>
  css(
    { textAlign: 'justify' },
    theme.text.textColor700,
    helveticaThin,
    textLineHeight,
    fontRegular,
    css`
      @media (max-width: 1023px) {
        margin-bottom: ${pointSize56};
      }
    `
  );

export const titleLink = css(
  fontRegular,
  { marginBottom: pointSize8 },
  css`
    a {
      margin-right: ${[pointSize8]};
    }
  `
);

export const subTitleLink = css(
  fontRegular,
  { marginBottom: pointSize8 },
  css`
    a {
      margin-left: ${[pointSize8]};
    }
  `
);

export const titlewrap = (theme: ITheme): SerializedStyles =>
  css({
    display: 'flex',
    height: '100%',
    flexFlow: 'column',
    borderBottom: `1px solid ${theme.base.baseColor800}`,
  });

export const upTitleWrap = css({ flexGrow: 1 });

export const mainText = (theme: ITheme): SerializedStyles =>
  css(
    { textAlign: 'justify', wordBreak: 'break-word', hyphens: 'auto' },
    theme.text.textColor800,
    helveticaLight,
    textLineHeight,
    fontRegular
  );

export const linkWrap = css({
  display: 'flex',
  justifyContent: 'space-between',
});

export const sideInfo = (theme: ITheme): SerializedStyles =>
  css(theme.text.textColor900, helveticaThin, font20);

export const video = css({ width: '100%', height: '100%' });

export const insideLink = css(
  { cursor: 'pointer', alignItems: 'center' },
  helveticaRegular,
  css`
    span {
      ${font20}
    }
  `
);
export const insideLinkIcon = css(fontRegular, font20);

export const subTitleWrap = (theme: ITheme): SerializedStyles =>
  css({
    height: '100%',
    alignItems: 'baseline',
    borderBottom: `1px solid ${theme.base.baseColor800}`,
  });

export const subTitle = (theme: ITheme): SerializedStyles =>
  css(font32, helveticaRegular, theme.text.textColor900);

export const subTitleCell = css({});

export const subLinkSpe = (theme: ITheme): SerializedStyles =>
  css`
    &:before {
      color: ${theme.base.baseColor700};
    }
  `;