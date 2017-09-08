import Page from '../src/components/page'
import {
  SplashContainer,
  Splash,
  Title,
  Period
} from '../src/components/home/splash'
import { SkillsContainer, Skill } from '../src/components/home/skills'

const Index = () =>
  <Page title="Jake Wiesler">
    <SplashContainer>
      <Splash>
        <Title>
          Hi! I'm Jake
          <Period>.</Period>
        </Title>
        <SkillsContainer>
          <Skill>Front-end Developer,</Skill>
          <Skill>CSS tinkerer, and</Skill>
          <Skill>UI Designer.</Skill>
        </SkillsContainer>
        <p>
          This is my corner of the interwebs. My Grand Central Station, if you
          will. I <span>work</span> with and <span>write</span> about a
          multitude of emerging technologies in the web development space.
        </p>
      </Splash>
    </SplashContainer>
  </Page>

export default Index
