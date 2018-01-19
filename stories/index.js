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
import { api } from './utils/api';
import Colors from './Colors';
import Icons from './Icons';
import Spacing from './Spacing';

import {
  Alert,
  Amount,
  ArticleHeader,
  ArticleFooter,
  Aside,
  AsideList,
  AsideOverlay,
  AsideTwitter,
  Badge,
  Button,
  ButtonDonate,
  ButtonOutline,
  ButtonPrimary,
  ButtonViewAll,
  Border,
  Breadcrumb,
  CardCampaign,
  CardHighlight,
  CardNews,
  CardPerson,
  CardProduct,
  CardVideo,
  Masthead,
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
  Image,
  Label,
  List,
  ListItem,
  ListChild,
  Logo,
  Loading,
  MoreLink,
  SectionFull,
  Sticker,
  Sidebar,
  Tag,
  Testimonial,
  NavItem,
  Navbar,
  NavbarSecondary,
  NavbarSub,
  NavIcon,
  Progress,
  Quantity,
  ViewAll,
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
      <div className="row ml-1 mr-1">
          <ButtonTest
            full={ boolean('full', false) }
            disabled={ boolean('disabled', false) }
            rounded={ boolean('rounded', true) }
            outline={ boolean('outline', false) }
            center={ boolean('center', false) }
            left={ boolean('left', false) }
            right={ boolean('right', false) }
            color={ select('color', ['blue', 'green', 'yellow', 'red', 'white'], 'blue') }
            size={ select('size', ['small', 'medium', 'large'], 'medium') }
            href={text('href','')}
            onClick={action('clicked')}
            iconBefore={ select('iconBefore', iconsArray, '') }
            iconAfter={ select('iconAfter', iconsArray, '') }
          />
      </div>
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
      color={select("color", ["base", "light", "white", "whiteO"], "base")}
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
        color={select("color", ["base", "blue", "light", "light0", "white", "red"], "base")}
        mb={select("mb", ["none", "small", "medium", "large"], "medium")}
        override={object("override", {})}
        size={select("size", ["huge","large", "medium", "small", "tiny"], "medium")}
        truncate={boolean("truncate", false)}
        uppercase={boolean("uppercase", false)}
        left={boolean("left", true)}
        center={boolean("center", false)}
        right={boolean("right", false)}
        isParent={boolean("isParent", false)}
        justify={boolean("justify", false)}
        weight={select("weight", ["bold", "medium", "regular", "light"], "light")}
      >
        {text("children", "Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.")}
      </Copy>
    )
  })

  .add('Heading', () => (
    <Heading
      color={select("color", ["base", "blue", "red", "white", "light"], "base")}
      level={select("level", [1, 2, 3, 4, 5, 6], 1)}
      tracking={select("letterSpacing", ["none", "small", "base", "large", "huge"], "small")}
      mb={select("mb", ["none", "tiny", "small", "medium", "large", "huge"], "none")}
      override={object("override", {})}
      size={select("size", ["huge", "large", "medium", "small", "tiny"], "medium")}
      truncate={boolean("truncate", false)}
      noWrap={boolean("noWrap", false)}
      uppercase={boolean("uppercase", false)}
      left={boolean("left", true)}
      right={boolean("right", false)}
      center={boolean("center", false)}
      inline={boolean("inline", false)}
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
    const spacingArray = getStyleValue(spacing);
    const colorsArray = getStyleValue(colors);
    const iconsArray = getStyleValue(icons);
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

  .add('Image', () => (
    <Image
      imageUrl={text('imageUrl',dobsonville)}
      alt={text('alt','alt text')}
      fixed={boolean('fixed',false)}
      rounded={boolean('rounded',false)}
    />
  ))

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
        division={text('division', '')}
      />
    )
  })


  .add('Loading', () => {
    return(
      <Loading />
    )
  })

  .add("SectionFull", () => {
    const colorsArray = getStyleValue(filterStyleGroup(colors,"bg"));
    return(
      <SectionFull
        bgColor={select("bgColor",["blue","blueLight","light","lightO","dark","darkO","white"],"white")}
        bgUrl={text("bgUrl","")}
        center={boolean("center",false)}
        container={boolean("container",true)}
        rowClass={text("rowClass",'row')}
        color={select("color",["base","blue","red","white"], "base")}
        title={text("title","Latest Videos")}
        mt={select("mt",["small","medium","large","none"],"large")}
        mb={select("mb",["small","medium","large","none"],"large")}
        pt={select("pt",["small","medium","large","none"],"large")}
        pb={select("pb",["small","medium","large","none"],"large")}
      >
        <CardHighlight
          imageUrl={dobsonville}
          title={"Fermentum Sem Mollis Pharetra"}
          meta={"Federal Leader of the Democratic Alliance | Parliamentary Leader of the Democratic Alliance"}
          paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
          >
          <MoreLink>{"View More"}</MoreLink>
        </CardHighlight>
      </SectionFull>
    )
  })

  .add('Sidebar', () => {
    return(
      <Sidebar
        pl={select('pl', ["none","medium"], 'medium')}
        col={text('col', '')}
      >
        {text('children','')}
      </Sidebar>

    )
  })

