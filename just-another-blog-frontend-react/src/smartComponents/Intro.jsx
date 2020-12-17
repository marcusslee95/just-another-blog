import Intro from './Intro.module.css';

const intro = () => {
    return (
    <div className={Intro.AppliesToWholeComponent}>
        Hi there Stranger! <br/>
        Congrats on being the <b>369th</b> unique visit to this website! <br/><br/>
        Keep pumping those numbers up as you engage with the content 
        in this blog which covers programming, career advice, 
        relationships, thoughts, and everything in between! <br/>
        I'll see you around :) 
    </div>
    );
  }
  
  export default intro;