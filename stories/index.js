import React from "react";
import { storiesOf, configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { checkA11y } from "storybook-addon-a11y";
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text, boolean, number, select, object } from '@storybook/addon-knobs';
import { colors, fonts, fontStyles, fontWeight, icons, letterSpacing, opacity, spacing } from 'common/styles/variables';
import { getStyleValue, filterStyleGroup } from './utils/helpers'
import { dobsonville } from 'common/images';
import Colors from './Colors';
import Icons from './Icons';
import Spacing from './Spacing';

import {
  Alert,
  ArticleDetails,
  ArticleShare,
  Aside,
  AsideList,
  AsideMenu,
  AsideOverlay,
  Button,
  ButtonDonate,
  ButtonOutline,
  ButtonPrimary,
  ButtonViewAll,
  Border,
  CardCampaign,
  CardHighlight,
  CardNews,
  CardPerson,
  CardRelated,
  CardVideo,
  Campaigns,
  Copy,
  Footer,
  FooterLegal,
  FooterMenus,
  Header,
  Heading,
  HeadingLines,
  Hero,
  Icon,
  Logo,
  MoreLink,
  SectionMain,
  SectionFull,
  Tag,
  NavBox,
  NavButton,
  NavItem,
  Navbar,
  NavbarSecondary,
  NavbarSub,
  NavIcon,
  Progress,
  StorySpacing,
  ViewAll,
  Videos,
  Widget,
} from "../src/components";

// Sergio components
import { default as ButtonTest } from "../src/components/Button";


addDecorator((story, context) => withInfo("")(story)(context));

addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(backgrounds([
  { name: "White", value: "#FFFFFF", default: true },
  { name: "bgBlue", value: "#155FA2" },
  { name: "bgBlueLight", value: "#1D7BB9" },
  { name: "bgLight", value: "#EEEEEE" },
]));

storiesOf('StyleGuide', module)
  .add('Readme', () => (
    <div>
      <h1>Style Guide</h1>
      <p>Tools to help style components</p>
    </div>
  ))

  .add('Fonts', () => (
    <div>
      <Heading font="serif">Serif</Heading>
      <Heading font="sans">Sans</Heading>
    </div>
  ))

  .add('Colors', () => (
    <Colors />
  ))

  .add('Icons', () => (
    <Icons />
  ))

  .add('Spacing', () => (
    <Spacing />
  ))

