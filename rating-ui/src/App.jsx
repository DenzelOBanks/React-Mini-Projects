import Rating from "./components/Rating";

const App = () => {
  return ( 
  <div>
    <Rating heading="How do you feel about React?" feedbackMessages={[
      'Hate it',
      'Dislike it',
      'Meh',
      'Its fine',
      'I Love it',
    ]} />
  </div> );
};
 
export default App;