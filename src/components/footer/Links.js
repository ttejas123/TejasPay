const Links = (props) => (
	<>
	{console.log(props)}
		<h2>{props.header}</h2>
		<div className="d-flex flex-column">
			
		{
			props.Links.map((val)=> {
				return (
					<a>{val.name}</a>
				)
			})
		}
		</div>
	</>
)

export default Links