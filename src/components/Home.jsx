import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="overlay>">
          <article>
            <h1>
              SO YOU WANT TO TRAVEL TO SPACE<span>SPACE</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
          <article>
            <Link to="./destination">Explore</Link>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
