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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0cnOJuNd9_k0nKvIAIPmOzN2UWULNt2AZg&s" />
      </div>
    </div>
  );
};

export default Home;
