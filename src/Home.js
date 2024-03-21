import React from "react";
import background from "./home.png";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div>
        <img 
            className="home-img"
            src={background} 
            alt="background photo" 
        />
        <div className="home-row home-1">
            <Product 
                id="9781627792127"
                title="Six of Crows (Six of Crows #1)"
                price={6.79}
                rating={5}
                image="https://m.media-amazon.com/images/I/91tK5sU9oOL._SL1500_.jpg"
            />
            <Product 
                id="9781250076977"
                title="Crooked Kingdom (Six of Crows #2)"
                price={8.79}
                rating={5}
                image="https://m.media-amazon.com/images/I/A1r8gyOVIFL._SL1500_.jpg"
            />
        </div>

        <div className="home-row">
            <Product 
                id="9780743298902"
                title="The Book of Lost Things"
                price={10.49}
                rating={4}
                image="https://m.media-amazon.com/images/I/71z0Cpz49QL._SL1360_.jpg"
            />
            <Product 
                id="9780307744432"
                title="The Night Circus"
                price={12.75}
                rating={4}
                image="https://m.media-amazon.com/images/I/81dAQFi5HzL._SL1500_.jpg"
            />
            <Product 
                id="9798417418839"
                title="The Murder of Roger Ackroyd: (Hercule Poirot Mysteries) | with illustrations"
                price={10.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/71kXfcQ1y0L._SL1500_.jpg"
            />
        </div>

        <div className="home-row">
            <Product 
                id="9780743298902"
                title="Illuminae (The Illuminae Files #1)"
                price={9.95}
                rating={4}
                image="https://m.media-amazon.com/images/I/91a9F5i2yQL._SL1500_.jpg"
            />
            <Product 
                id="9780553499186"
                title="Gemina (The Illuminae Files #2)"
                price={10.89}
                rating={5}
                image="https://m.media-amazon.com/images/I/91nJ21+I9rL._SL1500_.jpg"
            />
            <Product 
                id="9780553499223"
                title="Obsidio (The Illuminae Files #3)"
                price={11.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/91oyJNIFA1L._SL1500_.jpg"
            />
        </div>

        <div className="home-row">
            <Product 
                id="9781481491815"
                title="Ultimate Unwind Hardcover Collection (Boxed Set)"
                price={73.72}
                rating={5}
                image="https://m.media-amazon.com/images/I/71mQv1Y7qOL._SL1500_.jpg"
            />
        </div>
    </div>
  )
}

export default Home;