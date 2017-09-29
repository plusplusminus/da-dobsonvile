import React from "react";
import { storiesOf, configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { checkA11y } from "storybook-addon-a11y";
import backgrounds from "@storybook/addon-backgrounds";
import { withKnobs, text, boolean, number, select, object } from "@storybook/addon-knobs";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from "common/styles/variables";
import { dobsonville } from "common/images";

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
  CardCampaign,
  CardHighlight,
  CardNews,
  CardRelated,
  CardVideo,
  Campaigns,
  Copy,
  Footer,
  FooterLegal,
  FooterMenus,
  Header,
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
  NavText,
  Progress,
  StoryColor,
  StoryIcon,
  StorySpacing,
  ViewAll,
  Videos,
  Widget,
} from "../src/components";

import { default as ButtonTest } from "../src/components/Button";
import { default as HeadingTest } from "../src/components/Heading";
import { default as MoreLink } from "../src/components/MoreLink";
import { default as CampaignCard } from "../src/components/CampaignCard";


addDecorator((story, context) => withInfo("")(story)(context));

addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(backgrounds([
  { name: "White", value: "#FFFFFF", default: true },
  { name: "bgBlue", value: "#155FA2" },
  { name: "bgBlueLight", value: "#1D7BB9" },
  { name: "bgLight", value: "#EEEEEE" },
]));

<<<<<<< HEAD
storiesOf("Base/Colors", module)
  .add("Base", () => (
=======
storiesOf('Base/Alerts', module)
  .add('Alert', () => (
    <div>
      <Alert
        close={boolean('close', true)}
        color={text('color', 'Copy')}
        iconBefore={text('iconBefore', '')}
        children={text('children', 'Maecenas sed diam eget risus varius blandit sit amet non magna.')}/>
    </div>
  ))

storiesOf('Base/Colors', module)
  .add('Base', () => (
>>>>>>> 9aa8a190da3dac2667398c40202d0d4d2200badf
    <div className="row">
      <StoryColor name={"Black"} />
      <StoryColor name={"White"} />
      <StoryColor name={"Transparent"} />
      <StoryColor name={"Primary"} />
      <StoryColor name={"PrimaryHover"} />
      <StoryColor name={"Blue"} />
      <StoryColor name={"BlueLight"} />
      <StoryColor name={"Green"} />
      <StoryColor name={"GreenHover"} />
      <StoryColor name={"Yellow"} />
      <StoryColor name={"YellowHover"} />
      <StoryColor name={"Red"} />
      <StoryColor name={"RedHover"} />
    </div>
  ))
  .add("Backgrounds", () => (
    <div className="row">
      <StoryColor name={"bgBlue"} />
      <StoryColor name={"bgBlueLight"} />
      <StoryColor name={"bgDark"} />
      <StoryColor name={"bgDarkO"} />
      <StoryColor name={"bgLight"} />
      <StoryColor name={"bgLightO"} />
    </div>
  ))
  .add("Borders", () => (
    <div className="row">
      <StoryColor name={"Border"} />
      <StoryColor name={"BorderLight"} />
      <StoryColor name={"borderWhiteO"} />
    </div>
  ))
  .add("Other", () => (
    <div className="row">
      <StoryColor name={"Twitter"} />
      <StoryColor name={"Facebook"} />
      <StoryColor name={"WhatsApp"} />
    </div>
  ))
  .add("Text", () => (
    <div className="row">
<<<<<<< HEAD
      <StoryColor name={"Heading"} />
      <StoryColor name={"Copy"} />
      <StoryColor name={"CopyLight"} />
=======
      <StoryColor name={"Heading"}/>
      <StoryColor name={"Copy"}/>
      <StoryColor name={"CopyLight"}/>
      <StoryColor name={"CopyLightO"}/>
    </div>
  ))

storiesOf('Base/Icons', module)
  .add('Icon', () => (
    <div className="row">
      <StoryIcon name="close"/>
      <StoryIcon name="angle-left"/>
      <StoryIcon name="angle-right"/>
      <StoryIcon name="bookmark"/>
      <StoryIcon name="newspaper"/>
      <StoryIcon name="download"/>
      <StoryIcon name="print"/>
      <StoryIcon name="whatsapp"/>
      <StoryIcon name="envelope"/>
      <StoryIcon name="youtube"/>
      <StoryIcon name="twitter"/>
      <StoryIcon name="facebook"/>
      <StoryIcon name="instagram"/>
>>>>>>> 9aa8a190da3dac2667398c40202d0d4d2200badf
    </div>
  ));

storiesOf("Base/Fonts", module)
  .add("Serif", () => (
    <Heading font="Serif">Serif</Heading>
  ))
  .add("Sans", () => (
    <Heading font="Sans">Sans</Heading>
  ));

storiesOf("Base/Copy", module)
  .add("Copy", () => (
    <Copy>{text("Children", "Copy")}</Copy>
  ));

storiesOf("Base/Heading", module)
  .add("Heading", () => (
    <div>
      <HeadingTest
        level={select("Level", [1, 2, 3, 4, 5, 6], 1)}
        size={select("Size", ["huge", "large", "medium", "small", "tiny"], "medium")}
        importance={select("Importance", ["high", "low", "normal", "alert"], "normal")}
        caps={boolean("Uppercase", false)}
        truncate={boolean("Truncate", false)}
        weight={select("Weight", ["thick", "normal", "thin", "extraThin"], "normal")}
        tracking={select("Letter Spacing", ["none", "base", "large"], "none")}
        override={object("Override", {})}
        children={text("Children", "Heading")}
      />
    </div>
<<<<<<< HEAD
  ));

storiesOf("Base/Label", module)
  .add("Label", () => (
    <span><Label>News</Label><Label>News</Label><Label>News</Label></span>
  ));
=======
  ))
