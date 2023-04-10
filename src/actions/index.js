export const MOVIES='MOVIES';
export const movies = items => {
    const action = {
        type: MOVIES,
        items,
    }
    return action;
}