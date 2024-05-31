import React, { Component } from "react";
import "./scrollbtn.css";
export class Scrollbtn extends Component {
    render() {
        window.addEventListener("scroll", () => {
            // console.log(window.pageYOffset);

            var btn = document.getElementById("scroll");

            if (window.pageYOffset > 400) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }

            btn.onclick = function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            };
        });
        return (
            <div>
                <button id="scroll">
                    <i className="bx bx-up-arrow-alt"></i>
                </button>
            </div>
        );
    }
}

export default Scrollbtn;
