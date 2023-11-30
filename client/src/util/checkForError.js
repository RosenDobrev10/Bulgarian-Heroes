export default function checkForError(errors){
    return Object.values(errors).some(error => error);
}