storiesOf('Base/Progress', module)
  .add('Progress', () =>  {
    const options = {
      range: true,
      min: 0,
      max: 100,
      step: 1
    }
    return (
      <Progress
        progress={number('progress', '0%', options)}
        color={text('color', 'bgDark')}
      />
    )
  })
storiesOf('Base/Spacing', module)
  .add('Base', () => (
    <div>
      <StorySpacing space={"Space"}/>
      <StorySpacing space={"Space0"}/>
      <StorySpacing space={"Space1"}/>
      <StorySpacing space={"Space2"}/>
      <StorySpacing space={"Space3"}/>
      <StorySpacing space={"Space4"}/>
      <StorySpacing space={"Space5"}/>
      <StorySpacing space={"Space6"}/>
      <StorySpacing space={"Space7"}/>
      <StorySpacing space={"Space8"}/>
      <StorySpacing space={"Space9"}/>
      <StorySpacing space={"Space10"}/>
      <StorySpacing space={"Space11"}/>
      <StorySpacing space={"Space12"}/>
      <StorySpacing space={"Space13"}/>
      <StorySpacing space={"Space14"}/>
      <StorySpacing space={"Space15"}/>
    </div>
  ))
storiesOf('Base/Tag', module)
  .add('Tag', () => (
    <span>
      <Tag
        close={boolean('close',false)}
        children={text('children','Tag Name')}
        color={text('color','White')}
      />
      <Tag
        children={text('children','Tag Name')}
      />
      <Tag
        children={text('children','Tag Name')}
      />
    </span>
  ))
>>>>>>> 9aa8a190da3dac2667398c40202d0d4d2200badf

storiesOf("Base/Logo", module)
  .add("Logo", () => (
    <Logo />
  ));

