import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import XMLParser from "react-xml-parser";
import Spinner from "../../components/Spinner";
import { getRequest } from "../../helper/Api";

class RssFeedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      posts: [],
      err: null,
      loading: true,
    };
  }

  componentDidMount = async () => {
    const id = window.location.pathname.split("/")[2];

    const response = await getRequest(`/rss-feed/${id}`);

    // Setting response data in state
    this.setState({
      data: response.data,
    });

    const xmlResponse = await Axios.get(
      `https://cors-anywhere.herokuapp.com/${response.data.url}`,
      {
        headers: new Headers({
          Accept: "text/html",
          "content-type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT",
          "Access-Control-Allow-Headers": "Content-Type",
        }),
        // mode: "no-cors",
      }
    );

    let postArray = [];
    let xml = new XMLParser().parseFromString(xmlResponse.data);
    let news = xml.children[0].children;
    for (let i in news) {
      if (
        news[i].children !== null &&
        news[i].children !== [] &&
        news[i].children.length > 0
      ) {
        postArray.push(news[i].children);
      }
    }

    this.setState({
      posts: [...postArray],
      loading: false,
    });
  };

  getPosts = () => {
    return this.state.posts.map((p, index) => (
      <Link
        key={index}
        to={{
          pathname: `${window.location.pathname}/${index}`,
          customObject: p,
          state: [p[0].value, p[1].value, p[2].value],
        }}
      >
        <div className={`card `} style={{}}>
          <div>
            {/* <div className="img-square-wrapper">
              <img src={p[9]?.attributes.url} alt="Card cap" />
            </div> */}

            <div className={`card-body `}>
              <h4 className="card-title">
                {(p[0].name = "title" ? p[0].value : p[1].value)}
              </h4>

              <div className={`card-text `}>
                {(p[1].name = "description" ? p[1].value : p[2].value)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    ));
  };

  render() {
    let rendered;
    const { loading, posts } = this.state;
    const post = this.getPosts();

    if (loading) {
      rendered = <Spinner />;
    }
    if (!loading && posts.length > 0) {
      rendered = <div>{post}</div>;
    }

    return (
      <div>
        <div className="container">{rendered}</div>
      </div>
    );
  }
}

export default RssFeedList;