storiesOf('Base', module)
  .add('Readme', () => (
    <div>
      <h1>Base Components</h1>
      <p>Base components are not to be accessed outside of the Dobsonville. These need to be part of other components or compositions.</p>
    </div>
  ))

  .add('Button', () => {
    const iconsArray = getStyleValue(icons);
    return(
      <ButtonTest
        full={ boolean('full', false) }
        disabled={ boolean('disabled', false) }
        rounded={ boolean('rounded', true) }
        outline={ boolean('outline', false) }
        center={ boolean('center', false) }
        color={ select('color', ['blue', 'green', 'yellow', 'red', 'white'], 'blue') }
        size={ select('size', ['tiny', 'small', 'medium', 'large','huge'], 'medium') }
        href={text('Link','')}
        onClick={action('clicked')}
        iconBefore={ select('iconBefore', iconsArray, '') }
        iconAfter={ select('iconAfter', iconsArray, '') }
      />
    )
  })
  .add('Button Custom Styles', () => {
    const styles = {
      color: colors.brandGreen,
      backgroundColor: colors.brandYellow,
      ":hover": {
        color: colors.brandRed,
        backgroundColor: colors.brandBlue,
        borderColor: colors.brandGreen,
      }
    }
    return (
      <ButtonTest customStyles={styles} onClick={action('clicked')}>Custom Button</ButtonTest>
    )
  })

  .add('Border', () =>  (
    <Border
      color={select("color", ["base", "dark", "light", "white", "whiteO"], "dark")}
      mt={select("mt", ["none", "small", "medium", "large"], "medium")}
      mb={select("mb", ["none", "small", "medium", "large"], "medium")}
    />
  ))

  .add("Copy", () => {
    const fontsArray = getStyleValue(fonts);
    const weightsArray = getStyleValue(fontWeight);
    const colorsArray = getStyleValue(filterStyleGroup(colors,"text"));
    const spacingArray = getStyleValue(spacing);

    return(
      <Copy
        color={select("color", ["base", "blue", "light", "light0", "white"], "base")}
        mb={select("mb", ["none", "small", "medium", "large"], "medium")}
        override={object("override", {})}
        size={select("size", ["large", "medium", "small", "tiny"], "medium")}
        truncate={boolean("truncate", false)}
        uppercase={boolean("uppercase", false)}
        left={boolean("left", true)}
        right={boolean("right", false)}
        isParent={boolean("isParent", false)}
        center={boolean("center", false)}
        justify={boolean("justify", false)}
        weight={select("weight", ["bold", "medium", "regular", "light"], "light")}
      >
        {text("children", "Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.")}
      </Copy>
    )
  })

  .add('Heading', () => (
    <Heading
      color={select("color", ["base", "blue", "red", "white"], "base")}
      level={select("level", [1, 2, 3, 4, 5, 6], 1)}
      tracking={select("letterSpacing", ["none", "small", "base", "large", "huge"], "small")}
      mb={select("mb", ["none", "tiny", "small", "medium", "large", "huge"], "none")}
      override={object("override", {})}
      size={select("size", ["huge", "large", "medium", "small", "tiny"], "medium")}
      truncate={boolean("truncate", false)}
      uppercase={boolean("uppercase", false)}
      left={boolean("left", true)}
      right={boolean("right", false)}
      center={boolean("center", false)}
      lineLeft={boolean("lineLeft", false)}
      lineRight={boolean("lineRight", false)}
      weight={select("weight", ["bold", "medium", "regular", "light"], "bold")}
    >
      {text("children", "Heading")}
    </Heading>
  ))

  .add('HeadingLines', () => (
    <HeadingLines
      color={select("color", ["base", "blue", "red", "white"], "base")}
      lineLeft={boolean("lineLeft", false)}
      lineRight={boolean("lineRight", false)}
      mb={select("mb", ["none", "tiny", "small", "medium", "large", "huge"], "none")}
    >
      {text("children", "Heading")}
    </HeadingLines>
  ))

  .add('Icon', () =>  {
    const spacingArray = [];
    Object.keys(spacing).forEach((name) => {
      if (spacing[name]) {
        spacingArray.push(
          spacing[name]
        );
      }
    })
    const colorsArray = [];
    Object.keys(colors).forEach((name) => {
      if (colors[name]) {
        colorsArray.push(
          colors[name]
        );
      }
    })
    const iconsArray = [];
    Object.keys(icons).forEach((name) => {
      if (icons[name]) {
        iconsArray.push(
          icons[name]
        );
      }
    })
    return(
      <Icon
        name={ select('name', iconsArray, 'close') }
        color={ select('color', colorsArray, 'inherit') }
        ml={ select('ml',spacingArray, 'Space05') }
        mr={ select('mr',spacingArray, 'Space05') }
        fs={ text('fs', 'inherit') }
        lh={ text('lh', 'inherit') }
      />
    )
  })

  .add('Logo', () => {
    const options = {
      range: true,
      min: 60,
      max: 300,
      step: 10
    }
    return(
      <Logo
        size={number('size', 130, options)}
      />
    )
  })

storiesOf("Navs/Navbar", module)
  .add("Masthead", () => (
    <div>
      <NavbarSecondary>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"}>Visit da.org.za</MoreLink></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Why the DA?</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Where We Govern</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Our People</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Newsroom</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Contact</a></NavItem>
      </NavbarSecondary>
      <Navbar>
        <NavItem fontWeight={fontWeight.bold}><Logo /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-twitter"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite}>Campaigns</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite}>Get Involved</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline>Join the DA</ButtonTest></NavItem>
      </Navbar>
      <NavbarSub>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"}>Bokamoso</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"}>Speeches</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"}>Archive</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><MoreLink color={"blue"} size={"base"} lowercase tracking={"small"} weight={"regular"}>Subscribe to Bokamoso</MoreLink></NavItem>
      </NavbarSub>
    </div>
  ))
  .add("Navbar", () => (
    <Navbar>
      <NavItem><Logo /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-twitter"} /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite}>Campaigns</NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite}>Get Involved</NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline>Join the DA</ButtonTest></NavItem>
    </Navbar>
  ))
  .add("NavbarSecondary", () => (
    <NavbarSecondary>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"}>Visit da.org.za</MoreLink></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Why the DA?</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Where We Govern</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Our People</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Newsroom</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Contact</a></NavItem>
    </NavbarSecondary>
  ))
  .add("NavbarSub", () => (
    <NavbarSub>
      <NavItem fs={"13px"} lh={"16px"} color={colors.linkBlue}>Bokamoso</NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.linkBlue}>Speeches</NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.linkBlue}>Archive</NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><MoreLink color={"blue"} size={"base"} lowercase tracking={"small"} weight={"regular"}>Subscribe to Bokamoso</MoreLink></NavItem>
    </NavbarSub>
  ));

