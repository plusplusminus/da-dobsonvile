import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Border, Heading } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const ArticleHeader = (props) => {

  const { meta, title, attribution, subHeading } = props

  const styles = StyleSheet.create({
    articleHeader:{
      display: 'inline-block',
      width: '100%',
      marginBottom: spacing.space4,
    },
  });

  return (
    <header className={css(styles.articleHeader)}>
      { subHeading &&
        <Heading
          level={6}
          color={"blue"}
          size={"tiny"}
          letterSpacing={"small"}
          weight={"regular"}
          tracking={"small"}
          mb={"tiny"}
          uppercase
        >
          {subHeading}
        </Heading>
      }
      { title &&
        <Heading
          level={1}
          color={"blue"}
          mb={"tiny"}
          size={"large"}
        >
          {title}
        </Heading>
      }
      { attribution &&
        <Heading
          level={6}
          color={"blue"}
          size={"tiny"}
          weight={"medium"}
          tracking={"small"}
          mb={"tiny"}
        >
          {attribution}
        </Heading>
      }
      { meta &&
        <Heading
          level={6}
          size={"tiny"}
          weight={"regular"}
          tracking={"small"}
          mb={"tiny"}
        >
          {meta}
        </Heading>
      }
      <Border
        mt={"medium"}
        mb={"none"}
      />
    </header>
  )
}

export default ArticleHeader;
