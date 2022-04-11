import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const SimgleProductPage = () => {
  return (
    <>
      <ImageList
        sx={{ width: 770, p: 2, pr: 4 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default SimgleProductPage;

const itemData = [
  {
    img: 'https://m.mehttps://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpgdia-amazohttps://rukminim1.flixcart.com/image/880/1056/k8ddoy80/shirt/z/h/m/38-11326844-roadster-original-imafqegjagcqgyhw.jpeg?q=50n.com/images/I/61X80-NlwJS._UL1500_.jpg',
    rows: 5,
    cols: 2,
  },
  {
    img: 'https://m.media-amazonhttps://rukminim1.flixcart.com/image/128/128/k8ddoy80/shirt/z/h/m/44-11326844-roadster-original-imafqegjnvdkfeek.jpeg?q=70.com/images/I/916wN4Adl5S._UL1500_.jpg',
    rows: 4,
    cols: 2,
  },

  {
    img: 'https://m.media-amazonhttps://rukminim1.flixcart.com/image/880/1056/k8ddoy80/shirt/z/h/m/38-11326844-roadster-original-imafqegjtug9wzgy.jpeg?q=50.com/images/I/71ggf+RR4XS._UL1500_.jpg',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://m.media-amazhttps://www.myntra.com/shirts/roadster/roadster-men-navy-blue--grey-checked-casual-sustainable-shirt/8889597/buyonvhttps://rukminim1.flixcart.com/image/128/128/k8ddoy80/shirt/z/h/m/38-11326844-roadster-https://rukminim1.flixcart.com/image/128/128/k8ddoy80/shirt/z/h/m/38-11326844-roadster-original-imafqegjfytatzah.jpeg?q=70-imafqegjfytatzah.jpeg?q=70.com/images/I/81eFa1HhNVS._UL1500_.jpg',
    rows: 4,
    cols: 2,
  }
];
