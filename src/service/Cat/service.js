export const getFact = async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const body = await response.json();
        return body.fact;
    } catch (error) {
        return error;
    }
}

export const getFacts = async () => {
    try {
        const response = await fetch('https://catfact.ninja/facts');
        const body = await response.json();
        return body.data;
    } catch (error) {
        return error;
    }
}

export const getBreeds = async () => {
    try {
        const response = await fetch('https://catfact.ninja/breeds');
        const body = await response.json();
        return body.data;
    } catch (error) {
        return error;
    }
}