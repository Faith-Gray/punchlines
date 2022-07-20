export default function Joke(props) {
    
    return (
        <div className="joke">
            <h2>{props.setup}</h2>
            <h3>{props.punchline}</h3>
        </div>
    )
}