storiesOf("Navs/Navbar", module)
  .add("Masthead", () => (
    <div>
      <NavbarSecondary>
        <NavItem fs={"13px"} lh={"16px"}><Icon name={"angle-left"} color={"White"} mr={"Space1"} /> Visit da.org.za</NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Why the DA?</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Where we govern</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Our People</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Newsroom</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"}><a>Contact</a></NavItem>
      </NavbarSecondary>
      <Navbar>
        <NavItem fontWeight={"Bold"}><Logo /></NavItem>
        <NavItem fontWeight={"Bold"} fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
        <NavItem fontWeight={"Bold"} fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
        <NavItem fontWeight={"Bold"} fs={"18px"}><span className={"icon icon-twitter"} /></NavItem>
        <NavItem fontWeight={"Bold"}>Campaigns</NavItem>
        <NavItem fontWeight={"Bold"}>Get Involved</NavItem>
        <NavItem fontWeight={"Bold"}><ButtonDonate>Donate</ButtonDonate></NavItem>
        <NavItem fontWeight={"Bold"}><ButtonOutline color="White">Join the DA</ButtonOutline></NavItem>
      </Navbar>
      <NavbarSub>
        <NavItem fontWeight={"Bold"} fs={"13px"} lh={"16px"} color={"BlueLight"}>Bokamoso</NavItem>
        <NavItem fontWeight={"Bold"} fs={"13px"} lh={"16px"} color={"BlueLight"}>Speeches</NavItem>
        <NavItem fontWeight={"Bold"} fs={"13px"} lh={"16px"} color={"BlueLight"}>Archive</NavItem>
        <NavItem fontWeight={"Bold"}><NavText color={"BlueLight"}>Subscribe to Bokamoso</NavText></NavItem>
      </NavbarSub>
    </div>
  ))
  .add("Navbar", () => (
    <Navbar>
      <NavItem><Logo /></NavItem>
      <NavItem fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
      <NavItem fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
      <NavItem fs={"18px"}><span className={"icon icon-twitter"} /></NavItem>
      <NavItem>Campaigns</NavItem>
      <NavItem>Get Involved</NavItem>
      <NavItem><ButtonDonate>Donate</ButtonDonate></NavItem>
      <NavItem><ButtonOutline color="White">Join the DA</ButtonOutline></NavItem>
    </Navbar>
  ))
  .add("NavbarSecondary", () => (
    <NavbarSecondary>
      <NavItem fs={"13px"} lh={"16px"}><Icon name={"angle-left"} color={"White"} mr={"Space1"} /> Visit da.org.za</NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Why the DA?</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Where we govern</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Our People</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Newsroom</a></NavItem>
      <NavItem fs={"13px"} lh={"16px"}><a>Contact</a></NavItem>
    </NavbarSecondary>
  ))
  .add("NavbarSub", () => (
    <NavbarSub>
      <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Bokamoso</NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Speeches</NavItem>
      <NavItem fs={"13px"} lh={"16px"} color={"BlueLight"}>Archive</NavItem>
      <NavItem><NavText color={"BlueLight"}>Subscribe to Bokamoso</NavText></NavItem>
    </NavbarSub>
  ));

storiesOf("Navs/NavItems", module)
  .add("NavBox", () => (
    <NavBox>View All Newsroom Items</NavBox>
  ))
  .add("NavButton", () => (
    <NavButton>Hello</NavButton>
  ))
  .add("NavItem", () => (
    <NavItem>Hello</NavItem>
  ))
  .add("NavIcon", () => (
    <NavIcon iconName="whatsapp" iconColor="Green">WhatsApp</NavIcon>
  ))
  .add("NavText", () => (
    <NavText>Hello</NavText>
  ))
  .add("MoreLink", () => (
    <MoreLink
      href={text("URL", "/")}
      size={select("Size", ["", "small", "large"], "")}
      color={select("Color", ["blue", "green", "yellow", "red"], "blue")}
      caps={boolean("Capitalized", false)}
      hideIcon={boolean("Hide icon", false)}
      arrowDirection={select("Arrow diretion", ["up", "down", "left", "right"], "right")}
    >
      { text("Text", "Read More") }
    </MoreLink>
  ));


storiesOf("Buttons", module)
  .add("Button", () => (
    <ButtonTest
      full={boolean("Full Width", false)}
      disabled={boolean("Disable", false)}
      rounded={boolean("Rounded", true)}
      outline={boolean("Outline", false)}
      color={select("Color", ["blue", "green", "yellow", "red"], "blue")}
      size={select("Size", ["tiny", "small", "medium", "large", "huge"], "medium")}
      href={text("Link", "")}
      onClick={action("clicked")}
    />
  ))
  .add("Custom Styles", () => {
    const styles = {
      color: colors.White,
      backgroundColor: colors.BlueLight,
      ":hover": {
        backgroundColor: colors.Blue,
      },
    };
    return (
      <ButtonTest customStyles={styles} onClick={action("clicked")}>Custom Button</ButtonTest>
    );
  });

