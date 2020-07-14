console.log('App.js is running!');

//JSX- JavaScript XML
const app={
    title: 'Indecision-App',
    subtitle: 'Built by Haswika',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();

    const option= e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};
const removeOptions= () =>{
    app.options=[];
    render();
}
const onMakeDecision= () =>{
    const randNum=Math.floor(Math.random()* app.options.length);
    const option=app.options[randNum];
    alert(option);
}

const appRoot=document.getElementById('app');//inorder to render into html
const render = () =>{
    const template= (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are the options!' : 'No options'}</p>
            <button disabled={app.options.length ==0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((optionvalue) => {
                    return <li key={optionvalue}>{optionvalue}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            </form>
        </div>
        );
ReactDOM.render(template,appRoot);
}

render();

