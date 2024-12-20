export interface Quote {
  id: number;
  text: string;
  author: string;
}

export const initialQuotes: Quote[] = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: 2,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    id: 3,
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    id: 4,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    id: 5,
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  }
];