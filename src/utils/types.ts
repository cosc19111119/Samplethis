type ArtistCard = {
  id: number;
  image: string;
  name: string;
  award: number;
  samples: number;
};

type QuestionCard = {
  question: string;
  answer: string;
};

type MusicSimpleCard = {
  icon: string;
  title: string;
  description: string;
};

type PlanCard = {
  title: string;
  price: number;
  description: string;
};

type NewOnCard = {
  id: number;
  image: string;
  title: string;
  artist: string;
  icon: string;
  likes: number;
};

type TopNewCard = {
  id: number;
  image: string;
  music: string;
  artist: string;
};

type BidsCard = {
  id: number;
  image: string;
  title: string;
  artist: string;
  icon: string;
  likes: number;
};

type VideoCard = {
  id: number;
  image: string;
  videoTitle: string;
  seconds: number;
};
