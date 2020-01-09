import React from 'react';
import {web} from 'react-native-communications';
import {
  Container,
  Card,
  CardItem,
  View,
  Thumbnail,
  Text,
  H3,
  Icon,
  Button,
  Body
} from 'native-base';

export const AboutTab = () => {
  return (
    <Container>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Thumbnail
          source={{uri: 'https://i.postimg.cc/ZYj8YrmV/OKASHI.png'}}
          style={{width: 220, height: 220}}
        />       
      </View>
      <Card style={{marginTop: 20, padding: 10}}>
        <CardItem>
          <Text>
            OKASHI (In Japanese, the word “okashii” (おかしい) Means funny,
            amusing, comical, laughable, ridiculous,).
            {`\n\n`}
            Just an simple app to read jokes available online and not take
            anything serious.
            {`\n\n`}
            P.S. Need internet to work, It's not a Joke!
          </Text>
        </CardItem>
        <CardItem>
          <H3>Made by Sarthak With </H3>
          <Icon type="FontAwesome5" name="react" />
          <Icon type="FontAwesome5" name="node-js" />
          <Icon type="FontAwesome5" name="brain" />
        </CardItem>
        <CardItem style={{flexWrap: 'wrap', marginBottom: 20, justifyContent: 'center'}}>
        <H3>Code is openSource, feel free to fiddle around!{`\n`}</H3>
          <Button
            iconLeft
            transparent
            large
            onPress={e => web('https://github.com/SarthakDwivedi/OKASHI')}>
            <Icon type="FontAwesome" name="git" />
            <Text>GITHUB REPO</Text>
          </Button>          
        </CardItem>
      </Card>
    </Container>
  );
};
