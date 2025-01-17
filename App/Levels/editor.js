const EDITOR = [
  {
    name: 'Level Editor',
    nick: 'LEVEL_EDITOR',
    colors: Colors.biomes.alps,
    x: -10,
    y: 0,
    requirements: [],
    sledders: [
      {
        asset: 'images.sam_sled',
        x: 1,
        y: 0,
      },
    ],
    texts: [
      {
        x: 4,
        y: 5,
        content: 'Click to edit!',
      },
    ],
    defaultExpression: '-\\frac{2}{1+e^{-\\left(x-5\\right)}}',
    camera: {
      x: 0,
      y: 0,
      fov: 7,
    },
    sky: {
      asset: 'images.western_slopes_background',
      margin: 1,
    },
  },
  {
    name: 'Custom Level',
    nick: 'CUSTOM_LEVEL',
    colors: Colors.biomes.alps,
    x: -10,
    y: -3,
    requirements: ['LEVEL_EDITOR'],
    sledders: [
      {
        asset: 'images.sam_sled',
        x: 1,
        y: 0,
      },
    ],
    defaultExpression: '-\\frac{2}{1+e^{-\\left(x-5\\right)}}',
    camera: {
      x: 0,
      y: 0,
      fov: 7,
    },
    sky: {
      asset: 'images.western_slopes_background',
      margin: 1,
    },
  },
]
