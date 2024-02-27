'use client'
import { useState } from 'react';
import HTMLFlipBook from "react-pageflip";
import Cover from './components/Cover';
import Details from './components/Details';
import Search from './components/Search';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <HTMLFlipBook width={500} height={600} drawShadow={false} showCover={true}>
      <div className='coverPage'>
        <Cover isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </div>
      <div className='newPage'>
        <Details isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </div>
      <div className='newPage'>
        <Search />
      </div>
    </HTMLFlipBook>
  );
}