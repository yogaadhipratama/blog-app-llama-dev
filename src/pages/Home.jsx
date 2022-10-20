import { Link } from "react-router-dom";
function Home() {
  const posts = [
    {
      id: 1,
      title:
        "Occaecat do ad laboris cillum amet id mollit amet ",
      desc: "Deserunt fugiat ea laborum laborum non consectetur ex aliquip deserunt nisi commodo irure nulla.",
      img: "https://images.pexels.com/photos/14030389/pexels-photo-14030389.jpeg?cs=srgb&dl=pexels-nati-14030389.jpg&fm=jpg",
    },
    {
      id: 2,
      title:
        "Id tempor laboris proident amet Lorem exercitation.Ea excepteur qui sint commodo nisi consectetur.Nostrud ea nostrud et quis nostrud.",
      desc: "Deserunt fugiat ea laborum laborum non consectetur ex aliquip deserunt nisi commodo irure nulla.",
      img: "https://images.pexels.com/photos/13379800/pexels-photo-13379800.jpeg?cs=srgb&dl=pexels-fleur-van-deijck-13379800.jpg&fm=jpg",
    },
    {
      id: 3,
      title:
        "Ea excepteur qui sint commodo nisi consectetur.Nostrud ea nostrud et quis nostrud.",
      desc: "Deserunt fugiat ea laborum laborum non consectetur ex aliquip deserunt nisi commodo irure nulla.",
      img: "https://images.pexels.com/photos/11520127/pexels-photo-11520127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