storiesOf("Navs/NavItems", module)
  .add("NavBox", () => (
    <NavBox>
      {text('children','NavBox Menu Item')}
    </NavBox>
  ))
  .add("NavButton", () => (
    <NavButton>Hello</NavButton>
  ))
  .add("NavItem", () => {
    const colorsArray = getStyleValue(filterStyleGroup(colors,"text"));
    const spacingArray = getStyleValue(spacing);
    const weightArray = getStyleValue(fontWeight);
    return(
      <NavItem
        color={select('color',colorsArray,colors.linkBase)}
        display={text('display','inline-block')}
        fontWeight={select('fontWeight',weightArray,fontWeight.regular)}
        fs={text('fs','14px')}
        lh={text('fs','18px')}
        mt={select('mt',spacingArray,spacing.space0)}
        mr={select('mr',spacingArray,spacing.space1)}
        mb={select('mb',spacingArray,spacing.space0)}
        ml={select('ml',spacingArray,spacing.space1)}
      >
        {text('children','NavItem')}
      </NavItem>
    )
  })
  .add('NavIcon', () => {
    const colorsArray = getStyleValue(colors);
    return(
      <NavIcon
        iconName="whatsapp"
        color={select('color',colorsArray,colors.textBase)}
        iconColor={select('iconColor',colorsArray,colors.textBase)}
      >
        {text('children','Whats App')}
      </NavIcon>
    )
  })
  .add("MoreLink", () => (
    <MoreLink
      arrowDirection={select("arrowDirection", ["up", "down", "left", "right"], "right")}
      color={select("color", ["blue", "green", "yellow", "red", "white"], "blue")}
      hideIcon={boolean("hideIcon", false)}
      href={text("URL", "/")}
      isNested={boolean("isNested", false)}
      size={select("size", ["small", "medium", "large"], "small")}
      target={select("target", ["_blank", "_parent", "_self", "_top"], "")}
      uppercase={boolean("uppercase", true)}
      lowercase={boolean("lowercase", false)}
      weight={select("weight", ["bold", "medium", "regular", "light"], "medium")}
      tracking={select("tracking", ["small", "base"], "base")}

    >
      { text("children", "Read More") }
    </MoreLink>
  ));

  storiesOf('Components', module)
    .add('Alert', () => {

      const colorsArray = getStyleValue(filterStyleGroup(colors,"status"));
      const iconsArray = getStyleValue(icons);

      return(
        <Alert
          close={boolean('close', true)}
          color={ select('color', colorsArray, colors.statusNeutral) }
          iconBefore={ select('iconBefore', iconsArray, '') }
          >
          {text('children', 'Maecenas sed diam eget risus varius blandit sit amet non magna.')}
        </Alert>
      )
    })

    .add("ArticleDetails", () => (
      <ArticleDetails />
    ))

    .add("ArticleShare", () => (
      <ArticleShare />
    ))

    .add('Aside', () => (
      <Aside
        visual={dobsonville}
      />
    ))

    .add("AsideList", () => (
      <AsideList
        heading={text("heading","Latest News")}
        cta={text("cta","More news")}
      >
        <CardNews
          imageUrl={dobsonville}
          title={"Fermentum Sem Mollis Pharetra"}
          meta={"July 4, 2017 in News"}
          url={"/"}
        />
        <CardNews
          imageUrl={dobsonville}
          title={"Fermentum Sem Mollis Pharetra"}
          meta={"July 4, 2017 in News"}
          url={"/"}
        />
        <CardNews
          imageUrl={dobsonville}
          title={"Fermentum Sem Mollis Pharetra"}
          meta={"July 4, 2017 in News"}
          url={"/"}
        />
      </AsideList>
    ))

    .add("AsideMenu", () => (
      <AsideMenu>
        <NavBox>Item One</NavBox>
        <NavBox>Item Two</NavBox>
        <NavBox>Item Three</NavBox>
      </AsideMenu>
    ))

    .add("AsideOverlay", () => (
      <AsideOverlay
        visual={dobsonville}
      />
    ))

    .add("CardCampaign", () => (
      <CardCampaign
        imageUrl={text("imageUrl", dobsonville)}
        meta={text("meta","Western Cape")}
        title={text("title", "Firing Zuma is the first step towards building a better tomorrow")}
        paragraph={text("paragraph","Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.")}
        cta={text("cta","Join the fight")}
        url={text("url","/")}
      />
    ))

    .add("CardHighlight", () => (
      <CardHighlight
        imageUrl={text("imageUrl", dobsonville)}
        title={text("title", "Fermentum Sem Mollis Pharetra")}
        meta={text("meta","Federal Leader of the Democratic Alliance | Parliamentary Leader of the Democratic Alliance")}
        paragraph={text("paragraph","Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.")}
        cta={text("cta","View More")}
        url={text("url","/")}
      />
    ))

    .add("CardNews", () => (
      <CardNews
        imageUrl={text("imageUrl", dobsonville)}
        title={text("title", "Fermentum Sem Mollis Pharetra")}
        meta={text("meta", "July 4, 2017 in News")}
        url={text("url","/")}
      />
    ))

    .add('CardPerson', () => (
      <CardPerson
        noVisual={boolean('noVisual',false)}
        visual={<img width={"100px"} className="img-fluid" src={ dobsonville } alt="alt" />}
        heading={text('heading','Fermentum Sem Mollis Pharetra')}
        meta={text('meta','Federal Leader Of The Democratic Alliance')}
        moreLink={boolean('moreLink',true)}
      />
    ))

    .add('CardRelated', () => (
      <CardRelated
        imageUrl={ text("imageUrl",dobsonville )}
        title={text("title","Fermentum Sem Mollis Pharetra")}
        paragraph={text("paragraph","Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.")}
        url={ text("url",dobsonville )}
        cta={text("cta","Read More")}
        vertical={boolean("vertical", true)}
        horizontal={boolean("horizontal", false)}
      />
    ))

    .add("CardVideo", () => (
      <CardVideo
        title={text("title","Fermentum Sem Mollis Pharetra")}
        paragraph={text("paragraph","Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.")}
        url={ text("url","/" )}
        imageUrl={ text("imageUrl",dobsonville )}
        cta={text("cta","Play Video")}
        featured={boolean("featured", "false")}
      />
    ))

    .add('Progress', () =>  {
      const options = {
        range: true,
        min: 0,
        max: 100,
        step: 1
      }
      const colorsArray = getStyleValue(filterStyleGroup(colors,"status"));
      return (
        <Progress
          color={ select('color', colorsArray, colors.statusNeutral) }
          progress={number('progress', 50, options)}
          showLabel={boolean('showLabel', true)}
        />
      )
    })

    .add('Tag', () => {
      const colorsArray = getStyleValue(filterStyleGroup(colors,"brand"));
      return(
        <Tag
          close={boolean('close',false)}
          color={ select('color', colorsArray, colors.brandWhite) }>
          {text('children','Tag Name')}
        </Tag>
      )
    })

    .add("ViewAll", () => {
      const colorsArray = getStyleValue(filterStyleGroup(colors,"border"));
      return(
        <ViewAll
          buttonLabel={text("buttonLabel", "View All")}
          borderColor={select("borderColor", colorsArray, colors.BorderLight)}
          buttonColor={ select('buttonColor', ['blue', 'green', 'yellow', 'red', 'white'], 'blue') }
        />
      )
    })

    .add("Widget", () => (
      <div>
        <Widget widgetTitle={text('widgetTitle', 'Share')}widgetTitle={text('widgetTitle', 'Share')} colTitle={text('colTitle', 'col-md-1')} colSection={text('colSection', 'col-md-11')}>
          <NavIcon iconName="facebook" iconColor={colors.socialFacebook}>{"Share on Facebook"}</NavIcon>
          <NavIcon iconName="twitter" iconColor={colors.socialTwitter}>{"Share on Twitter"}</NavIcon>
          <NavIcon iconName="envelope" iconColor={colors.socialEmail}>{"Send by Email"}</NavIcon>
          <NavIcon iconName="whatsapp" iconColor={colors.socialWhatsApp}>{"Share with What's App"}</NavIcon>
        </Widget>

        <Widget widgetTitle={text("widgetTitle", "Tags")} colTitle={text("colTitle", "col-md-1")} colSection={text("colSection", "col-md-11")}>
          <Tag>Fusce</Tag>
          <Tag>Dapibus</Tag>
          <Tag>Nibh</Tag>
        </Widget>
      </div>
    ));

  storiesOf("Modules", module)
    .add("Campaigns", () => (
      <Campaigns />
    ))
    .add("FooterLegal", () => (
      <FooterLegal />
    ))
    .add("FooterMenus", () => (
      <FooterMenus />
    ))
    .add("Videos", () => (
      <Videos />
    ));

  storiesOf("Sections", module)
    .add("Hero", () => (
      <Hero
        visual={dobsonville}
        heading={"Firing Zuma is the first step towards building a better tomorrow"}
      />
    ))
    .add("SectionMain", () => (
      <SectionMain
        main={<Campaigns />}
        aside={
          <div>
            <AsideOverlay visual={dobsonville} />

            <Aside
              visual={dobsonville}
              buttonLabel="Donate Now"
            />

            <AsideMenu>
              <NavBox>Item One</NavBox>
              <NavBox>Item Two</NavBox>
              <NavBox>Item Three</NavBox>
              <NavBox>Item Four</NavBox>
              <NavBox>Item Five</NavBox>
            </AsideMenu>

            <AsideList
              heading={"Latest News"}
              cta={"More News"}
            >
              <CardNews
                imageUrl={dobsonville}
                title={"Fermentum Sem Mollis Pharetra"}
                meta={"July 4, 2017 in News"}
                url={"/"}
              />
              <CardNews
                imageUrl={dobsonville}
                title={"Fermentum Sem Mollis Pharetra"}
                meta={"July 4, 2017 in News"}
                url={"/"}
              />
              <CardNews
                imageUrl={dobsonville}
                title={"Fermentum Sem Mollis Pharetra"}
                meta={"July 4, 2017 in News"}
                url={"/"}
              />
            </AsideList>

            <CardRelated
              vertical
              imageUrl={dobsonville}
              title={"Fermentum Sem Mollis Pharetra"}
              paragraph={"Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue."}
              cta={"Read More"}
            />

          </div>
        }
      />
    ))
    .add("SectionFull", () => {
      const colorsArray = getStyleValue(filterStyleGroup(colors,"bg"));
      const spacingArray = getStyleValue(spacing);
      return(
        <div>
          <SectionFull
            pt={select("pt", spacingArray, spacing.space13)}
            pb={select("pb", spacingArray, spacing.space13)}
            section={
              <CardHighlight
                imageUrl={dobsonville}
                title={"Fermentum Sem Mollis Pharetra"}
                meta={"Federal Leader of the Democratic Alliance | Parliamentary Leader of the Democratic Alliance"}
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                cta={"View More"}
              />
            }
          />

          <SectionFull
            pt={select("pt", spacingArray, spacing.space13)}
            pb={select("pb", spacingArray, spacing.space13)}
            backgroundColor={select("backgroundColor",colorsArray, colors.bgBlue)}
            visual={dobsonville}
            heading={
              <HeadingLines lineLeft color={"white"} mb={"huge"} >
                <Heading color={"white"} size={"tiny"} tracking={"huge"} weight={"light"} uppercase>Latest Videos</Heading>
              </HeadingLines>
            }
            section={
              <Videos />
            }
          />

          <SectionFull
            backgroundColor={colors.bgLightO}
            pt={spacing.space9}
            pb={spacing.space9}
            visual={dobsonville}
            heading={
              <Heading color={"blue"} mb={"small"} center>Get Involved</Heading>
            }
            section={
              <div>
                <Copy mb={"large"} center>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.</Copy>
                <ButtonTest center>Get Involved</ButtonTest>
              </div>
            }
          />
        </div>
      )
    })
    .add("Footer", () => (
      <Footer />
    ));
