function Welcome(){
  const currentHour = new Date().getHours()
  const message = currentHour < 5 ? 'Why are you still up?'
                  : currentHour < 12 ? 'Good Morning'
                  : currentHour < 18 ? 'Good Afternoon'
                  : 'Good Evening'
  return (
    <>
      <h2>{message}</h2>
      <h2>Welcome to Playoff Baseball!</h2>
    </>
  )
}

export default Welcome