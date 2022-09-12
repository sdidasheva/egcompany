export default function Advantage(props) {
	return (
		<div className="advantages__content-info col-6">
			<h3 className="advantages__content-info-number">{props.number}</h3>
			<p className="advantages__content-info-text">{props.description}</p>
		</div>
	);
}
