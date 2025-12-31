import "../css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h2>
          You can work <br /> Anywhere
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> A
          dolore sequi temporibus eligendi. Veritatis placeat <br /> dignissimos
          reprehenderit tempora neque error.
        </p>
        <button className="home-btn">Get started</button>
      </div>
      <div className="right">
        <img src="/public/businessman.png" />
      </div>
    </div>
  );
};

export default Home;
