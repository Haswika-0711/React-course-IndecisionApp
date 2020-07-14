class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.changeValue=this.changeValue.bind(this);
        this.state={
            Visibility : false
        };
    }
    changeValue() {
        this.setState((prevState) => {
            return{
                Visibility : !prevState.Visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.changeValue}>
                    {this.state.Visibility ? 'Hide Details' : 'Show  Details'}
                </button> 
                <p>{this.state.Visibility && 'These are some details'}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));



// let flag=false;
// const changeValue =() =>{
//     flag=!flag;
//     render();
// }
// const render = () => {
//     const template =(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeValue}>
//             {flag ? 'Hide Details' : 'Show  Details'}</button> 
//             <p>{flag && 'These are some details'}</p>
//         </div>
//     );
//     ReactDOM.render(template,document.getElementById('app'));
// }
// render();