storiesOf("Forms", module)
  .add("Amount", () => (
    <Amount
      items={api.amounts}
      label={"Choose amount"}
    >
      <div>
        <Label>Other amount</Label>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">R</span>
          <input type="text" className="form-control" id="amount" value=""/>
        </div>
      </div>
    </Amount>
  ))

storiesOf("Forms", module)
  .add("Label", () => (
    <Label>
      {text("children","Label Name")}
    </Label>
  ))

storiesOf("Navs/Navbar", module)
  .add("Masthead", () => (
    <Masthead />
  ))
  .add("Navbar", () => (
    <Navbar>
      <NavItem mr={"auto"} ml={spacing.space0}><Logo /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-youtube"} /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-twitter"} /></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite}>Campaigns</NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline>Get Involved</ButtonTest></NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} mr={spacing.space0}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
      <NavItem mr={spacing.space0} ml={spacing.space2}><Badge status={"neutral"}/></NavItem>
    </Navbar>
  ))
  .add("NavbarSecondary", () => (
    <NavbarSecondary>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={"auto"} ml={spacing.space0}>
        <MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"}>Visit da.org.za</MoreLink>
      </NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Why the DA?</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Where We Govern</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Our People</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Newsroom</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={spacing.space0}><a>Contact</a></NavItem>
    </NavbarSecondary>
  ))
  .add("NavbarSub", () => (
    <NavbarSub>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"} ml={spacing.space0}>Bokamoso</NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"}>Speeches</NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"}>Archive</NavItem>
      <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} ml={"auto"} mr={spacing.space0}>
        <MoreLink color={"blue"} size={"medium"} lowercase tracking={"small"} weight={"regular"}>Subscribe to Bokamoso</MoreLink>
      </NavItem>
    </NavbarSub>
  ));

