export const getFact = async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const body = await response.json();
        return body.fact;
    } catch (error) {
        return error;
    }
}