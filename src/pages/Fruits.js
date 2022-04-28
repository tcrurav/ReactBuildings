const myFruits = ['banana', 'apple', 'strawberry'];
const fruits = myFruits.map((item, index) => <p key={index}>{item}</p>);

export default function Fruits() {
  return (
    <>
    { fruits }
    </>
  );
}