export default getFacts = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const body = await response.json();
    return body;
}