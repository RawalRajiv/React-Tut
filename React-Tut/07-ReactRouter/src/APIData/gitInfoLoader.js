export const gitInfoLoader  =async  () => {
    const response = await fetch('https://api.github.com/users/rawalrajiv');
    return response.json();
}