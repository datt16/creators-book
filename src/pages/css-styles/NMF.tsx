import Head from 'next/head'
import styled from 'styled-components'
import { Container, Title, Footer, Hero, Main } from '../../atoms/core'

export default function StyledComponentPage() {
  return (
    <div>
      <Head>
        <title>ニューモーフィズム</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Page>
        <Hero>
          <Title>
            Welcome to <a>ニューモーフィズム</a>
          </Title>
        </Hero>
        <Container>
          <Main>
            <h2>見出し</h2>
            <p>綺麗なUI</p>

            <Box>
              <Box>
                <Card>
                  <Title>Card</Title>
                </Card>
              </Box>
              <Box ml='5'>
                <Card>
                  <Title>Card</Title>
                </Card>
              </Box>
            </Box>
          </Main>
        </Container>
        <Footer>
          <p>footer</p>
        </Footer>
      </Page>
    </div>
  )
}

/*-------------- style --------------*/

const Page = styled.div`
  background: #ebebeb;
`

const Card = styled.div`
  max-width: 300px;
  padding: 6rem;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 25px;
  background: #ebebeb;
  box-shadow: 27px 27px 41px #cacaca, -27px -27px 41px #ffffff;
  transition: all 0.5s 0s cubic-bezier(0.075, 0.82, 0.165, 1); /*transitionの記述を追加*/
`

const Box = styled.div<{ ml?: number | string }>`
  padding: 0;
  padding-left: ${(props) => (props.ml ? props.ml : 0)}em;
  display: flex;
`
