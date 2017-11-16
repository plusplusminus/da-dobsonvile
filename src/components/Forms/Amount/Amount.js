import React, { Component } from 'react';
import { colors, spacing } from "../../../common/styles/variables";
import { AmountButton, ButtonTest, Label } from "components";
import { StyleSheet, css } from 'aphrodite';


class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.amount
    }
  }
  state = {
    active: 0,
  }
  onSelection = (value) => {
    let amount = value.value

    if (value.type === 'other') {
      amount = 0
      return this.setState({
        active: "other"
      })
    } else {
      this.setState({ active: amount })
    }

    if (this.props.onPress) {
      this.props.onPress(amount);
    }
  }

  render() {

    const styles = StyleSheet.create({
      wrapper: {
        marginBottom: spacing.space4,
      },
      group: {
        marginBottom: this.state.active == "other" ? spacing.space1 : spacing.space0,
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
                    value={item.value || "0"}
                    type={item.type}
                    selected={this.state.active === item.value}
                    onClick={() => this.onSelection(item)}
                  />
                </div>
              )
            }
          </div>
        </div>
        {
          this.state.active === "other"
           ? this.props.children
           : null
        }
      </div>
    )
  }
};

Amount.defaultProps = {
  items: [],
  label: null,
  amount: 0
}

export default Amount;
