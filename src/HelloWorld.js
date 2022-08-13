import React from "react";
import "./Helloworld.css";

const HelloWorld = (props) => {
  console.log(props);

  return (
    <div className="hello-world">
      <h2>Hellp World</h2>
      <p>
        This is a paragraph. {props.blog.title} and {props.blog.content}{" "}
      </p>
    </div>
  );
};

export default HelloWorld;
