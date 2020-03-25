import React, {Component} from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
  render() {
    return (
        <div class="MemoryCard">
            <div class="MemoryCardInner">
                <div class="MemoryCardBack">
                    <img class="Image" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="" width="100%"></img>
                </div>
                <div class="MemoryCardFront">
                    ∆
                </div>
            </div>
        </div>
    )
  }
}

export default MemoryCard;