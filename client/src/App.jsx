import { useState } from "react";
import reactLogo from "./assets/react.svg";
import webLogo from "./assets/logo.png";
import chatLogo from "./assets/chat.jpeg";
import userLogo from "./assets/user.png";
import "./App.css";
import { useRef } from "react";
import axios from "axios";

const YOU = "you";
const AI = "ai";
function App() {
  const inputRef = useRef();
  const [qna, setQna] = useState([
    // { from: YOU, value: "FROM ME" },
    // { from: AI, value: ["1 MESSG FROM AI", "2 MESSG FROM AI"] },
  ]);
  const write = (i) => {
    var a = document.getElementsByClassName("question")[i].innerHTML;
    document.getElementsByClassName("in")[0].value = a;
    handleSend();
    // document.getElementsByClassName("in")[0].value="";
    // inputRef.current.value=a
  };

  const [loading, setLoading] = useState(false);
  const updateQna = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };
  const handleSend = () => {
    const question = inputRef.current.value;
    updateQna(YOU, question);
    // setQna([...qna, { from: YOU, value: question }]);
    // console.log({question})
    setLoading(true);
    axios
      .post("https://chatbot-server-etailprice.onrender.com/chat", {
        question,
      })
      .then((response) => {
        updateQna(AI, response.data.answer);
        if (response) {
          // window.setInterval(function () {
          var elem = document.getElementById("chats");
          if (elem) {
            console.log(elem.scrollHeight);
            elem.scrollTop = elem.scrollHeight*2;
          }
          // }, 1000);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    document.getElementsByClassName("in")[0].value = "";
  };

  const renderContent = (qna) => {
    const value = qna.value;
    if (Array.isArray(value)) {
      return value.map((v) => <p className="message-text">{v}</p>);
    }
    return <p className="message-text">{value}</p>;
  };
  return (
    <>
    <main class="main-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-5 col-lg-5">
            <div class="accordion" id="accordionExample">
              <h3
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "0.2rem 0.5rem",
                }}
              >
                Top 10 AI Bakery Recipes
              </h3>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Chocolate Chip Cookies
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(0);
                    }}
                  >
                    What is the recipe for chocolate chip cookies?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(1);
                    }}
                  >
                    How can I make my chocolate chip cookies chewy or crispy?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(2);
                    }}
                  >
                    What is the best type of chocolate to use in chocolate chip cookies?
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Croissants
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(3);
                    }}
                  >
                    How do I make croissants from scratch?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(4);
                    }}
                  >
                    What are some tips for making croissants flaky and buttery?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(5);
                    }}
                  >
                    Can I freeze croissants before baking them?
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Bagels
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(6);
                    }}
                  >
                    How do I make bagels at home?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(7);
                    }}
                  >
                    What are some toppings or flavors that go well with bagel?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(8);
                    }}
                  >
                    Can I make bagels without a stand mixer?
                  </div>

                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Cupcakes
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(9);
                    }}
                  >
                    What is the recipe for vanilla cupcakes?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(10);
                    }}
                  >
                    How can I make my cupcakes moist and fluffy?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(11);
                    }}
                  >
                    What are some creative frosting ideas for cupcakes?
                  </div>

                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Donuts
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(12);
                    }}
                  >
                    How do I make homemade donuts?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(13);
                    }}
                  >
                    What are some popular donut flavors and toppings?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(14);
                    }}
                  >
                   Can I use a donut pan to make baked donuts?
                  </div>

                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Cheesecake
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(15);
                    }}
                  >
                    What is the recipe for classic cheesecake?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(16);
                    }}
                  >
                    How can I make my cheesecake smooth and creamy?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(17);
                    }}
                  >
                   What are some popular cheesecake flavors and toppings?
                  </div>

                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Brownies
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(18);
                    }}
                  >
                    What is the recipe for fudgy brownies?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(19);
                    }}
                  >
                    How can I make my brownies more cakey or chewy?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(20);
                    }}
                  >
                   What are some creative ways to customize brownies?
                  </div>

                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEigth">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEigth"
                    aria-expanded="false"
                    aria-controls="collapseEigth"
                  >
                    Cinnamon Rolls
                  </button>
                </h2>
                <div
                  id="collapseEigth"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEigth"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(21);
                    }}
                  >
                    How do I make cinnamon rolls from scratch?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(22);
                    }}
                  >
                    What are some tips for making cinnamon rolls fluffy and gooey?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(23);
                    }}
                  >
                   Can I make cinnamon rolls ahead of time?
                  </div>

                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNinth">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNinth"
                    aria-expanded="false"
                    aria-controls="collapseNinth"
                  >
                    Apple Pie
                  </button>
                </h2>
                <div
                  id="collapseNinth"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingNinth"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(24);
                    }}
                  >
                    What is the recipe for apple pie?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(25);
                    }}
                  >
                    How can I make my apple pie filling not too runny?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(26);
                    }}
                  >
                   What are some ways to decorate the crust of an apple pie?
                  </div>

                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTenth">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTenth"
                    aria-expanded="false"
                    aria-controls="collapseTenth"
                  >
                   Banana Bread
                  </button>
                </h2>
                <div
                  id="collapseTenth"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTenth"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(27);
                    }}
                  >
                    What is the recipe for banana bread?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(28);
                    }}
                  >
                    How can I make my banana bread moist and flavorful?
                  </div>
                  <div
                    class="accordion-body question"
                    onClick={() => {
                      write(29);
                    }}
                  >
                   Can I add other ingredients to my banana bread, like nuts or chocolate chips?
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-7 col-lg-7">
            <div class="container">
              <div>
                {/* <img
                  src={webLogo}
                  alt=""
                  width="200px"
                  height="50px"
                  // class="avtar"
                /> */}
                <div class="chats" id="chats">
                  {qna.map((qna) => {
                    if (qna.from == YOU) {
                      return (
                        <div class="send chat">
                          <img src={userLogo} alt="" class="avtar" />
                          <p>{renderContent(qna)}</p>
                        </div>
                      );
                    }
                    return (
                      <div class="recieve chat">
                        <img src={chatLogo} alt="" class="avtar" />
                        <pre>
                        <p>{renderContent(qna)}</p>
                        </pre>
                      </div>
                    );
                  })}
                  {loading && (
                    <div class="recieve chat">
                      <img src={chatLogo} alt="" class="avtar" />
                      <p>Emily is typing… please wait… </p>
                    </div>
                  )}
                </div>
              </div>

              <div class="chat-input">
                <input
                  type="text"
                  ref={inputRef}
                  class="form-control col in"
                  placeholder="Type Something"
                />
                <button disabled={loading} class="btn" onClick={handleSend}>
                  Send
                </button>
                
              </div>
              {/* <br></br> */}
              <div style={{paddingLeft:"8px",fontSize:"14px"}}>
        The AI Bakery is powered by <a href="http://www.malaysiadelight.com">Malaysia Delight</a>
        <br></br>

    </div>
            </div>
          </div>
        </div>
      
       
 
      </div>
    </main>

    </>
  );
}

export default App;
