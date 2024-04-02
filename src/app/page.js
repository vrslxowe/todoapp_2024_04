'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Button, AppBar, Toolbar, ImageList, ImageListItem } from '@mui/material';
import theme from './theme';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const itemData = [
    {
      img: 'https://blog.kakaocdn.net/dn/bmqXqj/btsFYN6qP5h/kPaI2XVZmxnkw8lWkeNIl0/img.jpg',
      title: 'Breakfast',
    },
    {
      img: 'https://blog.kakaocdn.net/dn/b1jClb/btsFXY8xE1I/0ZYEE6bO5GscllLtZT3uh1/img.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://blog.kakaocdn.net/dn/b1Sn6l/btsGc3IJaP9/bAYukRd89v6w8wb9qbw7GK/img.jpg',
      title: 'Hats',
    },
    {
      img: 'https://blog.kakaocdn.net/dn/bIaHUa/btsGbBsU2vs/5MJjIJDRJKCHiqNzpA8PZK/img.jpg',
      title: 'Burger',
    },
    {
      img: 'https://blog.kakaocdn.net/dn/ch5xpk/btsGcHTqzJm/w7UD46JENdnghIbQk5f5dk/img.jpg',
      title: 'Camera',
    },
    {
      img: 'https://blog.kakaocdn.net/dn/bjobPW/btsGbS8Zsqs/REImSzTlkU4Lw1CCtn3HqK/img.jpg',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar>
            <div className="tw-flex-1">
              <FaBars onClick={() => setOpen(true)} className="tw-cursor-pointer" />
            </div>
            <div className="logo-box">
              <a href="/" className="tw-font-bold">
                NOTE!
              </a>
            </div>
            <div className="tw-flex-1 tw-flex tw-justify-end">
              <a href="/write">글쓰기</a>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <section className="tw-h-screen tw-flex tw-items-center tw-justify-center tw-text-[5rem]">
          section
        </section>
      </ThemeProvider>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
