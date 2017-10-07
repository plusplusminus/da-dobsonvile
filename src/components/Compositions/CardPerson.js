import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, MoreLink } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const CardPerson = (props) => {

  const { heading, meta, moreLink, noVisual, visual } = props;

  const styles = StyleSheet.create({
    cardPerson:{
      display: 'inline-block',
      width: '100%',
      marginBottom: spacing.space2,
      padding: spacing.space3,
      borderBottom: '1px solid',
      borderColor: colors.borderBase,

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
          <Heading size="medium" weight="medium">
            { heading }
          </Heading>
          <Heading size="tiny" color="blue" weight={"medium"}>{ meta }</Heading>
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
          <MoreLink color={"red"} size={"small"} uppercase>More info</MoreLink>
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
