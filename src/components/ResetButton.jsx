function ResetButton({resetCount}) {
	return (
		<div>
			<button className="reset-btn" onClick={resetCount}>
				Reset total click
			</button>
		</div>
	);
}

export default ResetButton