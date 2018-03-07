import React from "react";
import Link from "gatsby-link";

import About from "../components/About";
import {
  Header,
  Card,
  Icon,
  Image,
  Segment,
  Divider,
  Label
} from "semantic-ui-react";
import get from "lodash/get";

class AboutPage extends React.Component {
  render() {
    const members = get(this, "props.data.allMember.edges");
    return (
      <div>
        <Segment basic>
          <div>
            FreeCodeCamp Moscow группа для людей изучающих разработку
            самостоятельно по программе{" "}
            <a href="https://www.freecodecamp.org/">freecodecamp.org</a> и с
            помощью других ресурсов. Мы проводим митапы, где делимся опытом,
            задаем и отвечаем на вопросы.
          </div>
          <br />
          <div>
            Уровень участников не важен, главное желание учиться и помогать
            учиться. Митапы публикуются на нашей{" "}
            <a href="https://www.facebook.com/groups/free.code.camp.moscow/">
              странице facebook
            </a>{" "}
            и в <a href="https://moscow-freecodecamp.slack.com/">slack чате</a>.
          </div>
          <br />
          <div>
            Доклады на митапах очень приветствуются. Хотите рассказать о чем-то
            интересном, что недавно выучили или поделиться полезной инфой? Нет
            ничего проще 😊 Напишите тему доклада в чат или в мероприятие на
            facebook и мы вас добавим в описание мероприятия.
          </div>
          <br />
          <div>
            <Label basic>
              <Icon name="html5" />
              HTML5
            </Label>
            <Label basic>
              <Icon name="css3 alternate" />
              CSS3
            </Label>
            <Label basic>
              <Icon name="js square" />
              Javascript
            </Label>
            <Label basic>
              <Icon name="database" />
              Databases
            </Label>
            <Label basic>
              <Icon name="github" />
              Git {"&"} GitHub
            </Label>
            <Label basic>
              <Icon name="node js" />
              Node.js
            </Label>
            <Label basic>
              <Icon name="react" />
              React.js
            </Label>
          </div>
        </Segment>

        <Segment basic>
          <Header as="h1">
            Участники
            <Header.Subheader>
              Чтобы попасть в этот список, вам нужно состоять в нашей
              <Label href="https://github.com/moscow-freecodecamp" size="small">
                <Icon name="github" />
                GitHub организации
              </Label>
            </Header.Subheader>
          </Header>
          <Divider />
          <Card.Group itemsPerRow={3} doubling>
            {members.map(member => {
              const node = member.node;
              return (
                <Card href={node.url}>
                  <Image src={node.avatarUrl} />
                  <Card.Content>
                    <Card.Header>
                      {(() => {
                        if (node.name) {
                          return node.name;
                        } else {
                          return node.login;
                        }
                      })()}
                    </Card.Header>
                    <Card.Meta>
                      <span>{node.location}</span>
                    </Card.Meta>
                    <Card.Description>{node.bio}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href={node.url}>
                      <Icon name="github" link />
                      {node.login}
                    </a>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}

export default AboutPage;

export const membersQuery = graphql`
  query membersQuery {
    allMember {
      edges {
        node {
          name
          avatarUrl
          email
          bio
          isHireable
          location
          url
          websiteUrl
          login
        }
      }
    }
  }
`;
