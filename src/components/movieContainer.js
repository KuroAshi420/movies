import React from "react";
import Card from "./card";
import StarRatingComponent from "react-star-rating-component";
import Moda from "./modal";
import List from "./movieList";
import WithLoading from './loading.js';

const ListWithLoading = WithLoading(List);
const ModaWithLoading = WithLoading(Moda);
const CardWithLoading = WithLoading(Card);
export default function Container() {
  const [items, setItems] = React.useState([]);
  const [recherche, setRecherche] = React.useState("");
  const [items2, setItems2] = React.useState([]);
  const [rating2, setRating2] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [repos, setRepos] = React.useState(null);
  function componentDidMount() {
    setLoading({ loading: true });
    fetch(`https://api.github.com/users/farskid/repos`)
      .then(json => json.json())
      .then(repos => {
        setRepos({ loading: false, repos: repos });
      });
  }
  function addItem(inpt) {
    setItems([...items, inpt]);
  }
  function handelchange(e) {
    setRecherche(e.target.value);
  }
  function onStarClick(nextValue, prevValue, name) {
    setRating2(nextValue);
  }
  function rechercheFilm() {
    setItems2(
      items.filter(
        (el, index) => (el.input === recherche || rating2 < el.rating) && el
      )
    );
  }
  return (
    <div className="main">
      <div className="search-bar">
        <input
          className="input"
          type="text"
          placeholder="Enter movie name to search"
          value={recherche}
          onChange={handelchange}
        />
        <button className="search-btn" onClick={rechercheFilm}>
          Search
        </button>
        <div className="min-rating">
          <p className="parg">Mininum rating</p>
          <StarRatingComponent
            className="min-rating-stars"
            value={rating2}
            onStarClick={onStarClick}
          />
        </div>
      </div>
      <div>
        <h1 className="ttle">List of movies searched</h1>
        <ListWithLoading items2={items2} isLoading={loading} repos={repos} />
        <ModaWithLoading add={addItem} isLoading={loading} repos={repos} />
        <h1 className="ttle">List of all movies </h1>
        <CardWithLoading items={items} isLoading={loading} repos={repos} />
      </div>
    </div>
  );
}
