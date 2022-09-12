import Image from "next/image";
export default function Article(props) {
	return (
		<div className="articles__content-item ">
			<div className="articles__content-item-image">
				<img src={props.image} />
			</div>
			<h4 className="articles__content-item-title">{props.title}</h4>
			<p className="articles__content-item-text">{props.text}</p>
			<small className="articles__content-item-date">{props.date}</small>
		</div>
	);
}
