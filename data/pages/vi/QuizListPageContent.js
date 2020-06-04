import {textProvider} from './../../../utils/TextUtil';
const m = new Map(
    [
["1", { s_name: 'Meet Turtle',l_name: 'Programming with Turtle'}],
["2", { s_name: 'todo',l_name: 'todo '}],


    ]
)

export const quizListPageContent = () => {
    const res = [];
    for (let [key, value] of m) {
        value["id"] = key;
        res.push(value);
    }
    return res;
};

export const quizMetadata = (quizId) => {
    const md = m.get(quizId);
    const maxId = m.size;
    const intId = parseInt(quizId);
    const next = ((intId + 1) <= maxId) ? "/quiz/" + (intId+1) : undefined;
    const previous = ((intId - 1) >= 1) ? "/quiz/" + (intId-1) : undefined;
    const action = {target:"/quiz/" + quizId, name: textProvider('action_retry').s_name};

    md["previous"] =  previous;
    md["next"] = next;
    md["action"] = action;
    return md;
} 


