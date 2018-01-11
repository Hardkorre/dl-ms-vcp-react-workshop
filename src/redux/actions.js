// A javascript objet with a type property
export const addMessage = (author, text, date) => ({
    type: 'ADD_MESSAGE',
    author,
    text,
    date
});