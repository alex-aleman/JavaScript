const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data));

function findMatches(word, cities) {
	return cities.filter(place => {
		const regex = new RegExp(word, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function displayMatches() {
	const matchArray = findMatches(this.value, cities);
	const html = matchArray.map(place => {
		return `
			<li>
				<span class="name">${place.city}, ${place.state}</span>
				<span class="population">${place.population}</span>
			</li>
		`;
	}).join('');
	suggestions.innerHTML = html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);
