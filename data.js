import {colors } from './src/theme';
import { dongeng1, dongeng2, dongeng3, dongeng4, dongeng5, dongeng6 } from './src/assets/images';

export const CategoryList = [
    {
      id: 1,
      title: 'The Enchanted Moon: A Tale of Wishes',
      writer: 'By Cornelia Boro',
      bg : colors.blue(),
    },
    {
      id: 2,
      title: 'A Friendship of Otter and Tortoise',
      writer: 'By Mindaha',
      bg : colors.green(),
    },
    {
      id: 3,
      title: 'The Legend of the Phoenix',
      writer : 'By Arunika Senja',
      bg : colors.yellow(),
    },
  ];

export const categories = [
  {
    id: 1,
    title: 'Fabel',
    image: dongeng1,
    publications: 128,
  },
  {
    id: 2,
    title: 'Mythological',
    image: dongeng2,
    publications: 70,
  },
  {
    id: 3,
    title: 'Urban Legend',
    image: dongeng3,
    publications: 68,
  },
  {
    id: 4,
    title: 'Classic Folktales',
    image: dongeng4,
    publications: 50,
  },
  {
    id: 5,
    title: 'Family',
    image: dongeng5,
    publications: 40,
  },
  {
    id: 6,
    title: 'Love',
    image: dongeng6,
    publications: 30,
  },
  
];
