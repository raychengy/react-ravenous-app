const yelpApiUrl = 'https://api.yelp.com/v3';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com'
const apiKey = process.env.REACT_APP_YELP_APIKEY;
const Yelp = {
	term: '',
	location: '',
	sortBy: '',
};

export const search = (term, location, sortBy) => {
	const apiUrl = `${corsAnywhereUrl}/${yelpApiUrl}/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
	const headers = {
		Authorization: `Bearer ${apiKey}`
	};
	return fetch(apiUrl, { headers })
		.then(res => res.json())
		.then(jsonRes => {
			if (jsonRes.businesses) {
				const {businesses} = jsonRes;
				return businesses.map(business => {
					debugger;
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.category,
						rating: business.rating,
						reviewCount: business.review_count,
					}
				})
			}
		})
}