storiesOf("Compositions", module)
    .add("Aside", () => (
      <Aside
        visual={dobsonville}
      />
    ))
    .add("AsideList", () => (
      <AsideList
        heading={"Latest News"}
        cta={<NavText color={"Red"}>More news</NavText>}
      >
        <CardNews
          visual={<img width={"100px"} className="img-fluid" src={dobsonville} alt="alt" />}
          heading={"Fermentum Sem Mollis Pharetra"}
          color={"Primary"}
        />
        <CardNews
          visual={<img width={"100px"} className="img-fluid" src={dobsonville} alt="alt" />}
          heading={"Fermentum Sem Mollis Pharetra"}
          color={"Primary"}
        />
        <CardNews
          visual={<img width={"100px"} className="img-fluid" src={dobsonville} alt="alt" />}
          heading={"Fermentum Sem Mollis Pharetra"}
          color={"Primary"}
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
      <div>
        <CampaignCard
          title="Firing Zuma is the first step towards building a better tomorrow"
          cta="Join the fight"
          paragraph="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."
          meta="Western Cape"
          imageUrl={dobsonville}
          url={'/'}
        />
        <CardCampaign
          visual={<img className="img-fluid" src={dobsonville} alt="alt" />}
          meta={<HeadingMeta color={"Primary"} textTransform={"uppercase"} letterSpacing={"Base"}>{"Western Cape"}</HeadingMeta>}
          heading={<Heading color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
          body={<Copy>{""}</Copy>}
          cta={<NavText color={"Red"} display={"block"}>{"Join the fight"}</NavText>}
        />
      </div>
    ))
    .add("CardHighlight", () => (
      <CardHighlight
        visual={dobsonville}
        header={
          <Header>
            <Heading color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</Heading>
            <HeadingMeta color={"Primary"} textTransform={"uppercase"}>{"Federal Leader of the Democratic Alliance | Parliamentary Leader of the Democratic Alliance"}</HeadingMeta>
          </Header>
          }
        body={<Copy color={"Primary"}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}</Copy>}
        cta={<NavText color={"Red"} display={"block"}>{"View More"}</NavText>}
      />
    ))
    .add("CardNews", () => (
      <div>
        <CardNews
          visual={<img width={"100px"} className="img-fluid" src={dobsonville} alt="alt" />}
          heading={"Fermentum Sem Mollis Pharetra"}
<<<<<<< HEAD
          color={select("color", ["Primary", "Copy"], "Copy")}
          meta={text("meta", "July 4, 2017 in News")}
=======
          meta={text('meta','July 4, 2017 in News')}
>>>>>>> 9aa8a190da3dac2667398c40202d0d4d2200badf
        />
      </div>
    ))
    .add("CardRelated", () => (
      <CardRelated
        vertical={boolean("vertical?", "false")}
        visual={<img width={"300px"} className="img-fluid" src={dobsonville} alt="alt" />}
        heading={<HeadingSmall color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</HeadingSmall>}
        body={<Copy fs={"13px"} lh={"24px"}>{"Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue."}</Copy>}
        cta={<NavText color={"Red"} display={"block"}>{"Read More"}</NavText>}
      />
    ))
    .add("CardVideo", () => (
      <CardVideo
        featured={boolean("featured", "false")}
        color={select("color", ["Primary", "White"], "Primary")}
        visual={<img className="img-fluid" src={dobsonville} alt="alt" />}
        heading={"Fermentum Sem Mollis Pharetra"}
        body={<Copy color={"White"}>{"Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue."}</Copy>}
        cta={<NavText color={"White"}>Play video</NavText>}
      />
    ))
    .add("Header", () => (
      <Header borderWidth={"1px"}>
        <HeadingMeta textTransform={"uppercase"} letterSpacing={"Base"}>Western Cape</HeadingMeta>
        <Heading color={"Primary"}>Jacob Zuma Foundation has failed our students</Heading>
        <HeadingMeta color={"CopyLight"}>Written by Belinda Bozzoli MP – DA Shadow Minister of Higher Education and Training</HeadingMeta>
        <HeadingMeta>August 20, 2017 in News</HeadingMeta>
      </Header>
    ))
    .add("ViewAll", () => (
      <ViewAll
<<<<<<< HEAD
        buttonLabel={text("buttonLabel", "View All")}
=======
        buttonTag={text('buttonTag', 'View All')}
>>>>>>> 9aa8a190da3dac2667398c40202d0d4d2200badf
      />
    ))
    .add("Widget", () => (
      <div>
        <Widget widgetTitle={text("widgetTitle", "Share")} colTitle={text("colTitle", "col-md-1")} colSection={text("colSection", "col-md-11")}>
          <NavIcon iconName="facebook" iconColor="Facebook">{"Share on Facebook"}</NavIcon>
          <NavIcon iconName="twitter" iconColor="Twitter">{"Share on Twitter"}</NavIcon>
          <NavIcon iconName="envelope" iconColor="Red">{"Send by Email"}</NavIcon>
          <NavIcon iconName="whatsapp" iconColor="WhatsApp">{"Share with What's App"}</NavIcon>
        </Widget>

<<<<<<< HEAD
        <Widget widgetTitle={text("widgetTitle", "Tags")} colTitle={text("colTitle", "col-md-1")} colSection={text("colSection", "col-md-11")}>
          <Label>Fusce</Label>
          <Label>Dapibus</Label>
          <Label>Nibh</Label>
=======
        <Widget widgetTitle={text('widgetTitle', 'Tags')} colTitle={text('colTitle', 'col-md-1')} colSection={text('colSection', 'col-md-11')}>
          <Tag>Fusce</Tag>
          <Tag>Dapibus</Tag>
          <Tag>Nibh</Tag>
>>>>>>> 9aa8a190da3dac2667398c40202d0d4d2200badf
        </Widget>
      </div>
    ));

