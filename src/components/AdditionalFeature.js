import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addFeature } from "../actions/";

const AdditionalFeature = props => {
	const dispatch = useDispatch();

	return (
		<li>
			<button
				className="button"
				onClick={() => dispatch(addFeature(props.feature))}
			>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
