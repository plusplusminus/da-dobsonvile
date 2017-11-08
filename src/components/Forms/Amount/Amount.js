import React, { Component } from 'react';
import { colors, spacing } from "../../../common/styles/variables";
import { AmountButton, ButtonTest, Label } from "components";
import { StyleSheet, css } from 'aphrodite';


class Amount extends Component {
  state = {
    value: 50,
  }
  onSelection = (value) => {
    this.setState({
      value
    })
  }

  render() {

    const styles = StyleSheet.create({
      wrapper: {
        marginBottom: spacing.space4,
      },
      group: {
        marginBottom: this.state.value == "other" ? spacing.space1 : spacing.space0,
        borderRadius: spacing.space05,
        overflow: 'hidden',
        boxShadow:'0 0 0 1px #ebebeb',
      },
    });

    return(
      <div className={css(styles.wrapper)}>
        { this.props.label &&
          <Label>{this.props.label}</Label>
        }
        <div className={css(styles.group)}>
          <div className={"row no-gutters"}>
            {
              this.props.items.map((item,index) =>
                <div className="col" key={index}>
                  <AmountButton
                    label={item.label}
                    value={item.value}
                    type={item.type}
                    selected={this.state.value === item.value}
                    onClick={() => this.onSelection(item.value)}
                  />
                </div>
              )
            }
          </div>
        </div>
        {
          this.state.value === "other" ?
            this.props.children
          : null
        }
      </div>
    )
  }
};

Amount.defaultProps = {
  items: [],
  label: null,
}

export default Amount;