storiesOf("Modules", module)
    .add("ArticleDetails", () => (
      <ArticleDetails />
    ))
    .add("ArticleShare", () => (
      <ArticleShare />
    ))
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
            <Aside visual={dobsonville} />
            <AsideMenu>
              <NavBox>Item One</NavBox>
              <NavBox>Item Two</NavBox>
              <NavBox>Item Three</NavBox>
              <NavBox>Item Four</NavBox>
              <NavBox>Item Five</NavBox>
            </AsideMenu>
            <AsideList
              heading={"Latest News"}
              cta={<NavText color={"Red"}>More news</NavText>}
            >
              <CardNews
                visual={<img width={"100px"} className="img-fluid" src={dobsonville} alt="alt" />}
                heading={"Fermentum Sem Mollis Pharetra"}
                meta={"July 4, 2017 in News"}
              />
              <CardNews
                visual={<img width={"100px"} className="img-fluid" src={dobsonville} alt="alt" />}
                heading={"Fermentum Sem Mollis Pharetra"}
                meta={"July 4, 2017 in News"}
              />
              <CardNews
                visual={<img width={"100px"} className="img-fluid" src={dobsonville} alt="alt" />}
                heading={"Fermentum Sem Mollis Pharetra"}
                meta={"July 4, 2017 in News"}
              />
            </AsideList>
            <CardRelated
<<<<<<< HEAD
              visual={<img className="img-fluid" src={dobsonville} alt="alt" />}
=======
              vertical
              visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
>>>>>>> 9aa8a190da3dac2667398c40202d0d4d2200badf
              heading={<HeadingSmall color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</HeadingSmall>}
              body={<Copy fs={"13px"} lh={"24px"}>{"Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue."}</Copy>}
              cta={<NavText color={"Red"} display={"block"}>{"Read More"}</NavText>}
            />

          </div>
        }
      />
    ))
    .add("SectionFull", () => (
      <div>
        <SectionFull
          section={
            <CardHighlight
              visual={dobsonville}
              header={
                <Header>
                  <Heading color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</Heading>
                  <HeadingMeta color={"Primary"} textTransform={"uppercase"}>{"Federal Leader of the Democratic Alliance | Parliamentary Leader of the Democratic Alliance"}</HeadingMeta>
                </Header>
              }
              body={<Copy color={"Primary"}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt. Sed ille, ut dixi, vitiose. "}</Copy>}
              cta={<NavText color={"Red"} display={"block"}>{"View More"}</NavText>}
            />
          }
        />

        <SectionFull
          pt={text("paddingTop", "Space12")}
          pb={text("paddingBottom", "Space5")}
          backgroundColor={text("backgroundColor", "Blue")}
          visual={dobsonville}
          heading={
            <HeadingSection color={"White"}>Latest Videos</HeadingSection>
          }
          section={
            <Videos />
          }
        />

        <SectionFull
          backgroundColor={text("backgroundColor", "bgLightO")}
          pt={text("paddingTop", "Space12")}
          visual={dobsonville}
          heading={
            <HeadingSection color={"Primary"}>Get Involved</HeadingSection>
          }
          section={
            <div>
              <Copy color={"Blue"} align={"center"}>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue.</Copy>
            </div>
          }
        />
      </div>
    ))
    .add("Footer", () => (
      <Footer />
    ));
