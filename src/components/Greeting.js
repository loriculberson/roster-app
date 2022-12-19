function Greeting(props) {
  return (
    <>
      <p>{props.phrase}!!!</p>
      <p>Today is: {props.date}</p>
    </>
  )
}

export default Greeting