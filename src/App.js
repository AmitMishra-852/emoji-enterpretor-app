import React, { useState } from "react";
import "./styles.css";

var dictionaryPlace = {
  "😄": "Grinning Face with Smiling Eyes",
  "😉": " Winking Face",
  "😅": "Grinning Face with Sweat",
  "🙂": "Slightly Smiling Face",
  "😗": " Kissing Face"
};

var weKnowEmojies = Object.keys(dictionaryPlace);

export default function App() {
  var [arrayStore, updateValue] = useState("Enter your Emoji");

  function myfunction(event) {
    // first event handler
    var datastore = event.target.value;
    arrayStore = dictionaryPlace[datastore];
    if (arrayStore === undefined) {
      arrayStore = "we do not have this Emoji in our database";
    }
    updateValue(arrayStore);
  }

  function emojiClickHandler(emoji) {
    //second event handler
    arrayStore = dictionaryPlace[emoji];
    updateValue(arrayStore);
    // console.log(emoji);
  }

  // view area
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Hello sir</h1>
      <p class="director">Enter your Emoji👇</p>
      <input onChange={myfunction} />
      <p>
        <b>{arrayStore}</b>
      </p>

      <h2>the list of Emojis</h2>
      {weKnowEmojies.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
