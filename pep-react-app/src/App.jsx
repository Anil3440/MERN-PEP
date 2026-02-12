
import DataConsumer from "./components/dataConsumer";
import DataProvider from "./context/DataProvider";

const App = () => {

  return (
    <>
      <DataProvider>
        <DataConsumer />
      </DataProvider>
      {/* COULD HAVE JUST WRAPPED THE APP COMPONENT IN MAIN.JSX */}
      
    </>
  )
}


export default App