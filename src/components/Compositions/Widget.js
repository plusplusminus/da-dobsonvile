import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, Heading } from 'components';
import { colors, fontWeight, spacing } from 'common/styles/variables';


const Widget = (props) => {

  const { colTitle, colSection, children, widgetTitle, widgetTitleColor } = props;

  const styles = StyleSheet.create({
    widget:{
      marginBottom: spacing.space1,
    },
    title:{},
    section:{},
  });

  return (
    <section className={css(styles.widget)}>
      <div className="row">
        { widgetTitle &&
          <div className={`${css(styles.title)} ${colTitle}`}>
            <Heading size={"small"} color={ widgetTitleColor } mb={"small"} tracking={"none"}>
              { widgetTitle }
            </Heading>
          </div>
        }
        <div className={`${css(styles.section)} ${colSection}`}>
          { children }
        </div>
      </div>
    </section>
  )
}

Widget.defaultProps = {
  colTitle: 'col-2',
  colSection: 'col-12',
  widgetTitle: 'Title',
  widgetTitleColor: null,
}

Widget.propTypes = {
  /** Col value for Title */
  colTitle: PropTypes.string,
  /** Col value for Section */
  colSection: PropTypes.string,
  /** Title of Widget */
  widgetTitle: PropTypes.string,
  /** Color of Widget based on color prop of Heading component */
  widgetTitleColor: PropTypes.string,
}

export default Widget;
