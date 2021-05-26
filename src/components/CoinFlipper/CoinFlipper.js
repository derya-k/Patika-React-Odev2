import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      //Tıklanma sayısı başlangıçta 0
      count:0,
      //Tura tıklanma sayısı
      countTura:0,
      //Yazı tıklanma sayısı 
      countYazi:0,
    };
  };

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    //Her tıklamada tıklanma sayısı bir artıyor.
    this.setState({count: this.state.count+1 })
    //Rastgele 0 veya 1 rakamı alıyoruz
    let number =Math.round(Math.random())
    console.log(number)
    // 1 = tura; 0=yazı 
    if(number === 1){
      this.setState({side:"tura"});
      this.setState({countTura: this.state.countTura+1});
    }
    else if(number === 0){
      this.setState({side:"yazi"});
      this.setState({countYazi: this.state.countYazi+1});
    }
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan
          <strong> {this.state.countTura} </strong>ü tura
          <strong> {this.state.countYazi} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
