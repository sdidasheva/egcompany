export default function Value(props) {
	return (
		<div className="values__content-info col-6">
			<img className="values__content-info-icon" src={props.icon}></img>
			<h3 className="values__content-info-title">{props.title}</h3>
			<p className="values__content-info-text">{props.text}</p>
		</div>
	);
}