storiesOf("Navs/NavItems", module)
  .add("NavItem", () => {
    const colorsArray = getStyleValue(filterStyleGroup(colors,"text"));
    const spacingArray = getStyleValue(spacing);
    const weightArray = getStyleValue(fontWeight);
    return(
      <NavItem
        color={select('color',colorsArray,colors.linkBase)}
        display={text('display','inline-block')}
        fontWeight={select('fontWeight',weightArray,fontWeight.regular)}
        href={text('href','')}
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
      const iconsArray = getStyleValue(icons);
      return(
        <Alert
          close={boolean('close', true)}
          status={ select('status', ["danger","info","neutral","success","warning"], "neutral") }
          mb={ select('mb', ["none","small","large"], "none") }
          iconBefore={ select('iconBefore', iconsArray, '') }
          >
          {text('children', 'Maecenas sed diam eget risus varius blandit sit amet non magna.')}
        </Alert>
      )
    })

    .add("ArticleHeader", () => (
      <ArticleHeader
        subHeading={text('meta', 'Western Cape')}
        title={text('title', 'Maecenas sed diam eget risus varius blandit sit amet non magna.')}
        attribution={text('attribution', 'Written by Belinda Bozzoli MP – DA Shadow Minister of Higher Education and Training')}
        meta={text('meta',"August 20, 2017 in News")}
      />
    ))

    .add("ArticleFooter", () => (
      <ArticleFooter />
    ))

    .add('Aside', () => (
      <Aside
        imageUrl={ text("imageUrl",dobsonville )}
        meta={ text("meta","" )}
        title={text("title","Fermentum Sem Mollis Pharetra")}
        paragraph={text("paragraph","Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.")}
        url={ text("url","/" )}
        cta={text("cta","Read More")}
        vertical={boolean("vertical", true)}
        horizontal={boolean("horizontal", false)}
        small={boolean("small", false)}
      />
    ))

    .add("AsideList", () => (
      <AsideList
        title={text("title","Latest News")}
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

    .add("AsideOverlay", () => (
      <AsideOverlay
        imageUrl={text('imageUrl',dobsonville)}
        color={select('color',["dark","blue","green","red","yellow"],"dark")}
        mb={select('mb',["none","small","large"],"small")}
        title={text('title',"Placeholder Title")}
        cta={text('cta',"View All")}
        paragraph={text('paragraph',"Find out more about placeholder text")}
      />
    ))

    .add("AsideTwitter", () => (
      <AsideTwitter
        heading={"Tweets by @Our_DA"}
      />
    ))

    .add("Badge", () => {
      const iconsArray = getStyleValue(icons);
      return(
        <Badge
          title={text("title","Secured")}
          status={ select('status', ["danger","info","neutral","success","warning"], "info") }
          icon={select("icon",iconsArray,"lock")}
        />
      )
    })

    .add("Breadcrumb", () => {
      return(
        <Breadcrumb
          mb={select("mb",["small","large"],"small")}
        >
          {text("children","Home")}
        </Breadcrumb>
      )
    })

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
        col={boolean("col",false)}
        bgColor={select("bgColor",["blue","white"],"white")}
        imageUrl={text("imageUrl", dobsonville)}
        title={text("title", "Fermentum Sem Mollis Pharetra")}
        meta={text("meta","Federal Leader of the Democratic Alliance | Parliamentary Leader of the Democratic Alliance")}
        paragraph={text("paragraph","Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.")}
        url={text("url","/")}
        children={text("children","")}
      />
    ))

    .add("CardNews", () => (
      <CardNews
        featured={boolean("featured",false)}
        imageUrl={text("imageUrl", dobsonville)}
        title={text("title", "Fermentum Sem Mollis Pharetra")}
        meta={text("meta", "July 4, 2017 in News")}
        url={text("url","/")}
      />
    ))

    .add('CardPerson', () => (
      <CardPerson
        border={boolean("border", true)}
        rounded={boolean("rounded", true)}
        imageUrl={text("imageUrl", dobsonville)}
        title={text('title','Fermentum Sem Mollis Pharetra')}
        meta={text('meta','Federal Leader Of The Democratic Alliance')}
        url={text("url","/")}
        cta={text("cta","View More")}
        tel={text("tel","+27 84 485 4832")}
        email={text("email","mmusi@da.org.za")}
        children={text("children","")}
      />
    ))

    .add('CardProduct', () => (
      <CardProduct
        imageUrl={ text("imageUrl",dobsonville )}
        meta={ text("meta","" )}
        title={text("title","Fermentum Sem Mollis Pharetra")}
        text={text("paragraph","Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.")}
        url={ text("url","/" )}
        small={boolean("small", false)}
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
        color={ select('color', ['base', 'blue', 'textBase', 'textLight', 'textLightO', 'textWhite'], 'textBase') }
      />
    ))

    .add('Hero', () =>  {
      return (
        <Hero
          center={boolean('center',false)}
          children={text('children',"")}
          imageUrl={ text('imageUrl',dobsonville)}
          mb={select('mb',['none', 'large'],'none')}
          small={boolean('small',true)}
          title={ text('title',"Zuma is the Number One that must go!")}
        />
      )
    })
    .add('List', () =>  {
      return(
        <List items={api.listItems} collapsed={boolean("collapsed",false)}/>
      )
    })

    .add('Progress', () =>  {
      const options = {
        range: true,
        min: 0,
        max: 100,
        step: 1
      }
      return (
        <Progress
          status={ select('status', ["danger","info","neutral","success","warning"], "info") }
          progress={number('progress', 50, options)}
          showProgress={boolean('showProgress', true)}
          labelTop={text('labelTop',"3045 supporters")}
          labelBottom={text('labelBottom',"16955 needed to reach 20000")}
        />
      )
    })

    .add('Sticker', () =>  {
      const iconsArray = getStyleValue(icons);
      return (
        <Sticker
          imageUrl={text('imageUrl',dobsonville)}
          icon={"facebook"}
          color={ select('color', ["white","green","blue","red","yellow"], "white") }
          title={text('title','1,200')}
          content={text('content','DA-Led City of Cape Town has received clean audits for three years running for excellent spending of public funds.')}
          icon={select('icon', iconsArray, null)}
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
          borderColor={select("borderColor", colorsArray, colors.BorderLight)}
          buttonColor={ select('buttonColor', ['blue', 'green', 'yellow', 'red', 'white'], 'blue') }
        >
          {text("children", "View All")}
        </ViewAll>
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
    ));

  storiesOf("Templates", module)
    .add("Home", () => (
      <div>

        <Masthead />

        <Hero
          center
          imageUrl={dobsonville}
          small={false}
          title={"Firing Zuma is the first step towards building a better tomorrow"}
        >

          <div className="row justify-content-center">
            <div>
              <HeadingLines lineLeft lineRight color={"white"} mb={"large"}>
                <Heading
                  size={"medium"}
                  color={"white"}
                  center
                >
                  Take Action
                </Heading>
              </HeadingLines>
            </div>
          </div>

          <div className="row justify-content-center">

            <div className="col-lg-3 text-center">
              <Heading
                color={"white"}
                size={"small"}
                mb={"small"}
                center
              >
                Contribute to our campaign cause
              </Heading>
              <MoreLink color={"yellow"} size="large" lowercase>Donate</MoreLink>
            </div>

            <div className="col-lg-3 text-center">
              <Heading
                color={"white"}
                size={"small"}
                mb={"small"}
                center
              >
                Sign our petition to remove Zuma
              </Heading>
              <MoreLink color={"yellow"} size="large" lowercase>Sign Petition</MoreLink>
            </div>

            <div className="col-lg-3 text-center">
              <Heading
                color={"white"}
                size={"small"}
                mb={"small"}
                center
              >
                Make a difference by joining the DA
              </Heading>
              <MoreLink color={"yellow"} size="large" lowercase>Join Us</MoreLink>
            </div>
          </div>
        </Hero>

        <SectionFull
          bgColor={"light"}
          pt={"medium"}
          pb={"medium"}
          mt={"none"}
          mb={"large"}
          title={"Newsletter Subscribe"}
          center
        >
          <div className={"col-md-12"}>
            <Copy mb={"large"} center>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</Copy>
            <Copy isParent>
              <form>

                <div className="row">
                  <div className="col-md-4 offset-md-2">
                    <div className="form-group">
                      <Label>Your Name</Label>
                      <input type="text" className="form-control" id="name" placeholder=""></input>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <Label>Your Email Address</Label>
                      <input type="text" className="form-control" id="email" placeholder=""></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <ButtonTest center>Subscribe</ButtonTest>
                </div>
              </form>
            </Copy>
          </div>
        </SectionFull>

        <SectionFull
          pt={"none"}
          pb={"none"}
        >
          <div className={"col-lg-7"}>
            <Campaigns />
          </div>

          <Sidebar col={"col-lg-4 offset-lg-1"} pl="none">
            <AsideOverlay imageUrl={dobsonville} />
            <Aside
              imageUrl={dobsonville}
              title={"Fermentum Sem Mollis Pharetra"}
              paragraph={"Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. "}
              url={"/"}
              cta={"Donate Now"}
              vertical
            >
            <Amount
              items={api.amounts}
              label={"Choose amount:"}
            >
              <div>
                <Label>Other amount</Label>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">R</span>
                  <input type="text" className="form-control" id="amount" value=""/>
                </div>
              </div>
            </Amount>
            </Aside>
          </Sidebar>

        </SectionFull>

        <SectionFull
          bgColor={"blueLight"}
          color={"white"}
          title={"Latest Videos"}
          mb={"none"}
          pb={"large"}
          pt={"large"}
        >
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <CardVideo
                  featured
                  imageUrl={ dobsonville }
                  title={"Fermentum Sem Mollis Pharetra"}
                  paragraph={"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}
                  cta={"Play Video"}
                  color={"white"}
                />
              </div>

              <div className="col-md-4">
                <CardVideo
                  imageUrl={ dobsonville }
                  title={"Fermentum Sem Mollis Pharetra"}
                  color={"white"}
                />

                <CardVideo
                  imageUrl={ dobsonville }
                  title={"Fermentum Sem Mollis Pharetra"}
                  color={"white"}
                />
              </div>
            </div>

            <ViewAll
              borderColor={colors.borderWhiteO}
              buttonColor={"white"}
            >
              View all Videos
            </ViewAll>

          </div>
        </SectionFull>

        <SectionFull
          title={"Newsroom"}
          mb={"large"}
          mt={"large"}
        >
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <CardNews
                  featured
                  imageUrl={dobsonville}
                  title={"Maecenas faucibus mollis interdum."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Maecenas faucibus mollis interdum."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Cras justo odio, dapibus ac facilisis in, egestas eget quam."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Donec ullamcorper nulla non metus auctor fringilla."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Nulla vitae elit libero, a pharetra augue."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Nullam quis risus eget urna mollis ornare vel eu leo."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Etiam porta sem malesuada magna mollis euismod."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
            </div>
            <ViewAll>View All News</ViewAll>
          </div>
          <div className="col-md-4">
            <AsideTwitter
              heading={"Tweets by @Our_DA"}
            />
          </div>
        </SectionFull>

        <SectionFull
          bgColor={"light"}
          mb={"none"}
          mt={"none"}
          pb={"large"}
          pt={"large"}
        >
          <CardHighlight
            imageUrl={dobsonville}
            title={"Fermentum Sem Mollis Pharetra"}
            meta={"Federal Leader of the Democratic Alliance | Parliamentary Leader of the Democratic Alliance"}
            paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
          >
            <MoreLink>{"Read More"}</MoreLink>
          </CardHighlight>
        </SectionFull>

        <Footer />

      </div>
    ))
    .add("Article", () => (
      <div>

        <Masthead />

        <SectionFull
          mt={"medium"}
        >
          <div className={"col-xl-8"}>
            <Breadcrumb mb={"large"}>{"Home"}</Breadcrumb>
            <ArticleHeader
              subHeading={text('meta', 'Western Cape')}
              title={text('title', 'Maecenas sed diam eget risus varius blandit sit amet non magna.')}
              attribution={text('attribution', 'Written by Belinda Bozzoli MP – DA Shadow Minister of Higher Education and Training')}
              meta={text('meta',"August 20, 2017 in News")}
            />
            <Copy isParent>
              <Copy size="large" weight={"regular"} mb={"large"}>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Copy>
              <Copy>Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum.</Copy>
              <Copy>Donec sed odio dui. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</Copy>
              <Copy>Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Copy>
            </Copy>
            <Border mt={"large"} mb={"large"}/>
            <ArticleFooter/>
          </div>

          <Sidebar col={"col-xl-4"} pl="medium">

            <List
              title={"Categories"}
              items={api.asideListCats}
            />

            <AsideList
              title={"Related News"}
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

            <Aside
              imageUrl={dobsonville}
              title={"Fermentum Sem Mollis Pharetra"}
              paragraph={"Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. "}
              url={"/"}
              cta={"Read more"}
              vertical
              small
            />

          </Sidebar>

        </SectionFull>

        <SectionFull mt={"none"} mb={"none"} bgColor={"light"}>
          <div className={"col-md-8"}>
            <Aside
              imageUrl={dobsonville}
              title={"Fermentum Sem Mollis Pharetra"}
              paragraph={"Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue."}
              url={"/"}
              cta={"Read More"}
              horizontal
              small
            />
          </div>
        </SectionFull>

        <Footer />

      </div>
    ))

    .add("Metro", () => (
      <div>
        <Masthead />
        <Hero
          imageUrl={dobsonville}
          title={"City of Cape Town"}
          mb={"large"}
          small
        >
        </Hero>
        <SectionFull
          mt={"none"}
        >
          <div className={"col-xl-8"}>

            <Copy
              size={"large"}
              weight={"medium"}
            >
              Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Copy>

            <SectionFull
              title={"Cape Town’s Vision for the Term"}
              color={"red"}
              mt={"large"}
              mb={"none"}
              container={false}
            >
              <div className={"col-md-12"}>
                <CardCampaign
                  imageUrl={dobsonville}
                  title={"An Opportunity City"}
                  paragraph={"A city where entrepreneurs and investors can grow the economy and create jobs."}
                />
                <CardCampaign
                  imageUrl={dobsonville}
                  title={"A Safe City"}
                  paragraph={"A city where people feel protected and where communities work with the police and other law enforcement agencies to keep our neighbourhoods and businesses free from violence and crime."}
                />
                <CardCampaign
                  imageUrl={dobsonville}
                  title={"A Caring City"}
                  paragraph={"We want to keep making progress in a city where people know that their government cares for them, one that works to make basic services available to ALL residents."}
                />
                <CardCampaign
                  imageUrl={dobsonville}
                  title={"An Inclusive City"}
                  paragraph={"Cape Town belongs to everyone who lives in it. Whilst we have made progress to realise this vision, there is still much work to be done to redress the wrongs of apartheid and break down barriers."}
                />
                <CardCampaign
                  imageUrl={dobsonville}
                  title={"A Well-Run City"}
                  paragraph={"DA governments are known for being committed to transparent and clean management. The tender process is open to the public and those found guilty of corruption are shown the door."}
                />
              </div>
            </SectionFull>

          </div>

          <div className={"col-xl-3 offset-xl-1"}>
            <List
              title={"Metros where we govern"}
              items={api.asideListMetros}
            >
            </List>

            <Aside
              imageUrl={dobsonville}
              title={"Help us continue the good work in Cape Town"}
              paragraph={"Cras mattis consectetur purus sit amet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."}
              url={"/"}
              cta={"Donate Now"}
              vertical
              small
            />

          </div>

        </SectionFull>

        <SectionFull
          bgColor={"light"}
          pt={"large"}
          pb={"large"}
        >
          <div className="col-md-12">
            <Testimonial
              highlight={"Pullquote example si stante, hoc natura videlicet vult, salvam esse se, quod concedimus ad eos igitur converte te, quaeso. Simus igitur contenti hisoc dixerit potius Ennius."}
              paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus. Habitant morbi et netus et malesuada fames. Aliquam id diam maecenas ultricies mi eget."}
              meta={"Joe Smith – Resident of Town Governed by the DA"}
              imageUrl={dobsonville}
            />
          </div>
        </SectionFull>

        <SectionFull
          title={"City of Cape Town's Success Stories"}
          color={"red"}
        >
          <div className={"col-md-12"}>
            <div className={"card-columns"}>
              <Sticker
                color={"red"}
                title={"Cras"}
                content={"DA-Led City of Cape Town has received clean audits for three years running for excellent spending of public funds."}
              />

              <Sticker
                color={"green"}
                icon={"facebook"}
                content={"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."}
              />

              <Sticker
                color={"yellow"}
                title={"1,200"}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              />

              <Sticker
                color={"white"}
                imageUrl={dobsonville}
                content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."}
              />

              <Sticker
                color={"red"}
                title={"Cras"}
                content={"DA-Led City of Cape Town has received clean audits for three years running for excellent spending of public funds."}
              />

              <Sticker
                color={"green"}
                icon={"facebook"}
                content={"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."}
              />

              <Sticker
                color={"yellow"}
                title={"1,200"}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              />

              <Sticker
                color={"white"}
                imageUrl={dobsonville}
                content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."}
              />
            </div>
          </div>

          <ViewAll>
            Load More Stories
          </ViewAll>

        </SectionFull>

        <SectionFull
          title={"Meet the Mayor & Mayoral Commitee"}
          color={"blue"}
          bgColor={"light"}
          pt={"large"}
          pb={"large"}
        >
          <div className={"col-md-12"}>
            <CardHighlight
              imageUrl={dobsonville}
              title={"Get to know Patricia de Lille"}
              meta={"Executive Mayor of the City of Cape Town"}
              paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
            >
              <MoreLink>{"Read More"}</MoreLink>
            </CardHighlight>
          </div>
          <div className={"col-md-6"}>
            <CardPerson
              title={"Cllr Benedicta Van Minnen"}
              meta={"Human Settlements"}
              tel={"021 400 1206"}
              email={"ernest.sonnenberg"}
              border={false}
            />
          </div>
          <div className={"col-md-6"}>
            <CardPerson
              title={"Cllr Benedicta Van Minnen"}
              meta={"Human Settlements"}
              tel={"021 400 1206"}
              email={"ernest.sonnenberg"}
              border={false}
            />
          </div>
          <div className={"col-md-6"}>
            <CardPerson
              title={"Cllr Benedicta Van Minnen"}
              meta={"Human Settlements"}
              tel={"021 400 1206"}
              email={"ernest.sonnenberg"}
              border={false}
            />
          </div>
          <div className={"col-md-6"}>
            <CardPerson
              title={"Cllr Benedicta Van Minnen"}
              meta={"Human Settlements"}
              tel={"021 400 1206"}
              email={"ernest.sonnenberg"}
              border={false}
            />
          </div>
        </SectionFull>

        <SectionFull
          title={"Newsroom"}
          mb={"none"}
          mt={"none"}
          pb={"large"}
        >
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <CardNews
                  featured
                  imageUrl={dobsonville}
                  title={"Maecenas faucibus mollis interdum."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Maecenas faucibus mollis interdum."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Cras justo odio, dapibus ac facilisis in, egestas eget quam."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Donec ullamcorper nulla non metus auctor fringilla."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Nulla vitae elit libero, a pharetra augue."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Nullam quis risus eget urna mollis ornare vel eu leo."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
              <div className="col-md-6">
                <CardNews
                  imageUrl={dobsonville}
                  title={"Etiam porta sem malesuada magna mollis euismod."}
                  meta={"July 4th in News"}
                  paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}
                  cta={"View More"}
                  url={"/"}
                />
              </div>
            </div>
            <ViewAll>View All News</ViewAll>
          </div>
          <div className="col-md-4">
            <AsideTwitter
              heading={"Tweets by @Our_DA"}
            />
          </div>
        </SectionFull>
      </div>
    ))


    .add("Single Policy", () => (
      <div>

        <Masthead />

        <SectionFull mt={"medium"}>

          <div className={"col-xl-8"}>
            <Breadcrumb mb={"small"}>
              {"Why the DA"}
            </Breadcrumb>
            <Heading
              level={1}
              color={"blue"}
              mb={"medium"}
              size={"large"}
            >
              {'Arts, Culture and Heritage Policy'}
            </Heading>
            <Border
              mt={"none"}
              mb={"medium"}
            />
            <Copy isParent>
              <Copy size="large" weight={"regular"} mb={"large"}>Cultural goods like language and the arts are fundamental, and not incidental, to what it means to be human.</Copy>
            </Copy>

            <div className={"row"}>
              <div className={"col-md-4"}>
                <Sticker
                  color={"red"}
                  title={"Cras"}
                  content={"DA-Led City of Cape Town has received clean audits for three years."}
                />
              </div>
              <div className={"col-md-4"}>
                <Sticker
                  color={"green"}
                  icon={"facebook"}
                  content={"Integer posuere erat a ante venenatis dapibus posuere velit aliquet."}
                />
              </div>
              <div className={"col-md-4"}>
                <Sticker
                  color={"yellow"}
                  title={"1,200"}
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
              </div>
            </div>

            <Border
              mt={"none"}
              mb={"large"}
              color={"whiteO"}
            />

            <Copy isParent>
              <Copy>Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum.</Copy>
              <Copy>Donec sed odio dui. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</Copy>
              <Copy>Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Copy>
            </Copy>
            <Border mt={"large"} mb={"large"}/>
            <ArticleFooter/>

          </div>

          <Sidebar col={"col-xl-4"} pl="medium">
            <AsideOverlay
              imageUrl={dobsonville}
              title={"2019 Manifesto"}
              paragraph={"We are ready for 2019"}
              cta={"Read More"}
              mb={"large"}
            >
            </AsideOverlay>
            <List
              title={"More Policies"}
              items={api.asideListPolicies}
              collapsed
            />
          </Sidebar>

        </SectionFull>

        <Footer />

      </div>
    ))


    .add("Shop", () => (
      <div>

        <Masthead/>

        <Hero
          title={"DA Christmas Pop-up Store"}
          mb={"none"}
          small
          center
        >
          <Copy center>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.</Copy>
        </Hero>

        <SectionFull

        >
          <div className={"col-lg-4 col-md-6"}>
            <CardProduct
              imageUrl={dobsonville}
              title={"Product Name"}
              meta={"Minimum Donation: R200"}
              text={"Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna."}
              vertical
            >
              <div className="form-group">
                <label>Donation Amount</label>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">R</span>
                  <input type="text" className="form-control" id="amount" value="200"/>
                </div>
              </div>

              <ButtonTest>Add to Cart</ButtonTest>

            </CardProduct>
          </div>

          <div className={"col-lg-4 col-md-6"}>
            <CardProduct
              imageUrl={dobsonville}
              meta={"Minimum Donation: R200"}
              title={"Product Name"}
              text={"Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna."}
              vertical
            >
              <ButtonTest>Add to Cart</ButtonTest>
            </CardProduct>
          </div>

          <div className={"col-lg-4 col-md-6"}>
            <CardProduct
              imageUrl={dobsonville}
              meta={"Minimum Donation: R200"}
              title={"Product Name"}
              text={"Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna."}
              vertical
            >
              <ButtonTest>Add to Cart</ButtonTest>
            </CardProduct>
          </div>

        </SectionFull>

        <SectionFull
          bgColor={"light"}
          pt={"large"}
          pb={"large"}
          mb={"none"}
        >
          <div className="col-md-12">
            <CardHighlight
              imageUrl={dobsonville}
              title={"Donation CTA Fermentum Sem Mollis Pharetra"}
              paragraph={"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}
            >
              <ButtonTest color={"green"}>Donate Now</ButtonTest>
            </CardHighlight>
          </div>
        </SectionFull>

        <Footer/>

      </div>
    ))

    .add("Shop - Product", () => (
      <div>

        <Masthead/>

        <Hero
          title={"Product Title"}
          mb={"none"}
          small
        >
          <Heading
            level={6}
            color={"blue"}
            size={"tiny"}
            weight={"regular"}
            tracking={"small"}
            uppercase
          >
            {"Minimum Donation: R200"}
          </Heading>
        </Hero>

        <SectionFull>
          <div className={"col-md-5"}>
            <Copy size="large" weight="medium">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor.</Copy>
            <Copy>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.</Copy>
            <Border color="whiteO"/>
            <div className="form-group">
              <Label>Color</Label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Black</option>
                <option>White</option>
              </select>
            </div>
            <div className="form-group">
              <Label>Size</Label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="form-group">
              <Label>Donation Amount</Label>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">R</span>
                <input type="text" className="form-control" id="amount" value="200"/>
              </div>
            </div>
            <Border color="whiteO"/>
            <ButtonTest>Add to Cart</ButtonTest>
          </div>
          <div className={"col-md-6 offset-md-1"}>
            <Image
              imageUrl={dobsonville}
              rounded
            />
          </div>

        </SectionFull>

        <SectionFull
          color="red"
          title={"Other Products"}
        >
          <div className={"col-md-4"}>
            <CardProduct
              imageUrl={dobsonville}
              title={"Product Name"}
              meta={"Minimum Donation: R200"}
              text={"Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna."}
              vertical
            >
              <div className="form-group">
                <Label>Donation Amount</Label>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">R</span>
                  <input type="text" className="form-control" id="amount" value="200"/>
                </div>
              </div>

              <ButtonTest>Add to Cart</ButtonTest>

            </CardProduct>
          </div>

          <div className={"col-md-4"}>
            <CardProduct
              imageUrl={dobsonville}
              meta={"Minimum Donation: R200"}
              title={"Product Name"}
              text={"Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna."}
              vertical
            >
              <ButtonTest>Add to Cart</ButtonTest>
            </CardProduct>
          </div>

          <div className={"col-md-4"}>
            <CardProduct
              imageUrl={dobsonville}
              meta={"Minimum Donation: R200"}
              title={"Product Name"}
              text={"Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna."}
              vertical
            >
              <ButtonTest>Add to Cart</ButtonTest>
            </CardProduct>
          </div>

          <ViewAll>View All Products</ViewAll>

        </SectionFull>

        <SectionFull
          bgColor={"light"}
          pt={"large"}
          pb={"large"}
          mb={"none"}
        >
          <CardHighlight
            imageUrl={dobsonville}
            title={"Donation CTA Fermentum Sem Mollis Pharetra"}
            paragraph={"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}
          >
            <ButtonTest color={"green"}>Donate Now</ButtonTest>
          </CardHighlight>
        </SectionFull>

        <Footer/>

      </div>
    ))

    .add("Get Involved", () => (
      <div>

        <Masthead />

        <Hero
          title={"Do your part and get involved"}
          mb={"none"}
          small
        >
        </Hero>

        <SectionFull
          mt={"none"}
        >
          <div className={"col-md-8"}>
            <Copy
              weight={"medium"}
              size={"large"}
            >
              Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.
            </Copy>
          </div>
        </SectionFull>
        <SectionFull
          mt={"none"}
        >
          <div className={"col-md-8"}>
            <CardHighlight
              col
              bgColor={"blue"}
              imageUrl={dobsonville}
              title={"Become a Volunteer"}
              paragraph={"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."}
            >
              <ButtonTest color={"green"}>Volunteer</ButtonTest>
            </CardHighlight>
          </div>
          <div className={"col-md-4"}>
            <div className={"row"}>
              <div className={"col-md-12"}>
                <AsideOverlay
                  imageUrl={dobsonville}
                  title={"Contribute to the DA's cause"}
                  paragraph={null}
                  cta={"Donate"}
                />
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-md-12"}>
                <AsideOverlay
                  imageUrl={dobsonville}
                  title={"Subscribe to the Newsletter"}
                  paragraph={null}
                  cta={"Subscribe"}
                />
              </div>
            </div>
          </div>
        </SectionFull>

        <SectionFull
          mt={"none"}
          pt={"large"}
          pb={"large"}
          bgColor={"light"}
        >
          <div className={"col-md-12"}>
            <Copy center size={"large"} weight={"medium"}>
              Are you registered to vote?
            </Copy>
          </div>
        </SectionFull>

        <SectionFull
          mt={"large"}
          mb={"large"}
          title={"Share the facts"}
          color={"red"}
        >
        <div className={"col-md-7"}>
          <CardCampaign
            imageUrl={dobsonville}
            title={"An Opportunity City"}
            paragraph={"A city where entrepreneurs and investors can grow the economy and create jobs."}
            cta={"share"}
          />
          <CardCampaign
            imageUrl={dobsonville}
            title={"A Safe City"}
            paragraph={"A city where people feel protected and where communities work with the police and other law enforcement agencies to keep our neighbourhoods and businesses free from violence and crime."}
            cta={"share"}
          />
          <CardCampaign
            imageUrl={dobsonville}
            title={"A Caring City"}
            paragraph={"We want to keep making progress in a city where people know that their government cares for them, one that works to make basic services available to ALL residents."}
            cta={"share"}
          />
          <CardCampaign
            imageUrl={dobsonville}
            title={"An Inclusive City"}
            paragraph={"Cape Town belongs to everyone who lives in it. Whilst we have made progress to realise this vision, there is still much work to be done to redress the wrongs of apartheid and break down barriers."}
            cta={"share"}
          />
          <CardCampaign
            imageUrl={dobsonville}
            title={"A Well-Run City"}
            paragraph={"DA governments are known for being committed to transparent and clean management. The tender process is open to the public and those found guilty of corruption are shown the door."}
            cta={"share"}
          />
          <ViewAll>View More</ViewAll>
        </div>

        <Sidebar col={"col-md-4 offset-md-1"} pl="none">
          <AsideOverlay
            imageUrl={dobsonville}
            title={"Report Corruption"}
            paragraph={"Fight against corrupt activity in your area"}
            cta={"Report Now"}
          />
          <AsideOverlay
            imageUrl={dobsonville}
            title={"Jobs at the DA"}
            paragraph={"Work or intern at the Democratic Alliance"}
            cta={"View More"}
          />
          <AsideOverlay
            imageUrl={dobsonville}
            title={"Membership"}
            paragraph={"Become a member, or update your membership"}
            cta={"More Info"}
          />
          <Border color="whiteO"/>
          <List
            title="More Links"
            items={api.moreLinks}
          />
          <div>
            <Heading
              color={"red"}
              size={"tiny"}
              tracking={"huge"}
              weight={"light"}
              mb={"medium"}
              uppercase
            >
              Stay in touch
            </Heading>
            <div>
              <NavIcon iconColor={colors.socialMobile} iconName="mobile">+27 832 234 1232</NavIcon>
              <NavIcon iconColor={colors.socialInstagram} iconName="instagram">Instagram</NavIcon>
              <NavIcon iconColor={colors.socialFacebook} iconName="facebook">Facebook</NavIcon>
              <NavIcon iconColor={colors.socialTwitter} iconName="twitter">Twitter</NavIcon>
              <NavIcon iconColor={colors.socialYoutube} iconName="youtube">YouTube</NavIcon>
              <NavIcon iconColor={colors.socialEmail} iconName="envelope">Email</NavIcon>
              <MoreLink>View all contact Info</MoreLink>
            </div>
          </div>
        </Sidebar>
      </SectionFull>
    </div>
    ))

    .add("Footer", () => (
      <Footer />

    ));
