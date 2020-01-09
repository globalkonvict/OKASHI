const cheerio = require('react-native-cheerio');
const axios = require('axios');
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {
  Text,
  Body,
  Icon,
  Button,
  Content,
  Form,
  Picker,
  Item,
  Label,
  Card,
  CardItem,
  View,
  Spinner,
} from 'native-base';
import * as Animatable from 'react-native-animatable';

export const AppContent = () => {
  const [jokesAvailibility, setJokesAvailibility] = useState({
    next: true,
    url: 'https://unclejokes.com/jokes/category/confucius-say-jokes',
    jokes: [],
  });
  const [selected, setSelected] = useState('Confucious');
  const [loading, setLoading] = useState('flex');
  const title = jokesAvailibility.jokes.filter(
    (e, i, arr) => (i + 1) % 2 !== 0,
  );
  const jokeText = jokesAvailibility.jokes.filter(
    (e, i, arr) => (i + 1) % 2 === 0,
  );

  const animation = [
    'slideInDown',
    'slideInUp',
    'slideInLeft',
    'slideInRight',
    'zoomInLeft',
  ];

  const someJoke = {
    next: true,
    url: 'https://unclejokes.com/jokes/category/confucius-say-jokes',
    jokes: [],
  };

  useEffect(() => {
    getJokes(someJoke);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (selected) {
      case 'Confucious':
        setJokesAvailibility({
          next: true,
          url: 'https://unclejokes.com/jokes/category/confucius-say-jokes',
          jokes: [],
        });
        break;
      case 'One Liners':
        setJokesAvailibility({
          next: true,
          url: 'https://unclejokes.com/jokes/category/one-liners-jokes',
          jokes: [],
        });
        break;
      case 'Quote':
        setJokesAvailibility({
          next: true,
          url: 'https://unclejokes.com/jokes/category/quotes-jokes',
          jokes: [],
        });
        break;
      case 'Celebrity':
        setJokesAvailibility({
          next: true,
          url: 'https://unclejokes.com/jokes/category/celebrity-jokes',
          jokes: [],
        });
        break;
      case 'Animal':
        setJokesAvailibility({
          next: true,
          url: 'https://unclejokes.com/jokes/category/animal-crackers-jokes',
          jokes: [],
        });
        break;
    }
  }, [selected]);

  function getJokes({url, next, jokes}) {
    setLoading('flex');
    axios.get(url).then(
      response => {
        if (next === true && response.status === 200) {
          let html = response.data;
          let $ = cheerio.load(html);
          let nextExists =
            $('.pagination')
              .children()
              .last()
              .text() === 'Last ›';
          let nextUrl = $('.pagination')
            .children('.active')
            .next()
            .children('a')
            .attr('href');

          let fetchedJokes = [];

          $('.pull-right')
            .nextUntil('wrapper_term_tags', 'h2, p[id]')
            .each(function(i, elem) {
              fetchedJokes[i] = $(this).text();
            });

          setJokesAvailibility({
            next: nextExists,
            url: nextUrl,
            jokes: jokes.concat(fetchedJokes),
          });
          setLoading('none');
        }
      },
      error => console.log(error),
    );
  }

  return (
    <Content padder>
      <Form style={{justifyContent: 'center', marginTop: 20}}>
        <Label style={{fontWeight: '700', textAlign: 'center', fontSize: 20}}>CATEGORY</Label>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            placeholderIconColor="#007aff"
            selectedValue={selected}
            onValueChange={e => {
              setSelected(e);
            }}>
            <Picker.Item label="Confucious" value="Confucious" />
            <Picker.Item label="One Liners" value="One Liners" />
            <Picker.Item label="Quote" value="Quote" />
            <Picker.Item label="Celebrity" value="Celebrity" />
            <Picker.Item label="Animal" value="Animal" />
          </Picker>
        </Item>
      </Form>
      <ScrollView style={{marginTop: 20}}>
        {title.map((e, i) => (
          <Animatable.View
            animation={animation[i]}
            delay={200}
            key={`joke-card${i}`}>
            <Card
              key={`joke-card${i}`}
              style={{borderRadius: 10, marginBottom: 20}}>
              <CardItem style={{backgroundColor: '#d2dae2'}} header bordered>
                <Text style={{fontWeight: '700'}}>{title[i]}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{`${jokeText[i]}`}</Text>
                </Body>
              </CardItem>
              <CardItem style={{backgroundColor: '#d2dae2'}} footer bordered>
                <Text style={{fontWeight: '700'}}>Category: {selected}</Text>
              </CardItem>
            </Card>
          </Animatable.View>
        ))}
      </ScrollView>
      <Spinner color="blue" style={{display: `${loading}`}} />
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Button
          large
          iconLeft
          warning
          bordered
          onPress={() => getJokes(jokesAvailibility)}>
          <Icon type="AntDesign" name="reload1" />
          <Text>Load More</Text>
        </Button>
      </View>
    </Content>
  );
};
