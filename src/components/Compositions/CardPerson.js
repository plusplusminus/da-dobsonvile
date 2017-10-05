import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import {default as HeadingTest} from 'components/Heading';

const CardPerson = (props) => {

  const { heading, meta, moreLink, noVisual, visual } = props;

  const styles = StyleSheet.create({
    cardPerson:{
      display: 'inline-block',
      width: '100%',
      marginBottom: spacing.space2,
      padding: spacing.space3,
      borderBottom: '1px solid',
      borderColor: colors.Border,

    },
    content:{
      float: 'left',
    },
    wrapper:{
      marginBottom: spacing.space1,
    },
    visual:{
      marginRight: spacing.space2,
      maxWidth: '140px',
      float: 'left',
    },
    table:{
      fontFamily: fonts.sans,
      marginBottom: spacing.space1,
      ...fontStyles('12px','14px'),
    },
    td:{
      paddingRight: spacing.space2,
      paddingBottom: spacing.space05,
    }
  });

  return (
    <div className={css(styles.cardPerson)}>
      { visual && !noVisual &&
        <div className={css(styles.visual)}>{ visual }</div>
      }
      <div className={css(styles.content)}>
        <div className={css(styles.wrapper)}>
          <HeadingTest size="medium">
            { heading }
          </HeadingTest>
          <HeadingTest size="small" caps importance="low" tracking="base">{ meta }</HeadingTest>
        </div>
        <table className={css(styles.table)}>
          <tr>
            <td className={css(styles.td)}><strong>Telephone:</strong></td>
            <td className={css(styles.td)}>Elit Condimentum</td>
          </tr>
          <tr>
            <td className={css(styles.td)}><strong>Email:</strong></td>
            <td className={css(styles.td)}>Ipsum Fermentum</td>
          </tr>
        </table>
        { moreLink &&
          <NavText color="Red">More info</NavText>
        }
      </div>
    </div>
  )
}


CardPerson.defaultProps = {
  heading: null,
  meta: '',
  noVisual: true,
  visual: null,
  moreLink: true,
}

CardPerson.propTypes = {
  heading: PropTypes.string,
  meta: PropTypes.string,
  noVisual: PropTypes.bool,
  visual: PropTypes.string,
  moreLink: PropTypes.bool,
};

export default CardPerson;
