import React from 'react';
import { storiesOf, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import backgrounds from "@storybook/addon-backgrounds";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


import {
  Button,
  ButtonDonate,
  ButtonOutline,
  ButtonPrimary,
  ButtonViewAll,
  Campaigns,
  Copy,
  Heading,
  HeadingAside,
  HeadingHero,
  HeadingMeta,
  HeadingSection,
  HeadingSmall,
  HeadingWidget,
  Hero,
  Icon,
  Logo,
  NavBox,
  NavButton,
  NavItem,
  Navbar,
  NavbarSecondary,
  NavbarSub,
  NavIcon,
  NavText,
} from '../src/components'

addDecorator((story, context) => withInfo('')(story)(context));
addDecorator(backgrounds([
  { name: "White", value: "#FFFFFF", default: true },
  { name: "bgBlue", value: "#155FA2" },
  { name: "bgBlueLight", value: "#1D7BB9" },
  { name: "bgLight", value: "#EEEEEE" },
]))
addDecorator(checkA11y)

storiesOf('Base/Colors', module)
  .add('Heading', () => (
    <Heading color="Heading">Heading</Heading>
  ))
  .add('Copy', () => (
    <Heading color="Copy">Copy</Heading>
  ))
  .add('CopyLight', () => (
    <Heading color="CopyLight">CopyLight</Heading>
  ))
  .add('Primary', () => (
    <Heading color="Primary">Primary</Heading>
  ))
  .add('PrimaryHover', () => (
    <Heading color="PrimaryHover">PrimaryHover</Heading>
  ))
  .add('Blue', () => (
    <Heading color="Blue">Blue</Heading>
  ))
  .add('BlueLight', () => (
    <Heading color="BlueLight">BlueLight</Heading>
  ))
  .add('Green', () => (
    <Heading color="Green">Green</Heading>
  ))
  .add('GreenHover', () => (
    <Heading color="GreenHover">GreenHover</Heading>
  ))
  .add('Yellow', () => (
    <Heading color="Yellow">Yellow</Heading>
  ))
  .add('YellowHover', () => (
    <Heading color="YellowHover">YellowHover</Heading>
  ))
  .add('Red', () => (
    <Heading color="Red">Red</Heading>
  ))
  .add('RedHover', () => (
    <Heading color="RedHover">RedHover</Heading>
  ))
  .add('bgBlue', () => (
    <Heading color="bgBlue">bgBlue</Heading>
  ))
  .add('bgBlueLight', () => (
    <Heading color="bgBlueLight">bgBlueLight</Heading>
  ))
  .add('bgLight', () => (
    <Heading color="bgLight">bgLight</Heading>
  ))
  .add('BorderLight', () => (
    <Heading color="BorderLight">BorderLight</Heading>
  ))
  .add('Twitter', () => (
    <Heading color="Twitter">Twitter</Heading>
  ))
  .add('Facebook', () => (
    <Heading color="Facebook">Facebook</Heading>
  ))
  .add('WhatsApp', () => (
    <Heading color="WhatsApp">WhatsApp</Heading>
  ))

storiesOf('Base/Fonts', module)
  .add('Serif', () => (
    <Heading font="Serif">Serif</Heading>
  ))
  .add('Sans', () => (
    <Heading font="Sans">Sans</Heading>
  ))

  storiesOf('Base/Copy', module)
    .add('Heading', () => (
      <div>
        <Copy>Copy</Copy>
      </div>
    ))

storiesOf('Base/Heading', module)
  .add('Heading', () => (
    <div>
      <Heading color={"Heading"}>Heading</Heading>
      <Heading color={"White"}>Heading</Heading>
      <Heading color={"Primary"}>Heading</Heading>
    </div>
  ))
  .add('HeadingAside', () => (
    <div>
      <HeadingAside color={"White"} align="center">Where We Govern</HeadingAside>
      <HeadingAside>Help us realise a New Begininng for South Africa</HeadingAside>
    </div>
  ))
  .add('HeadingHero', () => (
    <HeadingHero>Firing Zuma is the first step towards building a better tomorrow</HeadingHero>
  ))
  .add('HeadingMeta', () => (
    <div>
      <HeadingMeta transform={"uppercase"} letterSpacing={"Base"}>Western Cape</HeadingMeta>
      <HeadingMeta color={"CopyLight"}>Written by Belinda Bozzoli MP – DA Shadow Minister of Higher Education and Training</HeadingMeta>
      <HeadingMeta>August 20, 2017 in News</HeadingMeta>
    </div>
  ))
  .add('HeadingSection', () => (
    <div style={{padding: '0 0 0 150px'}}>
      <HeadingSection>Newsroom</HeadingSection>
      <HeadingSection color={"White"} transform={"uppercase"} letterSpacing={"Large"} lineLeft lineRight>Take Action</HeadingSection>
      <HeadingSection color={"Primary"} letterSpacing={"None"}>Get involved with the Western Cape</HeadingSection>
      <HeadingSection lineLeft color={"Red"} align={"left"} transform={"uppercase"} letterSpacing={"Large"}>Latest Campaigns</HeadingSection>
    </div>
  ))
  .add('HeadingSmall', () => (
    <div>
      <HeadingSmall>Captured Crime Intelligence appointment highlights need for National Policing Board</HeadingSmall>
      <HeadingSmall color={"White"}>Getting to know Mmusi Maimane</HeadingSmall>
      <HeadingSmall color={"Primary"}>Corruption at City Power has for too long been allowed to rob Jozi</HeadingSmall>
    </div>
  ))
  .add('HeadingWidget', () => (
    <div>
      <HeadingWidget>Publication Date</HeadingWidget>
      <HeadingWidget color={"White"}>About the DA</HeadingWidget>
      <HeadingWidget color={"Primary"}>Share</HeadingWidget>
    </div>
  ))

storiesOf('Base/Logo', module)
  .add('Logo', () => (
    <Logo />
  ))

storiesOf('Nav/Navbar', module)
  .add('Masthead', () => (
    <div>
      <NavbarSecondary>
        <NavItem fs={"13px"} lh={"16px"}><Icon name={"angle-left"} color={"White"} mr={"Space1"}/> Visit da.org.za</NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Why the DA?</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Where we govern</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Our People</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Newsroom</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Contact</a></NavItem>
      </NavbarSecondary>
      <Navbar>
        <NavItem><Logo /></NavItem>
        <NavItem fs={"18px"}><span className={"icon icon-instagram"}></span></NavItem>
        <NavItem fs={"18px"}><span className={"icon icon-facebook-square"}></span></NavItem>
        <NavItem fs={"18px"}><span className={"icon icon-twitter"}></span></NavItem>
        <NavItem>Campaigns</NavItem>
        <NavItem>Get Involved</NavItem>
        <NavItem><ButtonDonate>Donate</ButtonDonate></NavItem>
        <NavItem><ButtonOutline color="White">Join the DA</ButtonOutline></NavItem>
      </Navbar>
      <NavbarSub>
        <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Bokamoso</NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Speeches</NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Archive</NavItem>
        <NavItem><NavText color={"BlueLight"}>Subscribe to Bokamoso</NavText></NavItem>
      </NavbarSub>
    </div>
  ))
  .add('Navbar', () => (
    <Navbar>
      <NavItem><Logo /></NavItem>
      <NavItem fs={"18px"}><span className={"icon icon-instagram"}></span></NavItem>
      <NavItem fs={"18px"}><span className={"icon icon-facebook-square"}></span></NavItem>
      <NavItem fs={"18px"}><span className={"icon icon-twitter"}></span></NavItem>
      <NavItem>Campaigns</NavItem>
      <NavItem>Get Involved</NavItem>
      <NavItem><ButtonDonate>Donate</ButtonDonate></NavItem>
      <NavItem><ButtonOutline color="White">Join the DA</ButtonOutline></NavItem>
    </Navbar>
  ))
  .add('NavbarSecondary', () => (
    <NavbarSecondary>
      <NavItem fs={"13px"} lh={"16px"}><Icon name={"angle-left"} color={"White"} mr={"Space1"}/> Visit da.org.za</NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Why the DA?</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Where we govern</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Our People</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Newsroom</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Contact</a></NavItem>
    </NavbarSecondary>
  ))
  .add('NavbarSub', () => (
    <NavbarSub>
      <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Bokamoso</NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Speeches</NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Archive</NavItem>
      <NavItem><NavText color={"BlueLight"}>Subscribe to Bokamoso</NavText></NavItem>
    </NavbarSub>
  ));

storiesOf('Nav/NavItem', module)
  .add('NavBox', () => (
    <NavBox>View All Newsroom Items</NavBox>
  ))
  .add('NavButton', () => (
      <NavButton>Hello</NavButton>
  ))
  .add('NavItem', () => (
      <NavItem>Hello</NavItem>
  ))
  .add('NavIcon', () => (
    <NavIcon iconName="whatsapp" iconColor="Green">WhatsApp</NavIcon>
  ))
  .add('NavText', () => (
      <NavText>Hello</NavText>
  ))

storiesOf('Button', module)
  .add('Button', () => (
    <div>
      <Button onClick={action('clicked')}>Button</Button>
    </div>
  ))
  .add('ButtonPrimary', () => (
    <ButtonPrimary onClick={action('clicked')}>Button Primary</ButtonPrimary>
  ))
  .add('ButtonViewAll', () => (
    <ButtonViewAll onClick={action('clicked')}>View All</ButtonViewAll>
  ))
  .add('ButtonOutline', () => (
    <ButtonOutline onClick={action('clicked')}>Button Outline</ButtonOutline>
  ))
  .add('ButtonDonate', () => (
    <ButtonDonate onClick={action('clicked')}>Button Donate</ButtonDonate>
  ))
  .add('Custom Styles', () => {
    const styles = {
      color: 'Red',
      borderColor: 'Red',
      backgroundColor: 'Transparent',
      hover: {
        backgroundColor: 'Red',
        borderColor: 'Red',
        color: 'White',
      }
    }

    return (
      <Button {...styles} onClick={action('clicked')}>Custom Button</Button>
    )
  });

  storiesOf('Modules', module)
    .add('Hero', () => (
      <Hero />
    ))
    .add('Campaigns', () => (
      <Campaigns />
    ))
