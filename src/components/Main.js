import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import '../styles/Main.css';

export const Main = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  const defaultCards = [
    {
      type: 'banana',
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80'
    },
    {
      type: 'apple',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
      type: 'orange',
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    },
    {
      type: 'kiwi',
      image: 'https://images.unsplash.com/photo-1572539280469-9c738c59964d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=662&q=80'
    },
    {
      type: 'pineapple',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      type: 'watermelon',
      image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      type: 'cherry',
      image: 'https://images.unsplash.com/photo-1611096265583-5d745206f2a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80'
    },
    {
      type: 'peach',
      image: 'https://images.unsplash.com/photo-1570978561297-793391262fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      type: 'coconut',
      image: 'https://images.unsplash.com/photo-1560769680-ba2f3767c785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    },
    {
      type: 'mango',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
    },
    {
      type: 'strawberry',
      image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=760&q=80'
    },
    {
      type: 'blueberry',
      image: 'https://images.unsplash.com/photo-1594002348772-bc0cb57ade8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ];
  const [cards, setCards] = useState(defaultCards);
  const { recordScore } = props;

  // shuffle on Main mount and card click
  useEffect(() => {
    shuffle(cards);
  }, []);

  useEffect(() => {
    shuffle(cards);
    recordScore(clickedCards.length);
  }, [clickedCards]);

  const shuffle = (deck) => {
    const arr = deck.slice();

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    setCards(arr);
  }

  const click = (fruitType) => {
    if (!(clickedCards.includes(fruitType))) {
      setClickedCards(clickedCards.concat(fruitType));
    } else {
      // game reset
      setClickedCards([]);
    };

    if (clickedCards.length === 12) {
      // game reset
      setClickedCards([]);
    }
  }

  return (
    <div id='main'>
      {cards.map((card) => { return <Card key={card.type} type={card.type} image={card.image} clickFunc={click}></Card> })}
    </div>
  )
}
