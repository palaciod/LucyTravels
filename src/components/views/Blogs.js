import React, { Component } from "react";
import Blog from "./Blog";
import ParisImage from "../styles/natalia05.jpg";
import CatImage from "../styles/Cat01.jpg";
import natalia01 from "../styles/natalia03.jpg";
import natalia10 from "../styles/natalia10.jpg";
import colombia01 from "../styles/colombia01.jpg";
import colombia02 from "../styles/colombia02.jpg";
import roma01 from "../styles/roma01.jpg";
export class Blogs extends Component {
  getFirstBlogContent() {
    let contentList = [
      "The City of Love",
      "France",
      "Paris",
      "When we went to Marrakech in Morocco, we went camel riding in the outskirts of Marrakesh. We got to dress up with local Berber attire and rode the camels into the sunset. We also visited a Berber village and the villagers welcomed us into their humble homes for tea. They were so kind and friendly. ",
      ParisImage,
      ""
    ];
    return contentList;
  }
  getSecondBlogContent() {
    let contentList = [
      "Mr. Garfield",
      "Puerto Rico",
      "Viejo San Juan",
      "The stray cat that followed me home",
      CatImage,
      ""
    ];
    return contentList;
  }
  getThirdBlogContent() {
    let contentList = [
      "Eating in Marrakesh",
      "Morocco",
      "Marrakesh",
      "When we went to Marrakesh, all the tourists raved about this natural pomegranate street juice. So we tried it and after we were done drinking it we noticed that they washed the fruit in the same water dirty water they used to wash the used cups. We felt very nauseous for a few hours later and it kinda ruined our lunch. ",
      natalia01,
      "On our last night we went out to one of their top restaurants. It was a Lebanese restaurant. We couldn’t even bargain with the taxi drivers for a lower fare because as soon as they heard we were going to this place they knew we had money to spend. It was great, very nice ambience. We had a drink before our meal and I was feeling great. Then we ordered and since we were very excited for Lebanese food, we went a little over the top and ordered a little of everything. The waitress even gave us a look and said it was a lot of food. And we were like ok. She must of the thought “wow, these Americans” lol. So we finished our drinks while we waited for the food and there was belly dancing Arab music playing in the background and it was dimly light, like a very cool place. And out of nowhere I felt hot and nauseous. And I was like oh that’s kinda weird."
    ];
    return contentList;
  }
  getFourthBlogContent() {
    let contentList = [
      "Gelato in Milan",
      "Italy",
      "Milan",
      "When in Milan, we eat Gelato",
      natalia10,
      ""
    ];
    return contentList;
  }
  getFifthBlogContent() {
    let contentList = [
      "The Stone of El Peñol",
      "Colombia",
      "Antioquia",
      "The Rock that has stood the test of time. The landform is a granitic rock remnant that has resisted weathering and erosion, likely as result of being less fractured than the surrounding bedrock.",
      colombia01,
      ""
    ];
    return contentList;
  }
  getSixthBlogContent() {
    let contentList = [
      "The Morning Joe Process",
      "Colombia",
      "Antioquia",
      "Americans consume tons of coffee a year, but has it ever occured to where this wonderful beverage came from? Well, the answer is Colombia baby where the best coffee is made. While here in this beautiful antique farm we were met with warm smiles and with the beautiful aroma of coffee.",
      colombia02,
      ""
    ];
    return contentList;
  }
  getSeventhBlogContent() {
    let contentList = [
      "When In Rome",
      "Italy",
      "Rome",
      "Rome was clearly not built in a day. The beautiful Roman architecture surely is a breath taking view that resembles the height of the Roman Empire. It's unbelievable that our architecture, democracy, and our languages were derived from these great people.",
      roma01,
      ""
    ];
    return contentList;
  }
  render() {
    return (
      <div className='blogs'>
        <br></br>
        <Blog content={this.getFirstBlogContent()} />
        <br></br>
        <Blog content={this.getSecondBlogContent()} />
        <br></br>
        <Blog content={this.getThirdBlogContent()} />
        <br></br>
        <Blog content={this.getFourthBlogContent()} />
        <br></br>
        <Blog content={this.getFifthBlogContent()} />
        <br></br>
        <Blog content={this.getSixthBlogContent()} />
        <br></br>
        <Blog content={this.getSeventhBlogContent()} />
        <br></br>
      </div>
    );
  }
}

export default Blogs;
