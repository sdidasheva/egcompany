export default function Solution(props) {
	return (
		<div className="solutions__info-item col-md-6 col-12 container-fluid">
			<h3 className="solutions__info-item-number">{props.number}</h3>
			<p className="solutions__info-item-text">{props.description}</p>
		</div>
	);
}
