import React from "react";
import { Link } from "react-router-dom";

import { getRequest, putRequest, postRequest, params } from "../api/request";
const userId = "user1";

const HouseView = () => {
	const [houses, setHouses] = React.useState([]);
	const [reload, setReload] = React.useState(false);
	const Role = { LIKE: 'like'};
	const path = window.location.pathname.replace(/\//g, '');
	React.useEffect(() => {
		getRequest(params.houses, (Houses) => setHouses(Houses));
	}, [reload]);

	const handleClick = (e) => {
		const element = e.target;
		const role = element["dataset"].role;
		const houseId = element['dataset'].houseid;
		
		let data = houses.find(({id}) => houseId === id);
		if(data) data = {...data};
		
		
		switch(role) {
			case Role.LIKE:
				if(data.likes) data.likes = 0;
				else data.likes = 1;
				const submitLike = () => {
					getRequest(params.likes + '/' + userId + houseId, (resData) => {
						console.log('get success');
						if(data.likes) resData.isLike = true;
						else resData.isLike = false;
						putRequest(params.likes + '/' + userId + houseId, resData, () => setReload(!reload));
					}, () => postRequest(params.likes, {
						id: userId + houseId,
						userId,
						houseId,
						isLike: true
					}, () => setReload(!reload)));
				};
				putRequest(params.houses + '/' + houseId, data, () => submitLike());
			break;
			default: break;
		}
	};
	
	return (
		<div className="row justify-content-center">
        {
			houses.map(house => 
			<div
			  key={house.name}
			  className="col-lg-3 col-md-6 d-flex align-items-stretch m-3"
			>
			
			  <div className="card">
			  <Link className="hover-text-decoration-none" to={`/${path}/${house.name}`}>
				<div className="d-flex position-relative">
					<img className="card-img-top" src={house.img} alt={house.name} />
					<span className="bg-theme"></span>
				</div>
			  </Link>
				<div className="card-body bg-dark d-flex justify-content-between text-white">
				  <h5>
					<Link className="text-white hover-text-decoration-none" to={`/${house.name}`}>{house.name}</Link>
				  </h5>
				  <div className="font-large">
					<span className="bx bx-like cursor-pointer mr-1" data-houseid={house.id} data-role={Role.LIKE} onClick={handleClick}></span>
					<span>{house.likes}</span>
				  </div>
				  <div className="font-large">
					<span className="bx bx-show mr-1"></span>
					<span>{house.views}</span>
				  </div>
				</div>
			  </div>
			</div>
			)
		}
        </div>
	);
}

export default HouseView;