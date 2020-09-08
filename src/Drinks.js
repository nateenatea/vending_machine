import React from 'react';
import { Button, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

class Drinks extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      total: 0
    };
  }

  componentDidMount() {
    fetch('https://www.mocky.io/v2/5c77c5b330000051009d64c9')
    .then(response => response.json())
    .then(data => this.setState({data: data.data}));
  }

  addmoney(){
    this.setState({
      total: this.state.total +1
    })
  }
  addmoney2(){
    this.setState({
      total: this.state.total +2
    })
  }
  addmoney5(){
    this.setState({
      total: this.state.total +5
    })
  }
  addmoney10(){
    this.setState({
      total: this.state.total +10
    })
  }
  cancel(){
    let Total = this.state.total
    let count, ten, five, two, one;
    count = Math.floor(Total/10)
    ten = count
    count = Math.floor((Total-(ten*10))/5)
    five = count
    count = Math.floor(((Total-(ten*10))-(five*5))/2)
    two = count
    count = Math.floor((Total-(ten*10)-(five*5)-(two*2)))
    one = count
    alert('เงินทอน ' + this.state.total + ' บาท \n' + ' เหรียญ 10 : ' + ten + '\n' + ' เหรียญ 5 : ' + five + '\n' + ' เหรียญ 2 : ' + two + '\n' + ' เหรียญ 1 : ' +  one)
    this.setState({
      total: 0
    })
  }

  render() {
    const drink = this.state.data
    let Total = this.state.total

    return(
      <div>
        <Row>
        { Object.keys(drink).map(item => {
          return (
            <>
              <Card style={{ width: '10.16rem' }}>
               <Card.Img variant="top" src={drink[item].image} style={{ width: '10rem', height: '10rem' }}/>
               <Card.Body>
               <Button variant="outline-primary" onClick={() => 
                drink[item].in_stock==false ? alert('สินค้าหมด') : 
                drink[item].price > Total ? alert('เงินไม่พอ กรุณาหยอดเงินเพิ่ม') : 
                alert('คุณได้รับ ' + drink[item].name) + this.setState({ total: this.state.total - drink[item].price})
                }>{drink[item].name}</Button>
               <Card.Text>
                ราคา {drink[item].price} บาท
               </Card.Text>
              </Card.Body>
             </Card>
            </>
          )
        })}
        </Row>
        <Card style={{ width: '60rem' }}>
          <Card.Header>หยอดเหรียญ</Card.Header>
            <Card.Body>
               <Button variant="secondary" onClick={this.addmoney.bind(this)}>1 บาท</Button>{' '}
               <Button variant="secondary" onClick={this.addmoney2.bind(this)}>2 บาท</Button>{' '}
               <Button variant="secondary" onClick={this.addmoney5.bind(this)}>5 บาท</Button>{' '}
               <Button variant="secondary" onClick={this.addmoney10.bind(this)}>10 บาท</Button>{' '}
               <Card.Text>
                เงินรวม : {Total}
               </Card.Text>
               <Button variant="secondary" onClick={this.cancel.bind(this)}>ยกเลิก</Button>{' '}
              </Card.Body>
             </Card>
      </div>
    );
  }
}

export default Drinks;