const seededRandom = function(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}


const fetchAPI = function(date) {

    const result = {morning: [], afternoon: [], evening: []};
    const random = seededRandom(date.getDate());

    // Morning
    for (let i = 9; i < 12; i++) {
        if (random > 0.5) {
            result.morning.push(((parseInt(i) % 12) || 12) + ':00');
        }
        if (random < 0.5) {
            result.morning.push(((parseInt(i) % 12) || 12) + ':30');
        }
    }


    // Afternoon
    for (let i = 12; i < 18; i++ ) {
        if (random > 0.5) {
            result.afternoon.push(((parseInt(i) % 12) || 12) + ':00');
        }
        if (random < 0.5) {
            result.afternoon.push(((parseInt(i) % 12) || 12) + ':30');
        }
    }

    // Evening
    for (let i = 19; i < 22; i++ ) {
        if (random > 0.5) {
            result.evening.push(((parseInt(i) % 12) || 12) + ':00');
        }
        if (random < 0.5) {
            result.evening.push(((parseInt(i) % 12) || 12) + ':30');
        }
    }

    return result;
}
   const submitAPI = function(_formData) {
    return true;
   }
export { fetchAPI, submitAPI };