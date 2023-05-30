import { toast } from 'react-toastify';

export const toastifySubmit = (type: string,text: string) => {
    if(type === "Success"){
        return toast.success(text);
    }else if(type === "Error"){
        return toast.error(text);
    }
}