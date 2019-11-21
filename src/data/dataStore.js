export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  logo: 'dog',
};

export const select = {
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  infoSubpage: {
    title: 'info',
    content: 'Bacon ipsum dolor amet flank capicola bresaola drumstick short loin frankfurter andouille shankle tri-tip pig cow landjaeger pork. Andouille ham bresaola strip steak pork tri-tip chuck jerky, picanha chislic boudin cupim cow ground round short loin. Tongue prosciutto beef, ground round cupim frankfurter t-bone. Chicken rump ham hock landjaeger turducken. Buffalo bresaola turkey meatloaf tenderloin. Sirloin picanha short ribs, boudin doner corned beef bresaola pork belly tenderloin shoulder pig turkey. Drumstick spare ribs burgdoggen, ground round ribeye brisket bacon shankle ball tip buffalo rump short loin swine.',
  },
  faqSubpage: {
    title: 'faq',
    content: 'Bacon flank tenderloin short ribs short loin kielbasa jowl pancetta corned beef drumstick chicken tail pig shank. Short ribs tri-tip jowl turkey shankle. Leberkas sirloin tail, meatball picanha pork loin prosciutto turkey sausage andouille kevin fatback. Tenderloin tongue biltong, pancetta beef ribs strip steak shoulder brisket buffalo hamburger pig pork belly. Swine capicola chislic, pork loin corned beef picanha doner beef. Boudin frankfurter salami sirloin. Shank meatball pork belly, picanha bresaola drumstick chislic pig venison pancetta prosciutto cow strip steak. Shankle pork bresaola cupim doner ham ground round prosciutto jerky spare ribs filet mignon pastrami porchetta swine ball tip. Frankfurter shank jerky doner bacon spare ribs. Ball tip hamburger shankle chuck cupim brisket sirloin flank doner meatball frankfurter landjaeger shank shoulder. Pig tri-tip sirloin shankle salami ham meatloaf bacon picanha kevin shank kielbasa boudin cow doner. Pig capicola flank, salami pancetta swine kielbasa sirloin chislic drumstick.'
  }
}


export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things that i had done <sup>leatly!</sup>',
    description: 'Interesting things I had done!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things that i might do <sup>I dont know when!</sup>',
    description: 'Interesting things I dream about!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
