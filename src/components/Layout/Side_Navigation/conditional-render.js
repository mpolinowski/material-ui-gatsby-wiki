function Conditional(props) {
  return (
    !!props.if && props.children
  );
}

export default Conditional





// if if-statement from props is true, then render child
// const Conditional = (props) => {
//   return (
//     !!props.if && props.children
//   );
// }

// #################################################

// Implementation:
// import Conditional from 'components/Conditional';

// render() {
//   return (
//     <div className="App">
//       <h1>The title</h1>

//       <Conditional if={this.props.location.pathname !== "/"}>
//         <h1>Conditional Rendered Component</h1>
//         <Component />
//       </Conditional>
//     </div>
//   );
// }