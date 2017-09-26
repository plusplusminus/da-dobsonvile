import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, HeadingWidget } from 'components';
import { colors, fontWeight, spacing } from 'common/styles/variables';

const Widget = (props) => {

  const { colTitle, colSection, children, widgetTitle, widgetTitleColor } = props;

  const styles = StyleSheet.create({
    Widget:{
      marginBottom: spacing.Space1,
    },
    Title:{},
    Section:{},
  });

  return (
    <nav className={css(styles.Widget)}>
      <div className="row">
        { widgetTitle && <div className={`${css(styles.Title)} ${colTitle}`}><HeadingWidget color={ widgetTitleColor }>{ widgetTitle }</HeadingWidget></div> }
        <div className={`${css(styles.Section)} ${colSection}`}>
          { children }
        </div>
      </div>
    </nav>
  )
}

Widget.defaultProps = {
  colTitle: 'col-2',
  colSection: 'col-12',
  widgetTitle: 'Title',
}

Widget.propTypes = {
  colTitle: PropTypes.string,
  colSection: PropTypes.string,
  widgetTitle: PropTypes.string,
}


export {
  WidgetOverlay,
}
export default Widget;
