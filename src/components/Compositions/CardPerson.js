import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  card: {
    base:{
      display: 'inline-block',
      width: '100%',
      padding: 0,
      marginBottom: spacing.space4,
      backgroundColor: colors.bgWhite,
    },
    border: {
      border: '1px solid',
      borderColor: colors.borderBase,
    },
    rounded:{
      borderRadius: spacing.space05,
    }
  },
  wrapper:{
    float: 'left',
    paddingTop: spacing.space3,
    paddingRight: spacing.space4,
    paddingBottom: spacing.space2,
    paddingLeft: spacing.space4,
  },
  figure: {
    base: {
      float: 'left',
      margin: 0,
    },
    image: {
      maxWidth: '140px',
      height: 'auto',
    },
  },
  table:{
    fontFamily: fonts.sans,
    marginBottom: spacing.space1,
    ...fontStyles('12px','14px'),
  },
  td:{
    paddingRight: spacing.space2,
    paddingBottom: spacing.space05,
  },
  tdLabel:{
    letterSpacing: letterSpacing.small,
    fontWeight: fontWeight.medium,
    paddingRight: spacing.space2,
    paddingBottom: spacing.space05,
  }
};

const CardPerson = ({ title, url, imageUrl, border, cta, meta, tel, email, rounded }) => {

  const baseStyles = StyleSheet.create({
    card: {
      ...styles.card.base,
      ...(border && styles.card.border),
      ...(rounded && styles.card.rounded),
    },
    wrapper: {
      ...styles.wrapper,
    },
    figure: {
      ...styles.figure.base,
    },
    image: {
      ...styles.figure.image,
    },
    table: {
      ...styles.table,
    },
    td: {
      ...styles.td,
    },
    tdLabel: {
      ...styles.tdLabel,
    }
  });

  return (
    <div className={css(baseStyles.card)}>
      { imageUrl &&
        <figure className={css(baseStyles.figure)}>
          <img src={imageUrl} alt="" className={css(baseStyles.image)} />
        </figure>
      }

      <div className={css(baseStyles.wrapper)}>
        <header>
          <Heading
            level={3}
            weight={"medium"}
            color={"blue" }
            size={"small"}
          >
            {title}
          </Heading>
          <Heading
            mb={"small"}
            size={"tiny" }
            color={"blue" }
            weight={"medium"}
          >
            { meta }
          </Heading>
        </header>


        { tel || email ?
          <table className={css(baseStyles.table)}>
            { tel &&
              <tr>
                <td className={css(baseStyles.tdLabel)}>Telephone:</td>
                <td className={css(baseStyles.td)}>{tel}</td>
              </tr>
            }
            { email &&
            <tr>
              <td className={css(baseStyles.tdLabel)}>Email:</td>
              <td className={css(baseStyles.td)}>{email}</td>
            </tr>
          }
          </table>
        : null }

        { cta &&
          <MoreLink href={url}>
            { cta }
          </MoreLink>
        }
      </div>
    </div>
  );
}

CardPerson.propTypes = {
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Meta info of person */
  meta: PropTypes.string,
  /** URL of Card */
  url: PropTypes.string.isRequired,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Call to Action of Card */
  cta: PropTypes.string.isRequired,
  /** Is the card bordered */
  border: PropTypes.bool.isRequired,
  /** Is the card rounded */
  rounded: PropTypes.bool.isRequired,
  /** Email details of person */
  email: PropTypes.string,
  /** Tel number of person */
  tel: PropTypes.string,
};

CardPerson.defaultProps = {
  title: null,
  url: null,
  meta: null,
  border: true,
  rounded: true,
  imageUrl: null,
  cta: null,
  tel: null,
  email: null,
};

export default CardPerson;
